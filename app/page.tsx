import Link from "next/link"
import Image from "next/image"
import { ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ServiceCard } from "@/components/service-card"
import { BrandSelector } from "@/components/brand-selector"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
          <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm">
                  Two Brands. One Vision.
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Creative Excellence & Digital Innovation
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Discover the synergy of DBDD Production House and Desman Digital Concept, where creative media meets
                  comprehensive contracting solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-dbdd-blue-900 to-dbdd-blue-400 hover:from-dbdd-blue-800 hover:to-dbdd-blue-300"
                  >
                    <Link href="/dbdd">
                      Explore DBDD <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-desman-blue-800 to-desman-teal-500 hover:from-desman-blue-700 hover:to-desman-teal-400"
                  >
                    <Link href="/dddc">
                      Explore Desman <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-[750px] aspect-video">
                  <Image
                    src="/images/hero-image.png"
                    alt="DBDD & DDDC Creative Showcase"
                    fill
                    className="object-cover rounded-xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Selector */}
        <section className="py-12 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <BrandSelector />
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Comprehensive solutions across media production and general contracting
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="grid gap-6">
                <div className="flex items-center space-x-2">
                  <div className="h-1 w-12 bg-gradient-to-r from-dbdd-blue-900 to-dbdd-blue-400"></div>
                  <h3 className="text-xl font-bold text-dbdd-blue-900 dark:text-dbdd-blue-400">
                    DBDD Production House
                  </h3>
                </div>
                <div className="grid gap-4">
                  <ServiceCard
                    title="Photography"
                    description="Professional photography services for events, products, and commercial use."
                    icon="Camera"
                    color="blue"
                  />
                  <ServiceCard
                    title="Film Production"
                    description="End-to-end film and video production for commercials, documentaries, and corporate videos."
                    icon="Video"
                    color="blue"
                  />
                  <ServiceCard
                    title="Digital Content Creation"
                    description="Creative digital content for web, social media, and marketing campaigns."
                    icon="Laptop"
                    color="blue"
                  />
                  <ServiceCard
                    title="Printing Services"
                    description="High-quality printing solutions for marketing materials and publications."
                    icon="Printer"
                    color="blue"
                  />
                  <ServiceCard
                    title="Technical Consultation"
                    description="Expert advice on media technology and digital solutions."
                    icon="Lightbulb"
                    color="blue"
                  />
                </div>
              </div>
              <div className="grid gap-6">
                <div className="flex items-center space-x-2">
                  <div className="h-1 w-12 bg-gradient-to-r from-desman-blue-800 to-desman-teal-500"></div>
                  <h3 className="text-xl font-bold text-desman-blue-800 dark:text-desman-blue-400">
                    Desman Digital Concept
                  </h3>
                </div>
                <div className="grid gap-4">
                  <ServiceCard
                    title="General Contracts"
                    description="Comprehensive contracting services for businesses and organizations."
                    icon="FileContract"
                    color="teal"
                  />
                  <ServiceCard
                    title="Dressmaking & Uniforms"
                    description="Custom uniforms and corporate fashion solutions."
                    icon="Scissors"
                    color="teal"
                  />
                  <ServiceCard
                    title="Stationery & Branding"
                    description="Complete branding packages including stationery and corporate identity."
                    icon="PenTool"
                    color="teal"
                  />
                  <ServiceCard
                    title="Promotions & Gifts"
                    description="Branded promotional items and corporate gifts."
                    icon="Gift"
                    color="teal"
                  />
                  <ServiceCard
                    title="Horticulture Services"
                    description="Professional landscaping and plant care for businesses."
                    icon="Flower"
                    color="teal"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <Button asChild variant="outline" size="lg">
                <Link href="/services">
                  View All Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Portfolio Preview */}
        <section className="py-12 md:py-24 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Work</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  A showcase of our recent projects across both brands
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100 z-10"></div>
                <Image
                  src="/images/portfolio-1.jpg"
                  alt="Professional Photography"
                  width={400}
                  height={300}
                  className="h-60 w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-full transition-transform group-hover:translate-y-0 z-20">
                  <div className="text-xs font-medium uppercase tracking-wider text-dbdd-blue-400">DBDD</div>
                  <h3 className="text-lg font-medium">Professional Photography</h3>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100 z-10"></div>
                <Image
                  src="/images/portfolio-4.jpg"
                  alt="Event Planning & Decoration"
                  width={400}
                  height={300}
                  className="h-60 w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-full transition-transform group-hover:translate-y-0 z-20">
                  <div className="text-xs font-medium uppercase tracking-wider text-desman-teal-400">Desman</div>
                  <h3 className="text-lg font-medium">Event Planning & Decoration</h3>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100 z-10"></div>
                <Image
                  src="/images/portfolio-9.jpg"
                  alt="Wedding Photography & Planning"
                  width={400}
                  height={300}
                  className="h-60 w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-full transition-transform group-hover:translate-y-0 z-20">
                  <div className="text-xs font-medium uppercase tracking-wider text-dbdd-blue-400">DBDD & Desman</div>
                  <h3 className="text-lg font-medium">Wedding Photography & Planning</h3>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <Button asChild variant="outline" size="lg">
                <Link href="/portfolio">
                  View Full Portfolio <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-24 bg-gradient-to-r from-dbdd-blue-900 via-dbdd-blue-600 to-desman-teal-500">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Transform Your Brand?</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Let's collaborate to bring your vision to life with our comprehensive creative and contracting
                  solutions.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-dbdd-blue-900 hover:bg-gray-100">
                  <Link href="/contact">
                    Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white text-dbdd-blue-900 hover:bg-gray-100">
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
