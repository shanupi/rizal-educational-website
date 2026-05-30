import React, { useState } from 'react'
import Image from 'next/image'

export default function PitfallsAndHeroism() {
  const [expandedImage, setExpandedImage] = useState<string | null>(null)
  return (
    <section className="py-20 bg-gradient-to-r from-background to-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest">The Final Act</span>
            <h2 className="text-4xl font-bold text-foreground">Arrest, Trial, and Heroism</h2>
            <p className="text-lg text-muted-foreground">When Sacrifice Becomes Immortality</p>
          </div>

          {/* Challenges and Obstacles */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Challenges and Obstacles</h3>
            <p className="text-foreground/80 leading-relaxed">
              Despite his brilliance and dedication, Rizal faced immense challenges in his quest for reform. The system itself was designed to prevent the very changes he advocated for.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-red-50 rounded-xl p-6 border border-red-200 hover:border-red-300 transition-colors">
                <div className="text-3xl mb-3">🔐</div>
                <h4 className="font-bold text-red-900 mb-2">Censorship</h4>
                <p className="text-sm text-red-800">
                  Spanish authorities banned his books and arrested anyone found with his writings. Publication required publication outside the Philippines and careful distribution.
                </p>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border border-red-200 hover:border-red-300 transition-colors">
                <div className="text-3xl mb-3">👮</div>
                <h4 className="font-bold text-red-900 mb-2">Government Persecution</h4>
                <p className="text-sm text-red-800">
                  The Spanish government viewed Rizal as a threat. Officials monitored his movements, intercepted his correspondence, and pressured his family to control him.
                </p>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border border-red-200 hover:border-red-300 transition-colors">
                <div className="text-3xl mb-3">⛓️</div>
                <h4 className="font-bold text-red-900 mb-2">Exile and Imprisonment</h4>
                <p className="text-sm text-red-800">
                  Four years of exile in Dapitan cut him off from the broader nationalist movement. His return to Manila in 1896 led to immediate arrest.
                </p>
              </div>
            </div>
          </div>

          {/* Arrest and Trial */}
          <div className="bg-white rounded-xl border border-border overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
              {/* Image */}
              <div className="flex flex-col">
                <div className="relative h-72 rounded-lg overflow-hidden mb-3 cursor-pointer group shadow-md" onClick={() => setExpandedImage('arrest')}>
                  <Image
                    src="/rizal-arrest.png"
                    alt="Rizal's arrest July 1896"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-xs font-semibold">Click to expand</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground italic">July 3, 1896 - Arrest at Manila</p>
              </div>

              <div className="md:col-span-2 space-y-4">
                <h3 className="text-2xl font-bold text-secondary">The Arrest</h3>
                <div className="space-y-4 text-foreground/80">
                  <p>
                    When Rizal returned to the Philippines in June 1896, he was arrested immediately. The Spanish authorities accused him of:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>Founding the Liga Filipina, a nationalist organization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>Writing seditious materials (his novels)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>Inciting rebellion against Spanish rule</span>
                    </li>
                  </ul>
                  <p className="pt-2">
                    These charges were politically motivated. The Spanish needed a scapegoat as Filipino discontent grew, and Rizal, as the most famous Filipino intellectual, was the perfect target.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-lg p-6 border border-secondary/20">
                <h4 className="font-bold text-secondary mb-4">Key Facts of the Arrest</h4>
                <div className="space-y-3 text-sm text-foreground/80">
                  <div>
                    <span className="font-semibold">Date:</span> July 3, 1896
                  </div>
                  <div>
                    <span className="font-semibold">Location:</span> Manila, arrested by Spanish colonial authorities
                  </div>
                  <div>
                    <span className="font-semibold">Charge:</span> Rebellion, sedition, and conspiracy
                  </div>
                  <div>
                    <span className="font-semibold">Evidence:</span> His published works and his founding of Liga Filipina
                  </div>
                  <div>
                    <span className="font-semibold">Outcome:</span> Death sentence within months
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Court Proceedings */}
          <div className="bg-white rounded-xl border border-border p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">The Trial: Justice or Injustice?</h3>
            <div className="space-y-4 text-foreground/80">
              <p>
                The trial of José Rizal was a farce by modern standards. The military court, presided over by Spanish officials, was designed to convict, not to seek truth. Rizal was not allowed adequate legal representation, and evidence was manufactured or misinterpreted.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                  <p className="font-bold text-red-900 mb-2">Against Rizal</p>
                  <ul className="space-y-1 text-xs text-red-800">
                    <li>✗ Testimony from questionable witnesses</li>
                    <li>✗ His novels presented as "seditious"</li>
                    <li>✗ Existence of Liga Filipina used as "proof" of rebellion</li>
                    <li>✗ Pre-determined verdict regardless of evidence</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <p className="font-bold text-green-900 mb-2">Rizal&apos;s Defense</p>
                  <ul className="space-y-1 text-xs text-green-800">
                    <li>✓ Insisted on peaceful reform, not rebellion</li>
                    <li>✓ His novels were literature, not incitement</li>
                    <li>✓ Liga Filipina was educational, not revolutionary</li>
                    <li>✓ Maintained dignity and consistency in testimony</li>
                  </ul>
                </div>
              </div>

              <p>
                Throughout the trial, Rizal displayed extraordinary composure and moral clarity. Even facing death, he refused to denounce his writings or renounce his principles. He offered to recant his nationalist activities in exchange for his life, but only if the Spanish would grant Filipino rights—a condition obviously unacceptable to the colonial authorities.
              </p>
            </div>
          </div>

          {/* Execution */}
          <div className="bg-gradient-to-r from-red-50 to-red-100/50 rounded-xl p-8 border border-red-200">
            <h3 className="text-2xl font-bold text-red-900 mb-6">December 30, 1896: The Execution</h3>
            
            <div className="space-y-6">
              <div className="space-y-4 text-red-900/80">
                <p>
                  At dawn on December 30, 1896, Rizal was executed by firing squad in Luneta (now Rizal Park) in Manila. Thousands of Filipinos witnessed the execution despite Spanish attempts to suppress crowds. In his final moments, Rizal displayed the character that had defined his life.
                </p>

                <div className="bg-white rounded-lg p-6 border border-red-300 my-4">
                  <h4 className="font-bold text-red-900 mb-3">Final Acts of Heroism</h4>
                  <ul className="space-y-2 text-sm text-red-800">
                    <li className="flex items-start gap-3">
                      <span className="font-bold">•</span>
                      <span>He composed a farewell poem called "Mi Ultimo Adios" (My Last Farewell) during his imprisonment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold">•</span>
                      <span>He walked calmly to the execution ground and faced the firing squad with dignity</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold">•</span>
                      <span>He forgave his executioners and the Spanish authorities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold">•</span>
                      <span>His last word was "Consummatum est" (It is finished), echoing Christ&apos;s crucifixion</span>
                    </li>
                  </ul>
                </div>

                <p className="italic border-l-4 border-red-900 pl-4">
                  "To die is to cease suffering. To live is to perform duty." — José Rizal
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-red-300">
                <p className="text-xs font-semibold text-red-900 mb-2">His Farewell Poem Begins With:</p>
                <p className="italic text-sm text-red-800">
                  "Farewell, beloved country... If I die tomorrow, gladly will I lay down my life for you; my life upon your altar is a sacrifice."
                </p>
              </div>
            </div>
          </div>

          {/* Impact */}
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-primary mb-4">Impact on the Revolution</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Far from suppressing the nationalist movement, Rizal&apos;s execution became the spark that ignited the Philippine Revolution. Just three days after his death, on January 3, 1897, the armed rebellion led by Andrés Bonifacio erupted across Manila and spread throughout the archipelago. Rizal became the spiritual leader of the revolution, his writings and martyrdom inspiring revolutionaries to fight for independence.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              The Spanish government had hoped to eliminate the nationalist threat by executing its most prominent leader. Instead, they created a martyr whose death gave the movement an unprecedented moral authority and emotional power. Rizal&apos;s sacrifice transformed the struggle from intellectual debate to armed revolution that would ultimately succeed in 1946 with Philippine independence.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
