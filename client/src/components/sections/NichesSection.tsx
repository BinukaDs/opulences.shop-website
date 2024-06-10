'use client'
import NicheTag from "../ui/NicheTag"
import FadeIn from "@/app/transitions/FadeIn"
import TopicFade from "@/app/transitions/TopicFade"
import { motion, AnimatePresence } from 'framer-motion';
import './slider.css'
const slides = [
    { tag: "Electronics" },
    { tag: "Pets" },
    { tag: "Homewares" },
    { tag: "Fitness" },
    { tag: "Toys" },
    { tag: "Fashion" },
    { tag: "Cosmetics" },
    { tag: "Jewellery" },
    { tag: "Baby" },

]
const NichesSection = () => {
    const duplicatedSlides = [...slides, ...slides];
    return (
        <section className='py-24 bg-background flex flex-col items-center h-full w-full '>
            <div className="container">
                <div className=' rounded-3xl w-full flex flex-col justify-between items-center gap-12 md:p-10'>
                    <TopicFade>
                        <div className='text-center'>
                            <p className='text-sm mb-3 text-textGray'> YOU&apos;VE GOT A LOT</p>
                            <h1 className='md:text-6xl text-4xl font-bold'> Niches We Offer</h1>
                        </div>
                    </TopicFade>

                    <div className="container overflow-hidden">
                        

                        <motion.div
                            className="flex items-center justify-between gap-12"
                            animate={{
                                x: ['-100%', '0%'],
                                transition: {
                                    ease: 'linear',
                                    duration: 20,
                                    repeat: Infinity,
                                }
                            }}
                        >
                            {duplicatedSlides.map((slide, index) => (
                                <NicheTag key={index} text={slide.tag} />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>

        </section >
    )
}

export default NichesSection