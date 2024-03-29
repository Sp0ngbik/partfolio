'use client'
import s from './page.module.scss'
import React, { RefObject, useEffect, useRef } from 'react'
import { gsap, TextPlugin } from 'gsap/all'
import TechSkills from '@/components/TechSkills/TechSkills'
import { ProfileCard } from '@/components/ProfileCard/ProfileCard'

export default function Home() {
  const textProduce: RefObject<HTMLDivElement> = useRef(null)
  const containerRef: RefObject<HTMLDivElement> = useRef(null)
  useEffect(() => {
    gsap.registerPlugin(TextPlugin)
    gsap.to(textProduce.current, {
      duration: 3,
      text: {
        value: 'Uladzislau Astapuk Frontend Developer',
      },
      ease: 'none',
    })
  })

  return (
    <main>
      <div className={s.infoBlock} ref={containerRef}>
        <div ref={textProduce}></div>
        <div>
          <ProfileCard />
        </div>
      </div>
      <div className={s.about}>
        <h2>About</h2>
        <div>
          I am Frontend Developer with <span>over 2 years </span> of practical experience, I
          specialize in crafting web applications using <span>React and Next.js.</span> My passion
          for IT technologies and Frontend development spans over two years, during which I`ve
          consistently aimed for excellence in code quality and UI enhancement.
        </div>
      </div>
      <TechSkills />
    </main>
  )
}
