import PageLayout from "../components/PageLayout";
import { motion } from "framer-motion";

const projects = [
  {
    title: "SortIt",
    badge: "Hackathon Winner",
    problem: "A Socratic Learning Mentor for Sorting Algorithms",
    highlights: [
      "AI-powered sorting tutor with adaptive guidance, emotion-aware coaching, and bilingual support (English/Kannada)",
      "Gamified learning with XP, levels, milestones, puzzles, and a global leaderboard to make algorithms engaging.",
      "Interactive visualizers and real-time feedback that turn complex sorting concepts into hands-on understanding.",
    ],
    stack: ["React", "Node.js", "MongoDB", "Ollama", "NLP"],
    github: "https://github.com/kushith19/SortIt-socratic-AI-mentor-",
    demo: "https://vimeo.com/1171793551?fl=ip&fe=ec",
  },
  {
    title: "HireAxis",
    problem: "AI-Powered Job Portal with Video Interview & Resume Intelligence",
    highlights: [
      "AI-driven recruitment backend with resume NLP parsing, fuzzy skill matching, and automated applicant scoring",
      "LLM-generated skill-based interview questions combined with computer vision analysis of confidence and behavior.",
      "Scalable REST API for recruiters to upload resumes, extract insights, and evaluate candidates seamlessly",
    ],
    stack: ["FastAPI", "MERN", "NLP", "OpenCV", "ResNet50", "LLM"],
    github: "https://github.com/kushith19/HireAxis",
    demo: '',
  },
];

function Tag({ text }) {
  return (
    <span
      className="font-mono text-[11px] px-2.5 py-1 rounded-md"
      style={{
        background: "rgba(139,92,246,0.1)",
        border: "1px solid rgba(139,92,246,0.2)",
        color: "#a78bfa",
      }}
    >
      {text}
    </span>
  );
}

function LinkBtn({ href, children, disabled }) {
  if (disabled) {
    return (
      <span
        className="font-mono text-[11px] tracking-wider uppercase px-3 py-1.5 rounded-lg cursor-not-allowed"
        style={{
          border: "1px solid rgba(139,92,246,0.15)",
          color: "rgba(139,92,246,0.3)",
        }}
      >
        {children}
      </span>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-mono text-[11px] tracking-wider uppercase px-3 py-1.5 rounded-lg transition-colors duration-200"
      style={{
        border: "1px solid rgba(139,92,246,0.3)",
        color: "rgba(139,92,246,0.8)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(139,92,246,0.1)";
        e.currentTarget.style.color = "#8b5cf6";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
        e.currentTarget.style.color = "rgba(139,92,246,0.8)";
      }}
    >
      {children}
    </a>
  );
}

export default function Projects() {
  return (
    <PageLayout title="What I've Built">
      <div className="flex flex-col gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12 + 0.1 }}
            className="rounded-xl p-4 sm:p-6"
            style={{
              background: "#18181b",
              border: "1px solid rgba(139,92,246,0.18)",
            }}
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-3">
              <div>
                <div className="flex items-center gap-3">
                  <h2
                    className="font-mono text-base font-semibold"
                    style={{ color: "#f4f4f5" }}
                  >
                    {p.title}
                  </h2>
                  {p.badge && (
                    <span
                      className="font-mono text-[10px] tracking-wider px-2 py-0.5 rounded-full flex items-center gap-1"
                      style={{
                        background: "rgba(16,185,129,0.08)",
                        border: "1px solid rgba(16,185,129,0.2)",
                        color: "rgba(16,185,129,0.7)",
                      }}
                    >
                      <span style={{ fontSize: "10px" }}>🏆</span>
                      {p.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm mt-1" style={{ color: "#71717a" }}>
                  {p.problem}
                </p>
              </div>
              <div className="flex gap-2 flex-shrink-0 self-start">
                <LinkBtn href={p.github}>GitHub</LinkBtn>
                <LinkBtn href={p.demo} disabled={!p.demo}>
                  Demo
                </LinkBtn>
              </div>
            </div>

            <ul className="mb-4 space-y-1.5">
              {p.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-2 text-sm"
                  style={{ color: "#a1a1aa" }}
                >
                  <span
                    style={{
                      color: "rgba(139,92,246,0.6)",
                      marginTop: "2px",
                      flexShrink: 0,
                    }}
                  >
                    ·
                  </span>
                  {h}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {p.stack.map((t) => (
                <Tag key={t} text={t} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </PageLayout>
  );
}
