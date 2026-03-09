import { motion } from 'framer-motion'

/**
 * Draws SVG connector lines between nodes.
 * `lines` = array of { x1, y1, x2, y2, delay }
 */
export default function Connectors({ lines, width, height }) {
  return (
    <svg
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width,
        height,
        pointerEvents: 'none',
        overflow: 'visible',
      }}
    >
      <defs>
        <marker
          id="dot"
          viewBox="0 0 4 4"
          refX="2"
          refY="2"
          markerWidth="4"
          markerHeight="4"
        >
          <circle cx="2" cy="2" r="1.5" fill="rgba(139,92,246,0.5)" />
        </marker>
      </defs>

      {lines.map((line, i) => (
        <motion.line
          key={i}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke="rgba(139,92,246,0.35)"
          strokeWidth="1.5"
          strokeLinecap="round"
          markerEnd="url(#dot)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: line.delay || 0, ease: 'easeInOut' }}
        />
      ))}
    </svg>
  )
}
