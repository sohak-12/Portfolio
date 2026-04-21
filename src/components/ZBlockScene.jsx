import { useRef, useState, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useScroll, Html, Float } from '@react-three/drei'
import * as THREE from 'three'
import { SKILLS, PROJECTS, ROOMS, VIDEO_DURATION } from '../data/ProjectData'
import VideoScrubber from './VideoScrubber'

// ─────────────────────────────────────────────────────────────────────────────
// Video Background
// ─────────────────────────────────────────────────────────────────────────────
function VideoBackground({ videoRef }) {
  const mesh   = useRef()
  const matRef = useRef()
  const { size, camera } = useThree()

  useEffect(() => {
    const vid = videoRef.current
    if (!vid) return
    const tex        = new THREE.VideoTexture(vid)
    tex.minFilter    = THREE.LinearFilter
    tex.magFilter    = THREE.LinearFilter
    if (matRef.current) {
      matRef.current.map = tex
      matRef.current.needsUpdate = true
    }
    return () => tex.dispose()
  }, [videoRef])

  useFrame(() => {
    if (!mesh.current) return
    const dist = 5
    const vFov = (camera.fov * Math.PI) / 180
    const h    = 2 * Math.tan(vFov / 2) * dist
    const w    = h * (size.width / size.height)
    mesh.current.scale.set(w, h, 1)
    mesh.current.position.set(0, 0, -dist)
    if (matRef.current && matRef.current.map) {
      matRef.current.map.needsUpdate = true
    }
  })

  return (
    <mesh ref={mesh}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial ref={matRef} toneMapped={false} />
    </mesh>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Intro Text
// ─────────────────────────────────────────────────────────────────────────────
function IntroText({ visible }) {
  return (
    <Html
      center
      position={[0, 0.3, -3]}
      style={{ pointerEvents: 'none', opacity: visible ? 1 : 0, transition: 'opacity 0.8s' }}
    >
      <div style={{ textAlign: 'center', fontFamily: "'Courier New', monospace", whiteSpace: 'nowrap' }}>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 10, letterSpacing: '0.6em', marginBottom: 8 }}>
          WELCOME TO THE PORTFOLIO OF
        </p>
        <h1 style={{
          color: '#bc13fe', fontSize: 36, fontWeight: 700, letterSpacing: '0.25em', margin: 0,
          textShadow: '0 0 10px #bc13fe, 0 0 30px #bc13fe, 0 0 60px #bc13fe',
        }}>
          SOHA MUZAMMIL
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12, letterSpacing: '0.5em', marginTop: 8 }}>
          FULL STACK DEVELOPER · AI ENTHUSIAST
        </p>
        <div style={{ height: 1, background: 'linear-gradient(to right, transparent, #bc13fe, transparent)', marginTop: 12 }} />
      </div>
    </Html>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Skill Icons
// ─────────────────────────────────────────────────────────────────────────────
function SkillOrbit({ visible }) {
  return (
    <>
      {SKILLS.map((skill, i) => {
        const angle = (i / SKILLS.length) * Math.PI * 2
        const x = Math.cos(angle) * 2.5
        const y = Math.sin(angle) * 1.2
        return (
          <Float key={skill.label} speed={1.2 + i * 0.1} floatIntensity={0.5} rotationIntensity={0.3}>
            <Html
              center
              position={[x, y, -4]}
              style={{ pointerEvents: 'none', opacity: visible ? 1 : 0, transition: 'opacity 0.6s' }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, fontFamily: "'Courier New', monospace" }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 12, fontSize: 22,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)',
                  border: `1px solid ${skill.color}88`,
                  boxShadow: `0 0 16px ${skill.color}66`,
                }}>
                  {skill.icon}
                </div>
                <span style={{ color: skill.color, fontSize: 9, letterSpacing: '0.3em', fontWeight: 700 }}>
                  {skill.label}
                </span>
              </div>
            </Html>
          </Float>
        )
      })}
    </>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Project Card
