import { Header } from "@/components/header"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-amber-900">
      <Header />

      <main className="container mx-auto px-8 py-12">
        <div className="flex items-center justify-center min-h-[70vh]">
          <div className="text-center text-amber-100 max-w-2xl">
            <h1 className="text-5xl font-light mb-12">(contact)</h1>

            <div className="space-y-8">
              <div className="space-y-4 text-xl">
                <p className="hover:text-white transition-colors cursor-pointer">hello@marron.dev</p>
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
