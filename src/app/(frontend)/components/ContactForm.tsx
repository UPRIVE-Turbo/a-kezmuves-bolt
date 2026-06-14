'use client'

import { useActionState } from 'react'

import { submitContactForm, type SubmitContactFormResult } from '../actions'

const initialState: SubmitContactFormResult | null = null

export default function ContactForm({ services }: { services: string[] }) {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState)

  return (
    <form action={formAction} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-brown/60">
            Név *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Kovács Anna"
            className="w-full rounded-xl border border-brown/15 bg-white px-4 py-3 text-brown placeholder:text-brown/30 focus:border-terracotta focus:outline-none"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-brown/60">
            Telefonszám
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+36 30 123 4567"
            className="w-full rounded-xl border border-brown/15 bg-white px-4 py-3 text-brown placeholder:text-brown/30 focus:border-terracotta focus:outline-none"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-brown/60">
          E-mail cím *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="anna@example.hu"
          className="w-full rounded-xl border border-brown/15 bg-white px-4 py-3 text-brown placeholder:text-brown/30 focus:border-terracotta focus:outline-none"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="service" className="text-xs font-semibold uppercase tracking-wider text-brown/60">
          Téma
        </label>
        <select
          id="service"
          name="service"
          defaultValue=""
          className="w-full rounded-xl border border-brown/15 bg-white px-4 py-3 text-brown focus:border-terracotta focus:outline-none"
        >
          <option value="">Válassz témát...</option>
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
          <option value="egyeb">Egyéb kérdés</option>
        </select>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-brown/60">
          Üzenet *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Hogyan segíthetünk?"
          className="w-full resize-none rounded-xl border border-brown/15 bg-white px-4 py-3 text-brown placeholder:text-brown/30 focus:border-terracotta focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-terracotta py-4 font-semibold text-cream transition-colors hover:bg-brown disabled:opacity-60"
      >
        {pending ? 'Küldés...' : 'Üzenet küldése'}
      </button>

      {state && (
        <p
          role="status"
          className={`text-center text-sm font-medium ${state.success ? 'text-olive' : 'text-terracotta'}`}
        >
          {state.message}
        </p>
      )}
    </form>
  )
}
