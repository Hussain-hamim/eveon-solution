"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

interface ContentCardProps {
  title: string
  description: string
  imageUrl: string
  buttonText: string
  delay?: number
}

export function ContentCard({ title, description, imageUrl, buttonText, delay = 0 }: ContentCardProps) {
  return (
    <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up bg-white dark:bg-gray-800" style={{ animationDelay: `${delay}ms` }}>
      <div className="relative overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <CardHeader className="space-y-2">
        <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardFooter className="pt-0">
        <Button 
          variant="outline" 
          className="w-full group/btn border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
        >
          <span>{buttonText}</span>
          <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
        </Button>
      </CardFooter>
    </Card>
  )
}