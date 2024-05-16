'use client'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import './slider.css'
const TextScroll = () => {
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
    <section className='w-full md:p-24 py-12 bg-background rounded-b-3xl border border-b-border'>
      <div className='container fade-sides'>
        <div className="gallery overflow-hidden whitespace-nowrap transition-all" >
          <div className="scrolling-wrapper-text font-bold text-6xl text-textMuted flex justify-between gap-12 animate-scrollRight">
            <h1>OPULENCE</h1>
            <h1>OPULENCE</h1>
            <h1>OPULENCE</h1>
            <h1>OPULENCE</h1>
            <h1>OPULENCE</h1>
            <h1>OPULENCE</h1>
            <h1>OPULENCE</h1>
            <h1>OPULENCE</h1>
            <h1>OPULENCE</h1>
            <h1>OPULENCE</h1>
            <h1>OPULENCE</h1>
            <h1>OPULENCE</h1>
            <h1>OPULENCE</h1>
            <h1>OPULENCE</h1>
            <h1>OPULENCE</h1>
            <h1>OPULENCE</h1>
            <h1>OPULENCE</h1>
            <h1>OPULENCE</h1>
            <h1>OPULENCE</h1>
            <h1>OPULENCE</h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TextScroll