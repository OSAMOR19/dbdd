import { Camera, Video, Laptop, Printer, Lightbulb, FileText, Scissors, PenTool, Gift, Flower } from "lucide-react"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  color: "blue" | "teal"
}

export function ServiceCard({ title, description, icon, color }: ServiceCardProps) {
  const getIcon = (): JSX.Element => {
    const iconProps = {
      className: cn(
        "h-10 w-10",
        color === "blue"
          ? "text-dbdd-blue-600 dark:text-dbdd-blue-400"
          : "text-desman-teal-600 dark:text-desman-teal-400",
      ),
    }

    switch (icon) {
      case "Camera":
        return <Camera {...iconProps} />
      case "Video":
        return <Video {...iconProps} />
      case "Laptop":
        return <Laptop {...iconProps} />
      case "Printer":
        return <Printer {...iconProps} />
      case "Lightbulb":
        return <Lightbulb {...iconProps} />
      case "FileContract":
        return <FileText {...iconProps} />
      case "Scissors":
        return <Scissors {...iconProps} />
      case "PenTool":
        return <PenTool {...iconProps} />
      case "Gift":
        return <Gift {...iconProps} />
      case "Flower":
        return <Flower {...iconProps} />
      default:
        return <Lightbulb {...iconProps} />
    }
  }

  return (
    <div
      className={cn(
        "flex flex-col gap-2 rounded-lg border p-4 transition-all hover:shadow-md",
        color === "blue"
          ? "hover:border-dbdd-blue-400 dark:hover:border-dbdd-blue-600"
          : "hover:border-desman-teal-400 dark:hover:border-desman-teal-600",
      )}
    >
      <div className="flex items-center gap-4">
        {getIcon()}
        <h3
          className={cn(
            "text-lg font-semibold",
            color === "blue"
              ? "text-dbdd-blue-900 dark:text-dbdd-blue-400"
              : "text-desman-blue-800 dark:text-desman-teal-400",
          )}
        >
          {title}
        </h3>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  )
}
