import React, { RefObject, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import s from './TechSkills.module.scss'
import { techArr, toolsArr, uiArr } from '@/common/const/const'
import { Sparkles } from '@/components/Sparkles'

interface AnimationOptions {
  from: { [key: string]: number | string }
  to: { [key: string]: number | string }
}

const TechSkills = () => {
  const sectionRef: RefObject<HTMLDivElement> = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const triggerOptions = {
      trigger: sectionRef.current,
      start: 'center bottom',
      end: 'bottom top',
    }

    const tlTech = gsap.timeline({
      scrollTrigger: triggerOptions,
    })

    const tlUi = gsap.timeline({
      scrollTrigger: triggerOptions,
    })
    const tlTools = gsap.timeline({
      scrollTrigger: triggerOptions,
    })

    const allTechElements = document.querySelectorAll('.tech_skills')
    const allUiElements = document.querySelectorAll('.ui_skills')
    const allToolsElements = document.querySelectorAll('.tools')

    const animateElements = (
      elements: NodeListOf<Element>,
      animation: GSAPTimeline,
      options: AnimationOptions
    ) => {
      elements.forEach(el => {
        animation.fromTo(el, { ...options.from }, { ...options.to })
      })
    }

    const defaultPosition = {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.5,
      ease: 'power3.inOut',
    }

    animateElements(allTechElements, tlTech, {
      from: { opacity: 0, x: -1000, scale: 0 },
      to: defaultPosition,
    })
    animateElements(allUiElements, tlUi, {
      from: { opacity: 0, x: 1000, scale: 0 },
      to: defaultPosition,
    })
    animateElements(allToolsElements, tlTools, {
      from: { opacity: 0, scale: 0, y: -200 },
      to: defaultPosition,
    })
  }, [])

  return (
    <section className={'section'} ref={sectionRef}>
      <Sparkles />
      <div className={s.techsSection}>
        <h2>My Techs</h2>
        <div className={s.skills}>
          <div className={s.techBlock}>
            <div>
              <h4>Logic</h4>
              {techArr.map((el, index) => (
                <div key={index} className={'tech_skills'}>
                  {el}
                </div>
              ))}
            </div>
            <div>
              <h4>Tools</h4>
              {toolsArr.map((el, index) => (
                <div key={index} className={'tools'}>
                  {el}
                </div>
              ))}
            </div>
            <div>
              <h4>UI Design</h4>
              {uiArr.map((el, index) => (
                <div key={index} className={'ui_skills'}>
                  {el}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechSkills
