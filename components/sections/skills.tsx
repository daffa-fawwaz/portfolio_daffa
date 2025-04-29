import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import SkillBadge from "@/components/skill-badge"

const Skills = () => {
  const programmingSkills = [
    { name: "PHP", level: "intermediate" as const },
    { name: "JavaScript", level: "intermediate" as const },
    { name: "Python", level: "beginner" as const },
    { name: "HTML", level: "advanced" as const },
    { name: "CSS", level: "intermediate" as const },
  ]

  const frameworkSkills = [
    { name: "Laravel", level: "intermediate" as const },
    { name: "React", level: "intermediate" as const },
    { name: "Tailwind CSS", level: "intermediate" as const },
    { name: "Bootstrap", level: "intermediate" as const },
  ]

  const toolSkills = [
    { name: "Git", level: "intermediate" as const },
    { name: "GitHub", level: "intermediate" as const },
    { name: "Postman", level: "intermediate" as const },
    { name: "Figma", level: "beginner" as const },
    { name: "VS Code", level: "advanced" as const },
  ]

  const otherSkills = [
    { name: "REST API", level: "intermediate" as const },
    { name: "Authentication", level: "intermediate" as const },
    { name: "MySQL", level: "intermediate" as const },
    { name: "Payment Integration", level: "beginner" as const },
    { name: "Responsive Design", level: "intermediate" as const },
  ]

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Keterampilan</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Programming</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {programmingSkills.map((skill, index) => (
                <SkillBadge key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Frameworks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {frameworkSkills.map((skill, index) => (
                <SkillBadge key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tools</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {toolSkills.map((skill, index) => (
                <SkillBadge key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Lainnya</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {otherSkills.map((skill, index) => (
                <SkillBadge key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Skills
