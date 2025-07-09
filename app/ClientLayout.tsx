"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { MobileWorkSection } from "@/components/mobile-work-section"
import { MobileTeamSection } from "@/components/mobile-team-section"
import { MobileContactSection } from "@/components/mobile-contact-section"

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [currentSection, setCurrentSection] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    // Set initial section based on current path
    const path = window.location.pathname
    if (path === "/team") setCurrentSection(1)
    else if (path === "/contact") setCurrentSection(2)
    else setCurrentSection(0)
  }, [])

  const navigateToSection = (sectionIndex: number) => {
    setCurrentSection(sectionIndex)
    if (!isMobile) {
      const container = document.getElementById("scroll-container")
      if (container) {
        container.style.transform = `translateX(-${sectionIndex * 100}vw)`
      }
    }
  }

  // Keyboard navigation for desktop only
  useEffect(() => {
    if (isMobile) return

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowRight":
        case "d":
        case "D":
          event.preventDefault()
          const nextSection = (currentSection + 1) % 3
          navigateToSection(nextSection)
          break
        case "ArrowLeft":
        case "a":
        case "A":
          event.preventDefault()
          const prevSection = (currentSection - 1 + 3) % 3
          navigateToSection(prevSection)
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentSection, isMobile])

  // Mobile version - Show different sections based on currentSection
  if (isMobile) {
    return (
      <div className="w-screen h-screen overflow-hidden bg-amber-900">
        {currentSection === 0 && <MobileWorkSection onNavigate={navigateToSection} />}
        {currentSection === 1 && <MobileTeamSection onNavigate={navigateToSection} />}
        {currentSection === 2 && <MobileContactSection onNavigate={navigateToSection} />}
      </div>
    )
  }

  // Desktop version - Horizontal scroll layout
  return (
    <div id="scroll-container" className="flex w-[300vw] h-screen transition-transform duration-1000 ease-out">
      {children}
    </div>
  )
}
