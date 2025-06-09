"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Image from "next/image"
import dbdd from "@/components/image/dbbddlogo.svg"

export function MainNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/dbdd",
      label: "DBDD",
      active: pathname === "/dbdd" || pathname.startsWith("/dbdd/"),
    },
    {
      href: "/dddc",
      label: "Desman",
      active: pathname === "/dddc" || pathname.startsWith("/dddc/"),
    },
    {
      href: "/portfolio",
      label: "Portfolio",
      active: pathname === "/portfolio",
    },
    {
      href: "/about",
      label: "About",
      active: pathname === "/about",
    },
    {
      href: "/contact",
      label: "Contact",
      active: pathname === "/contact",
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Left Logo */}
        <div className="flex items-center">
          <Link href="/" className="hidden md:flex items-center">
            <Image 
              src="/images/dbdd-logo.png" 
              alt="DBDD Logo" 
              width={70} 
              height={35} 
              className="object-contain" 
            />
          </Link>
        </div>
        
        {/* Centered Navigation */}
        <nav className="hidden gap-6 md:flex justify-center">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                route.active ? "text-foreground" : "text-foreground/60 hover:text-foreground/80",
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>
        
        {/* Right Logo and Controls */}
        <div className="flex items-center gap-4">
          <Link href="/" className="hidden md:flex items-center">
            <Image 
              src="/images/dddc-logo.png" 
              alt="DDDC Logo" 
              width={40} 
              height={40} 
              className="object-contain" 
            />
          </Link>
          <ModeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" className="rounded-full">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>DBDD & Desman</SheetTitle>
                <SheetDescription>Creative Media & Digital Solutions</SheetDescription>
              </SheetHeader>
              <div className="flex justify-between items-center py-4">
                <Image src="/images/dbdd-logo.png" alt="DBDD Logo" width={70} height={35} className="object-contain" />
                <Image src="/images/dddc-logo.png" alt="DDDC Logo" width={40} height={40} className="object-contain" />
              </div>
              <nav className="flex flex-col gap-4 pt-2">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      route.active ? "text-foreground" : "text-foreground/60 hover:text-foreground/80",
                    )}
                  >
                    {route.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
