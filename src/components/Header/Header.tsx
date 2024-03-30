import s from './Header.module.scss'
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className={s.navBar}>
        <Link href={'/'}>About</Link>
        <Link href={'/projects'}>Projects</Link>
        <Link href={'/resume'}>Resume</Link>
      </div>
    </header>
  )
}

export default Header
