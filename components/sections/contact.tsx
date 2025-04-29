import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

const Contact = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Kontak</h2>

      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Hubungi Saya</CardTitle>
          <CardDescription>
            Tertarik untuk berkolaborasi atau memiliki pertanyaan? Jangan ragu untuk menghubungi saya melalui salah satu
            platform berikut:
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <Button asChild variant="outline" className="w-full justify-start gap-2">
            <Link href="mailto:daffafawwaz532@gmail.com">
              <Mail className="h-4 w-4" />
              daffafawwaz532@gmail.com
            </Link>
          </Button>

          <Button asChild variant="outline" className="w-full justify-start gap-2">
            <Link href="https://www.linkedin.com/in/daffa-fawwaz-17b77528a/" target="_blank">
              <Linkedin className="h-4 w-4" />
              https://www.linkedin.com/in/daffa-fawwaz
            </Link>
          </Button>

          <Button asChild variant="outline" className="w-full justify-start gap-2">
            <Link href="https://github.com/daffa-fawwaz" target="_blank">
              <Github className="h-4 w-4" />
              github.com/daffa-fawwaz
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default Contact
