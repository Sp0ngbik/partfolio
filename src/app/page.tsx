import Image from 'next/image'
import myPhoto from '@/../public/myPhoto.jpg'
import s from './page.module.scss'

export default function Home() {
  return (
    <main>
      <div className={s.infoBlock}>
        <div>Uladzislau Astapuk Frontend Developer</div>
        <div>
          <Image src={myPhoto} alt={'photo not found'} height={350} width={350} />
        </div>
      </div>
    </main>
  )
}
