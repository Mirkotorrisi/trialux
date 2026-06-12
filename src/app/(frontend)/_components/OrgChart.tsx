'use client'

import React from 'react'
import Image from 'next/image'
import { FadeIn } from './FadeIn'

interface Member {
  roles: string[]
  name: string
  image?: string
}

interface Department {
  title: string
  color: string
  members: Member[]
}

const teamData: Department[] = [
  {
    title: 'Founders & Leadership',
    color: '#152238',
    members: [
      { roles: ['Amministratore Unico', 'Responsabile Gare e Contratti'], name: 'Salvatore Salamone', image: '/images/salamone.webp' }
    ]
  },
  {
    title: 'Qualità e Sicurezza',
    color: '#55ABE4',
    members: [
      { roles: ['Responsabile SGI'], name: 'Dott.Ing. Valentina Petagna' },
      { roles: ['Medico Competente'], name: 'Dott.ssa Rosa Sangiorgio' },
      { roles: ['RSPP'], name: 'Salvatore Salamone', image: '/images/salamone.webp' },
      { roles: ['ASPP'], name: 'Dott. Andrea Nicosia', image: '/images/nicosia.webp' },
      { roles: ['RLS'], name: 'Dott. Placido Lavenia', image: '/images/lavenia.webp' },
    ]
  },
  {
    title: 'Direzione Tecnica',
    color: '#55ABE4',
    members: [
      { roles: ['Direttore Tecnico', 'Resp. Commessa'], name: 'Salvatore Salamone', image: '/images/salamone.webp' },
      { roles: ['Resp. Ufficio Tecnico'], name: 'Dott. Placido Lavenia', image: '/images/lavenia.webp' },
      { roles: ['Ufficio Acquisti'], name: 'Giuseppe Magistro', image: '/images/magistro.webp' },
      { roles: ['Gestione Macchine e Attrezzature', 'Magazzino'], name: 'Pietro Maria Bonanno', image: '/images/bonanno.webp' },
    ]
  },
  {
    title: 'Direzione Operativa',
    color: '#EE2430',
    members: [
      { roles: ['Direttore Operativo', 'Responsabile Commesse'], name: 'Salvatore Salamone', image: '/images/salamone.webp' },
      { roles: ['Responsabile Cantieri'], name: 'Placido Lavenia', image: '/images/lavenia.webp' },
    ]
  },
  {
    title: 'Area Amministrativa',
    color: '#F0921E',
    members: [
      { roles: ['Direttore Amministrativo'], name: 'Dott. Tommaso Lombardo', image: '/images/lombardo.webp' },
      { roles: ['Ufficio Commesse'], name: 'Dott. Fabiano Lo Cicero', image: '/images/lo-cicero.webp' },
      { roles: ['Ufficio Personale'], name: 'Dott. Andrea Giovanni Nicosia', image: '/images/nicosia.webp' },
      { roles: ['Ufficio Contabilità'], name: 'Giuseppe Magistro', image: '/images/magistro.webp' },
      { roles: ['Ufficio Istruttoria'], name: 'Luigi Pellegrini', image: '/images/pellegriti.webp' },
    ]
  }
]

const MemberCard: React.FC<{ member: Member; color: string }> = ({ member, color }) => {
  const initials = member.name
    .split(' ')
    .filter(n => n.toLowerCase() !== 'dott.' && n.toLowerCase() !== 'dott.ssa' && n.toLowerCase() !== 'dott.ing.')
    .map(n => n[0])
    .join('')
    .substring(0, 2)
  
  return (
    <div className="flex flex-col group">
      <div className="aspect-[4/5] bg-zinc-50 border border-zinc-100 mb-4 flex items-center justify-center relative overflow-hidden group-hover:border-zinc-200 transition-all">
         {member.image ? (
            <Image 
              src={member.image} 
              alt={member.name} 
              fill 
              className="object-cover group-hover:scale-105 transition-all duration-700" 
            />
         ) : (
            <span className="text-4xl font-black text-zinc-200 group-hover:text-[#55ABE4] group-hover:scale-110 transition-all duration-500 uppercase tracking-tighter">
               {initials}
            </span>
         )}
         <div className="absolute bottom-0 left-0 w-full h-[3px] z-10" style={{ background: color, opacity: 0.3 }} />
      </div>
      <div>
        <h4 className="text-base font-black text-[#152238] leading-tight mb-1">{member.name}</h4>
        <div className="flex flex-col gap-1">
          {member.roles.map((role, idx) => (
            <p key={idx} className="text-[10px] font-bold uppercase tracking-[0.1em] text-zinc-400 leading-normal">
              {role}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export const InteractiveOrgChart: React.FC = () => {
  return (
    <div className="w-full space-y-32 py-10">
      {teamData.map((dept, i) => (
        <div key={i} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Section Header (Left) */}
          <div className="lg:col-span-4">
            <FadeIn effect="mask">
              <div className="sticky top-32">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-[2px]" style={{ background: dept.color }} />
                  <span className="font-bold uppercase tracking-[0.15em] text-xs" style={{ color: dept.color }}>Dipartimento</span>
                </div>
                <h3 className="text-3xl font-black tracking-tight text-[#152238]">{dept.title}</h3>
              </div>
            </FadeIn>
          </div>

          {/* Members Area (Right) */}
          <div className="lg:col-span-8 flex flex-col gap-16">
             {/* Department Members */}
             {dept.members && dept.members.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
                  {dept.members.map((member, j) => (
                    <FadeIn key={j} delay={j * 50}>
                      <MemberCard member={member} color={dept.color} />
                    </FadeIn>
                  ))}
                </div>
             )}
          </div>

        </div>
      ))}
    </div>
  )
}
