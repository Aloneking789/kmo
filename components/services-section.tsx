"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Scissors, Sparkles, Palette, Feather, GraduationCap, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  href: string
  image: string
}

function ServiceCard({ icon, title, description, href, image }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10, rotateY: 5 }}
      className="service-card group relative bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-lg"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-4">
          <div className="text-white mb-2 bg-primary/80 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center">
            {icon}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 font-serif">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <Button asChild variant="ghost" className="group-hover:text-primary">
          <Link href={href} className="flex items-center">
            Learn More <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <Sparkles className="h-5 w-5 text-primary" />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function ServicesSection() {
  const services = [
    {
      icon: <Scissors className="h-6 w-6" />,
      title: "Hair Styling & Treatments",
      description:
        "From precision cuts to transformative color treatments, our expert stylists create looks that enhance your natural beauty.",
      href: "#hair-services",
      image: "https://ik.imagekit.io/Kmorgatonics/Khushboo%20Mishra%20Celebrity-Picture/1687255661445.jpg?updatedAt=1728550156217",
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Skin & Aesthetic Treatments",
      description: "Advanced skincare solutions that rejuvenate, restore, and reveal your skin's natural radiance.",
      href: "#skin-services",
      image: "https://ik.imagekit.io/Kmorgatonics/Khushboo%20Mishra%20Celebrity-Picture/1687602657018.jpg?updatedAt=1728550170990",
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Bridal & Event Makeup",
      description:
        "Bespoke makeup artistry that captures your unique style and enhances your natural beauty for your special day.",
      href: "#bridal-services",
      image: "https://ik.imagekit.io/Kmorgatonics/Khushboo%20Mishra%20Celebrity-Picture/IMG-20190224-WA0014.jpg?updatedAt=1728550276509",
    },
    {
      icon: <Feather className="h-8 w-6" />,
      title: "Semi-Permanent Makeup",
      description:
        "Long-lasting beauty solutions including microblading, lip tint, and eyeliner for effortless everyday glamour.",
      href: "#permanent-makeup",
      image: "https://www.kmorgatonics.com/wp-content/uploads/2024/10/image00008-min-copy-scaled.avif",
      imagePosition: "center 30%", // Focus more on the top portion
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Academy",
      description: "Learn from industry experts and master the art of beauty with our comprehensive training programs.",
      href: "#academy",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif">
            Our <span className="gradient-text">Premium Services</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover our range of luxury beauty services designed to enhance your natural beauty and boost your
            confidence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                href={service.href}
                image={service.image}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

