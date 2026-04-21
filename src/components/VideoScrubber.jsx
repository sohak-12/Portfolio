import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import { VIDEO_DURATION } from '../data/ProjectData'

export default function VideoScrubber({ videoRef }) {
  const scroll    = useScroll()
  const target    = useRef(0)
  const current   = useRef(0)

  useFrame(() => {
    const vid = videoRef.current
    if (!vid) return

    const duration = vid.duration || VIDEO_DURATION
    target.current = scroll.offset * duration

    // smooth lerp
    current.current += (target.current - current.current) * 0.06

    // only seek if diff > 0.05s to avoid jitter
    if (Math.abs(current.current - vid.currentTime) > 0.05) {
      vid.currentTime = current.current
    }
  })

  return null
}
