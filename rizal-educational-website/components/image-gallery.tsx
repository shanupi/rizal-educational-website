'use client'

import React, { useState } from 'react'
import Image from 'next/image'

export default function ImageGallery() {
  const images = [
    {
      src: '/rizal-portrait.png',
      title: 'José Rizal - National Hero',
      description: 'Portrait of Dr. José Rizal during his prime years as a reformer and intellectual'
    },
    {
      src: '/rizal-dapitan.png',
      title: 'Exile in Dapitan',
      description: 'José Rizal teaching local students during his exile in Dapitan, Mindanao (1892-1896)'
    },
    {
      src: '/rizal-execution.png',
      title: 'Memorial to Martyrdom',
      description: 'The execution of José Rizal on December 30, 1896, at Luneta, Manila'
    }
  ]

  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">Visual History</span>
            <h2 className="text-4xl font-bold text-foreground">Image Gallery</h2>
            <p className="text-lg text-muted-foreground">Historical representations of José Rizal&apos;s life</p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative h-64 overflow-hidden rounded-lg border border-border shadow-md group-hover:shadow-xl transition-shadow">
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end p-4">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="font-bold text-sm">{image.title}</p>
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-center font-semibold text-foreground">{image.title}</p>
                <p className="text-center text-sm text-muted-foreground">{image.description}</p>
              </div>
            ))}
          </div>

          {/* Modal */}
          {selectedImage !== null && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <div
                className="relative max-w-2xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-96 md:h-96 overflow-hidden rounded-lg">
                  <Image
                    src={images[selectedImage].src}
                    alt={images[selectedImage].title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="mt-4 bg-white rounded-lg p-6 border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {images[selectedImage].title}
                  </h3>
                  <p className="text-foreground/80 mb-4">
                    {images[selectedImage].description}
                  </p>
                  
                  {/* Image Navigation */}
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => setSelectedImage((prev) => (prev! - 1 + images.length) % images.length)}
                      className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      ← Previous
                    </button>
                    
                    <span className="text-sm text-muted-foreground">
                      {selectedImage + 1} of {images.length}
                    </span>
                    
                    <button
                      onClick={() => setSelectedImage((prev) => (prev! + 1) % images.length)}
                      className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      Next →
                    </button>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
