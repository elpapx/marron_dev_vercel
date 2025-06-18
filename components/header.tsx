"use client"

interface HeaderProps {
  currentSection: "work" | "team" | "contact"
  pageCounter?: string
  sectionTitle?: string
}

export function Header({ currentSection, pageCounter, sectionTitle }: HeaderProps) {
  const navigateToSection = (sectionIndex: number) => {
    const container = document.getElementById("scroll-container")
    if (container) {
      container.style.transform = `translateX(-${sectionIndex * 100}vw)`
    }
  }

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-8 py-6 bg-amber-900/95 backdrop-blur-sm text-amber-100">
      <div className="text-4xl font-light tracking-wide">
        <button
          onClick={() => navigateToSection(0)}
          className="hover:text-white transition-colors duration-300 cursor-pointer"
        >
          MARRÓN.dev
        </button>
      </div>

      {/* Center section - shows either page counter or section title */}
      <div className="text-3xl font-light text-amber-200">{sectionTitle || pageCounter}</div>

      <nav className="flex items-center gap-8">
        {/* WORK Section */}
        <button
          onClick={() => navigateToSection(0)}
          className="flex items-center gap-2 text-base font-medium tracking-wider transition-all duration-300 hover:text-white"
        >
          <span className="text-amber-300">[</span>
          <span
            className={`w-2 h-2 rounded-full ${currentSection === "work" ? "bg-amber-200" : "border border-amber-400"}`}
          ></span>
          <span className="text-amber-300">]</span>
          <span className={currentSection === "work" ? "text-white" : "text-amber-200"}>WORK</span>
        </button>

        {/* TEAM Section */}
        <button
          onClick={() => navigateToSection(1)}
          className="flex items-center gap-2 text-base font-medium tracking-wider transition-all duration-300 hover:text-white"
        >
          <span className="text-amber-300">[</span>
          <span
            className={`w-2 h-2 rounded-full ${currentSection === "team" ? "bg-amber-200" : "border border-amber-400"}`}
          ></span>
          <span className="text-amber-300">]</span>
          <span className={currentSection === "team" ? "text-white" : "text-amber-200"}>TEAM</span>
        </button>

        {/* CONTACT Section */}
        <button
          onClick={() => navigateToSection(2)}
          className="flex items-center gap-2 text-base font-medium tracking-wider transition-all duration-300 hover:text-white"
        >
          <span className="text-amber-300">[</span>
          <span
            className={`w-2 h-2 rounded-full ${currentSection === "contact" ? "bg-amber-200" : "border border-amber-400"}`}
          ></span>
          <span className="text-amber-300">]</span>
          <span className={currentSection === "contact" ? "text-white" : "text-amber-200"}>CONTACT</span>
        </button>
      </nav>
    </header>
  )
}
