"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const bridalImages = [
  "https://images.unsplash.com/flagged/photo-1551854716-8b811be39e7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "/placeholder.svg?height=600&width=800",
  "/placeholder.svg?height=600&width=800",
  "/placeholder.svg?height=600&width=800",
]

const testimonials = [
  {
    name: "Priya Sharma",
    date: "June 2023",
    text: "Khushboo and her team made me look absolutely stunning on my wedding day. The makeup was flawless and lasted throughout the day and night. I couldn't have asked for a better experience!",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Anjali Patel",
    date: "March 2023",
    text: "I was nervous about my bridal makeup, but Khushboo understood exactly what I wanted. She enhanced my features while keeping the look natural and elegant. My husband was speechless when he saw me!",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Meera Kapoor",
    date: "December 2022",
    text: "The attention to detail was incredible. From the trial session to the wedding day, everything was perfect. The makeup complemented my outfit beautifully and photographed amazingly well.",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function BridalSection() {
  const [currentImage, setCurrentImage] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % bridalImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + bridalImages.length) % bridalImages.length)
  }

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Bridal Makeup</h2>
          <p className="text-muted-foreground text-lg">
            Your Big Day, Our Expertise – Creating timeless bridal looks that capture your unique beauty.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bridal Gallery */}
          <div className="relative">
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={bridalImages[currentImage] || "/placeholder.svg"}
                alt="Bridal Makeup"
                fill
                className="object-cover"
              />

              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full"
                onClick={prevImage}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full"
                onClick={nextImage}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>

              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {bridalImages.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImage ? "bg-primary w-4" : "bg-background/60"
                    }`}
                    onClick={() => setCurrentImage(index)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="flex flex-col justify-center">
            <div className="relative bg-card rounded-xl p-8 shadow-lg border border-border">
              <Quote className="text-primary/20 h-16 w-16 absolute -top-6 -left-6" />

              <div className="relative">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`transition-opacity duration-500 ${
                      index === currentTestimonial ? "opacity-100" : "opacity-0 absolute top-0 left-0"
                    }`}
                  >
                    <p className="text-lg mb-6">{testimonial.text}</p>
                    <div className="flex items-center">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between mt-8">
                <Button variant="outline" size="icon" onClick={prevTestimonial}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={nextTestimonial}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

