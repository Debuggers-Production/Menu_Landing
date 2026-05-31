import { useEffect, useState } from 'react'

export default function MouseSpotlight() {
  const [position, setPosition] = useState({ x: -500, y: -500 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      className="spotlight hidden md:block"
      style={{ left: position.x, top: position.y }}
    />
  )
}
