"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function BrandSelector() {
  const [activeTab, setActiveTab] = useState("dbdd")

  return (
    <Tabs defaultValue="dbdd" onValueChange={setActiveTab} className="w-full">
      <div className="flex justify-center mb-8">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="dbdd" className="data-[state=active]:bg-dbdd-blue-900 data-[state=active]:text-white">
            DBDD Production House
          </TabsTrigger>
          <TabsTrigger value="dddc" className="data-[state=active]:bg-desman-blue-800 data-[state=active]:text-white">
            Desman Digital Concept
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="dbdd" className="mt-0">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-blue-100 dark:bg-blue-900/20 px-3 py-1 text-sm text-blue-900 dark:text-blue-300">
              DBDD Production House
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-blue-900 dark:text-blue-400">
              Creative Media & Digital Excellence
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              DBDD Production House specializes in photography, film production, digital content creation, printing
              services, and technical consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="bg-dbdd-blue-900 hover:bg-dbdd-blue-800 dark:bg-dbdd-blue-700 dark:hover:bg-dbdd-blue-600"
              >
                <Link href="/dbdd">
                  Explore DBDD <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-dbdd-blue-900 text-dbdd-blue-900 hover:bg-dbdd-blue-100 dark:border-dbdd-blue-400 dark:text-dbdd-blue-400 dark:hover:bg-dbdd-blue-900/20"
              >
                <Link href="/portfolio?filter=dbdd">View Portfolio</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-[500px] aspect-video">
              <Image
                src="/images/dbdd-preview.jpg"
                alt="DBDD Production House"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="dddc" className="mt-0">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-blue-100 dark:bg-blue-900/20 px-3 py-1 text-sm text-blue-800 dark:text-blue-300">
              Desman Digital Concept
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-blue-800 dark:text-blue-400">
              Comprehensive Contracting & Multimedia Solutions
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Desman Digital Concept provides general contracting, printing services, photography, dressmaking,
              stationery, promotions, horticulture, and advertising solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="bg-desman-blue-800 hover:bg-desman-blue-700 dark:bg-desman-blue-700 dark:hover:bg-desman-blue-600"
              >
                <Link href="/dddc">
                  Explore DDDC <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-desman-blue-800 text-desman-blue-800 hover:bg-desman-teal-100 dark:border-desman-blue-400 dark:text-desman-blue-400 dark:hover:bg-desman-blue-900/20"
              >
                <Link href="/portfolio?filter=dddc">View Portfolio</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-[500px] aspect-video">
              <Image src="/images/dddc-preview.jpg" alt="DDDC" fill className="object-cover rounded-xl" />
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  )
}
