import PageLayout from '../components/PageLayout'
import { motion } from 'framer-motion'

const sections = [
  {
    category: 'Programming & Problem Solving',
    color: '#6366f1',
    skills: ['C++', 'Python', 'Java', 'Data Structures & Algorithms'],
  },
  {
    category: 'Full-Stack Development (MERN)',
    color: '#8b5cf6',
    skills: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'REST APIs',
      'JWT Authentication',
      'Tailwind CSS',
    ],
  },
  {
    category: 'Machine Learning & NLP',
    color: '#a78bfa',
    skills: [
      'Python',
      'TensorFlow',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'Natural Language Processing',
      'Matplotlib',
    ],
  },
  {
    category: 'Core Computer Science',
    color: '#7c3aed',
    skills: [
      'DBMS',
      'Operating Systems',
      'Computer Networks',
      'System Design',
    ],
  },
  {
    category: 'Tools & Platforms',
    color: '#6d28d9',
    skills: ['Git', 'GitHub', 'Docker','Postman'],
  },
]
function SkillTag({ name, color }) {
  return (
    <span
      className="font-mono text-xs px-3 py-1.5 rounded-lg"
      style={{
        background: `${color}14`,
        border: `1px solid ${color}30`,
        color: '#d4d4d8',
      }}
    >
      {name}
    </span>
  )
}

export default function Skills() {
  return (
    <PageLayout title="Tech Stack & Expertise">
      <div className="flex flex-col gap-10">
        {sections.map((s, si) => (
          <motion.div
            key={s.category}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: si * 0.1 + 0.1 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: s.color }} />
              <p className="font-mono text-xs tracking-wider uppercase" style={{ color: s.color }}>
                {s.category}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {s.skills.map((skill) => (
                <SkillTag key={skill} name={skill} color={s.color} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </PageLayout>
  )
}
