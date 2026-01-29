import React from 'react'
import Link from 'next/link'
import s from '@/components/Projects/Projects.module.scss'
import { ProjectType } from '@/components/Projects/Projects'

type ProjectBodyProps = {
  p: ProjectType
  previewCallback: (p: ProjectType) => void
}

const ProjectBody = ({ p, previewCallback }: ProjectBodyProps) => {
  return (
    <Link
      key={p.title}
      href={p.url}
      className={s.projectItem}
      onMouseEnter={() => previewCallback(p)}
    >
      <h3>{p.title}</h3>
      <span>{p.description}</span>
    </Link>
  )
}

export default ProjectBody
