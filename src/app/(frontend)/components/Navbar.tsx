'use client'

import { useState } from 'react'

const links = [
  { href: '#kinalatunk', label: 'Kínálatunk' },
  { href: '#rolunk', label: 'Rólunk' },
  { href: '#galeria', label: 'Galéria' },
  { href: '#kapcsolat', label: 'Kapcsolat' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-0 md:pt-0">
      <div className="mx-auto flex max-w-full items-center justify-between rounded-full border border-white/50 bg-cream/85 px-5 py-3 shadow-lg shadow-brown/5 backdrop-blur-xl md:rounded-none md:border-0 md:border-b md:border-brown/10 md:px-6 md:py-4 md:shadow-sm">
        <a href="#" className="group relative font-serif text-xl font-medium tracking-tight text-terracotta md:text-2xl">
          A Kézműves Bolt
          <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-olive transition-all duration-500 ease-out group-hover:w-full" />
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium uppercase tracking-wide md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-terracotta">
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#kapcsolat"
          className="hidden rounded-full bg-brown px-6 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-olive md:inline-flex"
        >
          Kapcsolat
        </a>

        <button
          aria-label="Menü megnyitása"
          onClick={() => setOpen((v) => !v)}
          className="text-2xl text-brown md:hidden"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-3xl border border-white/50 bg-cream/95 p-4 shadow-lg shadow-brown/5 backdrop-blur-xl md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 font-medium hover:bg-brown/5 hover:text-terracotta"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kapcsolat"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-brown px-6 py-2.5 text-center text-sm font-semibold text-cream"
          >
            Kapcsolat
          </a>
        </div>
      )}
    </nav>
  )
}
