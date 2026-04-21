import { ROOMS } from '../data/ProjectData'

export default function HUD({ scrollProgress, isMobile }) {
  const time   = scrollProgress * 210
  const room   = ROOMS.find(r => time >= r.timeRange[0] && time < r.timeRange[1]) || ROOMS[0]
  const accent = room.color
  const pct    = Math.round(scrollProgress * 100)

  const box = (extra = {}) => ({
    background: 'rgba(0,0,0,0.55)',
    backdropFilter: 'blur(12px)',
    border: `1px solid ${accent}55`,
    borderRadius: 8,
    padding: isMobile ? '6px 10px' : '10px 14px',
    boxShadow: `0 0 14px ${accent}33`,
    fontFamily: "'Courier New', monospace",
    ...extra,
  })

  const label = { color: accent, fontSize: isMobile ? 7 : 9, letterSpacing: '0.4em', marginBottom: 3 }
  const title = { color: '#fff', fontSize: isMobile ? 10 : 13, fontWeight: 700, letterSpacing: '0.2em' }
  const sub   = { color: 'rgba(255,255,255,0.35)', fontSize: isMobile ? 7 : 9, marginTop: 2 }

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 20, pointerEvents: 'none' }}>

      {/* TOP LEFT */}
      <div style={{ ...box(), position: 'absolute', top: isMobile ? 10 : 20, left: isMobile ? 10 : 20 }}>
        <p style={label}>TARGET</p>
        <p style={title}>Z-BLOCK CORE</p>
        {!isMobile && <p style={sub}>34.1915° N  73.2421° E</p>}
      </div>

      {/* TOP RIGHT */}
      <div style={{ ...box({ textAlign: 'right' }), position: 'absolute', top: isMobile ? 10 : 20, right: isMobile ? 10 : 20 }}>
        <p style={label}>ROOM</p>
        <p style={{ ...title, fontSize: isMobile ? 9 : 11 }}>{room.id}</p>
        {!isMobile && <p style={sub}>SCANNING_PROJECTS...</p>}
      </div>

      {/* BOTTOM LEFT — hidden on mobile */}
      {!isMobile && (
        <div style={{ ...box(), position: 'absolute', bottom: 24, left: 20 }}>
          <p style={label}>STATUS</p>
          <p style={{ color: '#fff', fontSize: 10, letterSpacing: '0.2em' }}>● LIVE</p>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 9, marginTop: 2 }}>{room.label}</p>
        </div>
      )}

      {/* BOTTOM RIGHT — depth bar */}
      <div style={{ ...box({ minWidth: isMobile ? 100 : 140 }), position: 'absolute', bottom: isMobile ? 10 : 24, right: isMobile ? 10 : 20 }}>
        <p style={label}>DEPTH</p>
        <div style={{ height: 1, background: 'rgba(255,255,255,0.1)', position: 'relative', marginBottom: 4 }}>
          <div style={{
            position: 'absolute', top: 0, left: 0, height: '100%',
            width: `${pct}%`, background: accent,
            boxShadow: `0 0 8px ${accent}`,
            transition: 'width 0.3s',
          }} />
        </div>
        <p style={{ color: '#fff', fontSize: isMobile ? 10 : 12, fontWeight: 700, letterSpacing: '0.2em' }}>{pct}%</p>
      </div>

      {/* Corner brackets — desktop only */}
      {!isMobile && <>
        <div style={{ position:'absolute', top:8, left:8, width:20, height:20, borderTop:`1px solid ${accent}`, borderLeft:`1px solid ${accent}`, opacity:0.5 }} />
        <div style={{ position:'absolute', top:8, right:8, width:20, height:20, borderTop:`1px solid ${accent}`, borderRight:`1px solid ${accent}`, opacity:0.5 }} />
        <div style={{ position:'absolute', bottom:8, left:8, width:20, height:20, borderBottom:`1px solid ${accent}`, borderLeft:`1px solid ${accent}`, opacity:0.5 }} />
        <div style={{ position:'absolute', bottom:8, right:8, width:20, height:20, borderBottom:`1px solid ${accent}`, borderRight:`1px solid ${accent}`, opacity:0.5 }} />
      </>}

      {/* Scroll / swipe hint */}
      {scrollProgress < 0.02 && (
        <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', textAlign:'center', pointerEvents:'none' }}>
          <p style={{ color:'rgba(255,255,255,0.5)', fontSize: isMobile ? 9 : 11, letterSpacing:'0.5em', fontFamily:"'Courier New', monospace" }}>
            {isMobile ? 'SWIPE UP TO ENTER' : 'SCROLL TO ENTER'}
          </p>
          <p style={{ color:'rgba(255,255,255,0.2)', fontSize:14, marginTop:8 }}>↓</p>
        </div>
      )}
    </div>
  )
}
