// Video duration: ~3:30 (210 seconds)
// All timestamps mapped to scroll percentage (0-1)

export const VIDEO_DURATION = 210 // seconds — update if your video is different

export const TIMELINE = {
  entrance:   { start: 0,    end: 21  },  // 0:00 - 0:21
  lobby:      { start: 21,   end: 43  },  // 0:21 - 0:43
  lab01:      { start: 74,   end: 80  },  // 1:14 - 1:20
  lab02:      { start: 99,   end: 109 },  // 1:39 - 1:49
  lab03:      { start: 130,  end: 146 },  // 2:10 - 2:26
  exit:       { start: 177,  end: 210 },  // 2:57 - end
}

export const PROJECTS = [
  // ── ENTRANCE · Internship Logbook ──────────────────────────────────────────
  {
    id: 'logbook',
    title: 'Internship Logbook',
    subtitle: 'Codematics · 8 Weeks',
    desc: 'Documented full-stack internship journey: daily tasks, learnings, project milestones, and mentor feedback.',
    tech: ['React', 'Documentation', 'Full-Stack'],
    room: 'ENTRANCE',
    timeStart: 5,
    timeEnd: 20,
    color: '#bc13fe',
    live: '#',
    code: '#',
  },

  // ── LAB 01 · Logic Lab ─────────────────────────────────────────────────────
  {
    id: 'dsa-maze',
    title: 'DSA Maze Game',
    subtitle: 'Data Structures & Algorithms',
    desc: 'Interactive maze built with graph traversal (BFS/DFS). Navigate procedurally generated paths.',
    tech: ['C++', 'BFS', 'DFS', 'Data Structures'],
    room: 'LAB_01',
    timeStart: 74,
    timeEnd: 77,
    color: '#bc13fe',
    live: '#',
    code: '#',
  },
  {
    id: 'cgpa-calc',
    title: 'CGPA Calculator',
    subtitle: 'OOP Project',
    desc: 'Object-Oriented CGPA management system with semester-wise tracking and GPA prediction.',
    tech: ['C++', 'OOP', 'File I/O'],
    room: 'LAB_01',
    timeStart: 77,
    timeEnd: 80,
    color: '#bc13fe',
    live: '#',
    code: '#',
  },

  // ── LAB 02 · Gaming Zone ───────────────────────────────────────────────────
  {
    id: 'tic-tac-toe',
    title: 'Tic Tac Toe',
    subtitle: 'C Language · AI Opponent',
    desc: 'Classic Tic Tac Toe with minimax AI opponent. Retro terminal aesthetic.',
    tech: ['C', 'Minimax AI', 'Terminal UI'],
    room: 'LAB_02',
    timeStart: 99,
    timeEnd: 104,
    color: '#ff00ff',
    live: '#',
    code: '#',
  },
  {
    id: 'joker-game',
    title: 'Joker Game',
    subtitle: 'C Language · Card Game',
    desc: 'Card-based strategy game with randomized deck mechanics and score tracking.',
    tech: ['C', 'Random Algorithms', 'Terminal UI'],
    room: 'LAB_02',
    timeStart: 104,
    timeEnd: 109,
    color: '#ff00ff',
    live: '#',
    code: '#',
  },

  // ── LAB 03 · Full Stack Hub ────────────────────────────────────────────────
  {
    id: 'preplyx',
    title: 'Preplyx',
    subtitle: 'AI Interview Platform',
    desc: 'AI-powered mock interview platform with real-time voice interaction, feedback scoring, and performance analytics.',
    tech: ['Next.js', 'Vapi AI', 'Tailwind', 'Firebase'],
    room: 'LAB_03',
    timeStart: 130,
    timeEnd: 136,
    color: '#00fff9',
    live: 'https://preplyx.vercel.app',
    code: '#',
  },
  {
    id: 'sohafy',
    title: 'Sohafy',
    subtitle: 'Full-Stack E-Commerce',
    desc: 'Complete e-commerce platform with cart, auth, payment integration, and admin dashboard.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    room: 'LAB_03',
    timeStart: 136,
    timeEnd: 140,
    color: '#00fff9',
    live: '#',
    code: '#',
  },
  {
    id: 'primeflix',
    title: 'PrimeFlix',
    subtitle: 'Movie Discovery App',
    desc: 'Cinematic movie discovery platform powered by TMDB API with watchlists and Firebase auth.',
    tech: ['React', 'TMDB API', 'Firebase', 'Tailwind'],
    room: 'LAB_03',
    timeStart: 140,
    timeEnd: 143,
    color: '#00fff9',
    live: '#',
    code: '#',
  },
  {
    id: 'atheneum',
    title: "Soha's Atheneum",
    subtitle: 'Library Management System',
    desc: 'Full-featured library management with book tracking, member management, and fine calculation.',
    tech: ['React', 'Node.js', 'MongoDB'],
    room: 'LAB_03',
    timeStart: 143,
    timeEnd: 146,
    color: '#00fff9',
    live: '#',
    code: '#',
  },
  {
    id: 'sohanix',
    title: 'Sohanix Wealth',
    subtitle: 'Financial Tech · Premium',
    desc: 'Premium wealth management dashboard with portfolio tracking and real-time market data.',
    tech: ['React', 'Node.js', 'Chart.js', 'REST APIs'],
    room: 'LAB_03',
    timeStart: 146,
    timeEnd: 150,
    color: '#FFD700',
    live: '#',
    code: '#',
  },
]

export const SKILLS = [
  { label: 'React',    icon: '⚛',  color: '#61DAFB' },
  { label: 'Next.js',  icon: '▲',  color: '#ffffff' },
  { label: 'Node.js',  icon: '⬡',  color: '#68A063' },
  { label: 'MongoDB',  icon: '🍃', color: '#4DB33D' },
  { label: 'AI/Vapi',  icon: '🤖', color: '#bc13fe' },
  { label: 'Tailwind', icon: '🌊', color: '#38BDF8' },
]

export const ROOMS = [
  { id: 'ENTRANCE', label: 'ENTRANCE · Z-BLOCK EXTERIOR',   color: '#bc13fe', timeRange: [0,   21]  },
  { id: 'LOBBY',    label: 'GROUND FLOOR · MAIN LOBBY',     color: '#bc13fe', timeRange: [21,  74]  },
  { id: 'LAB_01',   label: 'CLASSROOM 01 · LOGIC LAB',      color: '#bc13fe', timeRange: [74,  99]  },
  { id: 'LAB_02',   label: 'CLASSROOM 02 · GAMING ZONE',    color: '#ff00ff', timeRange: [99,  130] },
  { id: 'LAB_03',   label: 'CLASSROOM 03 · FULL-STACK HUB', color: '#00fff9', timeRange: [130, 177] },
  { id: 'EXIT',     label: 'EXIT · CONTACT TERMINAL',       color: '#00fff9', timeRange: [177, 210] },
]
