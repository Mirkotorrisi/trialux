'use client'

import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { useCallback, useState, useEffect } from 'react'
import { Search, X } from 'lucide-react'

export function SearchFilter() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const queryParam = searchParams.get('q') || ''

  const [inputValue, setInputValue] = useState(queryParam)

  // Sync input value with URL changes if navigation happens elsewhere
  useEffect(() => {
    setInputValue(queryParam)
  }, [queryParam])

  const updateSearch = useCallback(
    (term: string) => {
      const params = new URLSearchParams(searchParams.toString())
      if (term) {
        params.set('q', term)
      } else {
        params.delete('q')
      }
      router.push(`${pathname}?${params.toString()}`, { scroll: false })
    },
    [router, pathname, searchParams]
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    setInputValue(val)
    
    // Simple debounce
    const timer = setTimeout(() => {
      updateSearch(val)
    }, 500)
    return () => clearTimeout(timer)
  }

  const handleClear = () => {
    setInputValue('')
    updateSearch('')
  }

  return (
    <div className="relative w-full max-w-md group">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Search size={18} className="text-zinc-400 group-focus-within:text-[#152238] transition-colors" />
      </div>
      <input
        type="text"
        placeholder="Cerca negli articoli..."
        value={inputValue}
        onChange={handleChange}
        className="block w-full pl-11 pr-10 py-3 md:py-4 bg-zinc-50 border border-zinc-200 rounded-none text-sm md:text-base text-[#152238] placeholder:text-zinc-400 focus:outline-none focus:ring-0 focus:border-[#152238] transition-colors"
      />
      {inputValue && (
        <button
          onClick={handleClear}
          className="absolute inset-y-0 right-0 pr-4 flex items-center text-zinc-400 hover:text-[#152238] transition-colors"
          type="button"
          aria-label="Pulisci ricerca"
        >
          <X size={18} />
        </button>
      )}
    </div>
  )
}
