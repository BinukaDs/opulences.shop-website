'use client'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import './slider.css'
const SliderSection = () => {
  
  return (
    <section className='w-full md:p-24 py-12 bg-background'>
      <div className='container fade-sides'>
        <div className="gallery overflow-hidden whitespace-nowrap transition-all" >
          <div className="scrolling-wrapper flex justify-between gap-12 animate-scrollLeft">
            <Image src="/mockups/5.png" alt="4" width={500} height={300} className='rounded-3xl border border-border' />
            <Image src="/mockups/1.png" alt="1" width={500} height={300} className='rounded-3xl border border-border' />
            <Image src="/mockups/2.png" alt="2" width={500} height={300} className='rounded-3xl border border-border' />
            <Image src="/mockups/3.png" alt="3" width={500} height={300} className='rounded-3xl border border-border' />
            <Image src="/mockups/4.png" alt="4" width={500} height={300} className='rounded-3xl border border-border' />
            {/* <Image src="/mockups/5.png" alt="4" width={500} height={300} className='rounded-3xl border border-border' />
            <Image src="/mockups/1.png" alt="1" width={500} height={300} className='rounded-3xl border border-border' />
            <Image src="/mockups/2.png" alt="2" width={500} height={300} className='rounded-3xl border border-border' />
            <Image src="/mockups/3.png" alt="3" width={500} height={300} className='rounded-3xl border border-border' />
            <Image src="/mockups/4.png" alt="4" width={500} height={300} className='rounded-3xl border border-border' /> */}
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default SliderSection