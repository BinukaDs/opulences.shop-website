'use client'
import { motion, AnimatePresence } from 'framer-motion'

const FadeIn = ({ children }) => {
    return (
        <AnimatePresence >
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}

             viewport={{ once: true}}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default FadeIn