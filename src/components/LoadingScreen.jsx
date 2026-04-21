import { useEffect, useRef, useState } from 'react'

export default function LoadingScreen({ onLoaded, videoReady }) {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase]       = useState('INITIALIZING SYSTEMS')
  const [done, setDone]         = useState(false)
  const [showEnter, setShowEnter] = useState(false)
  const finished = useRef(false)
  const raf      = useRef(null)

  useEffect(() => {
    const phases = [
      [20,  'LOADING VIDEO TEXTURE'],
      [45,  'CALIBRATING 3D ENGINE'],
      [65,  'MAPPING SPATIAL DATA'],
      [80,  'SYNCING HUD OVERLAY'],
      [95,  'ENTERING Z-BLOCK CORE'],
      [100, 'ACCESS GRANTED'],
    ]
    let current = 0
    const tick = () => {
      if (finished.current) return
      current = Math.min(current + 0.5, 100)
      setProgress(current)
      const hit = phases.find(([v]) => v <= current && v > current - 0.5)
      if (hit) setPhase(hit[1])
      if (current >= 100) {
        finished.current = true
        setShowEnter(true)
        return
      }
      raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
    return () => { finished.current = true; cancelAnimationFrame(raf.current) }
  }, [])

  useEffect(() => {
    if (videoReady && showEnter) handleEnter()
  }, [videoReady, showEnter])

  const handleEnter = () => {
    if (done) return
    setDone(true)
    setTimeout(() => onLoaded(), 700)
  }

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 50,
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      background: '#000',
      opacity: done ? 0 : 1,
      pointerEvents: done ? 'none' : 'all',
      transition: 'opacity 0.7s',
      fontFamily: "'Courier New', monospace",
    }}>

      {/* Corner TL */}
      <div style={{ position:'absolute', top:24, left:24, width:32, height:32,
        borderTop:'1px solid #bc13fe', borderLeft:'1px solid #bc13fe', opacity:0.6 }} />
      {/* Corner TR */}
      <div style={{ position:'absolute', top:24, right:24, width:32, height:32,
        borderTop:'1px solid #bc13fe', borderRight:'1px solid #bc13fe', opacity:0.6 }} />
      {/* Corner BL */}
      <div style={{ position:'absolute', bottom:24, left:24, width:32, height:32,
        borderBottom:'1px solid #bc13fe', borderLeft:'1px solid #bc13fe', opacity:0.6 }} />
      {/* Corner BR */}
      <div style={{ position:'absolute', bottom:24, right:24, width:32, height:32,
        borderBottom:'1px solid #bc13fe', borderRight:'1px solid #bc13fe', opacity:0.6 }} />

      {/* Logo block */}
      <div style={{ marginBottom: 40, textAlign: 'center' }}>
        <p style={{ color: '#bc13fe', fontSize: 11, letterSpacing: '0.4em', marginBottom: 8 }}>
          COMSATS ABBOTTABAD
        </p>
        <h1 style={{ color: '#fff', fontSize: 36, fontWeight: 700, letterSpacing: '0.2em', margin: 0 }}>
          SOHA MUZAMMIL
        </h1>
        <p style={{
          color: '#bc13fe', fontSize: 13, letterSpacing: '0.6em', marginTop: 6,
          textShadow: '0 0 7px #bc13fe, 0 0 21px #bc13fe',
        }}>
          PORTFOLIO
        </p>
      </div>

      {/* Progress bar */}
      <div style={{ width: 288, height: 1, background: 'rgba(255,255,255,0.1)', position: 'relative', marginBottom: 12 }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, height: '100%',
          width: `${progress}%`,
          background: '#bc13fe',
          boxShadow: '0 0 12px #bc13fe, 0 0 24px #bc13fe',
          transition: 'width 0.1s',
        }} />
      </div>

      {/* Percentage */}
      <p style={{
        color: '#bc13fe', fontSize: 28, fontWeight: 700, letterSpacing: '0.3em', marginBottom: 8,
        textShadow: '0 0 7px #bc13fe, 0 0 21px #bc13fe',
      }}>
        {Math.floor(progress).toString().padStart(3, '0')}%
      </p>

      {/* Phase */}
      <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11, letterSpacing: '0.3em', marginBottom: 24 }}>
        {phase}
      </p>

      {/* Enter button */}
      {showEnter && (
        <button onClick={handleEnter} style={{
          marginTop: 8, padding: '12px 32px',
          fontSize: 13, fontWeight: 700, letterSpacing: '0.4em',
          color: '#000', background: '#bc13fe', border: 'none',
          borderRadius: 8, cursor: 'pointer',
          boxShadow: '0 0 24px #bc13fe, 0 0 48px #bc13fe88',
          fontFamily: "'Courier New', monospace",
        }}>
          ▶ ENTER EXPERIENCE
        </button>
      )}
    </div>
  )
}
