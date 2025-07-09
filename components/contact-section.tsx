import { Header } from "@/components/header"

export function ContactSection() {
  return (
    <div className="w-screen h-screen bg-amber-900 flex-shrink-0">
      <Header currentSection="contact" sectionTitle="(contact)" />

      <main className="container mx-auto px-4 md:px-8 py-6 md:py-12 h-full overflow-y-auto bg-amber-900">
        <div className="flex items-center justify-center min-h-[70vh]">
          <div className="text-center text-amber-100 max-w-2xl">
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-3 md:space-y-4 text-lg md:text-xl">
                <a href="mailto:hello@marron.dev" className="block hover:text-white transition-colors cursor-pointer">
                  hello@marron.dev
                </a>
                <p className="hover:text-white transition-colors cursor-pointer">+1 (555) 123-4567</p>
              </div>

              <div className="pt-6 md:pt-8 border-t border-amber-800">
                <p className="text-amber-200 mb-4 md:mb-6">Follow us</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
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
