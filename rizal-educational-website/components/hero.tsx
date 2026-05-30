import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-background to-card overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-semibold">
                  Philippines' National Hero
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-balance leading-tight text-foreground">
                José Rizal: A Life That Shaped a Nation
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                From Birth to Martyrdom: The Journey of the Philippines&apos; National Hero
              </p>
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed max-w-lg">
              Discover the extraordinary life of Dr. José Rizal, whose intellectual brilliance, unwavering patriotism, and ultimate sacrifice ignited the spark of Philippine independence. Through his writings, travels, and courageous stand against colonial oppression, Rizal became the symbol of Filipino resistance and the architect of national consciousness.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <a
                href="#introduction"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2"
              >
                Explore Rizal&apos;s Life
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
              <a
                href="#timeline"
                className="px-8 py-4 bg-card border border-border text-foreground rounded-lg font-semibold hover:bg-muted transition-colors inline-flex items-center justify-center"
              >
                View Timeline
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 lg:h-[500px] animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl"></div>
            <Image
              src="/rizal-portrait.png"
              alt="Dr. José Rizal"
              fill
              className="object-cover rounded-2xl shadow-2xl"
              priority
            />
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-accent rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary rounded-full opacity-20"></div>
          </div>
        </div>

        {/* Flag Colors Bar */}
        <div className="mt-20 flex gap-4 h-2 rounded-full overflow-hidden">
          <div className="flex-1 bg-primary"></div>
          <div className="flex-1 bg-secondary"></div>
          <div className="flex-1 bg-accent"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .animate-scale-in {
          animation: scale-in 0.8s ease-out;
        }
      `}</style>
    </div>
  )
}
