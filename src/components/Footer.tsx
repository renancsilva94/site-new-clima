'use client'

import React from 'react'
import Link from 'next/link'
import { Instagram, Facebook, Linkedin } from 'lucide-react'

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.445 0 .062 5.383.06 11.983c0 2.108.544 4.165 1.582 6.022L0 24l6.146-1.612a11.827 11.827 0 005.904 1.599h.005c6.605 0 11.988-5.383 11.99-11.984a11.846 11.846 0 00-3.515-8.417z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <>
      <footer className="bg-[#0b1120] text-white pt-16 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Logo e desc */}
            <div className="lg:col-span-1">
              <img
                src="https://www.newclimaar.com.br/images/logo-rodape.png"
                alt="New Clima Ar Condicionado — Instalação e Manutenção de Ar Condicionado em SP"
                className="h-16 w-auto mb-4"
              />
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Especialista em instalação, manutenção, higienização e PMOC de ar condicionado em São Paulo e ABC Paulista. Atendimento residencial, comercial e industrial.
              </p>
              <div className="flex items-center gap-3">
                <a href="https://www.instagram.com/newclimaar" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors" aria-label="Instagram">
                  <Instagram size={16} />
                </a>
                <a href="https://www.facebook.com/newclimaar" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors" aria-label="Facebook">
                  <Facebook size={16} />
                </a>
                <a href="https://www.linkedin.com/company/newclimaar" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors" aria-label="LinkedIn">
                  <Linkedin size={16} />
                </a>
              </div>
            </div>

            {/* Contato */}
            <div>
              <h4 className="font-bold text-white mb-4">Contato</h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li><a href="tel:+5511963462516" className="hover:text-white transition-colors">(11) 96346-2516</a></li>
                <li><a href="https://wa.me/5511963462516" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp — resposta em até 2h</a></li>
                <li><a href="mailto:contato@newclimaar.com.br" className="hover:text-white transition-colors">contato@newclimaar.com.br</a></li>
                <li>R. Santa Cruz, 2187 — Vila Mariana, São Paulo / SP</li>
                <li>Seg–Sex 8h–18h · Sáb 8h–13h</li>
              </ul>
            </div>

            {/* Institucional */}
            <div>
              <h4 className="font-bold text-white mb-4">Institucional</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><Link href="/" className="hover:text-white transition-colors">Início</Link></li>
                <li><Link href="/sobre" className="hover:text-white transition-colors">Quem Somos</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/contato" className="hover:text-white transition-colors">Contato</Link></li>
                <li><Link href="/mapa-site" className="hover:text-white transition-colors">Mapa do Site</Link></li>
                <li><a href="https://maps.app.goo.gl/kHeynjnXoG943iG3A" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Avaliações no Google</a></li>
              </ul>
            </div>

            {/* Mapa */}
            <div>
              <h4 className="font-bold text-white mb-4">Localização</h4>
              <div className="rounded-xl overflow-hidden border border-white/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.9!2d-46.6378!3d-23.5893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a2b2ed7f3a1%3A0x53986ad429ea0b1b!2sR.%20Santa%20Cruz%2C%202187%20-%20Vila%20Mariana%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1683900000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="140"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização New Clima"
                />
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
            <span>© {new Date().getFullYear()} New Clima Ar Condicionado — CNPJ 31.925.573/0001-50</span>
            <span>Desenvolvido por <a href="https://novyndigital.com.br" className="hover:text-white transition-colors">Novyn Digital</a></span>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3 pointer-events-none">
        <div className="bg-white px-4 py-2 rounded-full shadow-xl border border-slate-100 text-sm font-bold text-slate-700 pointer-events-auto">
          Orçamento grátis — resposta em 2h
        </div>
        <div className="relative pointer-events-auto">
          <div className="absolute inset-0 bg-success rounded-full animate-ping opacity-25"></div>
          <a
            href="https://wa.me/5511963462516"
            rel="noopener noreferrer"
            aria-label="Falar com especialista"
            className="relative w-16 h-16 bg-success text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
          >
            <WhatsAppIcon size={32} />
          </a>
        </div>
      </div>
    </>
  )
}
