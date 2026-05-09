'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function HeroParallax() {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoReady, setVideoReady] = useState(false)

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
    const markReady = () => {
      setVideoReady(true)
      video.play().catch(() => {})
    }
    if (video.readyState >= 2) {
      markReady()
      return
    }
    video.addEventListener('canplay', markReady)
    return () => video.removeEventListener('canplay', markReady)
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 scale-110 origin-top">
      <Image
        src="/hero-bg.png"
        alt="Ministerio Internacional Ágape"
        fill
        className="object-cover object-center"
        priority
        style={{ opacity: videoReady ? 0 : 1, transition: 'opacity 1.2s ease-in-out' }}
      />
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ opacity: videoReady ? 1 : 0, transition: 'opacity 1.2s ease-in-out' }}
      >
        <source src="/Video/hero.mp4" type="video/mp4" />
      </video>
    </div>
  )
}
