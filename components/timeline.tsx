'use client'

import React, { useState } from 'react'

export default function Timeline() {
  const events = [
    { year: 1861, month: 'June 19', title: 'Birth in Calamba', description: 'José Protasio Rizal Mercado y Alonso Realonda is born in Calamba, Laguna, to Francisco and Teodora Alonso.' },
    { year: 1869, month: 'Age 8', title: 'Home Education Begins', description: 'Begins formal education under his mother\'s guidance, showing exceptional ability in languages and arts.' },
    { year: 1872, month: 'Age 11', title: 'Ateneo Enrollment', description: 'Enters Ateneo Municipal de Manila, an elite Jesuit school, where he excels in academics and receives numerous awards.' },
    { year: 1877, month: 'Age 16', title: 'University Studies', description: 'Enrolls at the University of Santo Tomas to study surveying and later medicine.' },
    { year: 1882, month: 'Age 21', title: 'Departure for Europe', description: 'Leaves the Philippines for Europe to pursue advanced medical studies and engage in reform advocacy.' },
    { year: 1883, month: 'Madrid', title: 'European Awakening', description: 'Studies at the Universidad Central in Madrid while becoming involved with Filipino reformers and liberal intellectuals.' },
    { year: 1884, month: 'Berlin', title: 'Ophthalmology Study', description: 'Studies ophthalmology in Berlin, completes medical doctorate, and meets with Filipino expatriates.' },
    { year: 1887, month: 'February 21', title: 'Noli Me Tangere Published', description: 'His groundbreaking novel "Noli Me Tangere" is published in Berlin, exposing colonial abuses and sparking widespread discussion.' },
    { year: 1888, month: 'Brussels', title: 'Propaganda Leadership', description: 'Becomes editor of La Solidaridad, contributing essays and articles advocating for Filipino reform and independence.' },
    { year: 1888, month: 'Later', title: 'Extended Travels', description: 'Travels through Belgium, England, Hong Kong, Japan, and the United States, expanding his knowledge and advocating for Filipino cause.' },
    { year: 1891, month: 'September 18', title: 'El Filibusterismo Published', description: 'Publishes his second novel "El Filibusterismo" in Ghent, Belgium, a more radical critique of Spanish colonial system.' },
    { year: 1892, month: 'June 26', title: 'Return to Philippines', description: 'Returns to Manila and founds Liga Filipina, a non-violent reform organization.' },
    { year: 1892, month: 'July', title: 'Arrest and Exile', description: 'Spanish authorities arrest him; he is exiled to Dapitan, Mindanao for four years.' },
    { year: 1896, month: 'June', title: 'Return from Exile', description: 'Returns from exile to Manila, immediately arrested by Spanish colonial authorities.' },
    { year: 1896, month: 'December 30', title: 'Execution by Firing Squad', description: 'Executed at Luneta (now Rizal Park) in Manila. His death sparks the Philippine Revolution and immortalizes him as National Hero.' },
  ]

  const [expandedIndex, setExpandedIndex] = useState(null)

  return (
    <section className="py-20 bg-gradient-to-b from-card to-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">Life Timeline</span>
            <h2 className="text-4xl font-bold text-foreground">José Rizal&apos;s Chronological Journey</h2>
            <p className="text-lg text-muted-foreground">From Birth to Immortality: Key Milestones (1861-1896)</p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent"></div>

            {/* Events */}
            <div className="space-y-8">
              {events.map((event, index) => (
                <div
                  key={index}
                  className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 text-right md:text-right' : 'md:pl-12 text-left md:text-left'}`}>
                    <div
                      className="bg-white rounded-lg border border-border p-6 hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer"
                      onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <p className="text-sm font-bold text-primary">{event.year}</p>
                          <p className="text-xs text-muted-foreground mb-2">{event.month}</p>
                          <h4 className="text-lg font-bold text-foreground mb-2">{event.title}</h4>
                          {expandedIndex === index && (
                            <p className="text-sm text-foreground/80 mt-3">{event.description}</p>
                          )}
                        </div>
                        <svg
                          className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${expandedIndex === index ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white border-4 border-primary rounded-full flex items-center justify-center flex-shrink-0 z-10">
                    <div className="w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-full"></div>
                  </div>

                  {/* Spacer */}
                  <div className="w-full md:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Achievements Box */}
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/20 rounded-xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-6">Key Achievements in 35 Years</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-4 border border-primary/30">
                <p className="text-3xl font-bold text-primary mb-2">20+</p>
                <p className="text-sm font-semibold text-foreground mb-1">Languages</p>
                <p className="text-xs text-foreground/70">Mastered to facilitate international communication and advocacy</p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-secondary/30">
                <p className="text-3xl font-bold text-secondary mb-2">2</p>
                <p className="text-sm font-semibold text-foreground mb-1">Major Novels</p>
                <p className="text-xs text-foreground/70">"Noli Me Tangere" and "El Filibusterismo" that shaped nationalism</p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-accent/40">
                <p className="text-3xl font-bold text-accent-foreground mb-2">8</p>
                <p className="text-sm font-semibold text-foreground mb-1">Countries</p>
                <p className="text-xs text-foreground/70">Visited across Europe, Asia, and North America for education and advocacy</p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4">
                <p className="font-bold text-primary mb-2">Skills & Professions</p>
                <p className="text-sm text-foreground/80">Doctor, novelist, poet, painter, sculptor, historian, journalist, linguist, and reformer</p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <p className="font-bold text-secondary mb-2">Legacy Impact</p>
                <p className="text-sm text-foreground/80">Sparked the Philippine Revolution, became National Hero, influenced independence movements globally</p>
              </div>
            </div>
          </div>

          {/* Final Quote */}
          <div className="text-center">
            <blockquote className="text-2xl italic text-foreground font-semibold">
              "I am that son of the Philippines who owes everything to God, to my parents, and to my beloved country."
            </blockquote>
            <p className="text-sm text-muted-foreground mt-4">— José Rizal</p>
          </div>
        </div>
      </div>
    </section>
  )
}
