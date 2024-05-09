'use client'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import './slider.css'
const SliderSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 10;
        if (scrollRef.current.scrollWidth - scrollRef.current.scrollLeft === scrollRef.current.clientWidth) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className='w-full py-24'>
      <div className=''>
        <div className="gallery overflow-hidden whitespace-nowrap transition-all" >
          <div className="scrolling-wrapper flex justify-between gap-12 animate-scroll">
            <Image src="/mockups/1.png" alt="1" width={500} height={300} className='rounded-3xl border border-border' />
            <Image src="/mockups/2.png" alt="2" width={500} height={300} className='rounded-3xl border border-border' />
            <Image src="/mockups/3.png" alt="3" width={500} height={300} className='rounded-3xl border border-border' />
            <Image src="/mockups/4.png" alt="4" width={500} height={300} className='rounded-3xl border border-border' />
            <Image src="/mockups/1.png" alt="1" width={500} height={300} className='rounded-3xl border border-border' />
            <Image src="/mockups/2.png" alt="2" width={500} height={300} className='rounded-3xl border border-border' />
            <Image src="/mockups/3.png" alt="3" width={500} height={300} className='rounded-3xl border border-border' />
            <Image src="/mockups/4.png" alt="4" width={500} height={300} className='rounded-3xl border border-border' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SliderSection