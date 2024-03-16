'use client'
import React from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from 'gsap/all'
import s from './techSkills.module.scss'
const TechSkills = () => {
  const test = ['A', 'B', 'C']
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          markers: true,
          trigger: '.section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 4,
        },
        // x: 400,
      })

      tl.fromTo(
        '.el',
        {
          x: index =>
            index % 2 === 0 ? gsap.utils.random(100, 300) : gsap.utils.random(-100, -300),
        },
        {
          x: index =>
            index % 2 === 0 ? gsap.utils.random(-100, -300) : gsap.utils.random(100, 300),
          ease: 'power1.inOut',
        }
      )
    }, '.section')

    return () => ctx.revert()
  }, [])
  return (
    <div className={s.techsSection}>
      <h2>My Techs</h2>
      <section className="section">
        <div>
          {test.map((el, index) => (
            <div className="el" key={index}>
              {el}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default TechSkills
