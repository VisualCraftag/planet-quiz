"use client"

import { useEffect, useState } from "react"

export function StarField() {
  const [stars, setStars] = useState<Array<{ x: number; y: number; size: number; delay: number }>>([])

  useEffect(() => {
    const newStars = Array.from({ length: 50 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 2,
    }))
    setStars(newStars)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}

      {/* Floating planets decoration */}
      <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-orange-400 to-red-500 opacity-20 blur-2xl animate-float" />
      <div
        className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 opacity-20 blur-2xl animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-gradient-to-br from-pink-400 to-yellow-400 opacity-20 blur-2xl animate-float"
        style={{ animationDelay: "2s" }}
      />
    </div>
  )
}
