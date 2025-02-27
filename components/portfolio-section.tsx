"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence, useInView } from "framer-motion"

const portfolioItems = [
  {
    category: "Bridal Makeovers",
    images: [
      "https://media.istockphoto.com/id/1340302535/photo/beautiful-indian-woman-getting-ready-to-a-wedding-reception-at-the-beauty-parlor.jpg?s=2048x2048&w=is&k=20&c=CX6WN8df-9z0EcyKdAfHNWJu1VFknVpnQqokUpjdis8=",
      "https://media.istockphoto.com/id/958931744/photo/the-make-up-artist-doing-a-makeup-for-bride-makeup-artist-applies-red-lipstick-beautiful-woman.jpg?s=2048x2048&w=is&k=20&c=vuXAFaKJFtIbrJEAiubbNa9y5-AxKp9OJ7XndsST23w=",
      "https://media.istockphoto.com/id/1364400969/photo/female-makeup-artist-applying-the-eyeshadow-with-brush-on-female-client-eyelids.jpg?s=2048x2048&w=is&k=20&c=dxsoc4d8_7-3OUHXA1gzjxJApIv1P2K2W9p1WZDHBuY=",
    ],
  },
  {
    category: "Celebrity Collaborations",
    images: [
      "https://www.istockphoto.com/photo/young-woman-using-digital-tablet-at-home-gm2152960546-573925970?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Furl&utm_medium=affiliate&utm_source=unsplash&utm_term=url%3A%3Avideo-affiliates%3Acontrol",
      "https://www.istockphoto.com/photo/young-woman-using-digital-tablet-at-home-gm2152960546-573925970?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Furl&utm_medium=affiliate&utm_source=unsplash&utm_term=url%3A%3Avideo-affiliates%3Acontrol",
      "https://www.istockphoto.com/photo/young-woman-using-digital-tablet-at-home-gm2152960546-573925970?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Furl&utm_medium=affiliate&utm_source=unsplash&utm_term=url%3A%3Avideo-affiliates%3Acontrol",
    ],
  },
  {
    category: "Fashion & Editorial Makeup",
    images: [
      "https://www.istockphoto.com/photo/young-woman-using-digital-tablet-at-home-gm2152960546-573925970?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Furl&utm_medium=affiliate&utm_source=unsplash&utm_term=url%3A%3Avideo-affiliates%3Acontrol",
      "https://www.istockphoto.com/photo/young-woman-using-digital-tablet-at-home-gm2152960546-573925970?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Furl&utm_medium=affiliate&utm_source=unsplash&utm_term=url%3A%3Avideo-affiliates%3Acontrol",
      "https://www.istockphoto.com/photo/young-woman-using-digital-tablet-at-home-gm2152960546-573925970?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Furl&utm_medium=affiliate&utm_source=unsplash&utm_term=url%3A%3Avideo-affiliates%3Acontrol",
    ],
  },
  {
    category: "Advanced Aesthetic Treatments",
    images: [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800",
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800",
      "https://images.unsplash.com/photo-1629207338783-1fbe31de4411?q=80&w=800",
    ],
  },
]

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [carouselKey, setCarouselKey] = useState(0)
  const sectionRef = useRef(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  // Debugging
  console.log("Rendering with activeCategory:", activeCategory)

  // When category changes, reset slide to first and update carousel key
  useEffect(() => {
    setCurrentSlide(0)
    setCarouselKey(prev => prev + 1)
    console.log("Category changed to:", portfolioItems[activeCategory].category)
  }, [activeCategory])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const slideCount = portfolioItems[activeCategory].images.length
        const newSlide = prev < slideCount - 1 ? prev + 1 : 0
        console.log("Auto slide. New slide:", newSlide)
        return newSlide
      })
    }, 3000) // change slide every 3 seconds

    return () => clearInterval(interval)
  }, [activeCategory])

  useEffect(() => {
    console.log("activeCategory changed to:", activeCategory)
    console.log("Current portfolio item:", portfolioItems[activeCategory])
  }, [activeCategory])

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const newSlide = prev < portfolioItems[activeCategory].images.length - 1 ? prev + 1 : 0
      console.log("Next slide clicked. New slide:", newSlide)
      return newSlide
    })
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const newSlide = prev > 0 ? prev - 1 : portfolioItems[activeCategory].images.length - 1
      console.log("Prev slide clicked. New slide:", newSlide)
      return newSlide
    })
  }

  return (
    <section id="portfolio" className="py-20 bg-muted/30" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our stunning work and see the transformations we've created for our clients.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {portfolioItems.map((item, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant={activeCategory === index ? "default" : "outline"}
                onClick={() => {
                  console.log("Setting active category to:", index)
                  setActiveCategory(index)
                }}
                className={`mb-2 ${
                  activeCategory === index
                    ? "bg-gradient-to-r from-primary to-secondary border-none"
                    : ""
                }`}
              >
                {item.category}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Carousel */}
        <motion.div
          key={`carousel-${activeCategory}-${carouselKey}`}
          className="relative max-w-4xl mx-auto overflow-hidden rounded-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div ref={sliderRef} className="relative h-[400px] md:h-[500px]">
            <AnimatePresence mode="wait">
              {portfolioItems[activeCategory].images.map(
                (image, index) =>
                  index === currentSlide && (
                    <motion.div
                      key={`${activeCategory}-${index}`}
                      className="absolute top-0 left-0 w-full h-full"
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${portfolioItems[activeCategory].category} ${index + 1}`}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.svg"
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-xl font-bold font-serif">
                          {portfolioItems[activeCategory].category}
                        </h3>
                        <p>Transformation {index + 1}</p>
                      </div>
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {portfolioItems[activeCategory].images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide ? "bg-primary w-4" : "bg-background/60"
                }`}
                onClick={() => {
                  console.log("Indicator clicked, setting slide to:", index)
                  setCurrentSlide(index)
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Before & After Grid */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 font-serif">Before & After</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"].map((url, idx) => (
              <div key={idx} className="before-after-slider rounded-xl overflow-hidden shadow-lg">
                <div className="before" style={{ backgroundImage: `url('${url}')` }}></div>
                <div className="after" style={{ backgroundImage: `url('${url}')` }}></div>
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-sm">Before</div>
                  <div className="absolute top-2 right-2 bg-primary/80 text-white px-2 py-1 rounded text-sm">After</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

