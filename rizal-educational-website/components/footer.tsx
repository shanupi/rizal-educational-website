import React from 'react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">JR</span>
              </div>
              <span className="font-bold text-lg">Rizal</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Exploring the life and legacy of José Rizal, the Philippines&apos; National Hero. An educational tribute to his extraordinary journey.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <a href="#home" className="block hover:text-accent transition-colors">Home</a>
              <a href="#introduction" className="block hover:text-accent transition-colors">About</a>
              <a href="#timeline" className="block hover:text-accent transition-colors">Timeline</a>
              <a href="#legacy" className="block hover:text-accent transition-colors">Legacy</a>
            </nav>
          </div>

          {/* Topics */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Topics</h3>
            <nav className="space-y-2 text-sm">
              <a href="#early-life" className="block hover:text-accent transition-colors">Early Life</a>
              <a href="#education" className="block hover:text-accent transition-colors">Education</a>
              <a href="#travels-and-works" className="block hover:text-accent transition-colors">Travels & Works</a>
              <a href="#arrest-and-trial" className="block hover:text-accent transition-colors">Arrest & Trial</a>
            </nav>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Learn More</h3>
            <div className="space-y-3 text-sm">
              <p className="text-primary-foreground/80">
                For more information about José Rizal and Philippine history, explore historical archives and educational resources.
              </p>
              <a href="#" className="inline-block bg-primary-foreground text-primary px-4 py-2 rounded font-semibold hover:bg-accent/90 transition-colors text-sm">
                Explore Resources
              </a>
            </div>
          </div>
        </div>

        {/* Flag Colors Bar */}
        <div className="flex gap-0 h-1 rounded-full overflow-hidden mb-12">
          <div className="flex-1 bg-primary-foreground/50"></div>
          <div className="flex-1 bg-accent/50"></div>
          <div className="flex-1 bg-primary-foreground/30"></div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left text-sm text-primary-foreground/80">
              <p className="font-bold text-primary-foreground mb-1">José Rizal: The Pride of the Filipino Nation</p>
              <p>
                &quot;I ask for neither credit nor recognition. I only ask that you love your country.&quot; — José Rizal
              </p>
            </div>
            <div className="text-sm text-primary-foreground/80 text-center md:text-right">
              <p>© {currentYear} José Rizal Educational Website</p>
              <p>Made with dedication to the legacy of our National Hero</p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 pt-8 border-t border-primary-foreground/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-primary-foreground/70">
              <div>
                <p className="font-semibold text-primary-foreground mb-2">Birth & Death</p>
                <p>Born: June 19, 1861 in Calamba, Laguna</p>
                <p>Died: December 30, 1896 in Manila</p>
              </div>
              <div>
                <p className="font-semibold text-primary-foreground mb-2">Key Works</p>
                <p>• Noli Me Tangere (1887)</p>
                <p>• El Filibusterismo (1891)</p>
                <p>• Mi Ultimo Adios (1896)</p>
              </div>
              <div>
                <p className="font-semibold text-primary-foreground mb-2">National Recognition</p>
                <p>• Declared National Hero: 1898</p>
                <p>• June 19 & Dec 30 are national holidays</p>
                <p>• Studied in all Philippine schools</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Very Bottom */}
      <div className="bg-primary-foreground/10 text-primary-foreground/60 text-center py-4 text-xs">
        <p>This educational website is dedicated to preserving and sharing the legacy of Dr. José Rizal with current and future generations.</p>
      </div>
    </footer>
  )
}
