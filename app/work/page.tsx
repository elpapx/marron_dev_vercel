import { Header } from "@/components/header"
import { ProjectCard } from "@/components/project-card"

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-amber-900">
      <Header pageCounter="(2/9)" />

      <main className="container mx-auto px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-amber-800 rounded-lg p-6 flex items-center justify-center min-h-[500px]">
            <div className="text-amber-200 text-center">
              <p className="text-sm mb-4 tracking-wide">ACCELERATED FREE FALL BY TANIA BRUGUERA</p>
              <div className="w-full h-64 bg-amber-700 rounded-lg flex items-center justify-center">
                <span className="text-amber-300">Project Workspace</span>
              </div>
            </div>
          </div>

          <ProjectCard
            title="DOMINGO INMOBILIARIA"
            description="Fullstack website development, featuring dynamic property listings, responsive design, intelligent chatbot integration and Elementor."
            status="Pronto"
            socialLinks={[
              { platform: "Instagram", url: "#" },
              { platform: "Facebook", url: "#" },
            ]}
            tags={["website", "artificial intelligence"]}
          />
        </div>
      </main>
    </div>
  )
}
