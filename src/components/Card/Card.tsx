import React, { createContext, useRef, useState } from 'react'

const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined)
export const CardContainer = ({
  children,
  style,
  containerClassName,
}: {
  children?: React.ReactNode
  style?: React.CSSProperties
  containerClassName?: string
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMouseEntered, setIsMouseEntered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const { left, top, width, height } = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - left - width / 2) / 25
    const y = (e.clientY - top - height / 2) / 25
    // containerRef.current.style.transition = 'none'
    containerRef.current.style.transition = 'transform 0.8ms ease'
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`
  }

  const handleMouseEnter = () => {
    setIsMouseEntered(true)
    if (!containerRef.current) return
    containerRef.current.style.transition = 'transform 1s ease'
  }
  const handleMouseLeave = () => {
    if (!containerRef.current) return
    setIsMouseEntered(false)
    containerRef.current.style.transition = 'transform 1s ease'
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`
  }

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={containerClassName}
        style={{
          width: '400px',
          // height: '400px',
          perspective: '1000px',
          // transition: '0.2ms ease-in',
        }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            // display: 'flex',
            // alignItems: 'center',
            // justifyContent: 'center',
            // position: 'relative',
            // transition: 'all 200ms ease',
            // transformStyle: 'preserve-3d',
            ...style,
          }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  )
}

export const CardBody = ({
  children,
  className,
  style,
}: {
  children: React.ReactNode
  className?: string
  style: React.CSSProperties
}) => {
  return (
    <div
      className={className}
      style={{
        // height: '24rem',
        // width: '24rem',
        // transformStyle: 'preserve-3d',
        ...style,
      }}
    >
      {children}
    </div>
  )
}

export const CardItem = ({
  as: Tag = 'div',
  children,
  className,
  style,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: {
  as?: React.ElementType
  children: React.ReactNode
  style?: React.CSSProperties
  className?: string
  translateX?: number | string
  translateY?: number | string
  translateZ?: number | string
  rotateX?: number | string
  rotateY?: number | string
  rotateZ?: number | string
}) => {
  const ref = useRef<HTMLDivElement>(null)
  // const [isMouseEntered] = useMouseEnter()

  // const handleAnimations = () => {
  //   if (!ref.current) return
  //   if (isMouseEntered) {
  //     ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
  //   } else {
  //     ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`
  //   }
  // }
  // useEffect(() => {
  //   handleAnimations()
  // }, [isMouseEntered])

  return (
    <Tag ref={ref} {...rest}>
      {children}
    </Tag>
  )
}
// export const useMouseEnter = () => {
//     const context = useContext(MouseEnterContext)
//     if (context === undefined) {
//         throw new Error('useMouseEnter must be used within a MouseEnterProvider')
//     }
//     return context
// }