"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Neha Sharma",
    image: "https://www.istockphoto.com/photo/woman-in-bright-sari-dress-gm1166129176-321112965",
    rating: 5,
    text: "The team at KM OrgaTonics is simply amazing! I've been coming here for over a year now, and every experience has been exceptional. The attention to detail and personalized service is unmatched.",
  },
  {
    name: "Raj Malhotra",
    image: "https://www.istockphoto.com/photo/handsome-man-in-casual-clothing-gm1201024669-344239300",
    rating: 5,
    text: "I was hesitant to try a new salon, but KM OrgaTonics exceeded all my expectations. The staff is professional, the ambiance is luxurious, and the results are outstanding. Highly recommend!",
  },
  {
    name: "Ananya Patel",
    image: "https://www.istockphoto.com/photo/portrait-of-beautiful-indian-girl-in-heritage-stepwell-wearing-traditional-indian-gm1296829495-390127702",
    rating: 4,
    text: "I had my bridal makeup done here and couldn't have been happier. Khushboo understood exactly what I wanted and made me look like the best version of myself. My makeup lasted all day and photographed beautifully.",
  },
  {
    name: "Vikram Singh",
    image: "https://www.istockphoto.com/photo/portrait-of-beautiful-indian-girl-in-heritage-stepwell-wearing-traditional-indian-gm1296829495-390127702",
    rating: 5,
    text: "The haircut and styling I received was perfect. The stylist took the time to understand what I wanted and offered suggestions to enhance my look. Will definitely be returning!",
  },
  {
    name: "Priya Kapoor",
    image: "https://www.istockphoto.com/photo/businesswoman-with-arms-crossed-standing-on-white-background-gm1633543792-532692788",
    rating: 5,
    text: "I've had several skin treatments here and have seen remarkable improvements. The aestheticians are knowledgeable and use top-quality products. The results speak for themselves!",
  },
  {
    name: "Arjun Mehta",
    image: "https://www.istockphoto.com/photo/positively-charming-gm691882846-127631599",
    rating: 4,
    text: "Great service and atmosphere. The team is friendly and professional. I've recommended KM OrgaTonics to all my friends and family.",
  },
]

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (containerRef.current) {
      const scrollPosition = activeIndex * (containerRef.current.scrollWidth / testimonials.length)
      containerRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      })
    }
  }, [activeIndex])

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <div className="flex justify-center items-center mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="ml-2 text-lg font-medium">4.9 out of 5</span>
          </div>
          <p className="text-muted-foreground text-lg">Based on 200+ Google Reviews</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div ref={containerRef} className="flex overflow-x-hidden snap-x snap-mandatory">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-full snap-center px-4">
                <div className="bg-card rounded-xl p-6 md:p-8 shadow-sm border border-border">
                  <div className="flex items-center mb-4">
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
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-lg">{testimonial.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex ? "bg-primary w-4" : "bg-muted-foreground/30"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

