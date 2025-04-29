import { Badge } from "@/components/ui/badge"

interface SkillBadgeProps {
  name: string
  level?: "beginner" | "intermediate" | "advanced"
}

const SkillBadge = ({ name, level = "intermediate" }: SkillBadgeProps) => {
  const getVariant = () => {
    switch (level) {
      case "beginner":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
      case "intermediate":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
      case "advanced":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100"
    }
  }

  return <Badge className={`${getVariant()} hover:bg-opacity-80 transition-all`}>{name}</Badge>
}

export default SkillBadge
