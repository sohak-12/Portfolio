import { useRef, useState, useEffect, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { ScrollControls } from '@react-three/drei'
import ZBlockScene from './components/ZBlockScene'
import HUD from './components/HUD'
import ProjectOverlay from './components/ProjectOverlay'
import LoadingScreen from './components/LoadingScreen'

export default function App() {
  const videoRef                = useRef(null)
  const [scroll, setScroll]     = useState(0)
  const [loaded, setLoaded]     = useState(false)
  const [ready, setReady]       = useState(false)
  const [expanded, setExpanded] = useState(null)
  const isMobile                = window.innerWidth < 768

  useEffect(() => {
    const vid       = document.createElement('video')
    vid.src         = '/videos/zblock_tour.mp4'
    vid.muted       = true
    vid.playsInline = true
    vid.preload     = 'auto'
    vid.loop        = false
    vid.currentTime = 0

    const onReady = () => setReady(true)
    vid.addEventListener('loadedmetadata', onReady)
    vid.addEventListener('canplay', onReady)
    setTimeout(onReady, 2500)
    vid.load()
    videoRef.current = vid

    return () => {
      vid.removeEventListener('loadedmetadata', onReady)
      vid.removeEventListener('canplay', onReady)
    }
  }, [])

  return (
    <div style={{
      width: '100vw', height: '100vh',
      background: '#000',
      position: 'relative',
      overflow: 'hidden',
      touchAction: 'none', // let R3F handle touch
    }}>

      {!loaded && <LoadingScreen onLoaded={() => setLoaded(true)} videoReady={ready} />}
      {loaded && <HUD scrollProgress={scroll} isMobile={isMobile} />}
      <ProjectOverlay expanded={expanded} onClose={() => setExpanded(null)} />

      <Canvas
        camera={{ fov: 60, near: 0.1, far: 100, position: [0, 0, 0] }}
        gl={{ antialias: false, alpha: false, powerPreference: 'default' }}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        events={undefined}
      >
        <Suspense fallback={null}>
          <ScrollControls
            pages={8}
            damping={0.15}
            distance={1}
          >
            <ZBlockScene
              videoRef={videoRef}
              onScrollChange={setScroll}
              onExpand={setExpanded}
            />
          </ScrollControls>
        </Suspense>
      </Canvas>

    </div>
  )
}
