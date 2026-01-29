import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import myPhoto from '@/../public/myPhoto.jpg'
import { gsap } from 'gsap/all'
import style from './ProfileCard.module.scss'
import { CardContainer, CardItem } from './CardConstructor/Card'

export function ProfileCard() {
  const avatarRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      avatarRef.current,
      { opacity: 0, scale: 1.2 },
      { opacity: 1, scale: 1, duration: 1.3, ease: 'power3.out' }
    )
  }, [])

  return (
    <CardContainer className={style.cardBody}>
      <CardItem translateZ={50}>
        <Image ref={avatarRef} src={myPhoto} className={style.profileImage} alt="Avatar" priority />
      </CardItem>
    </CardContainer>
  )
}
