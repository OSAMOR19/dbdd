import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import desmond from "@/components/image/desmond.jpg"
import banke from "@/components/image/banke.jpg"
export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-dbdd-blue-900 via-desman-blue-800 to-desman-teal-500 text-white">
          <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">About Us</h1>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The story behind DBDD Production House and DDDC
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-12 md:py-24 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm">Our Story</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Two Brands, One Vision</h2>
                <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed">
                  DBDD Production House and DDDC (De-Desman Digital Concept) were founded with a shared vision of
                  providing comprehensive creative and contracting solutions under one unified approach.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  What began as a creative media agency quickly expanded to include general contracting and multimedia
                  services, allowing us to offer end-to-end solutions for businesses of all sizes.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Today, our two connected brands work in synergy to deliver exceptional results across a wide range of
                  services, from photography and film production to general contracts and corporate branding.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-[500px] aspect-video">
                  <Image src="/images/about-story.jpg" alt="Our Story" fill className="object-cover rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission & Vision */}
        <section className="py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Mission & Vision</h2>
                <p className="max-w-[900px] text-gray-500 dark:text-gray-400">Guiding principles that drive our work</p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 md:gap-12">
              <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-950 rounded-xl shadow-sm">
                <div className="inline-block rounded-lg bg-blue-100 dark:bg-blue-900/20 px-3 py-1 text-sm text-blue-900 dark:text-blue-300 mb-4">
                  Our Mission
                </div>
                <h3 className="text-xl font-bold mb-4">
                  To deliver exceptional creative and contracting solutions that help our clients succeed
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We are committed to providing high-quality services that exceed expectations, foster innovation, and
                  create lasting value for our clients. By combining creative excellence with technical expertise, we
                  aim to be the partner of choice for businesses seeking comprehensive solutions.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-950 rounded-xl shadow-sm">
                <div className="inline-block rounded-lg bg-orange-100 dark:bg-orange-900/20 px-3 py-1 text-sm text-orange-500 dark:text-orange-300 mb-4">
                  Our Vision
                </div>
                <h3 className="text-xl font-bold mb-4">
                  To be the leading provider of integrated creative and contracting solutions
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We envision a future where businesses can access all their creative and contracting needs through one
                  trusted partner. By continuously innovating and expanding our capabilities, we aim to set new
                  standards of excellence in our industry and create meaningful impact for our clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-12 md:py-24 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet Our Team</h2>
                <p className="max-w-[900px] text-gray-500 dark:text-gray-400">
                  The talented professionals behind our success
                </p>
              </div>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center">
                <div className="relative w-32 h-32 mb-4">
                  <Image src={desmond} alt="Team Member" fill className="object-cover rounded-full" />
                </div>
                <h3 className="text-xl font-bold">Desmond Agu Enims</h3>
                <p className="text-gray-500 dark:text-gray-400">Founder & CEO</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="relative w-32 h-32 mb-4">
                  <Image src={banke} alt="Team Member" fill className="object-cover rounded-full" />
                </div>
                <h3 className="text-xl font-bold">Banke Agu</h3>
                <p className="text-gray-500 dark:text-gray-400">Creative Director</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="relative w-32 h-32 mb-4">
                  <Image src="/images/team-3.jpg" alt="Team Member" fill className="object-cover rounded-full" />
                </div>
                <h3 className="text-xl font-bold">Michael Johnson</h3>
                <p className="text-gray-500 dark:text-gray-400">Operations Manager</p>
              </div>
              
              
              
              
              <div className="flex flex-col items-center text-center">
                <div className="relative w-32 h-32 mb-4">
                  <Image src="/images/team-8.jpg" alt="Team Member" fill className="object-cover rounded-full" />
                </div>
                <h3 className="text-xl font-bold">Lisa Thompson</h3>
                <p className="text-gray-500 dark:text-gray-400">Marketing Manager</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Values</h2>
                <p className="max-w-[900px] text-gray-500 dark:text-gray-400">
                  The principles that guide our work and relationships
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-950 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-2">Excellence</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We are committed to delivering the highest quality in everything we do, exceeding expectations and
                  setting new standards.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-950 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We embrace creativity and forward-thinking, constantly seeking new ways to solve problems and create
                  value.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-950 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-2">Integrity</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We conduct our business with honesty, transparency, and ethical practices, building trust with our
                  clients and partners.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-950 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-2">Collaboration</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We believe in the power of teamwork, fostering strong relationships with our clients and within our
                  team.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-24 bg-gradient-to-r from-dbdd-blue-900 via-desman-blue-800 to-desman-teal-500 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Our Journey</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Partner with us to bring your vision to life with our comprehensive creative and contracting
                  solutions.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                  <Link href="/contact">
                    Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white text-dbdd-blue-900 hover:bg-gray-100 ">
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
