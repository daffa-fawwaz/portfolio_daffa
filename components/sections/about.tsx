import { Card, CardContent } from "@/components/ui/card"

const About = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Tentang Saya</h2>

      <Card className="max-w-3xl mx-auto">
        <CardContent className="pt-6">
          <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
            Saya adalah lulusan pondok pesantren yang memiliki ketertarikan mendalam pada dunia teknologi. Melalui
            pembelajaran otodidak, saya telah mengembangkan keterampilan dalam pengembangan web.
          </p>

          <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
          Fokus utama saya adalah pada pengembangan web menggunakan teknologi seperti Laravel, React, dan berbagai framework modern lainnya. Selain itu, saya juga sedang mempelajari bidang Data Science untuk memperluas kemampuan saya dalam menganalisis data dan membangun solusi berbasis data.
          </p>

          <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
          Saya percaya bahwa kombinasi antara latar belakang pendidikan pesantren dan kemampuan teknologi dapat membawa perspektif unik dalam membangun solusi digital.
          </p>

          <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
            Tujuan saya adalah menggunakan teknologi untuk memberikan manfaat bagi masyarakat dan komunitas. Saya ingin
            membangun aplikasi dan layanan yang dapat membantu menyelesaikan masalah nyata dan meningkatkan kualitas
            hidup orang-orang di sekitar saya.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300">
          Dengan semangat belajar yang tinggi dan keinginan untuk terus berkembang, saya siap menghadapi tantangan baru dalam dunia pengembangan web, mobile, dan data.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default About