// ─────────────────────────────────────────────────────────────────────────────
function ProjectCard({ project, index, onExpand }) {
  const [hovered, setHovered] = useState(false)
  const accent = project.color
  const xPos   = index % 2 === 0 ? -1.8 : 1.8

  return (
    <Float speed={1} floatIntensity={0.3}>
      <Html center position={[xPos, 0.2, -3]} style={{ pointerEvents: 'auto' }}>
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => onExpand(project)}
          style={{
            width: 220, padding: '14px 16px', borderRadius: 10, cursor: 'pointer',
            background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(14px)',
            border: `1px solid ${hovered ? accent : accent + '44'}`,
            boxShadow: hovered ? `0 0 30px ${accent}, 0 0 60px ${accent}55` : `0 0 8px ${accent}22`,
            transform: hovered ? 'scale(1.05) translateY(-4px)' : 'scale(1)',
            transition: 'all 0.3s ease',
            fontFamily: "'Courier New', monospace",
          }}
        >
          <span style={{
            fontSize: 8, letterSpacing: '0.3em', color: accent,
            border: `1px solid ${accent}55`, borderRadius: 20,
            padding: '2px 8px', display: 'inline-block', marginBottom: 8,
          }}>
            {project.room}
          </span>
          <h3 style={{ color: '#fff', fontSize: 14, fontWeight: 700, margin: '0 0 2px', letterSpacing: '0.1em' }}>
            {project.title}
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 9, letterSpacing: '0.2em', marginBottom: 8 }}>
            {project.subtitle}
          </p>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 10, lineHeight: 1.6, marginBottom: 10 }}>
            {project.desc}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 8 }}>
            {project.tech.map(t => (
              <span key={t} style={{
                fontSize: 8, padding: '2px 6px', borderRadius: 4,
                border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.4)',
              }}>{t}</span>
            ))}
          </div>
          {hovered && (
            <p style={{ color: accent, fontSize: 9, fontWeight: 700, letterSpacing: '0.3em' }}>▶ VIEW LIVE ●</p>
          )}
        </div>
      </Html>
    </Float>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Contact Section
// ─────────────────────────────────────────────────────────────────────────────
function ContactSection({ visible }) {
  return (
    <Html
      center
      position={[0, 0, -3]}
      style={{ pointerEvents: visible ? 'auto' : 'none', opacity: visible ? 1 : 0, transition: 'opacity 0.8s' }}
    >
      <div style={{ textAlign: 'center', fontFamily: "'Courier New', monospace" }}>
        <p style={{ color: '#00fff9', fontSize: 10, letterSpacing: '0.5em', marginBottom: 16, textShadow: '0 0 10px #00fff9' }}>
          TRANSMISSION COMPLETE
        </p>
        <h2 style={{ color: '#fff', fontSize: 24, fontWeight: 700, letterSpacing: '0.2em', marginBottom: 24 }}>
          LET'S BUILD SOMETHING
        </h2>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
          {[
            { label: 'LinkedIn', href: 'https://linkedin.com', color: '#0A66C2' },
            { label: 'Medium',   href: 'https://medium.com',   color: '#00fff9' },
            { label: 'GitHub',   href: 'https://github.com',   color: '#ffffff' },
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" style={{
              padding: '8px 16px', borderRadius: 8, fontSize: 10, fontWeight: 700,
              letterSpacing: '0.3em', color: s.color,
              border: `1px solid ${s.color}88`,
              boxShadow: `0 0 12px ${s.color}44`,
              textDecoration: 'none', fontFamily: "'Courier New', monospace",
            }}>
              ↗ {s.label}
            </a>
          ))}
        </div>
      </div>
    </Html>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN SCENE
// ─────────────────────────────────────────────────────────────────────────────
export default function ZBlockScene({ videoRef, onScrollChange, onExpand }) {
  const scroll = useScroll()
  const [time, setTime] = useState(0)

  useFrame(() => {
    const vid      = videoRef.current
    const duration = (vid && vid.duration) || VIDEO_DURATION
    const t        = scroll.offset * duration
    setTime(t)
    onScrollChange(scroll.offset)
  })

  const showIntro   = time >= 21  && time <= 50
  const showSkills  = time >= 34  && time <= 73
  const showExit    = time >= 177

  const visibleProjects = PROJECTS.filter(p => time >= p.timeStart && time <= p.timeEnd)

  return (
    <>
      <VideoScrubber videoRef={videoRef} />
      <VideoBackground videoRef={videoRef} />
      <IntroText visible={showIntro} />
      <SkillOrbit visible={showSkills} />
      {visibleProjects.map((p, i) => (
        <ProjectCard key={p.id} project={p} index={i} onExpand={onExpand} />
      ))}
      <ContactSection visible={showExit} />
    </>
  )
}
