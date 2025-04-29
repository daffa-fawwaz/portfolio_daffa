import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  role: string
  technologies: string[]
  demoLink?: string
  githubLink?: string
  imageSrc: string
}

const ProjectCard = ({ title, description, role, technologies, demoLink, githubLink, imageSrc }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative h-48 w-full">
        <img src={imageSrc || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
      </div>

      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent className="flex-grow">
        <div className="mb-4">
          <h4 className="font-semibold mb-1">Peran:</h4>
          <p className="text-gray-700 dark:text-gray-300">{role}</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Teknologi:</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex gap-2">
        {githubLink && (
          <Button asChild variant="outline" size="sm" className="gap-1">
            <Link href={githubLink} target="_blank">
              <Github className="h-4 w-4" />
              GitHub
            </Link>
          </Button>
        )}

        {demoLink && (
          <Button asChild variant="outline" size="sm" className="gap-1">
            <Link href={demoLink} target="_blank">
              <ExternalLink className="h-4 w-4" />
              Demo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

export default ProjectCard
