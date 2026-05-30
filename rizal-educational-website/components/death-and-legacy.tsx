import React, { useState } from 'react'
import Image from 'next/image'

export default function DeathAndLegacy() {
  const [expandedImage, setExpandedImage] = useState<string | null>(null)
  const monuments = [
    {
      name: 'Rizal Park',
      location: 'Manila',
      description: 'The site of his execution, now a major historical monument and public park dedicated to his memory',
      icon: '🏛️'
    },
    {
      name: 'Rizal Monument',
      location: 'Luneta Park',
      description: 'A towering bronze monument with Rizal\'s figure overlooking the Philippines',
      icon: '🗿'
    },
    {
      name: 'Casa Rizal Museum',
      location: 'Calamba, Laguna',
      description: 'His birthplace, now a museum preserving his childhood home and personal artifacts',
      icon: '🏠'
    },
    {
      name: 'University of Santo Tomas',
      location: 'Manila',
      description: 'His alma mater, which now honors him as one of its most distinguished alumni',
      icon: '📚'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">Immortal Memory</span>
            <h2 className="text-4xl font-bold text-foreground">Death and Legacy</h2>
            <p className="text-lg text-muted-foreground">How a Nation Remembers Its Hero</p>
          </div>

          {/* Execution and Monument Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Execution */}
            <div className="bg-white rounded-lg border border-border overflow-hidden shadow-md">
              <div className="relative h-64 w-full cursor-pointer group" onClick={() => setExpandedImage('execution')}>
                <Image
                  src="/rizal-execution.png"
                  alt="Rizal's execution Luneta Park"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-semibold">Click to expand</span>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-secondary mb-2">December 30, 1896 - Execution</h4>
                <p className="text-sm text-foreground/70">Rizal was executed by firing squad at Luneta Park, becoming a martyr to the Philippine independence movement.</p>
              </div>
            </div>

            {/* Monument */}
            <div className="bg-white rounded-lg border border-border overflow-hidden shadow-md">
              <div className="relative h-64 w-full cursor-pointer group" onClick={() => setExpandedImage('monument')}>
                <Image
                  src="/rizal-monument.png"
                  alt="Rizal Monument at Luneta Park"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-semibold">Click to expand</span>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-primary mb-2">Rizal Monument - National Symbol</h4>
                <p className="text-sm text-foreground/70">The iconic monument at Rizal Park honors his memory and serves as a pilgrimage site for Filipinos worldwide.</p>
              </div>
            </div>
          </div>

          {/* Legacy Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">The Lasting Legacy</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20">
                <h4 className="text-xl font-bold text-primary mb-4">Influence on Philippine Independence</h4>
                <div className="space-y-3 text-foreground/80 text-sm">
                  <p>
                    Rizal&apos;s martyrdom provided the moral and intellectual foundation for Philippine independence. His writings remained the most widely read nationalist literature during and after the revolution.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>His novels educated Filipinos about colonial injustices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>His essays articulated the philosophy of reform and independence</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>His execution sparked the revolution that freed the Philippines</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-xl p-6 border border-secondary/20">
                <h4 className="text-xl font-bold text-secondary mb-4">National Hero Status</h4>
                <div className="space-y-3 text-foreground/80 text-sm">
                  <p>
                    Declared the National Hero of the Philippines, Rizal holds a unique place in the nation&apos;s heart and identity. His birthday and death anniversary are national holidays.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-bold">✓</span>
                      <span>Official declaration as National Hero in 1898</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-bold">✓</span>
                      <span>June 19 (birth) and December 30 (death) are national holidays</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-bold">✓</span>
                      <span>Studied in all Philippine schools as an essential historical figure</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Monuments and Memorials */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Monuments and Memorials</h3>
            <p className="text-foreground/80">
              Across the Philippines and around the world, monuments and institutions bear Rizal&apos;s name, honoring his memory and legacy.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {monuments.map((monument, index) => (
                <div key={index} className="bg-white rounded-xl border border-border p-6 hover:border-primary/50 hover:shadow-md transition-all">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl flex-shrink-0">{monument.icon}</div>
                    <div>
                      <h4 className="text-lg font-bold text-primary mb-1">{monument.name}</h4>
                      <p className="text-sm font-semibold text-muted-foreground mb-2">{monument.location}</p>
                      <p className="text-sm text-foreground/80">{monument.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-accent/20 rounded-xl p-6 border border-accent/40">
              <p className="text-sm text-accent-foreground">
                <span className="font-bold">Beyond Physical Monuments:</span> Hundreds of schools, streets, plazas, and public buildings across the Philippines are named after Rizal. His image appears on the Philippine peso, and his works continue to be published in numerous languages and editions worldwide.
              </p>
            </div>
          </div>

          {/* Lasting Impact */}
          <div className="bg-gradient-to-r from-background to-card rounded-xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">Lasting Impact in Modern Times</h3>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-primary">Educational Importance</h4>
                <p className="text-foreground/80">
                  Rizal is a required subject in Philippine schools through the Rizal Law of 1956, which mandates that all students study his life and works. This ensures that every generation of Filipinos understands his contributions and ideals. His novels are taught as masterpieces of world literature, studied in universities globally.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-bold text-secondary">Cultural Symbol</h4>
                <p className="text-foreground/80">
                  Rizal embodies Filipino identity, nationalism, and the power of peaceful reform through education and ideas. Artists, writers, and filmmakers continue to draw inspiration from his life. He represents the Filipino capacity for brilliance, courage, and sacrifice.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-bold text-accent-foreground">Universal Relevance</h4>
                <p className="text-foreground/80">
                  Beyond the Philippines, Rizal&apos;s legacy speaks to universal themes: the power of education to transform society, the importance of intellectual freedom, the courage required to stand against injustice, and the ultimate triumph of ideas over force. His life remains relevant to anyone fighting against oppression or advocating for social change.
                </p>
              </div>
            </div>
          </div>

          {/* Importance Today */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-6">Why Studying Rizal Matters Today</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-primary mb-2">Critical Thinking</h4>
                <p className="text-sm text-foreground/80">
                  Rizal&apos;s approach to problem-solving through research, writing, and peaceful advocacy teaches us to think critically about social issues.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-primary mb-2">Moral Courage</h4>
                <p className="text-sm text-foreground/80">
                  His willingness to sacrifice personal comfort for principles demonstrates the value of moral courage in standing up for what&apos;s right.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-primary mb-2">National Pride</h4>
                <p className="text-sm text-foreground/80">
                  Understanding Rizal helps Filipinos appreciate their heritage and recognize the potential within their nation for greatness.
                </p>
              </div>
            </div>

            <p className="mt-6 text-center italic text-foreground font-semibold">
              "The Philippines will need him from time to time to feed her spirit and light her way." — Philippine National Historical Commission
            </p>
          </div>

          {/* Conclusion */}
          <div className="bg-white rounded-xl border border-border p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">A Life That Changed History</h3>
            <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto">
              José Rizal&apos;s journey from a privileged youth in Calamba to a martyr in Luneta tells the story of personal transformation and national awakening. From biological inheritance to environmental influences, from diverse life experiences to unshakeable character, every element of his life combined to create a figure of extraordinary significance. His death on December 30, 1896, was not an ending but a beginning—the beginning of the end of colonial rule and the flowering of Filipino nationalism. 
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto mt-4">
              Today, more than a century later, Rizal remains the pride of the Filipino nation. His legacy teaches us that greatness is not measured by power or wealth, but by the magnitude of one&apos;s contribution to humanity, the depth of one&apos;s courage, and the magnitude of one&apos;s love for country and people.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
