'use client'
import React from 'react'
import About from '@/components/About/About'
import Projects from '@/components/Projects/Projects'
import TechSkills from '@/components/TechSkills/TechSkills'
import Contacts from '@/components/Contacts/Contacts'

export default function Home() {
  return (
    <>
      <About />
      <TechSkills />
      <Projects />
      <Contacts />
    </>
  )
}
