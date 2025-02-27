import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const permanentMakeupServices = [
  {
    title: "Microblading",
    description: "Achieve natural-looking, fuller eyebrows with our precision microblading technique.",
    image: "https://media.istockphoto.com/id/2149756491/photo/professional-make-up-artist-applying-eyeshadow-with-a-brush.jpg?s=2048x2048&w=is&k=20&c=84vJUxpJqLQ95Qrfsg5xJpogmuEfhAF-kE2oyQR9Jl4=",
    beforeAfter: {
      before: "https://media.istockphoto.com/id/1331637318/photo/portrait-of-young-afro-woman-with-bright-make-up.jpg?s=2048x2048&w=is&k=20&c=bs7AxepekNil1qmk-_7hCsU3rZT6JdPd8O3zgZyVi4c=",
      after: "https://media.istockphoto.com/id/1331637318/photo/portrait-of-young-afro-woman-with-bright-make-up.jpg?s=2048x2048&w=is&k=20&c=bs7AxepekNil1qmk-_7hCsU3rZT6JdPd8O3zgZyVi4c=",
    },
  },
  {
    title: "Lip Tint",
    description: "Enhance your lips with a subtle, long-lasting color that defines and adds volume.",
    image: "https://images.unsplash.com/photo-1605813810260-1330807535bb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    beforeAfter: {
      before: "https://media.istockphoto.com/id/1331637318/photo/portrait-of-young-afro-woman-with-bright-make-up.jpg?s=2048x2048&w=is&k=20&c=bs7AxepekNil1qmk-_7hCsU3rZT6JdPd8O3zgZyVi4c=",
      after: "https://media.istockphoto.com/id/1331637318/photo/portrait-of-young-afro-woman-with-bright-make-up.jpg?s=2048x2048&w=is&k=20&c=bs7AxepekNil1qmk-_7hCsU3rZT6JdPd8O3zgZyVi4c=",
    },
  },
  {
    title: "Permanent Eyeliner",
    description: "Wake up with perfectly defined eyes every day with our permanent eyeliner treatment.",
    image: "https://media.istockphoto.com/id/2149756491/photo/professional-make-up-artist-applying-eyeshadow-with-a-brush.jpg?s=2048x2048&w=is&k=20&c=84vJUxpJqLQ95Qrfsg5xJpogmuEfhAF-kE2oyQR9Jl4=",
    beforeAfter: {
      before: "https://media.istockphoto.com/id/1331637318/photo/portrait-of-young-afro-woman-with-bright-make-up.jpg?s=2048x2048&w=is&k=20&c=bs7AxepekNil1qmk-_7hCsU3rZT6JdPd8O3zgZyVi4c=",
      after: "https://media.istockphoto.com/id/1261302799/photo/portrait-of-beautiful-young-woman-making-make-up-looking-in-the-mirror-and-applying-cosmetic.jpg?s=2048x2048&w=is&k=20&c=61y8EndbMxNpO7LnBN2aOb7xi6WjZ_ioaTIuGsuvh84=",
    },
  },
]

export default function PermanentMakeupSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Semi-Permanent Makeup</h2>
          <p className="text-muted-foreground text-lg">
            Wake up beautiful every day with our long-lasting semi-permanent makeup solutions.
          </p>
        </div>

        <div className="space-y-16">
          {permanentMakeupServices.map((service, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className="text-lg text-muted-foreground">{service.description}</p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="font-medium">Before</p>
                    <div className="relative h-[200px] rounded-lg overflow-hidden">
                      <Image
                        src={service.beforeAfter.before || "/placeholder.svg"}
                        alt={`${service.title} Before`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium">After</p>
                    <div className="relative h-[200px] rounded-lg overflow-hidden">
                      <Image
                        src={service.beforeAfter.after || "/placeholder.svg"}
                        alt={`${service.title} After`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                <Button asChild>
                  <Link href="#book-consultation">Book a Consultation</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

