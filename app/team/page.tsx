import { Header } from "@/components/header"
import { TeamMember } from "@/components/team-member"

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="border-2 border-blue-500 min-h-screen">
        <Header />

        <main className="container mx-auto px-8 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl text-amber-100 font-light leading-tight">
              (multi-
              <br />
              talented team)
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <TeamMember name="Cristian Madalengoitia" role="Design director, brand consultant and programmer;" />

            <TeamMember
              name="Jorge Madalengoitia"
              role="Full-stack developer and project manager;"
              linkedIn="https://linkedin.com/in/jorge-madalengoitia"
            />

            <TeamMember name="Paul Camacho" role="PhD Economist, data scientist and programmer;" />
          </div>
        </main>
      </div>
    </div>
  )
}
