"use client"

import Image from "next/image"
import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from "react"

export default function Section() {
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"])

  return (
    <div
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <Image src="/images/7.jpeg" fill alt="Abstract spiral circles" style={{ objectFit: "cover" }} />
        </motion.div>
      </div>

     
      <div className="absolute inset-0 flex items-center justify-start z-10 p-6 md:p-12 lg:p-24">
        <p className="absolute bottom-12 right-6 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-5xl z-10">
        Every part of your life matters to us. That's why we have created this exhaustive form designed to adapt your preferences and your lifestyle to find the ideal home. 
        Every minute you spend using it will be worth it.
         </p>
      </div>
    </div>
  )
}
