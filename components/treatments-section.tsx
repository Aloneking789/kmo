import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const treatments = [
  {
    title: "Non-invasive Facelifts",
    description: "Achieve a youthful appearance without surgery using our advanced non-invasive facelift techniques.",
    image: "https://media.istockphoto.com/id/1415194574/photo/beautician-in-gloves-does-a-facial-treatment-with-an-ultrasonic-spatula-for-a-woman.jpg?s=2048x2048&w=is&k=20&c=9YlMhtRP2S7r6YeGHA_dApKO7O-nInBWNU4j1SGlnO0=",
  },
  {
    title: "Skin Rejuvenation & Pigmentation Correction",
    description: "Restore your skin's natural glow and even out skin tone with our specialized treatments.",
    image: "https://media.istockphoto.com/id/1403501432/photo/laser-procedures-ideas-caucasian-woman-getting-cosmetology-laser-facial-beauty-treatment.jpg?s=2048x2048&w=is&k=20&c=uitBtPdH-mmh41NAqyCqrW73rCiOyNh4mvqV9jzK3Ek=",
  },
  {
    title: "Microneedling & Permanent Makeup Solutions",
    description: "Stimulate collagen production and enhance your features with our precision techniques.",
    image: "https://media.istockphoto.com/id/1459673225/photo/permanent-makeup-artist-shows-sterile-needle-to-a-client.jpg?s=2048x2048&w=is&k=20&c=4qDlAuST882x6A2mawMK45SPcIpmg3pU47AVk7SV4XY=",
  },
]

export default function TreatmentsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced Aesthetic Treatments</h2>
          <p className="text-muted-foreground text-lg">
            Discover our innovative treatments designed to enhance your natural beauty using the latest technology and
            techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64">
                <Image
                  src={treatment.image || "/placeholder.svg"}
                  alt={treatment.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{treatment.title}</h3>
                <p className="text-muted-foreground mb-4">{treatment.description}</p>
                <Button asChild variant="outline">
                  <Link href="#learn-more">Learn More</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

