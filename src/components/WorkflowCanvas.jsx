import { useRef, useEffect, useState } from 'react'
import Node from './Node'
import Connectors from './Connectors'
import { motion } from 'framer-motion'

/*
  Layout (all values in px, relative to canvas):

  Row layout (Y centers):
    Top branch (Skills):       Y = 120
    Main spine:                Y = 260
    Bottom branch (Achievements): Y = 400

  X positions (node left edge):
    Start:        60
    About:       230
    Projects:    420
    Skills:      580   (branch from Projects)
    Achievements:580   (branch from Projects)
    Contact:     760
*/

const NODE_W = 130  // approximate node card width
const NODE_H = 88   // approximate node card height

// Node center helpers
const cx = (x) => x + NODE_W / 2
const cy = (y) => y + NODE_H / 2

// Node positions: { x, y } = top-left of node card
const POS = {
  Start:        { x: 30,  y: 152 },
  About:        { x: 210, y: 152 },
  Projects:     { x: 400, y: 152 },
  Skills:       { x: 590, y: 30 },
  Achievements: { x: 590, y: 274 },
  Contact:      { x: 790, y: 152 },
}

const CANVAS_W = 1020
const CANVAS_H = 400

// Lines: from node-center to node-center (straight)
const LINES = [
  // Main spine
  { x1: cx(POS.Start.x),    y1: cy(POS.Start.y),    x2: cx(POS.About.x),    y2: cy(POS.About.y),    delay: 0.05 },
  { x1: cx(POS.About.x),    y1: cy(POS.About.y),    x2: cx(POS.Projects.x), y2: cy(POS.Projects.y), delay: 0.2  },
  // Branches from Projects
  { x1: cx(POS.Projects.x), y1: cy(POS.Projects.y), x2: cx(POS.Skills.x),       y2: cy(POS.Skills.y),       delay: 0.35 },
  { x1: cx(POS.Projects.x), y1: cy(POS.Projects.y), x2: cx(POS.Achievements.x), y2: cy(POS.Achievements.y), delay: 0.35 },
  // Converge to Contact
  { x1: cx(POS.Skills.x),       y1: cy(POS.Skills.y),       x2: cx(POS.Contact.x), y2: cy(POS.Contact.y), delay: 0.5 },
  { x1: cx(POS.Achievements.x), y1: cy(POS.Achievements.y), x2: cx(POS.Contact.x), y2: cy(POS.Contact.y), delay: 0.5 },
]

const NODES = [
  { label: 'Start',        route: '/about',         delay: 0.1  },
  { label: 'About',        route: '/about',        delay: 0.2  },
  { label: 'Projects',     route: '/projects',     delay: 0.3  },
  { label: 'Skills',       route: '/skills',       delay: 0.45 },
  { label: 'Achievements', route: '/achievements', delay: 0.45 },
  { label: 'Contact',      route: '/contact',      delay: 0.6, isOutput: true },
]

export default function WorkflowCanvas() {
  return (
    <div
      className="relative"
      style={{ width: CANVAS_W, height: CANVAS_H }}
    >
      {/* SVG connectors underneath nodes */}
      <Connectors lines={LINES} width={CANVAS_W} height={CANVAS_H} />

      {/* Nodes absolutely positioned */}
      {NODES.map((n) => (
        <div
          key={n.label}
          style={{
            position: 'absolute',
            left: POS[n.label].x,
            top: POS[n.label].y,
          }}
        >
          <Node
            label={n.label}
            route={n.route}
            delay={n.delay}
            isOutput={n.isOutput}
          />
        </div>
      ))}

      {/* Subtle execution flow label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-4 right-4 font-mono text-[10px] tracking-widest uppercase"
        style={{ color: 'rgba(139,92,246,0.4)' }}
      >
        workflow · 6 nodes · live
      </motion.div>
    </div>
  )
}
