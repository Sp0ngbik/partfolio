import s from './Footer.module.scss'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Anchors } from '@/common/const/const'



const Footer = () => {
  return (
    <footer className={s.footerWrapper}>
      <div>
        <span>
          <br /> &#9400; 2026 Uladzislau Ostapuk
        </span>
      </div>
      <div className={s.navLinks}>
        <a href={Anchors.about}>About</a>
        <a href={Anchors.project}>Projects</a>
        <a href={Anchors.contact}>Contacts</a>
      </div>
      <div className={s.socialLinks}>
        <Link href={'https://github.com/Sp0ngbik'}>
          <Image src={'/icons/github.svg'} alt={'git not found'} width={25} height={25} />
        </Link>
        <Link href={'https://www.linkedin.com/in/vlad-ostapuk/'}>
          <Image src={'/icons/linkedin.svg'} alt={'git not found'} width={25} height={25} />
        </Link>
        <Link href={'https://t.me/sp0ngbik'}>
          <Image src={'/icons/telegram.svg'} alt={'git not found'} width={25} height={25} />
        </Link>
        <div></div>
      </div>
    </footer>
  )
}

export default Footer
