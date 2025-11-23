import Image from "next/image"
import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from "react"
import Header from "./header"
import { useRouter } from "next/navigation"
export default function Hero() {
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"],
  })
  const router = useRouter();

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"])

  return (
    <div className="h-screen overflow-hidden">
      <Header />
      <motion.div style={{ y }} className="relative h-full">
        <Image
          src="/images/5.jpeg"
          fill
          alt="Mountain landscape background"
          style={{ objectFit: "cover" }}
        />
        
        
        <div className="absolute inset-0 flex items-center justify-start z-10 p-6 md:p-12 lg:p-24">
          
          <div className="text-left text-white max-w-2xl p-8 md:p-10 bg-black/40 backdrop-blur-lg rounded-xl shadow-2xl border border-white/10">
           
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              FIND YOUR IDEAL NEIGHBORHOOD
            </h1>
            
            <p className="text-sm md:text-base leading-relaxed mb-8 font-extrabold">
              We care about how you want to live, not just where.
            </p>
            <p className="text-sm md:text-base leading-relaxed mb-8" >
              Find your ideal neighborhood in Los Angeles with our personalized tool, designed to understand and analyze your unique lifestyle.
            </p>
            
            <button onClick={() => router.push("/get-started")} className="px-5 py-2 border-2 border-white bg-transparent text-white text-sm font-medium transition-all duration-300 hover:bg-white hover:text-black cursor-pointer rounded-md"><link rel="stylesheet"  />
              GET STARTED
            </button>
          </div>

        </div>
      </motion.div>
    </div>
  )
}