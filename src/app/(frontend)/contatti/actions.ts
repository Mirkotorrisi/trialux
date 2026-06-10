'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const SUBJECT_LABELS: Record<string, string> = {
  commerciale: 'Richiesta commerciale',
  tecnica: 'Informazioni tecniche',
  candidatura: 'Candidatura',
  altro: 'Altro',
}

export type ContactFormData = {
  name: string
  company?: string
  email: string
  phone?: string
  subject: string
  message: string
}

export async function sendContactEmail(data: ContactFormData): Promise<{ success: boolean }> {
  const subjectLabel = SUBJECT_LABELS[data.subject] ?? data.subject

  const html = `
    <table style="font-family: sans-serif; font-size: 15px; color: #1a1a1a; max-width: 600px; width: 100%; border-collapse: collapse;">
      <tr><td style="padding: 32px 32px 0;">
        <h2 style="margin: 0 0 24px; font-size: 20px; color: #152238;">Nuova richiesta dal sito Trialux</h2>
      </td></tr>
      <tr><td style="padding: 0 32px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; width: 140px; font-weight: bold; color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Nome</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${data.name}</td>
          </tr>
          ${
            data.company
              ? `
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Azienda</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${data.company}</td>
          </tr>`
              : ''
          }
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Email</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><a href="mailto:${data.email}" style="color: #55ABE4;">${data.email}</a></td>
          </tr>
          ${
            data.phone
              ? `
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Telefono</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${data.phone}</td>
          </tr>`
              : ''
          }
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Argomento</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${subjectLabel}</td>
          </tr>
        </table>
      </td></tr>
      <tr><td style="padding: 24px 32px 0;">
        <p style="margin: 0 0 10px; font-weight: bold; color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Messaggio</p>
        <p style="margin: 0; white-space: pre-wrap; background: #f9fafb; border: 1px solid #e5e7eb; padding: 16px; line-height: 1.6;">${data.message}</p>
      </td></tr>
      <tr><td style="padding: 32px; color: #9ca3af; font-size: 12px;">
        Messaggio inviato tramite il form contatti di trialux.it
      </td></tr>
    </table>
  `

  const { error } = await resend.emails.send({
    from: `Trialux Web Contatti <${process.env.SENDER_EMAIL}>`,
    to: process.env.RECEIVER_EMAIL!.split(',').map((e) => e.trim()),
    replyTo: data.email,
    subject: `Nuova richiesta: ${subjectLabel} — ${data.name}`,
    html,
  })
  console.log('🚀 ~ sendContactEmail ~ error:', error)

  return { success: !error }
}
