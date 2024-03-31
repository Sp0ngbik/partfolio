import React from 'react'
import s from './Sparkles.module.scss'
import { SparklesCore } from '@/components/Sparkles/SparkleCore'

export const Sparkles = () => {
  return (
    <div className={s.sparkleWrapper}>
      <SparklesCore
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className={s.sparkle}
        particleColor="#FFD400FF"
      />
    </div>
  )
}
