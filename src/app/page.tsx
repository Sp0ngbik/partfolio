'use client'
import Image from 'next/image'
import myPhoto from '@/../public/myPhoto.jpg'
import s from './page.module.scss'
import {RefObject, useEffect, useRef} from 'react'
import { gsap, TextPlugin } from 'gsap/all'
import TechSkills from '@/components/TechSkills/TechSkills'

export default function Home() {
  gsap.registerPlugin(TextPlugin)
  const textProduce: RefObject<HTMLDivElement> = useRef(null)
  const avatarRef: RefObject<HTMLImageElement> = useRef(null)

  useEffect(() => {
    gsap.to(textProduce.current, {
      duration: 3,
      text: {
        value: 'Uladzislau Astapuk Frontend Developer',
      },
      ease: 'none',
    })
    gsap.fromTo(
      avatarRef.current,
      {
        opacity: 0,
        scale: 1.4,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1.3,
        ease: 'power3.inOut',
      }
    )
  })

  return (
    <main>
      <div className={s.infoBlock}>
        <div ref={textProduce}></div>
        <div>
          <Image
            priority={true}
            ref={avatarRef}
            src={myPhoto}
            alt={'photo not found'}
            height={350}
            width={350}
          />
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
