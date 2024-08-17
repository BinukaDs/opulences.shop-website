'use client'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import './slider.css'
import useMeasure from 'react-use-measure'
import { motion, useMotionValue, animate } from 'framer-motion';
const SliderSection = () => {
  const slides = [
    { link: "/mockups/1.png" },
    { link: "/mockups/2.png" },
    { link: "/mockups/5.png" },
    { link: "/mockups/3.png" },
    { link: "/mockups/4.png" },
  ]
  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    //  let finalPosition = -width * 2.345 ;
    let finalPosition = -width * 2.35 ;
    // const numberOfSlides = 5;
    // const slideWidth= width / numberOfSlides

    // let finalPosition = -slideWidth * numberOfSlides
    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 35,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    })

    return controls.stop;
  }, [xTranslation, width]);
  return (
    <section className='w-full md:p-24 py-12 bg-background'>
      <div className='container overflow-hidden' >
        <motion.div
          className="flex items-center justify-between gap-12 "
          ref={ref}
          style={{ x: xTranslation }}
        >
          {[...slides, ...slides].map((slide, index) => (
            <Image key={index} src={slide.link} alt={`image slider ${index}`} width={500} height={500} className='rounded-3xl border border-border' />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default SliderSection