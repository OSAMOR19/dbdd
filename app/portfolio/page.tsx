"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PortfolioGallery } from "@/components/portfolio-gallery"
import { useSearchParams } from "next/navigation"

export default function PortfolioPage() {
  const searchParams = useSearchParams()
  const initialFilter = searchParams.get("filter") || "all"
  const [activeTab, setActiveTab] = useState(initialFilter)

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-dbdd-blue-900 via-desman-blue-800 to-desman-teal-500 text-white">
          <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Our Portfolio</h1>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our creative work and comprehensive solutions across both brands
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Gallery */}
        <section className="py-12 md:py-24 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-3">
                  <TabsTrigger value="all">All Projects</TabsTrigger>
                  <TabsTrigger value="dbdd" className="text-blue-900 dark:text-blue-400">
                    DBDD
                  </TabsTrigger>
                  <TabsTrigger value="dddc" className="text-orange-500 dark:text-orange-400">
                    DDDC
                  </TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="all" className="mt-0">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter">All Projects</h2>
                    <p className="max-w-[900px] text-gray-500 dark:text-gray-400">
                      A comprehensive showcase of our work across both brands
                    </p>
                  </div>
                </div>
                <PortfolioGallery brand="all" expanded />
              </TabsContent>
              <TabsContent value="dbdd" className="mt-0">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter text-dbdd-blue-900 dark:text-dbdd-blue-400">
                      DBDD Projects
                    </h2>
                    <p className="max-w-[900px] text-gray-500 dark:text-gray-400">
                      Creative media and digital production work by DBDD Production House
                    </p>
                  </div>
                </div>
                <PortfolioGallery brand="dbdd" expanded />
              </TabsContent>
              <TabsContent value="dddc" className="mt-0">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter text-desman-blue-800 dark:text-desman-blue-400">
                      DDDC Projects
                    </h2>
                    <p className="max-w-[900px] text-gray-500 dark:text-gray-400">
                      Contracting and multimedia solutions by De-Desman Digital Concept
                    </p>
                  </div>
                </div>
                <PortfolioGallery brand="dddc" expanded />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Start Your Project?</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Let's collaborate to bring your vision to life with our comprehensive creative and contracting
                  solutions.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-gradient-to-r from-dbdd-blue-900 to-dbdd-blue-400 hover:from-dbdd-blue-800 hover:to-dbdd-blue-300"
                >
                  <Link href="/contact?brand=dbdd">Contact DBDD</Link>
                </Button>
                <Button
                  asChild
                  className="bg-gradient-to-r from-desman-blue-800 to-desman-teal-500 hover:from-desman-blue-700 hover:to-desman-teal-400"
                >
                  <Link href="/contact?brand=dddc">Contact DDDC</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
