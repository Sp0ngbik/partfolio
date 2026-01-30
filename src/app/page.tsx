'use client'
import React from 'react'
import About from '@/components/About/About'
import Projects from '@/components/Projects/Projects'
import TechSkills from '@/components/TechSkills/TechSkills'
import Contacts from '@/components/Contacts/Contacts'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Home() {
  return (
    <>
      <ToastContainer limit={1} />
      <About />
      <TechSkills />
      <Projects />
      <Contacts />
    </>
  )
}
