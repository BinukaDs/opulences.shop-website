'use client'
import Image from "next/image"
import { motion, AnimatePresence } from 'framer-motion'

const NicheTag = ({ src, text }: any) => {
  return (
    
      <div className='border border-border text-textMuted flex items-center gap-3 rounded-xl p-3'>
       
        <div>
          <p className='text-lg uppercase'>{text}</p>
        </div>
      </div>
    
  )
}

export default NicheTag