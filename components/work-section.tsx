"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "DIGITAL TRANSFORMATION SOLUTIONS",
    description:
      "Comprehensive digital transformation services including mobile app development, IoT integration, and smart technology solutions for modern businesses.",
    tags: ["mobile development", "IoT", "digital transformation"],
    image: "/images/project-1.jpg",
  },
  {
    id: 2,
    title: "CUSTOM SOFTWARE DEVELOPMENT",
    description:
      "Full-stack software development services specializing in web applications, custom solutions, and enterprise-level programming projects.",
    tags: ["full-stack", "web development", "custom software"],
    image: "/images/project-2.jpg",
  },
  {
    id: 3,
    title: "FINTECH & BUSINESS SOLUTIONS",
    description:
      "Financial technology applications and business automation tools designed to streamline operations and enhance digital payment systems.",
    tags: ["fintech", "automation", "business solutions"],
    image: "/images/project-4.jpg",
  },
]

export function WorkSection() {
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
    }, 400)
  }

  const nextProject = () => {
    const nextIndex = (currentProject + 1) % projects.length
    changeProject(nextIndex, "right")
  }

  return (
    <div className="w-screen h-screen bg-amber-900 flex-shrink-0">
      <div className="h-full flex flex-col">
        <Header currentSection="work" pageCounter={`(${currentProject + 1}/${projects.length})`} />

        <main className="flex-1 overflow-y-auto bg-amber-900">
          <div
            className={`h-full transition-all duration-500 ease-out ${
              isAnimating
                ? slideDirection === "right"
                  ? "transform translate-x-full opacity-0"
                  : "transform -translate-x-full opacity-0"
                : "transform translate-x-0 opacity-100"
            }`}
          >
            {/* Single Unified Container - Brown Background */}
            <div className="h-full bg-amber-900 cursor-pointer flex flex-col" onClick={nextProject}>
              {/* Project Title */}
              <div className="py-6 px-8">
                <h2 className="text-amber-100 text-sm tracking-wide font-light">{project.title}</h2>
              </div>

              {/* Main Content Area - Project Image Only */}
              <div className="flex-1 p-8 relative">
                <div className="w-full h-full rounded-lg overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>
              </div>

              {/* Description and Tags */}
              <div className="py-4 px-8">
                <div className="flex justify-between items-center">
                  <p className="text-amber-100 text-sm max-w-2xl leading-relaxed">{project.description}</p>
                  <div className="flex items-center gap-2 ml-8">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="text-xs text-amber-200">
                        {tag}
                        {index < project.tags.length - 1 ? ";" : ";"}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
