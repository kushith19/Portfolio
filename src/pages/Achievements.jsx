import PageLayout from '../components/PageLayout'
import { motion } from 'framer-motion'

const achievements = [
  {
    type: 'Hackathon',
    title: 'Winner — National level 48 Hour Hackathon',
    detail: 'Led the team to 1st place in the AI/ML domain by developing a Socratic AI mentor for sorting algorithms in 48 hours.',
    year: '2025',
  },

  {
    type: 'Certification',
    title: 'Machine Learning Specialization — Coursera (Andrew Ng)',
    detail: 'Supervised, unsupervised, and reinforcement learning fundamentals.',
    year: '2025',
  },
  {
  type: 'Sports',
  title: 'VTU State-Level Intercollege Tug of War — 3rd Place',
  detail:
    'Represented the college team in the VTU state-level intercollege competition. Demonstrated teamwork, discipline, and resilience in a high-intensity event.',
  year: '2025',
},
 
{
  type: 'Leadership',
  title: 'Business & IT Club (NHCE) — Program Vice Chair',
  detail:
    'Planned large-scale events and facilitated industry–student interactions. Curated networking programs, coordinated speaker sessions, managed cross-team operations, and bridged business insights with emerging technology trends on campus.',
  year: '2024',
},
{
  type: 'Leadership',
  title: 'STEM Club (NHCE) — Secretary',
  detail:
    'Organized technical events, peer-learning initiatives, and workshops. Delivered hands-on sessions for first-year students, coordinated volunteer teams, and fostered a collaborative STEM culture on campus.',
  year: '2023',
},
]

const typeColor = {
  Hackathon:                '#10b981',
  Certification:            '#f59e0b',
  Sports:                    '#f65c5c',
  Leadership:                 '#6366f1',
}

export default function Achievements() {
  return (
    <PageLayout title="Milestones & Recognition">
      <div className="relative">
        {/* Timeline line */}
        <div
          className="absolute left-[5px] top-3 bottom-3 w-px"
          style={{ background: 'rgba(139,92,246,0.15)' }}
        />

        <div className="flex flex-col gap-7 pl-8">
          {achievements.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 + 0.1 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div
                className="absolute -left-[26px] top-1.5 w-2.5 h-2.5 rounded-full"
                style={{ background: typeColor[a.type] || '#8b5cf6' }}
              />

              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 rounded"
                      style={{
                        background: `${typeColor[a.type]}15`,
                        color: typeColor[a.type] || '#8b5cf6',
                        border: `1px solid ${typeColor[a.type]}25`,
                      }}
                    >
                      {a.type}
                    </span>
                  </div>
                  <h3 className="font-mono text-sm font-medium mb-1" style={{ color: '#e4e4e7' }}>
                    {a.title}
                  </h3>
                  <p className="text-sm" style={{ color: '#71717a' }}>
                    {a.detail}
                  </p>
                </div>
                <span
                  className="font-mono text-xs flex-shrink-0 mt-1"
                  style={{ color: '#52525b' }}
                >
                  {a.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  )
}
