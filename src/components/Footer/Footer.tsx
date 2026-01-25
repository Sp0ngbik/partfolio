import s from './Footer.module.scss'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className={s.footerWrapper}>
      <div>
        Vladyslav Ostapuk /
        <span>
          <br /> &#9400; 2026 Vladyslav Ostapuk
        </span>
      </div>
      <div className={s.navLinks}>
        <Link href={'/'}>About</Link>
        <Link href={'/projects'}>Projects</Link>
        <Link href={'/resume'}>Resume</Link>
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
