'use client'
import React from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import s from './Lamp.module.scss'

export function LampDemo({ children }: { children: React.ReactNode }) {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className={s.superContainer}
      >
        {children}
      </motion.h1>
    </LampContainer>
  )
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div className={clsx(s.container, className)}>
      <div className={s.subContainer}>
        <motion.div
          initial={{ opacity: 0.5, width: '15rem' }}
          whileInView={{ opacity: 1, width: '30rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className={s.firstMotion}
        >
          <div className={s.firstDiv} />
          <div className={s.secondDiv} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: '15rem' }}
          whileInView={{ opacity: 1, width: '30rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className={s.secondMotion}
        >
          <div className={s.thirdDiv} />
          <div className={s.frthDiv} />
        </motion.div>
        <div className={s.fifthDiv}></div>
        <div className={s.sixDiv}></div>
        <div className={s.sevenDiv}></div>
        <motion.div
          initial={{ width: '8rem' }}
          whileInView={{ width: '16rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className={s.thirdMotion}
        ></motion.div>
        <motion.div
          initial={{ width: '15rem' }}
          whileInView={{ width: '30rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className={s.fourthMotion}
        ></motion.div>

        <div className={s.eightDiv}></div>
      </div>

      <div className={s.lastDiv}>{children}</div>
    </div>
  )
}
