import React, { useState } from 'react'
import Image from 'next/image'

export default function BiologicalFactors() {
  const [imageExpanded, setImageExpanded] = useState(false)

  return (
    <section className="py-20 bg-gradient-to-r from-background to-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">The Foundation</span>
            <h2 className="text-4xl font-bold text-foreground">Early Life & Family Background</h2>
            <p className="text-lg text-muted-foreground">Born to Excellence: The Rizal Family Legacy</p>
          </div>

          {/* Birth and Family - Now 3 columns with image */}
          <div className="bg-white rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
              {/* Featured Image */}
              <div className="md:col-span-1 flex flex-col">
                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden mb-4 cursor-pointer group" onClick={() => setImageExpanded(!imageExpanded)}>
                  <Image
                    src="/rizal-family-home.png"
                    alt="Rizal family home in Calamba"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-semibold">Click to expand</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground italic">Rizal Family Home, Calamba Laguna</p>
              </div>

              {/* Content - 2 columns */}
              <div className="md:col-span-2 space-y-4">
                <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">Birth and Heritage</h3>
                <p className="text-foreground/80 leading-relaxed">
                  José Rizal was born on <span className="font-semibold">June 19, 1861</span>, in Calamba, Laguna, during the height of Spanish colonial rule in the Philippines. His birthplace was a prosperous town known for agriculture and commerce, providing him with early exposure to diverse social classes and economic realities.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  The Rizal family belonged to the <span className="font-semibold">Filipino mestizo class</span>—descended from Chinese and Filipino lineage—which granted them certain privileges but also subjected them to colonial discrimination. His father, <span className="font-semibold">Francisco Rizal</span>, was a successful farmer and land administrator, while his mother, <span className="font-semibold">Teodora Alonso</span>, came from an educated and respected family.
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-6 border border-primary/20">
                <h4 className="font-bold text-primary mb-4">Family Composition</h4>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><span className="font-semibold">Father:</span> Francisco Rizal Mercado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><span className="font-semibold">Mother:</span> Teodora Alonso y Quintos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><span className="font-semibold">Siblings:</span> 10 brothers and sisters</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><span className="font-semibold">Position:</span> 7th child and second son</span>
                  </li>
                </ul>
              </div>
                </div>
            </div>
          </div>

          {/* Inherited Traits */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Inherited Traits & Talents</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Intelligence */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl p-6 border border-blue-200">
                <div className="text-4xl mb-4">🧠</div>
                <h4 className="text-lg font-bold text-blue-900 mb-2">Exceptional Intelligence</h4>
                <p className="text-sm text-blue-800">
                  Inherited from both parents, José showed prodigious intellectual abilities from childhood. His mother&apos;s mathematical prowess and his father&apos;s analytical mind combined to create a brilliant mind.
                </p>
              </div>

              {/* Discipline */}
              <div className="bg-gradient-to-br from-red-50 to-red-100/50 rounded-xl p-6 border border-red-200">
                <div className="text-4xl mb-4">⚔️</div>
                <h4 className="text-lg font-bold text-red-900 mb-2">Discipline & Work Ethic</h4>
                <p className="text-sm text-red-800">
                  His parents emphasized hard work and dedication. This inherited discipline shaped his systematic approach to learning and his commitment to excellence in every endeavor.
                </p>
              </div>

              {/* Artistic Talents */}
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100/50 rounded-xl p-6 border border-yellow-200">
                <div className="text-4xl mb-4">🎨</div>
                <h4 className="text-lg font-bold text-yellow-900 mb-2">Artistic & Literary Gifts</h4>
                <p className="text-sm text-yellow-800">
                  Rizal showed early talent in drawing, painting, and writing. These artistic sensibilities would become powerful tools for social commentary and national awakening.
                </p>
              </div>
            </div>
          </div>

          {/* Physical Characteristics */}
          <div className="bg-white rounded-xl border border-border p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Physical Characteristics & Their Impact</h3>
            <div className="space-y-4 text-foreground/80">
              <p>
                <span className="font-semibold">Height and Appearance:</span> Rizal was of average to slight build, standing about 5 feet 4 inches tall—modest by European standards but not uncommon for Filipinos of his era. His physical appearance was distinctly Filipino, with features that made him a symbol of indigenous heritage while his mestizo lineage granted him certain social privileges.
              </p>
              <p>
                <span className="font-semibold">Health and Vitality:</span> Despite being somewhat delicate as a child, Rizal developed into a physically active man. He was skilled in sports, particularly fencing and martial arts, and maintained his health through disciplined living—attributes that would serve him well during his travels and exile.
              </p>
              <p>
                <span className="font-semibold">Impact on Character:</span> His modest physical stature contrasted sharply with his towering intellectual presence. This dichotomy exemplified his philosophy: true greatness lies not in physical power but in the power of ideas, knowledge, and moral courage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
