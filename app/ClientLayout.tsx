"use client"

import type React from "react"
import { useState, useEffect } from "react"

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [currentSection, setCurrentSection] = useState(0)

  useEffect(() => {
    // Set initial section based on current path
    const path = window.location.pathname
    if (path === "/team") setCurrentSection(1)
    else if (path === "/contact") setCurrentSection(2)
    else setCurrentSection(0)
  }, [])

  const navigateToSection = (sectionIndex: number) => {
    setCurrentSection(sectionIndex)
    const container = document.getElementById("scroll-container")
    if (container) {
      container.style.transform = `translateX(-${sectionIndex * 100}vw)`
    }
  }

  // Keyboard navigation
  useEffect(() => {
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
  }, [currentSection])

  return (
    <div id="scroll-container" className="flex w-[300vw] h-screen transition-transform duration-1000 ease-out">
      {children}
    </div>
  )
}
