"use client"

import { useState } from "react"
import { Header } from "@/components/header"

const projects = [
  {
    id: 1,
    title: "DOMINGO INMOBILIARIA",
    displayTitle: "(domingo)",
    description:
      "Fullstack website development, featuring dynamic property listings, responsive design, intelligent chatbot integration and Elementor.",
    status: "Pronto",
    socialLinks: ["Instagram", "Facebook"],
    tags: ["website", "artificial intelligence"],
  },
  {
    id: 2,
    title: "CAFÉ CENTRAL",
    displayTitle: "(café)",
    description:
      "Complete brand redesign and digital transformation for a historic café. Including logo design, menu digitization, online ordering system and social media strategy.",
    status: "Completed",
    socialLinks: ["Instagram", "Website"],
    tags: ["branding", "web design", "e-commerce"],
  },
  {
    id: 3,
    title: "TECH STARTUP MVP",
    displayTitle: "(fintech)",
    description:
      "Development of a minimum viable product for a fintech startup. React Native mobile app with secure payment integration, user authentication and real-time analytics dashboard.",
    status: "In Development",
    socialLinks: ["LinkedIn", "GitHub"],
    tags: ["mobile app", "fintech", "react native"],
  },
  {
    id: 4,
    title: "MUSEO DIGITAL",
    displayTitle: "(museo)",
    description:
      "Interactive digital museum platform with 3D virtual tours, augmented reality features, and multilingual content management system for cultural preservation.",
    status: "Planning",
    socialLinks: ["Website", "Twitter"],
    tags: ["3D", "AR", "cultural tech"],
  },
]

