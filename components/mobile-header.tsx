"use client"

interface MobileHeaderProps {
  onMenuToggle: () => void
  isMenuOpen: boolean
}

export function MobileHeader({ onMenuToggle, isMenuOpen }: MobileHeaderProps) {
  return (
    <header className="md:hidden sticky top-0 z-50 flex items-center justify-between px-6 py-5 bg-amber-900 text-amber-100 border-b border-amber-800/30">
      {/* Logo */}
      <div className="text-xl font-light tracking-wide">
        <span>MARRÓN.dev</span>
      </div>

      {/* Hamburger Menu Button */}
      <button
        onClick={onMenuToggle}
        className="flex flex-col gap-1.5 p-3 hover:bg-amber-800/20 rounded-md transition-colors duration-200"
        aria-label="Toggle menu"
      >
        <span
          className={`w-7 h-0.5 bg-amber-100 transition-all duration-300 origin-center ${
            isMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`w-7 h-0.5 bg-amber-100 transition-all duration-300 ${
            isMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
          }`}
        ></span>
        <span
          className={`w-7 h-0.5 bg-amber-100 transition-all duration-300 origin-center ${
            isMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>
    </header>
  )
}
