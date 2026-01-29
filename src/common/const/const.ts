import { ProjectType } from '@/components/Projects/Projects'

export const techArr = ['JS/TS', 'React', 'Next', 'RTK Query', 'Zustand']
export const uiArr = ['SASS', 'ANTD', 'MiUI', 'Radix', 'GSAP']
export const toolsArr = ['Postman', 'Figma', 'GitHub', 'Swagger']

export enum Anchors {
  about = '#about',
  contact = '#contact',
  project = '#projects',
}

export enum ProjectEnum {
  Commercial = 'commercial',
  PetProjects = 'petProjects',
}

export const projectsCommercial: ProjectType[] = [
  {
    title: 'Molecule',
    url: 'https://molecule-pi.vercel.app/',
    image: '/projects/molecule.jpg',
    description:
      'Molecule is a leading design marketplace that harnesses creativity and fosters innovation.\n' +
      'Offering a transformative platform where businesses can hire top-notch designers to bring\n' +
      'their vision to life, Molecule is revolutionizing the way design Projects are handled. By\n' +
      'bridging the gap between companies and elite designers from all over the world, we ensure\n' +
      'all design needs are met with efficiency, collaboration, and excellence. With Molecule,\n' +
      'you can explore pioneering design ideas, employ world-class talent, and create designs\n' +
      'that not only look good, but also effectively convey your brands essence and drive\n' +
      'success.',
  },
  {
    title: 'Attorneyster',
    url: 'https://attorneyster-tawny.vercel.app/',
    image: '/projects/attorneyster.jpg',
    description:
      'Attorneyster is a streamlined legal services platform, delivering expert lawyer services\n' +
      'right at your fingertips. We are dedicated to making legal consultation and representation\n' +
      'accessible and efficient for everyone, regardless of the complexity of the case. Our\n' +
      'platform hosts a network of seasoned lawyers specializing in various legal fields. From\n' +
      'consultation and case evaluation to representation and legal drafting, Attorneyster is\n' +
      'committed to easing the legal journey for its customers. Attorneys are available to\n' +
      'provide their expert legal advice and representation, simplifying the complexities of the\n' +
      'legal world. Unleash the power of professional legal services with Attorneyster - your\n' +
      'online legal ally.',
  },
  {
    title: 'Market.csgo',
    url: 'https://market.csgo.com/en/',
    image: '/projects/csgomarket.jpg',
    description:
      'TradeSpace is a unique marketplace specialized in trading and purchasing CS:GO skins.\n' +
      'It&apos;s a platform where gamers not only acquire their preferred skins but also exchange\n' +
      'their existing ones, all while enjoying a safe and reliable environment. Through simple,\n' +
      'effective, and transparent transactions we make your gaming experience more personalized\n' +
      'and fun. At TradeSpace, we bridge the gap between game enthusiasts worldwide, fostering a\n' +
      'vibrant community of gamers constantly engaging in exciting trades. Discover, acquire,\n' +
      'trade, and flaunt your CS:GO skins in style with TradeSpace - your ultimate gaming\n' +
      'marketplace.',
  },
  {
    title: 'MonoBox',
    url: 'https://monobox.app/',
    image: '/projects/monobox.jpg',
    description:
      'MonoBox is a premier service provider specializing in the creation of web applications\n' +
      'designed for cafes and restaurants. Our platform harnesses the power of technology to\n' +
      'transform food services, creating user-friendly and efficient digital solutions tailored\n' +
      'to our clients specific needs. With MonoBox, businesses can streamline their operations,\n' +
      'from online booking and menu browsing to digital ordering and payments. Not only do we\n' +
      'help in creating a strong online presence, but also in enhancing the customer experience,\n' +
      'leading to improved customer satisfaction and ultimately, business growth. Simplify\n' +
      'operations, amplify engagement, and maximize revenues, all with MonoBox - your partner in\n' +
      'digitalizing food services.',
  },
]

export const projectsPetProjects: ProjectType[] = [
  {
    title: 'TodoList',
    url: 'https://todo-list-one-mu-45.vercel.app/',
    image: '/petProjects/todoList.jpg',
    description:
      'This project is a modern take on task management, blending minimalist design with powerful interactive elements.' +
      'Unlike standard Todo apps, it prioritizes performance and tactile feedback through fluid animations and a justified ' +
      'layout for a clean, professional look. Built to handle rapid state changes without flickering, it demonstrates a deep' +
      'understanding of modern React patterns and UI performance optimization.',
  },
  {
    title: 'TMDB',
    url: 'https://tmdb-lime-beta.vercel.app/',
    image: '/petProjects/tmdb.jpg',
    description:
      'This project is a movie exploration platform built with Next.js and TypeScript. My main ' +
      'focus was on creating a seamless user experience by integrating the TMDB API with efficient ' +
      'data fetching strategies. I implemented advanced UI interactions like smooth card transitions' +
      ' and parallax effects to make the interface feel alive. This project demonstrates my ability ' +
      'to handle asynchronous operations, complex layouts, and performance optimization in a modern ' +
      'React environment.',
  },
  {
    title: 'Flash cards',
    url: 'https://flashcards-beige.vercel.app/sign-in',
    image: '/petProjects/cards.jpg',
    description:
      'This is an educational platform for learning via flashcards, built with React, TypeScript,' +
      'and RTK Query. My focus was on implementing a complex CRUD system and efficient state ' +
      'management for seamless deck organization. I integrated advanced UI components and form ' +
      'validations to ensure a professional user experience.\n' +
      'As the Team Lead for this pet project, I architected the application and coordinated a small' +
      ' team, managing the development process through Git and Code Reviews. This project ' +
      'demonstrates my ability to build scalable data-driven applications while successfully' +
      'leading a collaborative team.',
  },
]
