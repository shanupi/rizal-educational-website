import React, { useState } from 'react'
import Image from 'next/image'
import { useScrollObserver } from '@/hooks/use-scroll-observer'

export default function Introduction() {
  const { ref, isVisible } = useScrollObserver()
  const [expandedImage, setExpandedImage] = useState(false)

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-primary">Introduction to José Rizal</h2>
            <p className="text-lg text-muted-foreground">Understanding the National Hero of the Philippines</p>
          </div>

          {/* Content Cards */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${isVisible ? 'animate-stagger-children' : 'opacity-0'}`}>
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 border border-primary/20 hover:border-primary/40 transition-colors">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Scholar & Writer</h3>
              <p className="text-foreground/80">
                A brilliant intellectual who challenged colonial authority through literature and essays, most notably with his novels "Noli Me Tangere" and "El Filibusterismo."
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-xl p-8 border border-secondary/20 hover:border-secondary/40 transition-colors">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Social Reformer</h3>
              <p className="text-foreground/80">
                An advocate for social justice who exposed the injustices of Spanish colonial rule and championed Filipino rights through peaceful reform movements.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-accent/20 to-accent/30 rounded-xl p-8 border border-accent/30 hover:border-accent/60 transition-colors">
              <div className="w-12 h-12 bg-accent/30 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔥</span>
              </div>
              <h3 className="text-xl font-bold text-accent-foreground mb-3">National Hero</h3>
              <p className="text-foreground/80">
                His execution in 1896 sparked the Philippine Revolution and transformed him into the symbol of Filipino nationalism and the fight for independence.
              </p>
            </div>
          </div>

          {/* Featured Image */}
          <div className="max-w-2xl mx-auto">
            <div className="relative h-80 rounded-xl overflow-hidden shadow-lg border border-border cursor-pointer group" onClick={() => setExpandedImage(!expandedImage)}>
              <Image
                src="/rizal-europe.png"
                alt="Rizal's travels in Europe"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-lg font-semibold">Click to expand</span>
              </div>
            </div>
            <p className="text-center text-sm text-muted-foreground italic mt-3">Rizal's intellectual journey across Europe (1882-1889) shaped his revolutionary thinking</p>
          </div>

          {/* Main Text */}
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-foreground/90">
              <span className="font-bold text-primary">José Protasio Rizal Mercado y Alonso Realonda</span>, born on June 19, 1861, in the provincial town of Calamba, Laguna, would become the most influential figure in Philippine history. As the National Hero of the Philippines, Rizal&apos;s life represents the triumph of the human spirit over oppression, the power of education and ideas, and the ultimate sacrifice for one&apos;s nation.
            </p>

            <p className="text-foreground/90">
              Rizal&apos;s significance lies not merely in his death, but in his life. He was a man of remarkable versatility—a doctor, novelist, poet, painter, sculptor, historian, and journalist. He spoke more than 20 languages and could engage in intellectual debates with the greatest minds of Europe. Yet despite his personal brilliance, Rizal remained deeply connected to his roots and dedicated his talents to the service of his people.
            </p>

            <p className="text-foreground/90">
              Through a combination of biological talent, environmental influences, diverse life experiences, and unwavering character, Rizal evolved from a privileged youth into a fearless reformer. His journey from birth to martyrdom traces the path of a nation&apos;s awakening. This is the story of how one man&apos;s vision and sacrifice became the foundation of a nation&apos;s dreams.
            </p>

            <blockquote className="border-l-4 border-primary pl-6 italic text-foreground/80 text-xl">
              "He who does not know how to look back at where he came from will not be able to understand where he is going." — José Rizal
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
