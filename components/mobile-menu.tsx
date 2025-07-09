"use client"

interface MobileMenuProps {
  isOpen: boolean
  currentSection: "work" | "team" | "contact"
  onNavigate: (section: number) => void
  onClose: () => void
}

export function MobileMenu({ isOpen, currentSection, onNavigate, onClose }: MobileMenuProps) {
  const handleNavigate = (section: number) => {
    onNavigate(section)
    onClose()
  }

  return (
    <div
      className={`md:hidden fixed inset-0 z-50 bg-amber-900/98 backdrop-blur-sm transition-all duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 text-amber-100 hover:text-white"
        aria-label="Close menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Menu Items */}
      <div className="flex flex-col items-center justify-center h-full space-y-12 text-amber-100">
        <button
          onClick={() => handleNavigate(0)}
          className={`text-3xl font-light tracking-wider transition-all duration-300 hover:scale-110 ${
            currentSection === "work" ? "text-white scale-110" : "text-amber-200"
          }`}
        >
          WORK
        </button>
        <button
          onClick={() => handleNavigate(1)}
          className={`text-3xl font-light tracking-wider transition-all duration-300 hover:scale-110 ${
            currentSection === "team" ? "text-white scale-110" : "text-amber-200"
          }`}
        >
          TEAM
        </button>
        <button
          onClick={() => handleNavigate(2)}
          className={`text-3xl font-light tracking-wider transition-all duration-300 hover:scale-110 ${
            currentSection === "contact" ? "text-white scale-110" : "text-amber-200"
          }`}
        >
          CONTACT
        </button>

        {/* Menu Footer */}
        <div className="absolute bottom-8 text-center">
          <p className="text-sm text-amber-300">Navigate between sections</p>
        </div>
      </div>
    </div>
  )
}
