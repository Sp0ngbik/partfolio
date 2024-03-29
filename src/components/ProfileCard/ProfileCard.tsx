import React, { RefObject, useEffect, useRef } from 'react'
import Image from 'next/image'
import { CardBody, CardContainer, CardItem } from '@/components/ProfileCard/CardConstructor/Card'
import myPhoto from '@/../public/myPhoto.jpg'
import { gsap } from 'gsap/all'
import style from './ProfileCard.module.scss'
export function ProfileCard() {
  const avatarRef: RefObject<HTMLImageElement> = useRef(null)
  useEffect(() => {
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
    <CardContainer>
      <CardBody
          className={style.cardBody}
      >
        <CardItem>
          <Image
            ref={avatarRef}
            src={myPhoto}
            className={style.profileImage}
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  )
}
