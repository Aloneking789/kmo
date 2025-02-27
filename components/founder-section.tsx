"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

export default function FounderSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const celebrities = [
    { name: "Madhuri Dixit", image: "https://ik.imagekit.io/Kmorgatonics/Khushboo%20Mishra%20Celebrity-Picture/000.jpg?updatedAt=1728550165901" },
    { name: "Kangana Ranaut", image: "https://www.kmorgatonics.com/wp-content/uploads/2024/10/whatsapp-image-2023-06-29-at-10.36.03-pm-jpeg.avif" },
    { name: "Kareena Kapoor", image: "https://ik.imagekit.io/Kmorgatonics/Khushboo%20Mishra%20Celebrity-Picture/166A2060.JPG?updatedAt=1728550156834" },
    { name: "Shilpa Shetty", image: "https://www.kmorgatonics.com/wp-content/uploads/2024/10/deep1264_resize-jpg.avif" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">Khushboo Mishra</span> – The Visionary Behind KM OrgaTonics
            </h2>
            <p className="text-lg mb-6">
              With over 15 years of experience in the beauty industry, Khushboo Mishra has established herself as a
              leading makeup artist and cosmetologist. Her passion for beauty and aesthetics has led her to create KM
              OrgaTonics, a premium salon that combines science and glamour.
            </p>
            <p className="text-lg mb-6">
              Khushboo's journey began with a simple dream – to help people look and feel their best. Today, she is
              known for her innovative techniques and personalized approach to beauty.
            </p>
            <p className="text-lg font-medium">
              Her expertise has made her the preferred choice for celebrities and brides alike, earning her recognition
              across the industry.
            </p>
          </div>

          <div className="relative">
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
              <Image src="https://www.kmorgatonics.com/wp-content/uploads/2024/10/deep1264_resize-jpg.avif" alt="Khushboo Mishra" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 h-24 w-24 bg-primary rounded-full"></div>
            <div className="absolute -top-6 -right-6 h-16 w-16 bg-secondary rounded-full"></div>
          </div>
        </div>

        <div ref={ref} className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12">Celebrity Collaborations</h3>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {celebrities.map((celebrity, index) => (
              <motion.div key={index} className="group relative" variants={itemVariants}>
                <div className="relative h-[300px] rounded-xl overflow-hidden">
                  <Image
                    src={celebrity.image || "https://www.kmorgatonics.com/wp-content/uploads/2024/10/deep1264_resize-jpg.avif"}
                    alt={`Khushboo Mishra with ${celebrity.name}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="font-medium text-lg">{celebrity.name}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

