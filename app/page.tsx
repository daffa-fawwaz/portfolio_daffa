import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Projects from "@/components/sections/projects"
import Skills from "@/components/sections/skills"
import Certificates from "@/components/sections/certificates"
import Contact from "@/components/sections/contact"
import Navbar from "@/components/nav-bar"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4">
        <section id="home" className="pt-20">
          <Hero />
        </section>

        <section id="about" className="py-20">
          <About />
        </section>

        <section id="projects" className="py-20">
          <Projects />
        </section>

        <section id="skills" className="py-20">
          <Skills />
        </section>

        <section id="certificates" className="py-20">
          <Certificates />
        </section>

        <section id="contact" className="py-20">
          <Contact />
        </section>
      </div>
    </main>
  )
}
