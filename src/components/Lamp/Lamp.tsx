import React from 'react'
import { LampContainer } from '@/components/Lamp/LampContainer'
import { motion } from 'framer-motion'

const Lamp = ({ children }: any) => {
  return (
      <LampContainer>
          <motion.h1
              style={{
                  marginTop: "2rem",
                  backgroundImage: "linear-gradient(to bottom right, #CBD5E0, #6B7280)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  textAlign: "center",
                  paddingTop: "1rem",
                  fontSize: "4rem",
                  fontWeight: "500",
                  letterSpacing: "-0.025em",
                  color: "transparent",
              }}
              initial={{ opacity: 0.5, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: "easeInOut",
              }}
          >
              Build lamps <br /> the right way
          </motion.h1>
      </LampContainer>
  )
}

export default Lamp
