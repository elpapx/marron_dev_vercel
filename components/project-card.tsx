interface ProjectCardProps {
  title: string
  subtitle?: string
  description: string
  tags?: string[]
  status?: string
  socialLinks?: { platform: string; url: string }[]
}

export function ProjectCard({ title, subtitle, description, tags = [], status, socialLinks = [] }: ProjectCardProps) {
  return (
    <div className="bg-amber-50 p-8 rounded-lg min-h-[600px] flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold text-amber-900 mb-2">{title}</h2>
        {subtitle && <p className="text-amber-700 mb-6">{subtitle}</p>}

        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-4xl font-light text-amber-800 mb-4">({title.toLowerCase()})</h3>
            {status && <p className="text-amber-700 font-medium">{status}</p>}
          </div>

          <div className="flex justify-center space-x-8 text-sm text-amber-600">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.url} className="hover:text-amber-800 transition-colors">
                {link.platform}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8">
        <p className="text-sm text-amber-700 leading-relaxed">{description}</p>
        {tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span key={index} className="text-xs text-amber-600 bg-amber-100 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
