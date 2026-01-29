import s from './Header.module.scss'
import { Anchors } from '@/common/const/const'
import React from 'react'

const Header = () => {
  return (
    <header>
      <div className={s.navBar}>
        <a href={Anchors.about}>About</a>
        <a href={Anchors.project}>Projects</a>
        <a href={Anchors.contact}>Contacts</a>
      </div>
    </header>
  )
}

export default Header
