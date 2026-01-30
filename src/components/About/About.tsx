'use client'
import React, { RefObject, useEffect, useRef } from 'react'
import s from './About.module.scss'
import { gsap, TextPlugin } from 'gsap/all'
import { ProfileCard } from '@/components/About/ui/ProfileCard/ProfileCard'
import { LampContainer } from '@/components/About/ui/Lamp/LampContainer'

const About = () => {
  const roleRef: RefObject<HTMLSpanElement> = useRef(null)
  const containerRef: RefObject<HTMLDivElement> = useRef(null)

  const roles = ['Frontend Developer', 'React Developer', 'Frontend Engineer']

  useEffect(() => {
    gsap.registerPlugin(TextPlugin)

    const tl = gsap.timeline({ repeat: -1 })

    roles.forEach(role => {
      tl.to(roleRef.current, {
        duration: 1.5,
        text: role,
        delay: 0.5,
        ease: 'none',
      })
        .to({}, { duration: 1.5 })
        .to(roleRef.current, {
          duration: 1,
          text: '',
          ease: 'none',
        })
    })

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div>
      <div className={s.infoBlock} ref={containerRef}>
        <div className={s.title}>
          <span>Uladzislau Ostapuk </span>
          <span ref={roleRef} className={s.typewriter}></span>
          <span className={s.cursor}>_</span>
        </div>
        <div>
          <ProfileCard />
        </div>
      </div>
      <div className={s.about} id="about">
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
}

export default About
