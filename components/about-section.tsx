import Image from "next/image"

const teamMembers = [
  {
    name: "Khushboo Mishra",
    role: "Founder & Lead Stylist",
    bio: "With over 15 years of experience, Khushboo is a master of her craft and has worked with numerous celebrities.",
    image: "/KHUSBU.png?height=400&width=400",
  },
  {
    name: "XYZ",
    role: "Senior Makeup Artist",
    bio: "Specializing in bridal makeup, Priya brings 8 years of experience and a passion for creating timeless looks.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "XYZ",
    role: "Hair Specialist",
    bio: "Rahul is known for his innovative cutting techniques and color transformations that enhance natural beauty.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "XYZ",
    role: "Skin Therapist",
    bio: "With advanced training in aesthetics, Anjali specializes in non-invasive treatments for all skin types.",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About KM OrgaTonics</h2>
          <p className="text-muted-foreground text-lg">Our story, mission, and the talented team behind our success.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Story</h3>
            <p className="text-lg">
              Founded in 2015 by Khushboo Mishra, KM OrgaTonics began as a small makeup studio with a big vision. Today,
              we've grown into a premier beauty destination offering a comprehensive range of services.
            </p>
            <p className="text-lg">
              Our journey has been marked by continuous innovation, learning, and a commitment to excellence. We've had
              the privilege of working with celebrities, brides, and clients from all walks of life, each experience
              adding to our expertise.
            </p>

            <h3 className="text-2xl font-bold pt-4">Our Mission</h3>
            <p className="text-lg">
              At KM OrgaTonics, we believe that beauty is not just about looking good, but feeling confident and
              empowered. Our mission is to enhance your natural beauty while providing a luxurious, personalized
              experience.
            </p>
            <p className="text-lg">
              We are committed to using premium products, staying at the forefront of beauty trends, and continuously
              expanding our knowledge to offer you the best services possible.
            </p>
          </div>

          <div className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/KHUSBU.PNG?height=800&width=600"
                alt="KM OrgaTonics Salon"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -top-6 -left-6 h-24 w-24 bg-secondary rounded-full"></div>
            <div className="absolute -bottom-6 -right-6 h-16 w-16 bg-primary rounded-full"></div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-center mb-12">Meet Our Team</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold">{member.name}</h4>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

