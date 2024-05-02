import React from 'react'
import s from './page.module.scss'
import Link from 'next/link'

const Projects = () => {
  return (
    <div className={s.projectsWrapper}>
      <Link href={'https://molecule-pi.vercel.app/'}>
        <h3>Molecule</h3>
        <span>
          Molecule is a leading design marketplace that harnesses creativity and fosters innovation.
          Offering a transformative platform where businesses can hire top-notch designers to bring
          their vision to life, Molecule is revolutionizing the way design projects are handled. By
          bridging the gap between companies and elite designers from all over the world, we ensure
          all design needs are met with efficiency, collaboration, and excellence. With Molecule,
          you can explore pioneering design ideas, employ world-class talent, and create designs
          that not only look good, but also effectively convey your brand&apos;s essence and drive
          success.
        </span>
      </Link>
      <Link href={'https://attorneyster-tawny.vercel.app/'}>
        <h3>Attorneyster</h3>
        <span>
          Attorneyster is a streamlined legal services platform, delivering expert lawyer services
          right at your fingertips. We are dedicated to making legal consultation and representation
          accessible and efficient for everyone, regardless of the complexity of the case. Our
          platform hosts a network of seasoned lawyers specializing in various legal fields. From
          consultation and case evaluation to representation and legal drafting, Attorneyster is
          committed to easing the legal journey for its customers. Attorneys are available to
          provide their expert legal advice and representation, simplifying the complexities of the
          legal world. Unleash the power of professional legal services with Attorneyster - your
          online legal ally.
        </span>
      </Link>
      <Link href={'https://tr4desp4ce.ru/'}>
        <h3>TradeSpace</h3>
        <span>
          TradeSpace is a unique marketplace specialized in trading and purchasing CS:GO skins.
          It&apos;s a platform where gamers not only acquire their preferred skins but also exchange
          their existing ones, all while enjoying a safe and reliable environment. Through simple,
          effective, and transparent transactions we make your gaming experience more personalized
          and fun. At TradeSpace, we bridge the gap between game enthusiasts worldwide, fostering a
          vibrant community of gamers constantly engaging in exciting trades. Discover, acquire,
          trade, and flaunt your CS:GO skins in style with TradeSpace - your ultimate gaming
          marketplace.
        </span>
      </Link>
      <Link href={'https://monobox.app/'}>
        <h3>MonoBox</h3>
        <span>
          MonoBox is a premier service provider specializing in the creation of web applications
          designed for cafes and restaurants. Our platform harnesses the power of technology to
          transform food services, creating user-friendly and efficient digital solutions tailored
          to our clients specific needs. With MonoBox, businesses can streamline their operations,
          from online booking and menu browsing to digital ordering and payments. Not only do we
          help in creating a strong online presence, but also in enhancing the customer experience,
          leading to improved customer satisfaction and ultimately, business growth. Simplify
          operations, amplify engagement, and maximize revenues, all with MonoBox - your partner in
          digitalizing food services.
        </span>
      </Link>
    </div>
  )
}

export default Projects
