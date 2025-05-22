import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DBDDServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-dbdd-blue-900 to-dbdd-blue-400 text-white">
          <div className="absolute inset-0 bg-[url('/images/dbdd-pattern.png')] opacity-10"></div>
          <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Our Services</h1>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  DBDD Production House offers comprehensive creative media and digital solutions
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Photography Services */}
        <section className="py-12 md:py-24 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-dbdd-blue-100 dark:bg-dbdd-blue-900/20 px-3 py-1 text-sm text-dbdd-blue-900 dark:text-dbdd-blue-300">
                  Photography
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-dbdd-blue-900 dark:text-dbdd-blue-400">
                  Professional Photography Services
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Capturing moments with precision and creativity
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image src="/images/portfolio-1.jpg" alt="Professional Photography" fill className="object-cover" />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-2xl font-bold text-dbdd-blue-900 dark:text-dbdd-blue-400">
                  Comprehensive Photography Solutions
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our photography services cover a wide range of needs, from corporate events and product photography to
                  portraits and commercial shoots. We use state-of-the-art equipment and techniques to deliver
                  high-quality images that meet your specific requirements.
                </p>
                <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-dbdd-blue-900 dark:bg-dbdd-blue-400"></div>
                    Corporate Event Photography
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-dbdd-blue-900 dark:bg-dbdd-blue-400"></div>
                    Product Photography
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-dbdd-blue-900 dark:bg-dbdd-blue-400"></div>
                    Portrait Photography
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-dbdd-blue-900 dark:bg-dbdd-blue-400"></div>
                    Commercial Photography
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-dbdd-blue-900 dark:bg-dbdd-blue-400"></div>
                    Wedding Photography
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Film Production */}
        <section className="py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-dbdd-blue-100 dark:bg-dbdd-blue-900/20 px-3 py-1 text-sm text-dbdd-blue-900 dark:text-dbdd-blue-300">
                  Film Production
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-dbdd-blue-900 dark:text-dbdd-blue-400">
                  Professional Film & Video Production
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  End-to-end video production services for all your needs
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4 md:order-2">
                <h3 className="text-2xl font-bold text-dbdd-blue-900 dark:text-dbdd-blue-400">
                  Comprehensive Video Production
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our film production services cover everything from pre-production planning to post-production editing.
                  We create high-quality videos for commercials, documentaries, corporate videos, and more, ensuring
                  your message is conveyed effectively through compelling visual storytelling.
                </p>
                <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-dbdd-blue-900 dark:bg-dbdd-blue-400"></div>
                    Commercial Video Production
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-dbdd-blue-900 dark:bg-dbdd-blue-400"></div>
                    Documentary Filmmaking
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-dbdd-blue-900 dark:bg-dbdd-blue-400"></div>
                    Corporate Videos
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-dbdd-blue-900 dark:bg-dbdd-blue-400"></div>
                    Event Videography
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-dbdd-blue-900 dark:bg-dbdd-blue-400"></div>
                    Aerial Videography
                  </li>
                </ul>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl md:order-1">
                <Image src="/images/portfolio-3.jpg" alt="Film Production" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Digital Content Creation */}
        <section className="py-12 md:py-24 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-dbdd-blue-100 dark:bg-dbdd-blue-900/20 px-3 py-1 text-sm text-dbdd-blue-900 dark:text-dbdd-blue-300">
                  Digital Content
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-dbdd-blue-900 dark:text-dbdd-blue-400">
                  Digital Content Creation
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Creative digital solutions for web, social media, and marketing
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image src="/images/portfolio-8.jpg" alt="Digital Content Creation" fill className="object-cover" />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-2xl font-bold text-dbdd-blue-900 dark:text-dbdd-blue-400">
                  Engaging Digital Content
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our digital content creation services help you engage your audience across various platforms. We
                  create compelling content for websites, social media, email marketing, and more, ensuring your brand
                  message is consistent and effective across all digital channels.
                </p>
                <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-dbdd-blue-900 dark:bg-dbdd-blue-400"></div>
                    Social Media Content
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-dbdd-blue-900 dark:bg-dbdd-blue-400"></div>
                    Website Graphics
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-dbdd-blue-900 dark:bg-dbdd-blue-400"></div>
                    Email Marketing Visuals
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-dbdd-blue-900 dark:bg-dbdd-blue-400"></div>
                    Digital Advertisements
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-dbdd-blue-900 dark:bg-dbdd-blue-400"></div>
                    Infographics & Data Visualization
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
                <div className="inline-block rounded-lg bg-dbdd-blue-100 dark:bg-dbdd-blue-900/20 px-3 py-1 text-sm text-dbdd-blue-900 dark:text-dbdd-blue-300">
                  Printing
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-dbdd-blue-900 dark:text-dbdd-blue-400">
                  Printing Services
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  High-quality printing solutions for all your needs
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4 md:order-2">
                <h3 className="text-2xl font-bold text-dbdd-blue-900 dark:text-dbdd-blue-400">
                  Professional Printing Solutions
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our printing services deliver high-quality materials for marketing, events, and business needs. We
                  offer a wide range of printing options, from business cards and brochures to large format printing and
                  promotional materials, ensuring your printed materials make a lasting impression.
                </p>
                <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-dbdd-blue-900 dark:bg-dbdd-blue-400"></div>
                    Business Cards & Stationery
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-dbdd-blue-900 dark:bg-dbdd-blue-400"></div>
                    Brochures & Flyers
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-dbdd-blue-900 dark:bg-dbdd-blue-400"></div>
                    Posters & Banners
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-dbdd-blue-900 dark:bg-dbdd-blue-400"></div>
                    Marketing Materials
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-dbdd-blue-900 dark:bg-dbdd-blue-400"></div>
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

        {/* Technical Consultation */}
        <section className="py-12 md:py-24 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-dbdd-blue-100 dark:bg-dbdd-blue-900/20 px-3 py-1 text-sm text-dbdd-blue-900 dark:text-dbdd-blue-300">
                  Consultation
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-dbdd-blue-900 dark:text-dbdd-blue-400">
                  Technical Consultation
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Expert advice on media technology and creative strategy
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image src="/images/portfolio-2.jpg" alt="Technical Consultation" fill className="object-cover" />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-2xl font-bold text-dbdd-blue-900 dark:text-dbdd-blue-400">
                  Expert Technical Guidance
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our technical consultation services provide expert advice on media technology, digital solutions, and
                  creative strategy. We help you navigate the complex world of media production, ensuring you make
                  informed decisions about equipment, software, and workflows to achieve your creative vision.
                </p>
                <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-dbdd-blue-900 dark:bg-dbdd-blue-400"></div>
                    Equipment Selection & Setup
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-dbdd-blue-900 dark:bg-dbdd-blue-400"></div>
                    Workflow Optimization
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-dbdd-blue-900 dark:bg-dbdd-blue-400"></div>
                    Software Recommendations
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-dbdd-blue-900 dark:bg-dbdd-blue-400"></div>
                    Technical Training
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-dbdd-blue-900 dark:bg-dbdd-blue-400"></div>
                    Project Planning & Execution
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-24 bg-gradient-to-r from-dbdd-blue-900 to-dbdd-blue-400 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Start Your Project?</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact us today to discuss how DBDD Production House can help bring your creative vision to life.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-dbdd-blue-900 hover:bg-gray-100">
                  <Link href="/contact?brand=dbdd">
                    Contact Us <ArrowRight className="ml-2 h-4 w-4" />
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
