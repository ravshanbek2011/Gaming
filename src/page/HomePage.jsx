import React from 'react'
import HomeHero from '../components/HomeHero'
import Currently from '../components/Currently'
import Spiderman from '../components/Spiderman'
import Mobile from '../components/Mobile'
import Project from '../components/Project'

function HomePage() {
  return (
    <main>
      <HomeHero />
      <Currently />
      <Spiderman />
      <Mobile />
      <Project />
    </main>
  )
}

export default HomePage
