import React from 'react'
import Link from 'next/link'

export default function Header() {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Early Life', href: '#early-life' },
    { label: 'Education', href: '#education' },
    { label: 'Travels & Works', href: '#travels-and-works' },
    { label: 'Character', href: '#character' },
    { label: 'Arrest & Trial', href: '#arrest-and-trial' },
    { label: 'Legacy', href: '#legacy' },
    { label: 'Timeline', href: '#timeline' },
  ]

  return (
    <header className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">JR</span>
            </div>
            <span className="font-bold text-primary text-lg hidden sm:inline">Rizal</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <details className="md:hidden">
            <summary className="cursor-pointer p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </summary>
            <nav className="absolute top-16 right-0 bg-white border-l border-b border-border w-48">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-sm hover:bg-muted border-b border-border"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  )
}