export default function WorkPage() {
  const [currentProject, setCurrentProject] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [slideDirection, setSlideDirection] = useState<"left" | "right">("right")
  const project = projects[currentProject]

  const changeProject = (newIndex: number, direction: "left" | "right" = "right") => {
    if (newIndex === currentProject || isAnimating) return

    setSlideDirection(direction)
    setIsAnimating(true)

    setTimeout(() => {
      setCurrentProject(newIndex)
      setTimeout(() => setIsAnimating(false), 50)
    }, 400) // Changed from 800ms to 400ms
  }

  const nextProject = () => {
    const nextIndex = (currentProject + 1) % projects.length
    changeProject(nextIndex, "right")
  }

  const prevProject = () => {
    const prevIndex = (currentProject - 1 + projects.length) % projects.length
    changeProject(prevIndex, "left")
  }

  return (
    <div className="min-h-screen bg-amber-900">
      <div className="border-2 border-blue-500 min-h-screen">
        <Header pageCounter={`(${currentProject + 1}/${projects.length})`} />

        <main className="container mx-auto px-8 py-8">
          {/* Project Title */}
          <div className="mb-6 overflow-hidden">
            <h2
              className={`text-amber-200 text-sm tracking-wide font-light transition-transform duration-400 ease-out ${
                isAnimating
                  ? slideDirection === "right"
                    ? "transform translate-x-full opacity-0"
                    : "transform -translate-x-full opacity-0"
                  : "transform translate-x-0 opacity-100"
              }`}
            >
              {project.title}
            </h2>
          </div>

          {/* Main Project Showcase Container */}
          <div className="relative mb-6 overflow-hidden rounded-lg">
            <div
              className={`bg-amber-50 rounded-lg p-16 min-h-[600px] relative cursor-pointer hover:shadow-xl transition-shadow duration-300 ${
                isAnimating
                  ? slideDirection === "right"
                    ? "transform translate-x-full opacity-0"
                    : "transform -translate-x-full opacity-0"
                  : "transform translate-x-0 opacity-100"
              } transition-all duration-500 ease-out`}
              onClick={nextProject}
            >
              {/* Artistic Decorative Elements - More detailed and sketch-like */}

              {/* Top Left - Coffee cup and plate */}
              <div className="absolute top-12 left-16">
                <div className="relative">
                  {/* Plate */}
                  <div className="w-20 h-4 border-2 border-amber-800 rounded-full"></div>
                  {/* Cup */}
                  <div className="absolute -top-3 left-2 w-12 h-8 border-2 border-amber-800 rounded-b-lg">
                    <div className="w-2 h-4 border border-amber-700 absolute -right-1 top-1"></div>
                  </div>
                  {/* Steam lines */}
                  <div className="absolute -top-6 left-6 space-y-1">
                    <div className="w-1 h-2 bg-amber-600 rounded"></div>
                    <div className="w-1 h-1 bg-amber-600 rounded ml-1"></div>
                  </div>
                </div>
                {/* Plant pot */}
                <div className="mt-4 ml-8">
                  <div className="w-8 h-6 border-2 border-amber-800 rounded-b-lg"></div>
                  <div className="relative -top-1">
                    <div className="w-1 h-4 bg-amber-700 absolute left-3"></div>
                    <div className="w-3 h-2 border border-amber-700 rounded-full absolute left-2 -top-2"></div>
                  </div>
                </div>
              </div>

              {/* Top Right - Tea cup and saucer */}
              <div className="absolute top-16 right-20">
                <div className="relative">
                  {/* Saucer */}
                  <div className="w-16 h-3 border border-amber-700 rounded-full"></div>
                  {/* Cup */}
                  <div className="absolute -top-2 left-3 w-10 h-6 border border-amber-800 rounded-b-lg">
                    <div className="w-2 h-3 border border-amber-700 absolute -right-1 top-1 rounded"></div>
                  </div>
                  {/* Handle detail */}
                  <div className="absolute top-0 right-2 w-1 h-3 border border-amber-600 rounded-full"></div>
                </div>
              </div>

              {/* Bottom Left - Hand with phone */}
              <div className="absolute bottom-24 left-20">
                <div className="relative">
                  {/* Phone */}
                  <div className="w-8 h-14 border-2 border-amber-800 rounded-lg bg-amber-100">
                    <div className="w-6 h-10 border border-amber-600 rounded m-1"></div>
                    <div className="w-2 h-1 bg-amber-700 rounded mx-auto mt-1"></div>
                  </div>
                  {/* Hand */}
                  <div className="absolute -bottom-2 -left-2 w-12 h-8 border border-amber-700 rounded-lg">
                    <div className="w-2 h-4 border border-amber-600 absolute right-1 -top-2"></div>
                    <div className="w-1 h-3 border border-amber-600 absolute right-3 -top-1"></div>
                  </div>
                </div>
              </div>

              {/* Bottom Right - Person with dog */}
              <div className="absolute bottom-20 right-24">
                <div className="relative">
                  {/* Person */}
                  <div className="w-16 h-24 border border-amber-700 rounded-t-full">
                    {/* Head */}
                    <div className="w-6 h-6 border border-amber-800 rounded-full mx-auto mb-2"></div>
                    {/* Body */}
                    <div className="w-8 h-12 border border-amber-700 rounded mx-auto"></div>
                    {/* Arms */}
                    <div className="absolute top-8 -left-2 w-4 h-1 border border-amber-600 rounded"></div>
                    <div className="absolute top-8 -right-2 w-4 h-1 border border-amber-600 rounded"></div>
                  </div>
                  {/* Dog */}
                  <div className="absolute -bottom-4 -right-8 w-12 h-8 border border-amber-700 rounded-lg">
                    <div className="w-3 h-3 border border-amber-800 rounded-full absolute -left-1 top-1"></div>
                    <div className="w-1 h-4 border border-amber-600 absolute -right-1 -top-1"></div>
                    <div className="w-2 h-1 border border-amber-600 absolute bottom-0 left-2"></div>
                    <div className="w-2 h-1 border border-amber-600 absolute bottom-0 right-2"></div>
                  </div>
                </div>
              </div>

              {/* Center Content */}
              <div className="flex flex-col items-center justify-center h-full text-center">
                <h1 className="text-7xl font-light text-amber-800 mb-12 hover:text-amber-700 transition-colors">
                  {project.displayTitle}
                </h1>
                <p className="text-amber-700 text-xl font-medium mb-16 hover:text-amber-600 transition-colors">
                  {project.status}
                </p>

                {/* Social Links */}
                <div className="flex space-x-8 text-amber-600">
                  {project.socialLinks.map((link, index) => (
                    <span
                      key={index}
                      className="text-base hover:text-amber-800 cursor-pointer transition-all duration-300 hover:scale-110"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {link}
                    </span>
                  ))}
                </div>
              </div>

              {/* Click indicator */}
              <div className="absolute bottom-6 right-6 text-amber-400 text-sm opacity-60 hover:opacity-100 transition-opacity">
                Click to next →
              </div>
            </div>
          </div>

          {/* Project Description and Tags */}
          <div className="overflow-hidden">
            <div
              className={`flex justify-between items-end text-amber-200 transition-transform duration-400 ease-out delay-75 ${
                isAnimating
                  ? slideDirection === "right"
                    ? "transform translate-x-full opacity-0"
                    : "transform -translate-x-full opacity-0"
                  : "transform translate-x-0 opacity-100"
              }`}
            >
              <div className="max-w-2xl">
                <p className="text-sm leading-relaxed">{project.description}</p>
              </div>
              <div className="flex flex-col items-end space-y-1">
                {project.tags.map((tag, index) => (
                  <span key={index} className="text-xs text-amber-300">
                    {tag}
                    {index < project.tags.length - 1 ? ";" : ";"}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
