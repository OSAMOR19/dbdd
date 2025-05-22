import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container grid gap-8 py-8 md:grid-cols-2 lg:grid-cols-4 lg:py-12">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/dbdd-logo.png" alt="DBDD Logo" width={120} height={40} />
            </Link>
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/dddc-logo.png" alt="DDDC Logo" width={40} height={40} />
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            Comprehensive creative media and contracting solutions for businesses of all sizes.
          </p>
          <div className="flex gap-2 mt-2">
            <Link
              href="#"
              className="rounded-full p-2 bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-blue-600 dark:hover:text-blue-500"
            >
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="#"
              className="rounded-full p-2 bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-blue-400 dark:hover:text-blue-400"
            >
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="#"
              className="rounded-full p-2 bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-pink-600 dark:hover:text-pink-500"
            >
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="#"
              className="rounded-full p-2 bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-blue-700 dark:hover:text-blue-600"
            >
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
        <div className="grid gap-2">
          <h3 className="text-lg font-semibold">DBDD Production House</h3>
          <ul className="grid gap-2 text-sm text-muted-foreground">
            <li>
              <Link href="/dbdd" className="hover:underline">
                Overview
              </Link>
            </li>
            <li>
              <Link href="/dbdd/services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="/portfolio?filter=dbdd" className="hover:underline">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact?brand=dbdd" className="hover:underline">
                Contact DBDD
              </Link>
            </li>
          </ul>
        </div>
        <div className="grid gap-2">
          <h3 className="text-lg font-semibold">Desman Digital Concept</h3>
          <ul className="grid gap-2 text-sm text-muted-foreground">
            <li>
              <Link href="/dddc" className="hover:underline">
                Overview
              </Link>
            </li>
            <li>
              <Link href="/dddc/services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="/portfolio?filter=dddc" className="hover:underline">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact?brand=dddc" className="hover:underline">
                Contact DDDC
              </Link>
            </li>
          </ul>
        </div>
        <div className="grid gap-2">
          <h3 className="text-lg font-semibold">Company</h3>
          <ul className="grid gap-2 text-sm text-muted-foreground">
            <li>
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/about#team" className="hover:underline">
                Our Team
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:underline">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container flex flex-col gap-2 py-4 md:h-14 md:flex-row md:items-center md:justify-between md:py-0">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} DBDD & DDDC. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 md:justify-end">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:underline">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:underline">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
