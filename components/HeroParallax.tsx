'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function HeroParallax() {
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef.current) return
      const offset = window.scrollY * 0.4
      imgRef.current.style.transform = `translateY(${offset}px)`
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={imgRef} className="absolute inset-0 scale-110 origin-top">
      <Image
        src="/hero-bg.png"
        alt="Ministerio Internacional Ágape"
        fill
        className="object-cover object-center"
        priority
      />
    </div>
  )
}
