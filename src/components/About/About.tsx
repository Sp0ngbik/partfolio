'use client'
import React, { RefObject, useEffect, useRef } from 'react'
import s from './About.module.scss'
import { gsap, TextPlugin } from 'gsap/all'
import { ProfileCard } from '@/components/About/ui/ProfileCard/ProfileCard'
import { LampContainer } from '@/components/About/ui/Lamp/LampContainer'

const About = () => {
  const textProduce: RefObject<HTMLDivElement> = useRef(null)
  const containerRef: RefObject<HTMLDivElement> = useRef(null)
  useEffect(() => {
    gsap.registerPlugin(TextPlugin)
    gsap.to(textProduce.current, {
      duration: 3,
      text: {
        value: 'Uladzislau Ostapuk Frontend Developer',
      },
      ease: 'none',
    })
  })
  return (
    <div>
      <div className={s.infoBlock} ref={containerRef}>
        <div ref={textProduce}></div>
        <div>
          <ProfileCard />
        </div>
      </div>
      <div className={s.about} id='about'>
        <LampContainer>
          <p>About</p>
          <div>
            I am Frontend Developer with <span>over 4 years </span> of practical experience, I
            specialize in crafting web applications using <span>React and Next.js.</span> My passion
            for IT technologies and Frontend development spans over four years, during which I`ve
            consistently aimed for excellence in code quality and UI enhancement.
          </div>
        </LampContainer>
      </div>
    </div>
  )
};

export default About;