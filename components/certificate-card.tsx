import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

interface CertificateCardProps {
  title: string
  issuer: string
  date: string
  credentialLink?: string
  imageSrc: string
}

const CertificateCard = ({ title, issuer, date, credentialLink, imageSrc }: CertificateCardProps) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative h-40 w-full">
        <img src={imageSrc || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
      </div>

      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{issuer}</CardDescription>
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="text-sm text-gray-600 dark:text-gray-400">{date}</p>
      </CardContent>

      {credentialLink && (
        <CardFooter>
          <Button asChild variant="outline" size="sm" className="gap-1">
            <Link href={credentialLink} target="_blank">
              <ExternalLink className="h-4 w-4" />
              Lihat Kredensial
            </Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}

export default CertificateCard
