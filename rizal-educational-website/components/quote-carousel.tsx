'use client'

import React, { useState, useEffect } from 'react'

export default function QuoteCarousel() {
  const quotes = [
    {
      text: "He who does not know how to look back at where he came from will not be able to understand where he is going.",
      attribution: "José Rizal"
    },
    {
      text: "To die is to cease suffering. To live is to perform duty.",
      attribution: "José Rizal"
    },
    {
      text: "The youth is the hope of our future.",
      attribution: "José Rizal"
    },
    {
      text: "I ask for neither credit nor recognition. I only ask that you love your country.",
      attribution: "José Rizal"
    },
    {
      text: "Farewell, beloved country... If I die tomorrow, gladly will I lay down my life for you.",
      attribution: "José Rizal, Mi Ultimo Adios"
    },
    {
      text: "Circumstances have isolated me from my country; but I have not forgotten her.",
      attribution: "José Rizal"
    },
    {
      text: "The Philippines will need him from time to time to feed her spirit and light her way.",
      attribution: "Philippine National Historical Commission"
    },
    {
      text: "I am that son of the Philippines who owes everything to God, to my parents, and to my beloved country.",
      attribution: "José Rizal"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlay, quotes.length])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length)
    setIsAutoPlay(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % quotes.length)
    setIsAutoPlay(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlay(false)
  }

  return (
    <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Words of Wisdom</span>
          <h2 className="text-3xl font-bold text-foreground mt-2">Inspirational Quotes</h2>
          <p className="text-muted-foreground mt-2">Timeless wisdom from José Rizal</p>
        </div>

        {/* Carousel Container */}
        <div className="relative bg-white rounded-xl border border-border shadow-lg overflow-hidden">
          {/* Quote Display */}
          <div className="relative h-64 flex items-center justify-center p-12 overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-4 right-4 text-6xl text-primary/10 font-serif">"</div>
            
            <div className="relative z-10 text-center space-y-4">
              <p className="text-2xl md:text-3xl font-bold text-foreground leading-relaxed italic text-balance">
                {quotes[currentIndex].text}
              </p>
              <p className="text-lg font-semibold text-primary">
                — {quotes[currentIndex].attribution}
              </p>
            </div>

            {/* Background Accent */}
            <div className="absolute bottom-4 left-4 text-6xl text-secondary/10 font-serif">"</div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 px-6 pb-6">
            <button
              onClick={goToPrevious}
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
              aria-label="Previous quote"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {quotes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-primary w-8'
                      : 'bg-border hover:bg-primary/50'
                  }`}
                  aria-label={`Go to quote ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
              aria-label="Next quote"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Auto-play toggle */}
          <div className="flex justify-center pb-4">
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className={`text-xs font-semibold px-4 py-2 rounded-full transition-colors ${
                isAutoPlay
                  ? 'bg-primary/20 text-primary'
                  : 'bg-muted text-foreground hover:bg-muted/80'
              }`}
            >
              {isAutoPlay ? '▶ Playing' : '⏸ Paused'}
            </button>
          </div>
        </div>

        {/* Quote Counter */}
        <div className="text-center mt-6 text-sm text-muted-foreground">
          Quote {currentIndex + 1} of {quotes.length}
        </div>
      </div>
    </section>
  )
}
