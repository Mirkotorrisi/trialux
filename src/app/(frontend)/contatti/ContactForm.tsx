'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { sendContactEmail } from './actions'

type Status = 'idle' | 'loading' | 'success' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('loading')

    const raw = new FormData(event.currentTarget)

    try {
      const result = await sendContactEmail({
        name: raw.get('name') as string,
        company: (raw.get('company') as string) || undefined,
        email: raw.get('email') as string,
        phone: (raw.get('phone') as string) || undefined,
        subject: raw.get('subject') as string,
        message: raw.get('message') as string,
      })
      setStatus(result.success ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-zinc-50 border border-zinc-100 p-8 lg:p-12 flex flex-col items-center justify-center gap-4 min-h-[400px] text-center">
        <span className="text-4xl">✓</span>
        <h3 className="text-2xl font-black text-[#152238]">Messaggio inviato!</h3>
        <p className="text-zinc-500">Ti risponderemo a breve al tuo indirizzo email.</p>
      </div>
    )
  }

  return (
    <div className="bg-zinc-50 border border-zinc-100 p-8 lg:p-12 relative">
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <span className="w-10 h-[2px] bg-[#EE2430]" />
          <span className="text-[#EE2430] font-bold tracking-[0.15em] uppercase text-xs">
            Scrivici
          </span>
        </div>
        <h3 className="text-2xl lg:text-3xl font-black mb-10 text-[#152238] tracking-tight">
          Invia una richiesta
        </h3>
        <form className="space-y-6" onSubmit={onSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2"
            >
              Nome e cognome *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full bg-white border border-zinc-200 px-4 py-3 focus:outline-none focus:border-[#55ABE4] transition-colors text-[#152238] placeholder:text-zinc-400"
              placeholder="Mario Rossi"
            />
          </div>
          <div>
            <label
              htmlFor="company"
              className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2"
            >
              Azienda / Ente{' '}
              <span className="text-zinc-400 font-normal normal-case">(opzionale)</span>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="w-full bg-white border border-zinc-200 px-4 py-3 focus:outline-none focus:border-[#55ABE4] transition-colors text-[#152238] placeholder:text-zinc-400"
              placeholder="Nome azienda"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2"
              >
                Email *
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full bg-white border border-zinc-200 px-4 py-3 focus:outline-none focus:border-[#000080] transition-colors text-[#152238] placeholder:text-zinc-400"
                placeholder="mario@esempio.it"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2"
              >
                Telefono <span className="text-zinc-400 font-normal normal-case">(opz.)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full bg-white border border-zinc-200 px-4 py-3 focus:outline-none focus:border-[#55ABE4] transition-colors text-[#152238] placeholder:text-zinc-400"
                placeholder="+39"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2"
            >
              Oggetto *
            </label>
            <select
              id="subject"
              name="subject"
              required
              className="w-full bg-white border border-zinc-200 px-4 py-3 focus:outline-none focus:border-[#55ABE4] transition-colors text-[#152238] cursor-pointer appearance-none"
            >
              <option value="" disabled>
                Seleziona l'argomento
              </option>
              <option value="commerciale">Richiesta commerciale</option>
              <option value="tecnica">Informazioni tecniche</option>
              <option value="candidatura">Candidatura</option>
              <option value="altro">Altro</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2"
            >
              Messaggio *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full bg-white border border-zinc-200 px-4 py-3 focus:outline-none focus:border-[#55ABE4] transition-colors text-[#152238] placeholder:text-zinc-400 resize-none"
              placeholder="Scrivi qui la tua richiesta..."
            />
          </div>
          <div className="flex items-start gap-3">
            <input
              id="privacy"
              name="privacy"
              type="checkbox"
              required
              className="w-4 h-4 mt-1 border-zinc-300 rounded focus:ring-0 checked:bg-[#55ABE4] cursor-pointer"
            />
            <label htmlFor="privacy" className="text-sm text-zinc-500 leading-relaxed">
              Dichiaro di aver letto l'informativa sulla privacy e acconsento al trattamento dei
              miei dati personali. *
            </label>
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-[#152238] text-white font-bold hover:bg-[#F0921E] transition-colors group border-none outline-none"
          >
            <span>Invia messaggio</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </div>
    </div>
  )
}
