'use client'

import React from 'react'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Introduction from '@/components/introduction'
import QuoteCarousel from '@/components/quote-carousel'
import ImageGallery from '@/components/image-gallery'
import Timeline from '@/components/timeline'
import BiologicalFactors from '@/components/biological-factors'
import EnvironmentalFactors from '@/components/environmental-factors'
import LifeExperiences from '@/components/life-experiences'
import CharacterAnalysis from '@/components/character-analysis'
import PitfallsAndHeroism from '@/components/pitfalls-and-heroism'
import DeathAndLegacy from '@/components/death-and-legacy'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section id="home">
          <Hero />
        </section>

        {/* Quote Carousel */}
        <QuoteCarousel />

        {/* Introduction */}
        <section id="introduction" className="scroll-mt-20">
          <Introduction />
        </section>

        {/* Biological Factors */}
        <section id="early-life" className="scroll-mt-20">
          <BiologicalFactors />
        </section>

        {/* Environmental Factors */}
        <section id="education" className="scroll-mt-20">
          <EnvironmentalFactors />
        </section>

        {/* Life Experiences */}
        <section id="travels-and-works" className="scroll-mt-20">
          <LifeExperiences />
        </section>

        {/* Character Analysis */}
        <section id="character" className="scroll-mt-20">
          <CharacterAnalysis />
        </section>

        {/* Pitfalls and Heroism */}
        <section id="arrest-and-trial" className="scroll-mt-20">
          <PitfallsAndHeroism />
        </section>

        {/* Death and Legacy */}
        <section id="legacy" className="scroll-mt-20">
          <DeathAndLegacy />
        </section>

        {/* Timeline */}
        <section id="timeline" className="scroll-mt-20">
          <Timeline />
        </section>

        {/* Image Gallery */}
        <ImageGallery />
      </main>

      <Footer />
    </div>
  )
}
