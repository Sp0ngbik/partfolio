'use client'
import React from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import s from './Lamp.module.scss'

export const LampContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={clsx(s.lampContainer)}>
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
          <div className={s.motionSubBlock_one} />
          <div className={s.motionSubBlock_two} />
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
          <div className={s.motionSubBlock_one} />
          <div className={s.motionSubBlock_two} />
        </motion.div>
      </div>
      <div className={s.childrenWrapper}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className={s.childrenStyle}
        >
          {children}
        </motion.h1>
      </div>
    </div>
  )
}
