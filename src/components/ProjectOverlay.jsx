import { useState } from 'react'

export default function ProjectOverlay({ expanded, onClose }) {
  if (!expanded) return null
  const accent = expanded.color

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(20px)',
        fontFamily: "'Courier New', monospace",
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          maxWidth: 600, width: '92%', borderRadius: 16, padding: window.innerWidth < 768 ? 20 : 36,
          background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(20px)',
          border: `1px solid ${accent}`,
          boxShadow: `0 0 40px ${accent}, 0 0 80px ${accent}44`,
          position: 'relative',
        }}
      >
        {/* Close */}
        <button onClick={onClose} style={{
          position: 'absolute', top: 16, right: 16,
          background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)',
          fontSize: 20, cursor: 'pointer',
        }}>✕</button>

        {/* Room badge */}
        <span style={{
          fontSize: 9, letterSpacing: '0.4em', color: accent,
          border: `1px solid ${accent}66`, borderRadius: 20,
          padding: '3px 10px', display: 'inline-block', marginBottom: 16,
        }}>
          {expanded.room}
        </span>

        <h2 style={{ color: '#fff', fontSize: 28, fontWeight: 700, letterSpacing: '0.15em', margin: '0 0 4px' }}>
          {expanded.title}
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 10, letterSpacing: '0.3em', marginBottom: 20 }}>
          {expanded.subtitle}
        </p>

        {/* Divider */}
        <div style={{ height: 1, background: `linear-gradient(to right, ${accent}, transparent)`, marginBottom: 20 }} />

        <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, fontSize: 13, marginBottom: 24 }}>
          {expanded.desc}
        </p>

        {/* Tech */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
          {expanded.tech.map(t => (
            <span key={t} style={{
              fontSize: 10, padding: '4px 12px', borderRadius: 20,
              color: accent, border: `1px solid ${accent}66`,
              background: `${accent}11`,
            }}>{t}</span>
          ))}
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: 12 }}>
          <a href={expanded.live} target="_blank" rel="noreferrer" style={{
            flex: 1, textAlign: 'center', padding: '12px 0',
            borderRadius: 8, fontWeight: 700, fontSize: 11,
            letterSpacing: '0.3em', color: '#000',
            background: accent, boxShadow: `0 0 20px ${accent}`,
            textDecoration: 'none',
          }}>
            ▶ VIEW LIVE
          </a>
          <a href={expanded.code} target="_blank" rel="noreferrer" style={{
            flex: 1, textAlign: 'center', padding: '12px 0',
            borderRadius: 8, fontWeight: 700, fontSize: 11,
            letterSpacing: '0.3em', color: accent,
            border: `1px solid ${accent}`,
            textDecoration: 'none',
          }}>
            {'</>'} SOURCE CODE
          </a>
        </div>
      </div>
    </div>
  )
}
