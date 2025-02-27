"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function PartnersSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const cloneItems = () => {
      const items = scrollContainer.querySelectorAll(".partner-logo")
      items.forEach((item) => {
        const clone = item.cloneNode(true)
        scrollContainer.appendChild(clone)
      })
    }

    cloneItems()
  }, [])

  const partners = [
    { name: "L'Oréal", logo: "/placeholder.svg?height=60&width=120" },
    { name: "MAC Cosmetics", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Estée Lauder", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Dermalogica", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Kérastase", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Wella", logo: "/placeholder.svg?height=60&width=120" },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 font-serif">
            Our <span className="gradient-text">Trusted Partners</span>
          </h2>
        </motion.div>

        <div className="relative w-full overflow-hidden">
          <div ref={scrollRef} className="flex items-center space-x-12 animate-scroll">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="partner-logo flex-shrink-0"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
                  <div className="relative bg-white dark:bg-black rounded-lg p-2">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      width={120}
                      height={60}
                      className="h-12 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

