"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion" // Add AnimatePresence
import { Sparkles } from "lucide-react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [init, setInit] = useState(false)
  const [isTextVisible, setIsTextVisible] = useState(false)
  const [videoDuration, setVideoDuration] = useState(0)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8

      // Get video duration when metadata is loaded
      videoRef.current.onloadedmetadata = () => {
        if (videoRef.current) {
          setVideoDuration(videoRef.current.duration)
          console.log("Video duration:", videoRef.current.duration)
        }
      }

      // Track time updates to control text visibility
      videoRef.current.ontimeupdate = () => {
        if (!videoRef.current) return
        
        const currentTime = videoRef.current.currentTime
        const duration = videoRef.current.duration
        
        // Show text only between 3 seconds after start and 4 seconds before end
        const shouldShowText = currentTime >= 3 && currentTime <= (duration - 6)
        setIsTextVisible(shouldShowText)
        
        console.log(`Time: ${currentTime.toFixed(1)}/${duration.toFixed(1)} - Text visible: ${shouldShowText}`)
      }
    }

    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: false,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "out",
        },
        random: true,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 40,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <video ref={videoRef} autoPlay muted loop playsInline className="object-cover w-full h-full">
          <source
            src="https://kmorgatonics.com/wp-content/uploads/2024/10/km-orgatnics-ad-pvr-1.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Particles */}
      {init && <Particles id="tsparticles" options={particlesOptions as any} className="absolute inset-0 z-20" />}

      {/* 3D Decorative Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/20 blur-3xl z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-secondary/20 blur-3xl z-10"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Content with conditional visibility */}
      <AnimatePresence>
        {isTextVisible && (
          <motion.div 
            className="relative z-30 container h-full flex flex-col items-center justify-center text-center text-white opacity-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-3xl mx-auto px-4 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight text-shadow opacity-80">
                  Redefining Beauty & Aesthetics
                  <motion.span
                    className="block mt-2 text-primary text-glow"
                    animate={{
                      textShadow: [
                        "0 0 10px rgba(255, 182, 193, 0.7), 0 0 20px rgba(255, 182, 193, 0.5)",
                        "0 0 15px rgba(255, 182, 193, 0.9), 0 0 30px rgba(255, 182, 193, 0.7)",
                        "0 0 10px rgba(255, 182, 193, 0.7), 0 0 20px rgba(255, 182, 193, 0.5)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    Where Science Meets Glamour
                  </motion.span>
                </h1>
              </motion.div>

              <motion.p
                className="text-lg md:text-xl opacity-70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Experience premium beauty services tailored to enhance your natural beauty and boost your confidence.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    asChild
                    size="lg"
                    className="text-base relative overflow-hidden group bg-gradient-to-r from-primary to-secondary border-none"
                  >
                    <Link href="#book">
                      <motion.span
                        className="absolute inset-0 w-full h-full bg-white/20"
                        initial={{ x: "-100%", opacity: 0 }}
                        whileHover={{ x: "100%", opacity: 0.3 }}
                        transition={{ duration: 0.5 }}
                      />
                      <span className="relative z-10 flex items-center">
                        Book an Appointment
                        <Sparkles className="ml-2 h-4 w-4" />
                      </span>
                    </Link>
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="text-base bg-transparent border-white text-white hover:bg-white/10 backdrop-blur-sm"
                  >
                    <Link href="#services">Explore Our Services</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-20"></div>
    </section>
  )
}

