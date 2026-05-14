'use client'

import { useEffect, useRef } from 'react'

export default function HeroParallax() {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const offset = window.scrollY * 0.4
      containerRef.current.style.transform = `translateY(${offset}px)`
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (video.readyState >= 2) {
      video.play().catch(() => {})
      return
    }
    video.addEventListener('canplay', () => video.play().catch(() => {}), { once: true })
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 scale-110 origin-top">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover object-center"
      >
        <source src="/Video/hero.mp4" type="video/mp4" />
      </video>
    </div>
  )
}
