"use client"

import { useState } from "react"
import { MobileHeader } from "@/components/mobile-header"
import { MobileMenu } from "@/components/mobile-menu"

const projects = [
  {
    id: 1,
    title: "digital transformation",
    subtitle: "Pronto",
    company: "DIGITAL TRANSFORMATION SOLUTIONS",
    description:
      "Comprehensive digital transformation services including mobile app development, IoT integration, and smart technology solutions for modern businesses.",
    tags: ["website", "mobile app", "IoT integration"],
    socialLinks: ["Instagram", "LinkedIn"],
  },
  {
    id: 2,
    title: "custom software",
    subtitle: "Pronto",
    company: "CUSTOM SOFTWARE DEVELOPMENT",
    description:
      "Full-stack software development services specializing in web applications, custom solutions, and enterprise-level programming projects.",
    tags: ["website", "full-stack development"],
    socialLinks: ["GitHub", "LinkedIn"],
  },
  {
    id: 3,
    title: "fintech solutions",
    subtitle: "Pronto",
    company: "FINTECH & BUSINESS SOLUTIONS",
    description:
      "Financial technology applications and business automation tools designed to streamline operations and enhance digital payment systems.",
    tags: ["website", "artificial intelligence"],
    socialLinks: ["LinkedIn", "Twitter"],
  },
]

interface MobileWorkSectionProps {
  onNavigate: (section: number) => void
}

export function MobileWorkSection({ onNavigate }: MobileWorkSectionProps) {
  const [currentProject, setCurrentProject] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const project = projects[currentProject]

  const nextProject = () => {
    if (!isMenuOpen) {
      setCurrentProject((prev) => (prev + 1) % projects.length)
    }
  }

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleMenuClose = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className="w-screen h-screen bg-amber-900 flex flex-col">
      <MobileHeader onMenuToggle={handleMenuToggle} isMenuOpen={isMenuOpen} />

      <MobileMenu isOpen={isMenuOpen} currentSection="work" onNavigate={onNavigate} onClose={handleMenuClose} />

      {/* Main Content - Only show when menu is closed */}
      <main
        className={`flex-1 bg-amber-900 transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
      >
        {/* Large Cream Project Showcase */}
        <div className="mx-4 mt-4 mb-4 bg-amber-50 rounded-lg h-[60vh] relative overflow-hidden">
          <div
            className="h-full flex flex-col items-center justify-center cursor-pointer relative"
            onClick={nextProject}
          >
            {/* Hand-drawn decorative elements */}
            <div className="absolute top-8 right-8 w-16 h-16">
              <svg viewBox="0 0 100 100" className="w-full h-full stroke-amber-800 fill-none stroke-2">
                <circle cx="50" cy="30" r="15" />
                <path d="M35 30 L65 30 M50 15 L50 45 M42 22 L58 38 M58 22 L42 38" />
                <path d="M30 60 Q50 45 70 60 Q50 75 30 60" />
              </svg>
            </div>

            <div className="absolute bottom-8 left-8 w-20 h-16">
              <svg viewBox="0 0 100 100" className="w-full h-full stroke-amber-800 fill-none stroke-2">
                <path d="M20 80 Q30 60 40 80 Q50 60 60 80 Q70 60 80 80" />
                <circle cx="25" cy="40" r="8" />
                <path d="M25 32 L25 48 M17 40 L33 40" />
              </svg>
            </div>

            <div className="absolute bottom-4 right-4 w-24 h-20">
              <svg viewBox="0 0 100 100" className="w-full h-full stroke-amber-800 fill-none stroke-2">
                <path d="M20 20 Q40 10 60 20 Q80 30 60 50 Q40 60 20 50 Q10 30 20 20" />
                <path d="M30 35 L50 35 M40 25 L40 45" />
                <circle cx="70" cy="70" r="12" />
                <path d="M65 65 L75 75 M75 65 L65 75" />
              </svg>
            </div>

            {/* Project Title */}
            <div className="text-center z-10">
              <h1 className="text-3xl font-light text-amber-900 mb-2">({project.title})</h1>
              <p className="text-amber-700 text-lg">{project.subtitle}</p>
            </div>

            {/* Social Links */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-6">
              {project.socialLinks.map((link, index) => (
                <a key={index} href="#" className="text-sm text-amber-700 hover:text-amber-900 transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="px-4 pb-4 text-amber-100">
          <h2 className="text-lg font-medium mb-2">{project.company}</h2>

          <div className="flex gap-4 mb-3">
            {project.tags.map((tag, index) => (
              <a key={index} href="#" className="text-sm text-amber-200 underline hover:text-white transition-colors">
                {tag}
              </a>
            ))}
          </div>

          <p className="text-sm text-amber-200 leading-relaxed mb-6">{project.description}</p>

          {/* Navigation Footer */}
          <div className="flex items-center justify-between">
            <button
              onClick={nextProject}
              className="flex items-center gap-2 text-amber-200 hover:text-white transition-colors"
            >
              <span className="text-lg">[+]</span>
              <span className="text-sm">WORK</span>
            </button>
            <span className="text-sm text-amber-300">
              ({currentProject + 1}/{projects.length})
            </span>
          </div>
        </div>
      </main>
    </div>
  )
}
