import React from 'react'

export default function CharacterAnalysis() {
  const virtues = [
    { virtue: 'Patriotism', description: 'Unwavering love for the Philippines and its people, driving every action and sacrifice' },
    { virtue: 'Courage', description: 'Moral bravery to speak truth and challenge powerful systems despite personal danger' },
    { virtue: 'Intellect', description: 'Brilliant mind capable of mastering multiple disciplines and articulating complex ideas' },
    { virtue: 'Compassion', description: 'Deep empathy for the suffering of his people and commitment to their welfare' },
    { virtue: 'Leadership', description: 'Ability to inspire, organize, and unite people around common ideals and causes' },
    { virtue: 'Integrity', description: 'Consistency between words and actions, living according to principles even at great cost' }
  ]

  const weaknesses = [
    { weakness: 'Romantic Idealism', description: 'Perhaps too optimistic about the power of ideas and peaceful reform' },
    { weakness: 'Personal Struggles', description: 'Battled with loneliness, unrequited love, and periods of doubt and melancholy' },
    { weakness: 'Impatience', description: 'Grew frustrated with the slow pace of reform and sometimes criticized allies' },
    { weakness: 'Divided Priorities', description: 'Struggled between personal ambitions and nationalist obligations' }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">The Man Behind The Legend</span>
            <h2 className="text-4xl font-bold text-foreground">Character Analysis</h2>
            <p className="text-lg text-muted-foreground">Virtues, Struggles, and the Evolution of a Hero</p>
          </div>

          {/* Virtues and Strengths */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Virtues and Strengths</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {virtues.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-colors">
                  <h4 className="text-lg font-bold text-primary mb-2">{item.virtue}</h4>
                  <p className="text-foreground/80 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Weaknesses and Criticisms */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Weaknesses and Criticisms</h3>
            <p className="text-foreground/80 leading-relaxed">
              Despite his extraordinary abilities, Rizal was not without flaws. Historians and critics have noted several limitations in his approach:
            </p>
            <div className="space-y-4">
              {weaknesses.map((item, index) => (
                <div key={index} className="bg-muted/50 rounded-xl p-6 border border-border hover:border-secondary/50 transition-colors">
                  <h4 className="text-lg font-bold text-secondary mb-2">{item.weakness}</h4>
                  <p className="text-foreground/80">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <p className="text-sm text-yellow-900">
                <span className="font-bold">Historical Note:</span> Some scholars argue that Rizal&apos;s preference for peaceful reform delayed revolutionary action. However, his writings ultimately provided the intellectual foundation for the revolution. The 1896 Philippine Revolution was led by the Filipino people inspired by his ideas.
              </p>
            </div>
          </div>

          {/* Evolution of Character */}
          <div className="bg-gradient-to-r from-background to-card rounded-xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-8">The Evolution: From Youth to Hero</h3>
            
            <div className="space-y-6">
              {/* Stage 1 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-primary-foreground">
                    <span className="text-lg font-bold">1</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2">The Privileged Student (1861-1882)</h4>
                  <p className="text-foreground/80">
                    Young José enjoyed educational privileges uncommon for Filipinos. Though talented and ambitious, he was initially focused on personal advancement and medical career. His patriotism existed but was not yet his consuming passion.
                  </p>
                </div>
              </div>

              {/* Stage 2 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-secondary-foreground">
                    <span className="text-lg font-bold">2</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2">The Awakening Reformer (1882-1887)</h4>
                  <p className="text-foreground/80">
                    Exposure to European liberalism, witnessing discrimination against Filipinos abroad, and the execution of the priests Gomburza transformed his consciousness. He joined the Propaganda Movement and published Noli Me Tangere. His personal ambitions became secondary to nationalist ideals.
                  </p>
                </div>
              </div>

              {/* Stage 3 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-accent text-accent-foreground">
                    <span className="text-lg font-bold">3</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2">The Committed Nationalist (1887-1892)</h4>
                  <p className="text-foreground/80">
                    Through El Filibusterismo and continued propaganda work, Rizal became the intellectual leader of the nationalist movement. Yet he maintained faith in reform and education, willing to sacrifice his own freedom for his ideals.
                  </p>
                </div>
              </div>

              {/* Stage 4 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-primary-foreground">
                    <span className="text-lg font-bold">4</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2">The Martyr (1892-1896)</h4>
                  <p className="text-foreground/80">
                    Even in exile and facing death, Rizal maintained his principles and dignity. His final moments—composing poetry and facing execution with courage—transformed him from reformer to martyr and symbol of Filipino liberation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Legacy of Character */}
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-primary mb-4">The Character Legacy</h3>
            <p className="text-foreground/80 leading-relaxed mb-6">
              Rizal&apos;s character transcends the century that has passed since his death. What made him a hero was not superhuman perfection, but rather his constant striving to be better, to serve others, and to stand for principles larger than himself. He showed that one person, armed with intellect, courage, and dedication, can change the course of history.
            </p>
            <div className="text-center italic text-primary font-semibold text-lg">
              "The youth is the hope of our future." — José Rizal
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
