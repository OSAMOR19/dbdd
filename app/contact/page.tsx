"use client"

import type React from "react"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const searchParams = useSearchParams()
  const initialBrand = searchParams.get("brand") || "both"
  const [selectedBrand, setSelectedBrand] = useState(initialBrand)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert("Thank you for your message. We will get back to you soon!")
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-dbdd-blue-900 via-desman-blue-800 to-desman-teal-500 text-white">
          <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Contact Us</h1>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get in touch with our team to discuss your project
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-12 md:py-24 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get in Touch</h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="brand">Which brand would you like to contact?</Label>
                    <RadioGroup
                      defaultValue={selectedBrand}
                      onValueChange={setSelectedBrand}
                      className="flex flex-col space-y-1"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="both" id="both" />
                        <Label htmlFor="both" className="font-normal">
                          Both DBDD & DDDC
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="dbdd" id="dbdd" />
                        <Label htmlFor="dbdd" className="font-normal">
                          DBDD Production House
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="dddc" id="dddc" />
                        <Label htmlFor="dddc" className="font-normal">
                          DDDC (De-Desman Digital Concept)
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First name</Label>
                      <Input id="first-name" placeholder="Enter your first name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last name</Label>
                      <Input id="last-name" placeholder="Enter your last name" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Enter your email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="Enter your phone number" type="tel" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select defaultValue="general">
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="quote">Request a Quote</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                        <SelectItem value="support">Support</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Enter your message" className="min-h-[150px]" required />
                  </div>
                  <Button
                    type="submit"
                    className={
                      selectedBrand === "dbdd"
                        ? "w-full bg-gradient-to-r from-dbdd-blue-900 to-dbdd-blue-400 hover:from-dbdd-blue-800 hover:to-dbdd-blue-300"
                        : selectedBrand === "dddc"
                          ? "w-full bg-gradient-to-r from-desman-blue-800 to-desman-teal-500 hover:from-desman-blue-700 hover:to-desman-teal-400"
                          : "w-full bg-gradient-to-r from-dbdd-blue-900 via-desman-blue-800 to-desman-teal-500"
                    }
                  >
                    Send Message <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Contact Information</h2>
                  <p className="text-gray-500 dark:text-gray-400">You can also reach us using the information below.</p>
                </div>
                <div className="grid gap-4">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <MapPin className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                        <div>
                          <h3 className="text-xl font-bold">Our Location</h3>
                          <p className="text-gray-500 dark:text-gray-400">123 Business Avenue</p>
                          <p className="text-gray-500 dark:text-gray-400">Suite 456</p>
                          <p className="text-gray-500 dark:text-gray-400">City, State 12345</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Phone className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                        <div>
                          <h3 className="text-xl font-bold">Phone</h3>
                          <p className="text-gray-500 dark:text-gray-400">DBDD: +1 (123) 456-7890</p>
                          <p className="text-gray-500 dark:text-gray-400">DDDC: +1 (123) 456-7891</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Mail className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                        <div>
                          <h3 className="text-xl font-bold">Email</h3>
                          <p className="text-gray-500 dark:text-gray-400">DBDD: info@dbdd.space</p>
                          <p className="text-gray-500 dark:text-gray-400">DDDC: info@dddc.space</p>
                          <p className="text-gray-500 dark:text-gray-400">General: hr@dbdd.space</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Business Hours</h3>
                  <p className="text-gray-500 dark:text-gray-400">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-500 dark:text-gray-400">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-gray-500 dark:text-gray-400">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Location</h2>
                <p className="max-w-[900px] text-gray-500 dark:text-gray-400">Visit us at our office</p>
              </div>
            </div>
            <div className="aspect-video w-full rounded-xl overflow-hidden">
              {/* Placeholder for map - in a real implementation, you would use Google Maps or similar */}
              <div className="w-full h-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400">Interactive Map Would Be Embedded Here</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
