import CertificateCard from "@/components/certificate-card"

const Certificates = () => {
  const certificates = [
    {
      title: "Belajar Dasar Pemrograman Web",
      issuer: "Dicoding Indonesia",
      date: "Januari 2025",
      credentialLink: "https://www.dicoding.com/certificates/EYX4G757WZDL",
      imageSrc: "/dasar-web.png?height=200&width=400",
    },
    {
      title: "Belajar Dasar Pemrograman Javascript",
      issuer: "Dicoding Indonesia",
      date: "Januari 2025",
      credentialLink: "https://www.dicoding.com/certificates/72ZD5ORR9ZYW",
      imageSrc: "/dasar-js.png?height=200&width=400",
    },
    {
      title: "Belajar Fundamental Frontend Web Developmet",
      issuer: "Dicoding Indonesia",
      date: "Januari 2025",
      credentialLink: "https://www.dicoding.com/certificates/4EXGVGVKDXRL",
      imageSrc: "/fundamental-fe.png?height=200&width=400",
    },
    {
      title: "Belajar Backend Pemula dengan Javascript",
      issuer: "Dicoding Indonesia",
      date: "Januari 2025",
      credentialLink: "https://www.dicoding.com/certificates/RVZKWJGENZD5",
      imageSrc: "/be-pemula.png?height=200&width=400",
    },
  ]

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Sertifikat</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {certificates.map((certificate, index) => (
          <CertificateCard
            key={index}
            title={certificate.title}
            issuer={certificate.issuer}
            date={certificate.date}
            credentialLink={certificate.credentialLink}
            imageSrc={certificate.imageSrc}
          />
        ))}
      </div>
    </div>
  )
}

export default Certificates
