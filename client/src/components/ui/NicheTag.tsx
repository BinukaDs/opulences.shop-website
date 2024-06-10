'use client'
import Image from "next/image"
import { motion, AnimatePresence } from 'framer-motion'


const NicheTag = ({ text }: any) => {
  return (
    
      <div className='border border-border text-textMuted  items-center gap-3 rounded-xl p-3 w-full'>
       
      
          <p className='text-lg uppercase'>{text}</p>
      
      </div>
    
  )
}

export default NicheTag