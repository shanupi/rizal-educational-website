import React, { useState } from 'react'
import Image from 'next/image'

export default function EnvironmentalFactors() {
  const [expandedImage, setExpandedImage] = useState(false)
  const educationStages = [
    {
      period: '1861-1869',
      institution: 'Home Education',
      description: 'José began his education under his mother\'s guidance, who was an educated woman rare for her time. She taught him reading, writing, and basic subjects.',
      icon: '👨‍👩‍👦'
    },
    {
      period: '1869-1872',
      institution: 'Biñan School',
      description: 'He attended a school run by Justiniano Aquino Cruz in Biñan. This marked his formal education in Spanish and other subjects required by the colonial curriculum.',
      icon: '🏫'
    },
    {
      period: '1872-1877',
      institution: 'Ateneo Municipal',
      description: 'At age 11, Rizal was enrolled in this elite Jesuit school in Manila. Here he excelled in languages, arts, and sciences, earning numerous awards and recognition.',
      icon: '🎓'
    },
    {
      period: '1877-1882',
      institution: 'University of Santo Tomas',
      description: 'He pursued surveying and medicine at this oldest university in Asia. Despite its conservative and censorious environment, he continued to develop critical thinking.',
      icon: '📚'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest">Shaping Influences</span>
            <h2 className="text-4xl font-bold text-foreground">Environmental Factors & Education</h2>
            <p className="text-lg text-muted-foreground">How Home, School, and Society Molded a Hero</p>
          </div>

          {/* Family Influence */}
          <div className="bg-gradient-to-r from-secondary/5 to-secondary/10 rounded-xl p-8 border border-secondary/20">
            <h3 className="text-2xl font-bold text-secondary mb-6">Family Influence: Foundation of Values</h3>
            <div className="space-y-4 text-foreground/80">
              <p>
                The Rizal household was one of intellectual stimulation and moral instruction. <span className="font-semibold">Teodora Alonso</span>, despite living in a society that limited women's education, was an accomplished woman who excelled in mathematics, languages, and philosophy. She instilled in her children the values of hard work, intellectual curiosity, and social responsibility.
              </p>
              <p>
                <span className="font-semibold">Francisco Rizal</span>, while primarily a farmer, was respected as a man of principle and integrity. He managed the family&apos;s lands with fairness and maintained his dignity despite colonial discrimination. He taught his children that character and knowledge were more valuable than wealth.
              </p>
              <div className="bg-white rounded-lg p-4 border border-secondary/30 mt-4">
                <p className="text-sm font-semibold text-secondary mb-2">Key Family Values Instilled:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">✓</span>
                    <span>Pursuit of knowledge and continuous learning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">✓</span>
                    <span>Moral integrity and ethical conduct</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">✓</span>
                    <span>Love for the motherland and its people</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">✓</span>
                    <span>Responsibility to use talents for social good</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Educational Journey with Image */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Featured Image */}
              <div className="md:col-span-1 flex flex-col">
                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden mb-4 cursor-pointer group shadow-md" onClick={() => setExpandedImage(!expandedImage)}>
                  <Image
                    src="/rizal-ateneo.png"
                    alt="Ateneo de Manila during Rizal's time"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-semibold">Click to expand</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground italic">Ateneo Municipal de Manila - Jesuit School</p>
              </div>

              {/* Educational Content */}
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-foreground mb-4">Educational Journey</h3>
            <div className="space-y-4">
              {educationStages.map((stage, index) => (
                <div key={index} className="bg-white border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{stage.icon}</div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                        <h4 className="text-lg font-bold text-primary">{stage.institution}</h4>
                        <span className="text-sm font-semibold text-muted-foreground">{stage.period}</span>
                      </div>
                      <p className="text-foreground/80">{stage.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
              </div>
            </div>
          </div>

          {/* Social and Political Context */}
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-primary mb-6">Social and Political Context: Colonial Philippines</h3>
            <div className="space-y-4 text-foreground/80">
              <p>
                Rizal came of age during the waning years of Spanish colonial rule in the Philippines. The society he grew up in was marked by stark inequalities and systematic oppression of Filipino people.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-primary mb-2">Colonial Injustices</h4>
                  <ul className="space-y-2 text-sm text-foreground/70">
                    <li>• Economic exploitation of native Filipinos</li>
                    <li>• Limited educational opportunities for non-Spanish natives</li>
                    <li>• Monopolistic control by Spanish clergy and officials</li>
                    <li>• Discrimination against mestizos despite mixed heritage</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-primary mb-2">Catalysts for Awareness</h4>
                  <ul className="space-y-2 text-sm text-foreground/70">
                    <li>• 1872: Execution of Filipino priests (Gomburza)</li>
                    <li>• Growing nationalist sentiment among educated Filipinos</li>
                    <li>• Exposure to European liberal ideals during travels</li>
                    <li>• Personal experiences with discrimination</li>
                  </ul>
                </div>
              </div>

              <p className="mt-4 italic border-l-4 border-primary pl-4">
                These environmental factors—family values, quality education, and witnessing colonial injustices—created the perfect conditions for Rizal to become not just a scholar, but a crusader for change.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
