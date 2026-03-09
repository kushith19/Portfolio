import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const iconMap = {
  Start:        '▶',
  About:        '◈',
  Skills:       '⬡',
  Projects:     '⬛',
  Achievements: '◆',
  Contact:      '✦',
}

export default function Node({ label, route, delay = 0, isOutput = false }) {
  const navigate = useNavigate()

  const handleClick = () => {
    if (route) navigate(route)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      onClick={handleClick}
      className="group relative cursor-pointer select-none"
      style={{ zIndex: 10 }}
    >
      
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: '0 0 24px 4px rgba(139,92,246,0.18)',
          borderRadius: '12px',
        }}
      />

      <div
        className="relative flex flex-col items-start gap-1 rounded-xl transition-all duration-250"
        style={{
          background: '#18181b',
          border: isOutput
            ? '1px solid rgba(139,92,246,0.65)'
            : '1px solid rgba(139,92,246,0.3)',
          padding: '14px 20px',
          minWidth: isOutput ? '130px' : '110px',
          transform: 'translateY(0)',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.border = '1px solid rgba(139,92,246,0.9)'
          e.currentTarget.style.transform = 'translateY(-2px)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.border = isOutput
            ? '1px solid rgba(139,92,246,0.65)'
            : '1px solid rgba(139,92,246,0.3)'
          e.currentTarget.style.transform = 'translateY(0)'
        }}
      >
        
        <span
          className="font-mono text-[9px] tracking-widest uppercase"
          style={{ color: 'rgba(139,92,246,0.7)' }}
        >
          {isOutput ? 'output' : label === 'Start' ? 'trigger' : 'node'}
        </span>

        
        <div className="flex items-center gap-2">
          <span style={{ color: '#8b5cf6', fontSize: '13px' }}>
            {iconMap[label] || '●'}
          </span>
          <span
            className="font-mono text-sm font-medium tracking-wide"
            style={{ color: '#f4f4f5' }}
          >
            {label}
          </span>
        </div>

      
        <div className="flex items-center gap-1.5 mt-1">
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: '#10b981' }}
          />
          <span className="font-mono text-[9px]" style={{ color: '#71717a' }}>
            active
          </span>
        </div>
      </div>
    </motion.div>
  )
}
