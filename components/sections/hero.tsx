import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Github, Linkedin, Mail, FileText } from "lucide-react"

const Hero = () => {
  return (
    <div className="min-h-[90vh] flex flex-col md:flex-row items-center justify-center gap-8 py-12 lg:mr-20">
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700">
          <img src="/pp.jpeg?height=320&width=320" alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white">Daffa Fawwaz</h1>

        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-lg">
        Saya Muhammad Daffa I F, seorang lulusan pesantren yang mengembangkan keterampilan otodidak dalam pengembangan web dan ilmu data. Saya berkomitmen untuk menciptakan solusi digital inovatif yang berdampak positif bagi masyarakat.
        </p>

        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <Button asChild variant="outline" className="gap-2">
            <Link href="/cv.pdf" target="_blank">
              <FileText className="h-4 w-4" />
              CV
            </Link>
          </Button>

          <Button asChild variant="outline" className="gap-2">
            <Link href="https://github.com/daffa-fawwaz" target="_blank">
              <Github className="h-4 w-4" />
              GitHub
            </Link>
          </Button>

          <Button asChild variant="outline" className="gap-2">
            <Link href="https://www.linkedin.com/in/daffa-fawwaz-17b77528a/" target="_blank">
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </Link>
          </Button>

          <Button asChild variant="outline" className="gap-2">
            <Link href="mailto:daffafawwaz532@gmail.com">
              <Mail className="h-4 w-4" />
              Email
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Hero
