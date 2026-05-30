import React, { useState } from 'react'
import Image from 'next/image'

export default function LifeExperiences() {
  const [expandedImage, setExpandedImage] = useState<string | null>(null)
  const travelDestinations = [
    { country: 'Spain', year: '1882-1885', purpose: 'Medical studies and reform advocacy' },
    { country: 'France', year: '1883', purpose: 'Continued education and activism' },
    { country: 'Germany', year: '1884', purpose: 'Medical research and publishing' },
    { country: 'Belgium', year: '1885', purpose: 'Organizational work for reformers' },
    { country: 'England', year: '1888', purpose: 'Propaganda and publication efforts' },
    { country: 'Hong Kong', year: '1888-1889', purpose: 'Translation work and activism' },
    { country: 'Japan', year: '1888', purpose: 'Literary work and observations' },
    { country: 'USA', year: '1888-1889', purpose: 'Travel and fund-raising activities' },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-background to-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">Global Impact</span>
            <h2 className="text-4xl font-bold text-foreground">Travels Abroad & Life Experiences</h2>
            <p className="text-lg text-muted-foreground">Broadening Horizons, Shaping Revolution</p>
          </div>

          {/* Travels */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">Journey Across Continents</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {travelDestinations.map((dest, index) => (
                <div key={index} className="bg-white rounded-lg p-6 border border-border hover:border-accent transition-colors group">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">{dest.country}</h4>
                    <span className="text-sm font-semibold text-muted-foreground">{dest.year}</span>
                  </div>
                  <p className="text-sm text-foreground/70">{dest.purpose}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Literary Works */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Literary Contributions: Words as Weapons</h3>
            
            <div className="bg-gradient-to-r from-primary/10 to-primary/20 rounded-xl p-8 border border-primary/30">
              <h4 className="text-xl font-bold text-primary mb-6">Noli Me Tangere (Touch Me Not) - 1887</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Book Image */}
                <div className="flex flex-col">
                  <div className="relative h-72 rounded-lg overflow-hidden mb-3 cursor-pointer group shadow-md" onClick={() => setExpandedImage('noli')}>
                    <Image
                      src="/noli-me-tangere.png"
                      alt="Noli Me Tangere book cover"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-xs font-semibold">Click to expand</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground italic">First Edition 1887</p>
                </div>

                <div className="md:col-span-2">
                  <p className="text-foreground/80 mb-4">
                    Rizal&apos;s masterpiece novel exposed the abuses of Spanish clergy and colonial authorities. Published in Berlin, it became a sensation among Filipino intellectuals and sparked widespread discussion about colonial injustices.
                  </p>
                  <ul className="space-y-2 text-sm text-foreground/70">
                    <li><span className="font-semibold">Format:</span> Novel in Spanish</li>
                    <li><span className="font-semibold">Published:</span> Berlin</li>
                    <li><span className="font-semibold">Impact:</span> Banned by Spanish authorities</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm font-semibold text-primary mb-3">Key Themes:</p>
                  <ul className="space-y-1 text-xs text-foreground/70">
                    <li>✓ Clerical corruption and abuse</li>
                    <li>✓ Exploitation of native Filipinos</li>
                    <li>✓ Role of education in liberation</li>
                    <li>✓ Importance of Filipino identity</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-secondary/10 to-secondary/20 rounded-xl p-8 border border-secondary/30">
              <h4 className="text-xl font-bold text-secondary mb-6">El Filibusterismo (The Subversive) - 1891</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Book Image */}
                <div className="flex flex-col">
                  <div className="relative h-72 rounded-lg overflow-hidden mb-3 cursor-pointer group shadow-md" onClick={() => setExpandedImage('filibusterismo')}>
                    <Image
                      src="/el-filibusterismo.png"
                      alt="El Filibusterismo book cover"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-xs font-semibold">Click to expand</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground italic">First Edition 1891</p>
                </div>

                <div className="md:col-span-2">
                  <p className="text-foreground/80 mb-4">
                    The sequel to Noli Me Tangere, this novel deepened the critique of colonial society and hinted at more radical solutions. More daring and revolutionary in tone, it reflected Rizal&apos;s growing frustration with peaceful reform efforts.
                  </p>
                  <ul className="space-y-2 text-sm text-foreground/70">
                    <li><span className="font-semibold">Format:</span> Novel in Spanish</li>
                    <li><span className="font-semibold">Published:</span> Ghent, Belgium</li>
                    <li><span className="font-semibold">Impact:</span> Severely condemned by Church</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm font-semibold text-secondary mb-3">Key Themes:</p>
                  <ul className="space-y-1 text-xs text-foreground/70">
                    <li>✓ Limitations of peaceful reform</li>
                    <li>✓ Price of Filipino resistance</li>
                    <li>✓ Moral corruption of the system</li>
                    <li>✓ Need for revolutionary change</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Reform Movement */}
          <div className="bg-white rounded-xl border border-border p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">The Propaganda Movement</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
              {/* Image */}
              <div className="flex flex-col">
                <div className="relative h-72 rounded-lg overflow-hidden mb-3 cursor-pointer group shadow-md" onClick={() => setExpandedImage('propaganda')}>
                  <Image
                    src="/propaganda-movement.png"
                    alt="Propaganda Movement in Madrid"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-xs font-semibold">Click to expand</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground italic">Rizal with fellow reformists in Madrid</p>
              </div>

              {/* Text Content */}
              <div className="md:col-span-2 space-y-4 text-foreground/80">
              <p>
                While abroad, Rizal joined and became a leading figure in the <span className="font-semibold">Propaganda Movement</span>, a movement of Filipino intellectuals advocating for reforms through publications and peaceful means. Through the newspaper <span className="font-bold">La Solidaridad</span>, Rizal and his associates published essays, poetry, and social commentary in Spanish to reach European audiences and Spanish liberals who might sympathize with Filipino grievances.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                  <p className="text-sm font-bold text-primary mb-2">La Solidaridad</p>
                  <p className="text-xs">Weekly newspaper founded to advocate for Filipino rights and expose colonial abuses through journalism</p>
                </div>
                <div className="bg-secondary/5 rounded-lg p-4 border border-secondary/20">
                  <p className="text-sm font-bold text-secondary mb-2">Essays & Articles</p>
                  <p className="text-xs">Rizal contributed numerous essays on education, language, culture, and social reform</p>
                </div>
                <div className="bg-accent/20 rounded-lg p-4 border border-accent/40">
                  <p className="text-sm font-bold text-accent-foreground mb-2">International Solidarity</p>
                  <p className="text-xs">Building connections with liberal Europeans to gain international support for Filipino cause</p>
                </div>
              </div>
              </div>
            </div>
          </div>

          {/* Dapitan */}
          <div className="bg-gradient-to-r from-card via-card to-muted rounded-xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">Life in Dapitan: Exile and Service</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
              {/* Image */}
              <div className="flex flex-col">
                <div className="relative h-72 rounded-lg overflow-hidden mb-3 cursor-pointer group shadow-md" onClick={() => setExpandedImage('dapitan')}>
                  <Image
                    src="/rizal-dapitan.png"
                    alt="Rizal in Dapitan teaching students"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-xs font-semibold">Click to expand</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground italic">Rizal in exile, Dapitan 1892-1896</p>
              </div>

              {/* Text Content */}
              <div className="md:col-span-2 space-y-4 text-foreground/80">
              <p>
                In 1892, following his return to the Philippines and arrest by Spanish authorities, Rizal was exiled to the remote town of Dapitan in Mindanao. Rather than despair, Rizal used this period productively:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white rounded-lg p-4">
                  <p className="font-bold text-primary mb-2">Medical Practice</p>
                  <p className="text-sm text-foreground/70">Treated local patients and conducted medical experiments, gaining the respect of the community</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="font-bold text-primary mb-2">Community Projects</p>
                  <p className="text-sm text-foreground/70">Designed and supervised public works including a water system and roads for the town</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="font-bold text-primary mb-2">Teaching</p>
                  <p className="text-sm text-foreground/70">Educated local youth in science, geography, and languages, spreading enlightenment</p>
                </div>
              </div>
              <p className="mt-4 italic border-l-4 border-primary pl-4">
                His four years in Dapitan demonstrated his commitment: even in exile, he served his people and maintained his principles.
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
