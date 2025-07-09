"use client"

import { useState } from "react"
import { MobileHeader } from "@/components/mobile-header"
import { MobileMenu } from "@/components/mobile-menu"

interface MobileContactSectionProps {
  onNavigate: (section: number) => void
}

export function MobileContactSection({ onNavigate }: MobileContactSectionProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="md:hidden w-screen h-screen bg-amber-900 flex-shrink-0">
      <MobileHeader onMenuToggle={handleMenuToggle} isMenuOpen={isMenuOpen} />
      <MobileMenu
        isOpen={isMenuOpen}
        currentSection="contact"
        onNavigate={onNavigate}
        onClose={() => setIsMenuOpen(false)}
      />

      {!isMenuOpen && (
        <main className="flex-1 h-full bg-amber-900">
          {/* Large Cream Contact Showcase */}
          <div className="mx-4 mt-4 mb-4 bg-amber-50 rounded-lg h-[60vh] relative overflow-hidden">
            <div className="h-full flex flex-col items-center justify-center relative">
              {/* Hand-drawn decorative elements for contact */}
              <div className="absolute top-8 left-8 w-16 h-16">
                <svg viewBox="0 0 100 100" className="w-full h-full stroke-amber-800 fill-none stroke-2">
                  <rect x="20" y="30" width="60" height="40" rx="5" />
                  <path d="M20 35 L50 55 L80 35" />
                  <circle cx="50" cy="15" r="8" />
                </svg>
              </div>

              <div className="absolute top-6 right-6 w-20 h-16">
                <svg viewBox="0 0 100 100" className="w-full h-full stroke-amber-800 fill-none stroke-2">
                  <circle cx="50" cy="50" r="25" />
                  <path d="M35 35 L65 65 M65 35 L35 65" />
                  <circle cx="30" cy="20" r="5" />
                  <circle cx="70" cy="20" r="5" />
                </svg>
              </div>

              <div className="absolute bottom-8 left-8 w-18 h-16">
                <svg viewBox="0 0 100 100" className="w-full h-full stroke-amber-800 fill-none stroke-2">
                  <path d="M20 40 Q30 20 50 40 Q70 20 80 40 Q70 60 50 40 Q30 60 20 40" />
                  <circle cx="50" cy="70" r="8" />
                  <path d="M45 70 L55 70 M50 65 L50 75" />
                </svg>
              </div>

              {/* Contact Title */}
              <div className="text-center z-10">
                <h1 className="text-3xl font-light text-amber-900 mb-2">(contact)</h1>
                <p className="text-amber-700 text-lg">Let's talk</p>
              </div>

              {/* Social Links */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-6">
                <a href="#" className="text-sm text-amber-700 hover:text-amber-900 transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-sm text-amber-700 hover:text-amber-900 transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="px-4 pb-4 text-amber-100">
            <h2 className="text-lg font-medium mb-2">GET IN TOUCH</h2>

            <div className="flex flex-col gap-2 mb-3">
              <a
                href="mailto:hello@marron.dev"
                className="text-sm text-amber-200 underline hover:text-white transition-colors"
              >
                hello@marron.dev
              </a>
              <a
                href="tel:+15551234567"
                className="text-sm text-amber-200 underline hover:text-white transition-colors"
              >
                +1 (555) 123-4567
              </a>
            </div>

            <p className="text-sm text-amber-200 leading-relaxed mb-6">
              Ready to start your next project? We specialize in web development, design, and digital transformation.
              Let's create something amazing together.
            </p>

            {/* Navigation Footer */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-amber-200">
                <span className="text-lg">[•]</span>
                <span className="text-sm">CONTACT</span>
              </div>
              <span className="text-sm text-amber-300">(1/1)</span>
            </div>
          </div>
        </main>
      )}
    </div>
  )
}
