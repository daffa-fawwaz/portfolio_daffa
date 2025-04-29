import ProjectCard from "@/components/project-card"

const Projects = () => {
  const projects = [
    {
      title: "SiWarga – Aplikasi Pengaduan Masyarakat",
      description:
        "Aplikasi yang memudahkan masyarakat untuk melaporkan keluhan dan pengaduan kepada pemerintah setempat secara efisien dan transparan.",
      role: "Backend Developer (Laravel) – handle authentication, CRUD operations, email notifications.",
      technologies: ["Laravel 12", "REST API", "MySQL", "Google OAuth"],
      demoLink: "https://siwarga-demo.example.com",
      githubLink: "https://github.com/daffa-fawwaz/pengaduan-masyarakat",
      imageSrc: "/siwarga.png?height=300&width=600",
    },
    {
      title: "Budgetin App",
      description:
        "Aplikasi pengelolaan keuangan yang membantu pengguna melacak pengeluaran, membuat anggaran, dan mencapai tujuan keuangan mereka.aplikasi ini juga menyediakan fitur penilaian keuangan (financial score) yang mengklasifikasikan kondisi keuangan pengguna ke dalam kategori baik, standar, atau kurang sehat",
      role: "Full Stack Developer – mengembangkan fitur frontend dan backend, Restful API.",
      technologies: ["React", "Laravel", "MySQL", "REST API", "Google OAuth"],
      demoLink: "https://budget-app-demo.example.com",
      githubLink: "https://github.com/mraihanaf/capstone-fintech-budgeting-app",
      imageSrc: "/budgetin.png?height=300&width=600",
    },
    {
      title: "MovieApp",
      description:
        "Aplikasi pencarian dan informasi film yang menggunakan data dari TheMovieDB API untuk menampilkan film terbaru, detail film, dan ulasan.",
      role: "Frontend Developer – membuat UI responsif dan integrasi API.",
      technologies: ["React", "TheMovieDB API", "Tailwind CSS"],
      githubLink: "https://github.com/daffa-fawwaz/movie-app",
      imageSrc: "/movieapp.png?height=300&width=600",
    },
  ]

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Proyek Unggulan</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            role={project.role}
            technologies={project.technologies}
            githubLink={project.githubLink}
            imageSrc={project.imageSrc}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects
