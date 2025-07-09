"use client"

import { useState } from "react"
import { MobileHeader } from "@/components/mobile-header"
import { MobileMenu } from "@/components/mobile-menu"

const teamMembers = [
  {
    name: "Cristian Madalengoitia",
    role: "Design director, brand consultant and programmer",
    company: "CREATIVE DIRECTOR",
    description:
      "Specialized in brand development, visual identity, and creative programming solutions for modern businesses.",
    tags: ["design", "branding", "programming"],
    socialLinks: ["Behance", "Instagram"],
    behance: "https://behance.net/cristian-madalengoitia",
  },
  {
    name: "Jorge Madalengoitia",
    role: "Full-stack developer and project manager",
    company: "TECHNICAL LEAD",
    description:
      "Expert in full-stack development, project management, and technical architecture for complex web applications.",
    tags: ["development", "management", "architecture"],
    socialLinks: ["LinkedIn", "GitHub"],
    linkedIn: "https://linkedin.com/in/jorge-madalengoitia",
  },
  {
    name: "Paul Camacho",
    role: "PhD Economist, data scientist and programmer",
    company: "DATA SCIENTIST",
    description:
      "PhD Economist specializing in data science, statistical analysis, and intelligent programming solutions.",
    tags: ["data science", "economics", "AI"],
    socialLinks: ["LinkedIn", "Research"],
    linkedIn: "https://linkedin.com/in/paul-camacho",
  },
]

interface MobileTeamSectionProps {
  onNavigate: (section: number) => void
}

export function MobileTeamSection({ onNavigate }: MobileTeamSectionProps) {
  const [currentMember, setCurrentMember] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const member = teamMembers[currentMember]

  const nextMember = () => {
    setCurrentMember((prev) => (prev + 1) % teamMembers.length)
  }

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="md:hidden w-screen h-screen bg-amber-900 flex-shrink-0">
      <MobileHeader onMenuToggle={handleMenuToggle} isMenuOpen={isMenuOpen} />
      <MobileMenu
        isOpen={isMenuOpen}
        currentSection="team"
        onNavigate={onNavigate}
        onClose={() => setIsMenuOpen(false)}
      />

      {!isMenuOpen && (
        <main className="flex-1 h-full bg-amber-900">
          {/* Large Cream Team Showcase */}
          <div className="mx-4 mt-4 mb-4 bg-amber-50 rounded-lg h-[60vh] relative overflow-hidden">
            <div
              className="h-full flex flex-col items-center justify-center cursor-pointer relative"
              onClick={nextMember}
            >
              {/* Hand-drawn decorative elements for team */}
              <div className="absolute top-6 left-6 w-16 h-16">
                <svg viewBox="0 0 100 100" className="w-full h-full stroke-amber-800 fill-none stroke-2">
                  <circle cx="50" cy="35" r="15" />
                  <path d="M35 55 Q50 45 65 55 L65 75 Q50 85 35 75 Z" />
                  <circle cx="45" cy="30" r="2" fill="currentColor" />
                  <circle cx="55" cy="30" r="2" fill="currentColor" />
                  <path d="M45 40 Q50 45 55 40" />
                </svg>
              </div>

              <div className="absolute top-8 right-8 w-20 h-16">
                <svg viewBox="0 0 100 100" className="w-full h-full stroke-amber-800 fill-none stroke-2">
                  <path d="M20 30 L80 30 M20 40 L70 40 M20 50 L75 50" />
                  <circle cx="85" cy="40" r="8" />
                </svg>
              </div>

              <div className="absolute bottom-6 left-6 w-18 h-16">
                <svg viewBox="0 0 100 100" className="w-full h-full stroke-amber-800 fill-none stroke-2">
                  <path d="M20 20 L80 20 L70 40 L30 40 Z" />
                  <path d="M30 50 Q50 40 70 50 Q50 60 30 50" />
                  <circle cx="50" cy="70" r="8" />
                </svg>
              </div>

              {/* Member Name */}
              <div className="text-center z-10">
                <h1 className="text-2xl font-light text-amber-900 mb-2">({member.name.split(" ")[0].toLowerCase()})</h1>
                <p className="text-amber-700 text-lg">multi-talented</p>
              </div>

              {/* Social Links */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-6">
                {member.socialLinks.map((link, index) => (
                  <a key={index} href="#" className="text-sm text-amber-700 hover:text-amber-900 transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Member Details */}
          <div className="px-4 pb-4 text-amber-100">
            <h2 className="text-lg font-medium mb-2">{member.company}</h2>

            <div className="flex gap-4 mb-3">
              {member.tags.map((tag, index) => (
                <a key={index} href="#" className="text-sm text-amber-200 underline hover:text-white transition-colors">
                  {tag}
                </a>
              ))}
            </div>

            <p className="text-sm text-amber-200 leading-relaxed mb-6">{member.description}</p>

            {/* Navigation Footer */}
            <div className="flex items-center justify-between">
              <button
                onClick={nextMember}
                className="flex items-center gap-2 text-amber-200 hover:text-white transition-colors"
              >
                <span className="text-lg">[+]</span>
                <span className="text-sm">TEAM</span>
              </button>
              <span className="text-sm text-amber-300">
                ({currentMember + 1}/{teamMembers.length})
              </span>
            </div>
          </div>
        </main>
      )}
    </div>
  )
}
