"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ContentGrid } from "@/components/content-grid"

export default function Home() {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <ContentGrid />
        
        {/* Footer */}
        <footer className="bg-gray-900 dark:bg-black text-white py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold">Ready to Build Something Amazing?</h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Join our team of passionate developers and designers shaping the future of web and mobile innovation.
              </p>
              <div className="text-sm text-gray-500 mt-8 pt-8 border-t border-gray-800">
                <p>&copy; 2024 Eveon Solutions. Built with passion and precision.</p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}