import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-dbdd-blue-900 via-desman-blue-800 to-desman-teal-500 text-white">
          <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Privacy Policy</h1>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  How we collect, use, and protect your information
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-12 md:py-24 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Introduction</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  This Privacy Policy explains how DBDD Production House and Desman Digital Concept (collectively "we",
                  "us", or "our") collect, use, and share information about you when you use our website, services, or
                  otherwise interact with us.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  We respect your privacy and are committed to protecting your personal data. Please read this Privacy
                  Policy carefully to understand our practices regarding your personal data.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Information We Collect</h2>
                <p className="text-gray-500 dark:text-gray-400">We may collect the following types of information:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-500 dark:text-gray-400">
                  <li>
                    Personal Information: Name, email address, phone number, and other contact details you provide when
                    contacting us or using our services.
                  </li>
                  <li>Business Information: Company name, job title, and business contact information.</li>
                  <li>
                    Technical Information: IP address, browser type and version, time zone setting, browser plug-in
                    types and versions, operating system, and platform.
                  </li>
                  <li>Usage Information: Information about how you use our website and services.</li>
                  <li>Marketing Information: Your preferences in receiving marketing from us and our third parties.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">How We Use Your Information</h2>
                <p className="text-gray-500 dark:text-gray-400">We use your information for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-500 dark:text-gray-400">
                  <li>To provide and maintain our services</li>
                  <li>To notify you about changes to our services</li>
                  <li>To allow you to participate in interactive features of our services</li>
                  <li>To provide customer support</li>
                  <li>To gather analysis or valuable information so that we can improve our services</li>
                  <li>To monitor the usage of our services</li>
                  <li>To detect, prevent and address technical issues</li>
                  <li>
                    To provide you with news, special offers and general information about other goods, services and
                    events which we offer
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Information Sharing and Disclosure</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  We may share your information with the following parties and in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-500 dark:text-gray-400">
                  <li>With service providers who perform services for us</li>
                  <li>With business partners with whom we jointly offer products or services</li>
                  <li>When required by law or to respond to legal process</li>
                  <li>To protect our rights, property, or safety, or that of our users or others</li>
                  <li>In connection with a business transaction such as a merger, acquisition, or sale of assets</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Your Rights</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Depending on your location, you may have certain rights regarding your personal information,
                  including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-500 dark:text-gray-400">
                  <li>The right to access your personal information</li>
                  <li>The right to rectify inaccurate personal information</li>
                  <li>The right to request the deletion of your personal information</li>
                  <li>The right to restrict the processing of your personal information</li>
                  <li>The right to data portability</li>
                  <li>The right to object to the processing of your personal information</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Data Security</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  We have implemented appropriate technical and organizational measures to protect your personal
                  information from unauthorized access, use, disclosure, alteration, or destruction. However, no method
                  of transmission over the Internet or method of electronic storage is 100% secure, and we cannot
                  guarantee absolute security.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Changes to This Privacy Policy</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the
                  new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy
                  Policy.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Contact Us</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-500 dark:text-gray-400">
                  <li>By email: privacy@dbdd-dddc.com</li>
                  <li>By phone: +1 (123) 456-7890</li>
                  <li>By mail: 123 Business Avenue, Suite 456, City, State 12345</li>
                </ul>
              </div>

              <div className="pt-4">
                <Button asChild variant="outline">
                  <Link href="/contact">Contact Us With Questions</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
