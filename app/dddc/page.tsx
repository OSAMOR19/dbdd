import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ServiceCard } from "@/components/service-card"
import { PortfolioGallery } from "@/components/portfolio-gallery"

export default function DDDCPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-desman-blue-800 to-desman-teal-500 text-white">
          <div className="absolute inset-0 bg-[url('/images/dddc-pattern.png')] opacity-10"></div>
          <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-white/10 backdrop-blur-sm px-3 py-1 text-sm">
                  Desman Digital Concept
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Comprehensive Contracting & Multimedia Solutions
                </h1>
                <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Desman Digital Concept provides general contracting, printing services, photography, dressmaking,
                  stationery, promotions, horticulture, and advertising solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-white text-desman-blue-800 hover:bg-gray-100">
                    <Link href="/dddc/services">
                      Our Services <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                    <Link href="/contact?brand=dddc">Contact Us</Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-[500px] aspect-video">
                  <Image
                    src="/images/dddc-showcase.jpg"
                    alt="DDDC Services Showcase"
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
                <div className="inline-block rounded-lg bg-desman-teal-100 dark:bg-desman-teal-900/20 px-3 py-1 text-sm text-desman-blue-800 dark:text-desman-blue-300">
                  Our Expertise
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-desman-blue-800 dark:text-desman-blue-400">
                  Comprehensive Services
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  End-to-end contracting and multimedia solutions for your business
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                title="General Contracts"
                description="Comprehensive contracting services for businesses and organizations of all sizes."
                icon="FileContract"
                color="orange"
                expanded
              />
              <ServiceCard
                title="Printing Services"
                description="High-quality printing solutions for marketing materials, publications, and promotional items."
                icon="Printer"
                color="orange"
                expanded
              />
              <ServiceCard
                title="Photography & Video"
                description="Professional photography and video coverage for events, products, and commercial use."
                icon="Camera"
                color="orange"
                expanded
              />
              <ServiceCard
                title="Dressmaking & Uniforms"
                description="Custom uniforms and corporate fashion solutions tailored to your brand identity."
                icon="Scissors"
                color="orange"
                expanded
              />
              <ServiceCard
                title="Stationery & Branding"
                description="Complete branding packages including stationery, corporate identity, and design consultation."
                icon="PenTool"
                color="orange"
                expanded
              />
              <ServiceCard
                title="Promotions & Gifts"
                description="Branded promotional items and corporate gifts to enhance your marketing efforts."
                icon="Gift"
                color="orange"
                expanded
              />
              <ServiceCard
                title="Horticulture Services"
                description="Professional landscaping and plant care for businesses and corporate environments."
                icon="Flower"
                color="orange"
                expanded
              />
              <ServiceCard
                title="Advertising & Commercials"
                description="Comprehensive advertising solutions and commercial production for your brand."
                icon="Megaphone"
                color="orange"
                expanded
              />
              <div className="flex flex-col items-center justify-center p-6 bg-desman-teal-50 dark:bg-desman-teal-900/10 rounded-xl text-center">
                <h3 className="text-xl font-bold text-desman-blue-800 dark:text-desman-blue-400 mb-2">
                  Need a Custom Solution?
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  We can tailor our services to meet your specific requirements.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-desman-blue-800 text-desman-blue-800 hover:bg-desman-teal-100 dark:border-desman-blue-400 dark:text-desman-blue-400 dark:hover:bg-desman-teal-900/20"
                >
                  <Link href="/contact?brand=dddc">Get in Touch</Link>
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
                <div className="inline-block rounded-lg bg-desman-teal-100 dark:bg-desman-teal-900/20 px-3 py-1 text-sm text-desman-blue-800 dark:text-desman-blue-300">
                  Our Work
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-desman-blue-800 dark:text-desman-blue-400">
                  Featured Projects
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  A showcase of our recent contracting and multimedia work
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <PortfolioGallery brand="dddc" />
              <div className="flex justify-center mt-8">
                <Button
                  asChild
                  className="bg-desman-blue-800 hover:bg-desman-blue-700 dark:bg-desman-blue-700 dark:hover:bg-desman-blue-600"
                >
                  <Link href="/portfolio?filter=dddc">
                    View All DDDC Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-12 md:py-24 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-desman-teal-100 dark:bg-desman-teal-900/20 px-3 py-1 text-sm text-desman-blue-800 dark:text-desman-blue-300">
                  Who We Serve
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-desman-blue-800 dark:text-desman-blue-400">
                  Industries We Serve
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Providing solutions across diverse sectors
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
                <h3 className="text-xl font-bold text-desman-blue-800 dark:text-desman-blue-400 mb-2">Corporate</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Comprehensive solutions for corporate environments and businesses.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
                <h3 className="text-xl font-bold text-desman-blue-800 dark:text-desman-blue-400 mb-2">Education</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Tailored services for schools, universities, and educational institutions.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
                <h3 className="text-xl font-bold text-desman-blue-800 dark:text-desman-blue-400 mb-2">Hospitality</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Solutions for hotels, restaurants, and hospitality businesses.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
                <h3 className="text-xl font-bold text-desman-blue-800 dark:text-desman-blue-400 mb-2">Healthcare</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Specialized services for hospitals, clinics, and healthcare providers.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
                <h3 className="text-xl font-bold text-desman-blue-800 dark:text-desman-blue-400 mb-2">Retail</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Comprehensive solutions for retail stores and shopping centers.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
                <h3 className="text-xl font-bold text-desman-blue-800 dark:text-desman-blue-400 mb-2">Government</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Specialized services for government agencies and public institutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-24 bg-gradient-to-r from-desman-blue-800 to-desman-teal-500 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Transform Your Business?</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Let's collaborate to bring your vision to life with Desman Digital Concept's comprehensive solutions.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-desman-blue-800 hover:bg-gray-100">
                  <Link href="/contact?brand=dddc">
                    Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link href="/portfolio?filter=dddc">View Our Portfolio</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
