import { Header } from "@/components/header"
import { TeamMember } from "@/components/team-member"

export function TeamSection() {
  return (
    <div className="w-screen h-screen bg-amber-900 flex-shrink-0">
      <div className="h-full">
        <Header currentSection="team" sectionTitle="(multi-talented team)" />

        <main className="container mx-auto px-4 md:px-8 py-6 md:py-12 h-full overflow-y-auto bg-amber-900">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto mt-8 md:mt-16">
            <TeamMember
              name="Cristian Madalengoitia"
              role="Design director, brand consultant and programmer;"
              behance="https://behance.net/cristian-madalengoitia"
            />

            <TeamMember
              name="Jorge Madalengoitia"
              role="Full-stack developer and project manager;"
              linkedIn="https://linkedin.com/in/jorge-madalengoitia"
            />

            <TeamMember
              name="Paul Camacho"
              role="PhD Economist, data scientist and programmer;"
              linkedIn="https://linkedin.com/in/paul-camacho"
            />
          </div>
        </main>
      </div>
    </div>
  )
}
