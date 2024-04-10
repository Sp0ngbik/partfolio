import { motion } from 'framer-motion'
import clsx from 'clsx'

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        minHeight: '60vh',
        flexDirection: 'column',
        overflow: 'hidden',
        // backgroundColor:'transparent',
        // backgroundColor: '#1f2937', /* bg-slate-950 */
        width: '100%',
        borderRadius: '0.375rem' /* rounded-md */,
        zIndex: 0,
      }}
      className={clsx(className)}
    >
      <div
        style={{
          position: 'relative',
          display: 'flex',
          width: '100%',
          flex: 1,
          transform: 'scaleY(1.25)',
          alignItems: 'center',
          justifyContent: 'center',
          isolation: 'isolate',
          zIndex: 0,
        }}
      >
        <motion.div
          initial={{ opacity: 0.5, width: '15rem' }}
          whileInView={{ opacity: 1, width: '30rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            inset: 'auto',
            right: '50%',
            height: '14rem' /* h-56 */,
            overflow: 'visible',
            width: '30rem',
            background: 'conic-gradient(from 70deg at center top, #22d3ee, transparent)',
          }}
          // className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div
            style={{
              position: 'absolute',
              width: '100%',
              left: 0,
              backgroundColor: '#1f2937' /* bg-slate-950 */,
              height: '10rem' /* h-40 */,
              bottom: 0,
              zIndex: 20,
              maskImage: 'linear-gradient(to top, white, transparent)',
              maskComposite: 'destination-out',
            }}
            // className="absolute  w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]"
          />
          <div
            style={{
              position: 'absolute',
              width: '10rem' /* w-40 */,
              height: '100%',
              left: 0,
              backgroundColor: '#1f2937' /* bg-slate-950 */,
              bottom: 0,
              zIndex: 20,

              maskImage: 'linear-gradient(to right,  white,transparent)',
            }}
            // className="absolute  w-40 h-[100%] left-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: '15rem' }}
          whileInView={{ opacity: 1, width: '30rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          style={{
            backgroundImage: `conic-gradient( var(--tw-gradient-stops),var(--conic-position))`,
            background: 'conic-gradient(from 290deg at center top, transparent, #22d3ee)',
            position: 'absolute',
            width: '30rem',
            inset: 'auto',
            left: '50%',
            height: '14rem',
            color: '#fff',
          }}
        >
          <div
            style={{
              // position: 'absolute',
              // width: '100%',
              left: 0,
              // backgroundColor: '#1f2937' /* bg-slate-950 */,
              // height: '10rem' /* h-40 */,
              // bottom: 0,
              // zIndex: 20,
              maskImage: 'linear-gradient(to top, white, transparent)',
              // maskComposite: 'destination-out',
              position: 'absolute',
              width: '100%' /* w-40 */,
              height: '10rem',
              right: 0,
              backgroundColor: '#1f2937' /* bg-slate-950 */,
              bottom: 0,
              zIndex: 20,
              // maskImage: 'linear-gradient(to top, white, transparent)',

              // maskImage: 'linear-gradient(to top left, rgba(255,255,255,0.15), transparent)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: '100%',
              right: 0,
              height: '14rem' /* h-40 */,
              bottom: 0,
              zIndex: 20,
              background: 'conic-gradient(from 290deg at center top,#22d3ee, transparent, )',
              maskImage: 'linear-gradient(to bottom left, white, transparent)',

            }}
          />
        </motion.div>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            height: '12rem' /* h-48 */,
            width: '100%',
            transform: 'translateY(-50%) scaleX(1.5)' /* translate-y-12 scale-x-150 */,
            maskImage: 'linear-gradient(to bottom , white, transparent)',

          }}
        ></div>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            zIndex: 50,
            height: '12rem' /* h-48 */,
            width: '100%',

          }}
        ></div>
        <div
          style={{
            position: 'absolute',
            inset: 'auto',
            zIndex: 50,
            // height: '9rem', /* h-36 */
            // width: '28rem',
            // transform: 'translateY(-50%)', /* -translate-y-1/2 */
            // borderRadius: '9999px', /* rounded-full */
            // backgroundColor: 'rgba(0, 255, 255, 0.5)', /* bg-cyan-500 opacity-50 */
            // backdropFilter: 'blur(12px)' /* blur-3xl */
          }}
        ></div>
        <motion.div
          initial={{ width: '8rem' }}
          whileInView={{ width: '16rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            inset: 'auto',
            zIndex: 30,
            height: '9rem', /* h-36 */
            width: '16rem' /* w-64 */,
            // transform: 'translateY(-6rem)', /* -translate-y-[6rem] */
            // borderRadius: '9999px', /* rounded-full */
            backgroundColor: '#f3f3f3', /* bg-cyan-400 */
            filter: 'blur(8px)' /* blur-2xl */
          }}
          // className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: '15rem' }}
          whileInView={{ width: '30rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            inset: 'auto',
            zIndex: 50,
            height: '0.5rem', /* h-0.5 */
            width: '30rem',
            transform: 'translateY(-7rem)', /* -translate-y-[7rem] */
            backgroundColor: 'transparent' /* bg-cyan-400 */
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400 "
        ></motion.div>

        <div
          style={{
            position: 'absolute',
            inset: 'auto',
            zIndex: 40,
            // height: '11rem', /* h-44 */
            // width: '100%',
            // transform: 'translateY(-12.5rem)', /* -translate-y-[12.5rem] */
            // backgroundColor: 'transparent' /* bg-slate-950 */
          }}
          // className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950 "
        ></div>
      </div>

      <div
        style={{
          position: 'relative',
          zIndex: 50,
          display: 'flex',
          transform: 'translateY(-80px)' /* -translate-y-80 */,
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0 1.25rem' /* px-5 */,
        }}
      >
        {children}
      </div>
    </div>
  )
}
