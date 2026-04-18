import React, { Fragment } from 'react'

export const RichText: React.FC<{ content: any }> = ({ content }) => {
  if (!content || !content.root || !content.root.children) return null

  return (
    <div className="max-w-[700px] mx-auto text-lg leading-relaxed">
      {content.root.children.map((node: any, i: number) => {
        switch (node.type) {
          case 'heading':
            const Tag = node.tag
            const headingClasses =
              {
                h1: 'text-5xl font-extrabold mb-8 tracking-tighter',
                h2: 'text-3xl font-bold mt-12 mb-6 tracking-tight',
                h3: 'text-2xl font-semibold mt-8 mb-4',
                h4: 'text-xl font-semibold mt-6 mb-3',
                h5: 'text-lg font-semibold mt-4 mb-2',
                h6: 'text-base font-semibold mt-2 mb-1',
              }[node.tag as string] || 'text-2xl font-bold'

            return (
              <Tag key={i} className={headingClasses}>
                {serialize(node.children)}
              </Tag>
            )
          case 'list':
            const ListTag = node.listType === 'bullet' ? 'ul' : 'ol'
            const listClasses =
              node.listType === 'bullet'
                ? 'list-disc pl-6 mb-6 space-y-2'
                : 'list-decimal pl-6 mb-6 space-y-2'
            return (
              <ListTag key={i} className={listClasses}>
                {node.children.map((listItem: any, j: number) => (
                  <li key={j}>{serialize(listItem.children)}</li>
                ))}
              </ListTag>
            )
          case 'paragraph':
          default:
            return (
              <p key={i} className="mb-6">
                {serialize(node.children)}
              </p>
            )
        }
      })}
    </div>
  )
}

function serialize(children: any[]) {
  return children.map((node, i) => {
    if (node.type === 'text') {
      let text = <span key={i} dangerouslySetInnerHTML={{ __html: node.text }} />

      if (node.format & 1) text = <strong key={i}>{text}</strong>
      if (node.format & 2) text = <em key={i}>{text}</em>

      return <Fragment key={i}>{text}</Fragment>
    }
    return null
  })
}
