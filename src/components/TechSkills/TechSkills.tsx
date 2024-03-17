import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import s from './techSkills.module.scss'

const TechSkills = () => {
  const test = ['A', 'B', 'C']
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.section',
        markers: true,
        scrub: 3,
        start: 'top bottom',
        end: 'bottom top',
      },
    })
    tl.fromTo(
      '.el',
      {
        x: index => (index % 2 ? gsap.utils.random(-100, -300) : gsap.utils.random(100, 300)),
      },
      {
        x: index => (index % 2 ? gsap.utils.random(100, 300) : gsap.utils.random(-100, -300)),
      }
    )
  }, [])

  return (
    <section className={'section'}>
      <div className={s.techsSection}>
        <h2>My Techs</h2>
        <div className={s.skills}>
          {test.map((el, index) => (
            <div className="el" key={index}>
              {el}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechSkills
