import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ServiceCard } from "@/components/service-card"
import { PortfolioGallery } from "@/components/portfolio-gallery"

export default function DBDDPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-dbdd-blue-900 to-dbdd-blue-400 text-white">
          <div className="absolute inset-0 bg-[url('/images/dbdd-pattern.png')] opacity-10"></div>
          <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-dbdd-blue-100/10 backdrop-blur-sm px-3 py-1 text-sm">
                  DBDD Production House
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Creative Media & Digital Excellence
                </h1>
                <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  DBDD Production House specializes in photography, film production, digital content creation, printing
                  services, and technical consultation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-white text-dbdd-blue-900 hover:bg-gray-100">
                    <Link href="/dbdd/services">
                      Our Services <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                    <Link href="/contact?brand=dbdd">Contact Us</Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-[500px] aspect-video">
                  <Image
                    src="/images/dbdd-showcase.jpg"
                    alt="DBDD Production Showcase"
                    fill
                    className="object-cover rounded-xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 md:py-24 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-dbdd-blue-100 dark:bg-dbdd-blue-900/20 px-3 py-1 text-sm text-dbdd-blue-900 dark:text-dbdd-blue-300">
                  Our Expertise
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-dbdd-blue-900 dark:text-dbdd-blue-400">
                  Creative Services
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Comprehensive media and digital solutions for your brand
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                title="Photography"
                description="Professional photography for corporate events, products, portraits, and commercial use."
                icon="Camera"
                color="blue"
                expanded
              />
              <ServiceCard
                title="Film Production"
                description="End-to-end film and video production for commercials, documentaries, and corporate videos."
                icon="Video"
                color="blue"
                expanded
              />
              <ServiceCard
                title="Digital Content Creation"
                description="Creative digital content for web, social media, and marketing campaigns."
                icon="Laptop"
                color="blue"
                expanded
              />
              <ServiceCard
                title="Printing Services"
                description="High-quality printing solutions for marketing materials, publications, and promotional items."
                icon="Printer"
                color="blue"
                expanded
              />
              <ServiceCard
                title="Technical Consultation"
                description="Expert advice on media technology, digital solutions, and creative strategy."
                icon="Lightbulb"
                color="blue"
                expanded
              />
              <div className="flex flex-col items-center justify-center p-6 bg-dbdd-blue-50 dark:bg-dbdd-blue-900/10 rounded-xl text-center">
                <h3 className="text-xl font-bold text-dbdd-blue-900 dark:text-dbdd-blue-400 mb-2">
                  Need a Custom Solution?
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  We can tailor our services to meet your specific requirements.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-dbdd-blue-900 text-dbdd-blue-900 hover:bg-dbdd-blue-100 dark:border-dbdd-blue-400 dark:text-dbdd-blue-400 dark:hover:bg-dbdd-blue-900/20"
                >
                  <Link href="/contact?brand=dbdd">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-dbdd-blue-100 dark:bg-dbdd-blue-900/20 px-3 py-1 text-sm text-dbdd-blue-900 dark:text-dbdd-blue-300">
                  Our Work
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-dbdd-blue-900 dark:text-dbdd-blue-400">
                  Featured Projects
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  A showcase of our recent creative work
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <PortfolioGallery brand="dbdd" />
              <div className="flex justify-center mt-8">
                <Button
                  asChild
                  className="bg-dbdd-blue-900 hover:bg-dbdd-blue-800 dark:bg-dbdd-blue-700 dark:hover:bg-dbdd-blue-600"
                >
                  <Link href="/portfolio?filter=dbdd">
                    View All DBDD Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-12 md:py-24 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-dbdd-blue-100 dark:bg-dbdd-blue-900/20 px-3 py-1 text-sm text-dbdd-blue-900 dark:text-dbdd-blue-300">
                  Our Approach
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-dbdd-blue-900 dark:text-dbdd-blue-400">
                  Creative Process
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  How we bring your vision to life
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-dbdd-blue-100 dark:bg-dbdd-blue-900/20 text-dbdd-blue-900 dark:text-dbdd-blue-400 mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-dbdd-blue-900 dark:text-dbdd-blue-400 mb-2">Discovery</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We learn about your brand, goals, and vision to create a tailored approach.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-dbdd-blue-100 dark:bg-dbdd-blue-900/20 text-dbdd-blue-900 dark:text-dbdd-blue-400 mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-dbdd-blue-900 dark:text-dbdd-blue-400 mb-2">Concept</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We develop creative concepts and strategies aligned with your objectives.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-dbdd-blue-100 dark:bg-dbdd-blue-900/20 text-dbdd-blue-900 dark:text-dbdd-blue-400 mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-dbdd-blue-900 dark:text-dbdd-blue-400 mb-2">Creation</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our team brings the concept to life with expert execution and attention to detail.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-dbdd-blue-100 dark:bg-dbdd-blue-900/20 text-dbdd-blue-900 dark:text-dbdd-blue-400 mb-4">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold text-dbdd-blue-900 dark:text-dbdd-blue-400 mb-2">Delivery</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We deliver the final product and ensure it meets your expectations and objectives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-24 bg-gradient-to-r from-dbdd-blue-900 to-dbdd-blue-400 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Create Something Amazing?</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Let's collaborate to bring your creative vision to life with DBDD Production House.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-dbdd-blue-900 hover:bg-gray-100">
                  <Link href="/contact?brand=dbdd">
                    Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link href="/portfolio?filter=dbdd">View Our Portfolio</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
