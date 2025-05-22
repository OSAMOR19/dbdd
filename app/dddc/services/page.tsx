import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DDDCServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-desman-blue-800 to-desman-teal-500 text-white">
          <div className="absolute inset-0 bg-[url('/images/dddc-pattern.png')] opacity-10"></div>
          <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Our Services</h1>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Desman Digital Concept offers comprehensive contracting and multimedia solutions
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* General Contracts */}
        <section className="py-12 md:py-24 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-desman-teal-100 dark:bg-desman-teal-900/20 px-3 py-1 text-sm text-desman-blue-800 dark:text-desman-blue-300">
                  Contracting
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-desman-blue-800 dark:text-desman-blue-400">
                  General Contracting Services
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Comprehensive contracting solutions for businesses of all sizes
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image src="/images/portfolio-4.jpg" alt="General Contracting" fill className="object-cover" />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-2xl font-bold text-desman-blue-800 dark:text-desman-blue-400">
                  Comprehensive Contracting Solutions
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our general contracting services provide end-to-end solutions for businesses and organizations of all
                  sizes. We handle everything from project planning and management to execution and delivery, ensuring
                  your projects are completed on time, within budget, and to your specifications.
                </p>
                <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-desman-blue-800 dark:bg-desman-blue-400"></div>
                    Project Planning & Management
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-desman-blue-800 dark:bg-desman-blue-400"></div>
                    Budget Development & Control
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-desman-blue-800 dark:bg-desman-blue-400"></div>
                    Quality Assurance
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-desman-blue-800 dark:bg-desman-blue-400"></div>
                    Timeline Management
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-desman-blue-800 dark:bg-desman-blue-400"></div>
                    Vendor Coordination
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Printing Services */}
        <section className="py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-desman-teal-100 dark:bg-desman-teal-900/20 px-3 py-1 text-sm text-desman-blue-800 dark:text-desman-blue-300">
                  Printing
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-desman-blue-800 dark:text-desman-blue-400">
                  Printing Services
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  High-quality printing solutions for all your needs
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4 md:order-2">
                <h3 className="text-2xl font-bold text-desman-blue-800 dark:text-desman-blue-400">
                  Professional Printing Solutions
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our printing services deliver high-quality materials for marketing, events, and business needs. We
                  offer a wide range of printing options, from business cards and brochures to large format printing and
                  promotional materials, ensuring your printed materials make a lasting impression.
                </p>
                <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-desman-blue-800 dark:bg-desman-blue-400"></div>
                    Business Cards & Stationery
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-desman-blue-800 dark:bg-desman-blue-400"></div>
                    Brochures & Flyers
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-desman-blue-800 dark:bg-desman-blue-400"></div>
                    Posters & Banners
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-desman-blue-800 dark:bg-desman-blue-400"></div>
                    Marketing Materials
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-desman-blue-800 dark:bg-desman-blue-400"></div>
                    Promotional Items
                  </li>
                </ul>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl md:order-1">
                <Image src="/images/portfolio-7.jpg" alt="Printing Services" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Photography & Video */}
        <section className="py-12 md:py-24 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-desman-teal-100 dark:bg-desman-teal-900/20 px-3 py-1 text-sm text-desman-blue-800 dark:text-desman-blue-300">
                  Media
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-desman-blue-800 dark:text-desman-blue-400">
                  Photography & Video Services
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Professional photography and video for events, products, and commercial use
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image src="/images/portfolio-6.jpg" alt="Photography & Video" fill className="object-cover" />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-2xl font-bold text-desman-blue-800 dark:text-desman-blue-400">
                  Comprehensive Media Services
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our photography and video services provide professional coverage for events, products, and commercial
                  use. We capture high-quality images and videos that showcase your brand, products, or events in the
                  best possible light, helping you create a lasting impression with your audience.
                </p>
                <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-desman-blue-800 dark:bg-desman-blue-400"></div>
                    Event Photography & Videography
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-desman-blue-800 dark:bg-desman-blue-400"></div>
                    Product Photography
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-desman-blue-800 dark:bg-desman-blue-400"></div>
                    Commercial Photography & Video
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-desman-blue-800 dark:bg-desman-blue-400"></div>
                    Corporate Portraits
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-desman-blue-800 dark:bg-desman-blue-400"></div>
                    Wedding Photography & Videography
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Dressmaking & Uniforms */}
        <section className="py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-desman-teal-100 dark:bg-desman-teal-900/20 px-3 py-1 text-sm text-desman-blue-800 dark:text-desman-blue-300">
                  Fashion
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-desman-blue-800 dark:text-desman-blue-400">
                  Dressmaking & Uniforms
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Custom uniforms and corporate fashion solutions
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4 md:order-2">
                <h3 className="text-2xl font-bold text-desman-blue-800 dark:text-desman-blue-400">
                  Custom Fashion Solutions
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our dressmaking and uniform services provide custom fashion solutions tailored to your brand identity.
                  We design and create high-quality uniforms and corporate attire that reflect your brand's values and
                  aesthetics, ensuring your team looks professional and cohesive.
                </p>
                <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-desman-blue-800 dark:bg-desman-blue-400"></div>
                    Corporate Uniforms
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-desman-blue-800 dark:bg-desman-blue-400"></div>
                    Event Attire
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-desman-blue-800 dark:bg-desman-blue-400"></div>
                    Custom Dressmaking
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-desman-blue-800 dark:bg-desman-blue-400"></div>
                    Alterations & Repairs
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-desman-blue-800 dark:bg-desman-blue-400"></div>
                    Branded Apparel
                  </li>
                </ul>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl md:order-1">
                <Image src="/images/portfolio-5.jpg" alt="Dressmaking & Uniforms" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Other Services */}
        <section className="py-12 md:py-24 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-desman-teal-100 dark:bg-desman-teal-900/20 px-3 py-1 text-sm text-desman-blue-800 dark:text-desman-blue-300">
                  Additional Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-desman-blue-800 dark:text-desman-blue-400">
                  Additional Services
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Comprehensive solutions to meet all your business needs
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
                <h3 className="text-xl font-bold text-desman-blue-800 dark:text-desman-blue-400 mb-2">
                  Stationery & Branding
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  Complete branding packages including stationery, corporate identity, and design consultation.
                </p>
                <Image
                  src="/images/portfolio-8.jpg"
                  alt="Stationery & Branding"
                  width={300}
                  height={200}
                  className="rounded-lg object-cover aspect-video w-full"
                />
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
                <h3 className="text-xl font-bold text-desman-blue-800 dark:text-desman-blue-400 mb-2">
                  Promotions & Gifts
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  Branded promotional items and corporate gifts to enhance your marketing efforts.
                </p>
                <Image
                  src="/images/portfolio-9.jpg"
                  alt="Promotions & Gifts"
                  width={300}
                  height={200}
                  className="rounded-lg object-cover aspect-video w-full"
                />
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
                <h3 className="text-xl font-bold text-desman-blue-800 dark:text-desman-blue-400 mb-2">
                  Horticulture Services
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  Professional landscaping and plant care for businesses and corporate environments.
                </p>
                <Image
                  src="/images/portfolio-10.jpg"
                  alt="Horticulture Services"
                  width={300}
                  height={200}
                  className="rounded-lg object-cover aspect-video w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-24 bg-gradient-to-r from-desman-blue-800 to-desman-teal-500 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Start Your Project?</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact us today to discuss how Desman Digital Concept can help bring your vision to life.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-desman-blue-800 hover:bg-gray-100">
                  <Link href="/contact?brand=dddc">
                    Contact Us <ArrowRight className="ml-2 h-4 w-4" />
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
