"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

interface HeaderProps {
  pageCounter?: string
}

export function Header({ pageCounter }: HeaderProps) {
  const pathname = usePathname()

  const navItems = [
    { label: "WORK", href: "/work", active: pathname === "/work" || pathname === "/" },
    { label: "TEAM", href: "/team", active: pathname === "/team" },
    { label: "CONTACT", href: "/contact", active: pathname === "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-8 py-6 bg-amber-900/95 backdrop-blur-sm border-b border-amber-800 text-amber-100">
      <div className="text-2xl font-light tracking-wide">
        <Link href="/work" className="hover:text-white transition-colors duration-300">
          MARRÓN.dev
        </Link>
      </div>

      {pageCounter && <div className="text-xl font-light text-amber-200">{pageCounter}</div>}

      <nav className="flex items-center gap-1">
        {navItems.map((item, index) => (
          <Link
            key={item.label}
            href={item.href}
            className={`px-4 py-2 text-sm font-medium tracking-wider transition-all duration-300 rounded-md ${
              item.active
                ? "bg-amber-800 text-white shadow-lg"
                : "text-amber-200 hover:text-white hover:bg-amber-800/50"
            }`}
          >
            [{item.active ? "●" : " "}] {item.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
