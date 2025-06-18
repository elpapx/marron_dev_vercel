import { Header } from "@/components/header"

export function ContactSection() {
  return (
    <div className="w-screen h-screen bg-amber-900 flex-shrink-0">
      <Header currentSection="contact" sectionTitle="(contact)" />

      <main className="container mx-auto px-8 py-12 h-full overflow-y-auto bg-amber-900">
        <div className="flex items-center justify-center min-h-[70vh]">
          <div className="text-center text-amber-100 max-w-2xl">
            <div className="space-y-8">
              <div className="space-y-4 text-xl">
                <a href="mailto:hello@marron.dev" className="block hover:text-white transition-colors cursor-pointer">
                  hello@marron.dev
                </a>
                <p className="hover:text-white transition-colors cursor-pointer">+1 (555) 123-4567</p>
              </div>

              <div className="pt-8 border-t border-amber-800">
                <p className="text-amber-200 mb-6">Follow us</p>
                <div className="flex justify-center space-x-8">
                  <a
                    href="#"
                    className="text-amber-200 hover:text-white transition-colors duration-300 px-4 py-2 rounded-md hover:bg-amber-800/30"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="#"
                    className="text-amber-200 hover:text-white transition-colors duration-300 px-4 py-2 rounded-md hover:bg-amber-800/30"
                  >
                    GitHub
                  </a>
                  <a
                    href="#"
                    className="text-amber-200 hover:text-white transition-colors duration-300 px-4 py-2 rounded-md hover:bg-amber-800/30"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
