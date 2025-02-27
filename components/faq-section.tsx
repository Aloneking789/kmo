"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FaqItemProps {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}

function FaqItem({ question, answer, isOpen, onClick }: FaqItemProps) {
  return (
    <div className="border-b border-border last:border-0">
      <button className="flex justify-between items-center w-full py-4 text-left" onClick={onClick}>
        <h3 className="text-lg font-medium">{question}</h3>
        <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? "transform rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-4" : "max-h-0"}`}>
        <p className="text-muted-foreground">{answer}</p>
      </div>
    </div>
  )
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer a wide range of services including hair styling and treatments, skin and aesthetic treatments, bridal and event makeup, semi-permanent makeup, and professional training through our academy.",
    },
    {
      question: "How far in advance should I book for bridal makeup?",
      answer:
        "We recommend booking your bridal makeup at least 3-6 months in advance, especially during peak wedding season. This allows time for a consultation and trial session to ensure your perfect look on the big day.",
    },
    {
      question: "Do you offer makeup trials for brides?",
      answer:
        "Yes, we highly recommend a makeup trial for all brides. This gives us the opportunity to understand your preferences, skin type, and create a look that perfectly complements your wedding attire and theme.",
    },
    {
      question: "How long does microblading last?",
      answer:
        "Microblading typically lasts between 1-3 years, depending on your skin type, lifestyle, and aftercare. We recommend touch-ups every 12-18 months to maintain the shape and color.",
    },
    {
      question: "What should I do before a skin treatment?",
      answer:
        "Before a skin treatment, we recommend avoiding sun exposure, exfoliation, and active skincare ingredients like retinol for at least 48 hours. Come to your appointment with clean skin, free of makeup. Specific preparations may vary by treatment, which we'll discuss during your consultation.",
    },
    {
      question: "Do you offer gift cards?",
      answer:
        "Yes, we offer gift cards in various denominations that can be used for any of our services. They make perfect gifts for birthdays, anniversaries, or any special occasion.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-lg">
            Find answers to common questions about our services, bookings, and more.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-card rounded-xl p-6 md:p-8 shadow-sm border border-border">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === openIndex}
              onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

