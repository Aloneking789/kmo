import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/placeholder.svg?height=40&width=180"
                alt="KM OrgaTonics"
                width={180}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-muted-foreground mb-6">Redefining Beauty & Aesthetics – Where Science Meets Glamour</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#book" className="text-muted-foreground hover:text-primary transition-colors">
                  Book Now
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span className="text-muted-foreground">Gorakhpur, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-2" />
                <span className="text-muted-foreground">+91 8100295721</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-2" />
                <span className="text-muted-foreground">info@kmorgatonics.com</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <div className="text-muted-foreground">
                  <p>Mon-Sat: 10:00 AM - 8:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Instagram Feed</h3>
            <div className="grid grid-cols-3 gap-2">
              {[...Array(6)].map((_, index) => (
                <Link href="#" key={index} className="block relative aspect-square rounded-md overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=100&width=100`}
                    alt="Instagram post"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} KM OrgaTonics. All rights reserved.</p>
          <p className="mt-2">Designed with ❤️ by Your Name/Agency</p>
        </div>
      </div>
    </footer>
  )
}

