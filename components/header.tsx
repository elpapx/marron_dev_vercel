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
    <header className="sticky top-0 z-50 flex items-center justify-between px-4 md:px-8 py-4 md:py-6 bg-amber-900/95 backdrop-blur-sm text-amber-100">
      {/* Logo */}
      <div className="text-lg md:text-4xl font-light tracking-wide">
        <button
          onClick={() => navigateToSection(0)}
          className="hover:text-white transition-colors duration-300 cursor-pointer"
        >
          MARRÓN.dev
        </button>
      </div>

      {/* Center section - shows either page counter or section title */}
      <div className="text-sm md:text-3xl font-light text-amber-200 hidden sm:block">{sectionTitle || pageCounter}</div>

      {/* Mobile Navigation */}
      <nav className="flex items-center gap-2 md:gap-8">
        {/* WORK Section */}
        <button
          onClick={() => navigateToSection(0)}
          className="flex items-center gap-1 md:gap-2 text-xs md:text-base font-medium tracking-wider transition-all duration-300 hover:text-white"
        >
          <span className="text-amber-300 hidden md:inline">[</span>
          <span
            className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${
              currentSection === "work" ? "bg-amber-200" : "border border-amber-400"
            }`}
          ></span>
          <span className="text-amber-300 hidden md:inline">]</span>
          <span className={`text-xs md:text-base ${currentSection === "work" ? "text-white" : "text-amber-200"}`}>
            WORK
          </span>
        </button>

        {/* TEAM Section */}
        <button
          onClick={() => navigateToSection(1)}
          className="flex items-center gap-1 md:gap-2 text-xs md:text-base font-medium tracking-wider transition-all duration-300 hover:text-white"
        >
          <span className="text-amber-300 hidden md:inline">[</span>
          <span
            className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${
              currentSection === "team" ? "bg-amber-200" : "border border-amber-400"
            }`}
          ></span>
          <span className="text-amber-300 hidden md:inline">]</span>
          <span className={`text-xs md:text-base ${currentSection === "team" ? "text-white" : "text-amber-200"}`}>
            TEAM
          </span>
        </button>

        {/* CONTACT Section */}
        <button
          onClick={() => navigateToSection(2)}
          className="flex items-center gap-1 md:gap-2 text-xs md:text-base font-medium tracking-wider transition-all duration-300 hover:text-white"
        >
          <span className="text-amber-300 hidden md:inline">[</span>
          <span
            className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${
              currentSection === "contact" ? "bg-amber-200" : "border border-amber-400"
            }`}
          ></span>
          <span className="text-amber-300 hidden md:inline">]</span>
          <span className={`text-xs md:text-base ${currentSection === "contact" ? "text-white" : "text-amber-200"}`}>
            CONTACT
          </span>
        </button>
      </nav>

      {/* Mobile Counter/Title */}
      <div className="text-xs font-light text-amber-200 sm:hidden absolute left-1/2 transform -translate-x-1/2 top-16">
        {sectionTitle || pageCounter}
      </div>
    </header>
  )
}
