'use client'
import Image from "next/image"
import { motion, AnimatePresence } from 'framer-motion'

const NicheTag = ({ href, text }: any) => {
  return (
    <AnimatePresence>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        
      >
      <div className='bg-white text-black flex items-center gap-3 rounded-xl p-3'>
        <div>
          <Image src={href} alt="web icon" width={30} height={30} />
        </div>
        <div>
          <p className='text-xl font-bold'>{text}</p>
        </div>
      </div>
    </motion.button>
    </AnimatePresence >
  )
}

export default NicheTag