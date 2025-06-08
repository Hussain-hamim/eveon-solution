"use client"

import { ThemeToggle } from "./theme-toggle"
import { RTLToggle } from "./rtl-toggle"
import { Building2 } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white">
            <Building2 className="w-6 h-6 text-blue-600" />
            <span>Eveon Solutions</span>
          </div>
          
          {/* Controls */}
          <div className="flex items-center gap-2">
            <RTLToggle />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}