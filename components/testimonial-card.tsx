import { QuoteIcon } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  company: string
  brand: "DBDD" | "DDDC" | "Both"
}

export function TestimonialCard({ quote, author, company, brand }: TestimonialCardProps) {
  const colorClasses = {
    DBDD: {
      bg: "bg-dbdd-blue-50 dark:bg-dbdd-blue-900/10",
      border: "border-dbdd-blue-200 dark:border-dbdd-blue-800",
      quote: "text-dbdd-blue-900 dark:text-dbdd-blue-400",
    },
    DDDC: {
      bg: "bg-desman-teal-50 dark:bg-desman-teal-900/10",
      border: "border-desman-blue-200 dark:border-desman-blue-800",
      quote: "text-desman-blue-800 dark:text-desman-blue-400",
    },
    Both: {
      bg: "bg-gradient-to-br from-dbdd-blue-50 to-desman-teal-50 dark:from-dbdd-blue-900/10 dark:to-desman-teal-900/10",
      border: "border-gray-200 dark:border-gray-800",
      quote: "text-gray-900 dark:text-gray-100",
    },
  }

  return (
    <div className={`flex flex-col p-6 ${colorClasses[brand].bg} ${colorClasses[brand].border} border rounded-xl`}>
      <QuoteIcon className={`h-6 w-6 mb-4 ${colorClasses[brand].quote}`} />
      <p className="text-gray-700 dark:text-gray-300 mb-4">{quote}</p>
      <div className="mt-auto">
        <p className="font-bold">{author}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{company}</p>
      </div>
    </div>
  )
}
