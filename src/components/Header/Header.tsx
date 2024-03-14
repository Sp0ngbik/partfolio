import s from './header.module.scss'
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className={s.navBar}>
        <Link href={'/'}>About</Link>
        <Link href={'/projects'}>Projects</Link>
        <Link href={'/blog'}>Blog</Link>
        <Link href={'/resume'}>Resume</Link>
      </div>
    </header>
  )
}

export default Header
