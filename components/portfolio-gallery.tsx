"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface PortfolioGalleryProps {
  brand: "dbdd" | "dddc" | "all"
  expanded?: boolean
}

interface PortfolioItem {
  id: string
  title: string
  category: string
  brand: "dbdd" | "dddc"
  image: string
  description: string
}

export function PortfolioGallery({ brand, expanded = false }: PortfolioGalleryProps) {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)

  // Portfolio items with real images
  const portfolioItems: PortfolioItem[] = [
    {
      id: "1",
      title: "Professional Photography Studio",
      category: "Photography",
      brand: "dbdd",
      image: "/images/portfolio-1.jpg",
      description:
        "Our professional photography studio setup with state-of-the-art equipment for portrait and product photography.",
    },
    {
      id: "2",
      title: "Professional Studio Equipment",
      category: "Photography",
      brand: "dbdd",
      image: "/images/portfolio-2.jpg",
      description:
        "High-end photography equipment setup in our studio, featuring professional lighting, camera, and tethering systems.",
    },
    {
      id: "3",
      title: "Aviation Photography",
      category: "Photography",
      brand: "dbdd",
      image: "/images/portfolio-3.jpg",
      description:
        "Specialized aviation photography services capturing aircraft in dramatic silhouette against the sky.",
    },
    {
      id: "4",
      title: "Luxury Event Planning",
      category: "Events",
      brand: "dddc",
      image: "/images/portfolio-4.jpg",
      description:
        "Elegant outdoor celebration setup with custom floral arrangements, balloon decorations, and premium table settings.",
    },
    {
      id: "5",
      title: "Wedding Dress Photography",
      category: "Wedding",
      brand: "dbdd",
      image: "/images/portfolio-5.jpg",
      description: "Artistic wedding dress photography capturing the elegance and detail of bridal fashion.",
    },
    {
      id: "6",
      title: "Wedding Photography",
      category: "Wedding",
      brand: "dbdd",
      image: "/images/portfolio-6.jpg",
      description: "Intimate black and white wedding photography capturing the special moments between couples.",
    },
    {
      id: "7",
      title: "Wedding Floral Design",
      category: "Wedding",
      brand: "dddc",
      image: "/images/portfolio-7.jpg",
      description:
        "Custom wedding floral arrangements and bouquets designed to complement the couple's style and venue.",
    },
    {
      id: "8",
      title: "Bridal Portrait Photography",
      category: "Wedding",
      brand: "dbdd",
      image: "/images/portfolio-8.jpg",
      description: "Artistic bridal portrait photography highlighting the beauty of the bride and her bouquet.",
    },
    {
      id: "9",
      title: "Autumn Wedding Setup",
      category: "Wedding",
      brand: "dddc",
      image: "/images/portfolio-9.jpg",
      description: "Seasonal wedding planning and photography with autumn-themed decorations and natural settings.",
    },
    {
      id: "10",
      title: "Engagement Photography",
      category: "Photography",
      brand: "dbdd",
      image: "/images/portfolio-10.jpg",
      description:
        "Natural light engagement photography in outdoor settings, capturing authentic moments between couples.",
    },
    {
      id: "11",
      title: "Corporate Event Planning",
      category: "Events",
      brand: "dddc",
      image: "/images/portfolio-4.jpg",
      description:
        "Comprehensive corporate event planning including venue decoration, catering coordination, and photography.",
    },
    {
      id: "12",
      title: "Commercial Photography",
      category: "Photography",
      brand: "dbdd",
      image: "/images/portfolio-2.jpg",
      description:
        "Professional commercial photography services for products, marketing materials, and corporate branding.",
    },
  ]

  // Filter items based on brand
  const filteredItems = brand === "all" ? portfolioItems : portfolioItems.filter((item) => item.brand === brand)

  // Limit items unless expanded
  const displayedItems = expanded ? filteredItems : filteredItems.slice(0, 6)

  return (
    <div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {displayedItems.map((item) => (
          <Dialog key={item.id}>
            <DialogTrigger asChild>
              <div
                className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100 z-10"></div>
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="h-60 w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-full transition-transform group-hover:translate-y-0 z-20">
                  <div
                    className={`text-xs font-medium uppercase tracking-wider ${
                      item.brand === "dbdd" ? "text-dbdd-blue-400" : "text-desman-teal-400"
                    }`}
                  >
                    {item.brand === "dbdd" ? "DBDD" : "DESMAN"} • {item.category}
                  </div>
                  <h3 className="text-lg font-medium">{item.title}</h3>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>{item.title}</DialogTitle>
                <DialogDescription>
                  <span
                    className={`text-xs font-medium uppercase tracking-wider ${
                      item.brand === "dbdd"
                        ? "text-dbdd-blue-600 dark:text-dbdd-blue-400"
                        : "text-desman-blue-800 dark:text-desman-blue-400"
                    }`}
                  >
                    {item.brand === "dbdd" ? "DBDD Production House" : "Desman Digital Concept"} • {item.category}
                  </span>
                </DialogDescription>
              </DialogHeader>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
              </div>
              <p className="text-gray-500 dark:text-gray-400">{item.description}</p>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  )
}
