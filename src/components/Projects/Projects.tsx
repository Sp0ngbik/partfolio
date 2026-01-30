import React, { useState } from 'react'
import s from './Projects.module.scss'
import { AnimatePresence, motion, useMotionValue } from 'framer-motion'
import { ProjectEnum, projectsCommercial, projectsPetProjects } from '@/common/const/const'
import clsx from 'clsx'
import ProjectBody from '@/components/Projects/ui/ProjectBody/ProjectBody'

export type ProjectType = {
  title: string
  url: string
  image: string
  description: string
}
const Projects = () => {
  const [preview, setPreview] = useState<ProjectType | null>(null)
  const [projectSelection, setProjectSelection] = useState<ProjectEnum>(ProjectEnum.Commercial)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    mouseX.set(e.clientX + 40)
    mouseY.set(e.clientY - 100)
  }

  const activeSelection = {
    activeCommercial: clsx(projectSelection === 'commercial' && s.active),
    activePetProjects: clsx(projectSelection === 'petProjects' && s.active),
  }

  return (
    <>
      <div className={s.switchTabs}>
        <button
          className={activeSelection.activeCommercial}
          onClick={() => setProjectSelection(ProjectEnum.Commercial)}
        >
          Commercial
        </button>
        <button
          className={activeSelection.activePetProjects}
          onClick={() => setProjectSelection(ProjectEnum.PetProjects)}
        >
          Pet projects
        </button>
      </div>
      <div
        className={s.projectsWrapper}
        id="projects"
        onMouseMove={handleMove}
        onMouseLeave={() => setPreview(null)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={projectSelection}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            {projectSelection === ProjectEnum.Commercial
              ? projectsCommercial.map(p => (
                  <ProjectBody key={p.title} p={p} previewCallback={setPreview} />
                ))
              : projectsPetProjects.map(p => (
                  <ProjectBody key={p.title} p={p} previewCallback={setPreview} />
                ))}
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          {preview && (
            <motion.div
              className={s.previewContainer}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.1 }}
              style={{
                left: mouseX,
                top: mouseY,
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={preview.image}
                  className={s.previewCard}
                  initial={{ rotateY: -80, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  exit={{ rotateY: 80, opacity: 0 }}
                  transition={{
                    duration: 0.25,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                  style={{ backgroundImage: `url(${preview.image})` }}
                />
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

export default Projects
