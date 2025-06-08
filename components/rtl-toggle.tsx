"use client"

import { Languages } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function RTLToggle() {
  const [isRTL, setIsRTL] = useState(false)

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr'
    document.documentElement.lang = isRTL ? 'ar' : 'en'
  }, [isRTL])

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setIsRTL(!isRTL)}
      className="w-10 h-10 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
    >
      <Languages className={`h-4 w-4 transition-transform duration-200 ${isRTL ? 'rotate-180' : ''} text-green-600`} />
      <span className="sr-only">Toggle RTL</span>
    </Button>
  )
}