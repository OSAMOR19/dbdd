import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-dbdd-blue-900 via-desman-blue-800 to-desman-teal-500 text-white">
          <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Terms of Service</h1>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The terms and conditions governing your use of our services
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Terms of Service Content */}
        <section className="py-12 md:py-24 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Introduction</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  These Terms of Service ("Terms") govern your use of the website and services provided by DBDD
                  Production House and Desman Digital Concept (collectively "we", "us", or "our"). By accessing or using
                  our website and services, you agree to be bound by these Terms.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Please read these Terms carefully before using our services. If you do not agree to these Terms, you
                  may not access or use our services.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Use of Services</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Our services are provided for your personal and commercial use, subject to these Terms. You agree to
                  use our services only for lawful purposes and in accordance with these Terms.
                </p>
                <p className="text-gray-500 dark:text-gray-400">You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-500 dark:text-gray-400">
                  <li>Use our services in any way that violates any applicable law or regulation</li>
                  <li>
                    Use our services for the purpose of exploiting, harming, or attempting to exploit or harm minors
                  </li>
                  <li>
                    Attempt to gain unauthorized access to any portion of our services, other accounts, computer
                    systems, or networks connected to our services
                  </li>
                  <li>
                    Engage in any conduct that restricts or inhibits anyone's use or enjoyment of our services, or which
                    may harm us or users of our services
                  </li>
                  <li>Use our services to transmit any material that is unlawful, harmful, threatening, or abusive</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Intellectual Property</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Our website and services, including all content, features, and functionality, are owned by us, our
                  licensors, or other providers and are protected by copyright, trademark, and other intellectual
                  property laws.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly
                  perform, republish, download, store, or transmit any of the material on our website, except as
                  follows:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-500 dark:text-gray-400">
                  <li>
                    Your computer may temporarily store copies of such materials incidental to your accessing and
                    viewing those materials
                  </li>
                  <li>
                    You may store files that are automatically cached by your web browser for display enhancement
                    purposes
                  </li>
                  <li>
                    You may print or download one copy of a reasonable number of pages of the website for your own
                    personal, non-commercial use and not for further reproduction, publication, or distribution
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">User Content</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Our services may allow you to submit, upload, publish, or otherwise make available content, including
                  but not limited to text, photographs, videos, and other materials ("User Content").
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  You retain all rights in, and are solely responsible for, the User Content you make available through
                  our services. You represent and warrant that:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-500 dark:text-gray-400">
                  <li>
                    You own the User Content or have the right to use it and grant us the rights and license as provided
                    in these Terms
                  </li>
                  <li>
                    The User Content does not violate the privacy rights, publicity rights, copyrights, contract rights,
                    or any other rights of any person or entity
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Payment Terms</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Certain services may require payment. By using our paid services, you agree to pay all fees and
                  charges associated with your account on a timely basis and in the currency specified.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  We reserve the right to change our prices at any time. If we change our prices, we will provide notice
                  of the change on the website or by email, at our option.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Limitation of Liability</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  To the fullest extent permitted by applicable law, we shall not be liable for any indirect,
                  incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether
                  incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses,
                  resulting from:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-500 dark:text-gray-400">
                  <li>Your access to or use of or inability to access or use our services</li>
                  <li>Any conduct or content of any third party on our services</li>
                  <li>Any content obtained from our services</li>
                  <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Indemnification</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  You agree to defend, indemnify, and hold us harmless from and against any claims, liabilities,
                  damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees)
                  arising out of or relating to your violation of these Terms or your use of our services.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Termination</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  We may terminate or suspend your access to our services immediately, without prior notice or
                  liability, for any reason whatsoever, including without limitation if you breach these Terms.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  All provisions of the Terms which by their nature should survive termination shall survive
                  termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and
                  limitations of liability.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Changes to Terms</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
                  revision is material, we will try to provide at least 30 days' notice prior to any new terms taking
                  effect. What constitutes a material change will be determined at our sole discretion.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Contact Us</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  If you have any questions about these Terms, please contact us:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-500 dark:text-gray-400">
                  <li>By email: legal@dbdd-dddc.com</li>
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
