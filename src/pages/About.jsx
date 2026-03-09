import PageLayout from "../components/PageLayout";

const RESUME_URL =
  "https://drive.google.com/file/d/1Ny8i_Lf-4hYelTgJ2svv7BnaFtqBWAwc/view?usp=sharing";

const highlights = [
  { label: "Degree", value: "B.Tech, CSE (Data Science) · 2027" },
  { label: "Stack", value: "MongoDB · Express · React · Node.js" },
  {
    label: "ML Focus",
    value:
      "Supervised & unsupervised learning ,  Deep learning , Data Science , Generative AI ",
  },
  {
    label: "Strength",
    value:
      "DSA ·  Clean architecture · Backend engineering · AI-powered Web Apps",
  },
  {
    label: "Goal",
    value:
      "Build intelligent products and scalable SaaS powered by data and AI",
  },
];

export default function About() {
  return (
    <PageLayout title="Who I Am">
      <p
        className="text-base leading-relaxed mb-10 font-sans"
        style={{ color: "#a1a1aa", maxWidth: "560px" }}
      >
        I'm an engineer with a background in Computer Science and Data Science,
        focused on building scalable products that combine strong engineering
        with intelligent behavior. I work across the MERN stack, machine
        learning, and modern AI systems to create solutions that are not just
        functional, but adaptive and insight-driven.
        <br />
        <br /> As technology evolves, I continuously upgrade my skills,
        thoughtfully incorporating advances in machine learning, generative AI,
        and large language models to build systems that stay relevant and
        impactful over time.
      </p>

      {/* Resume download */}
      <a
        href={RESUME_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-4 rounded-xl px-4 sm:px-6 py-4 mb-10 transition-all duration-300"
        style={{
          border: "1px solid rgba(139,92,246,0.25)",
          background: "#18181b",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "rgba(139,92,246,0.5)";
          e.currentTarget.style.boxShadow = "0 0 20px rgba(139,92,246,0.08)";
          e.currentTarget.style.background = "#1c1c22";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(139,92,246,0.25)";
          e.currentTarget.style.boxShadow = "none";
          e.currentTarget.style.background = "#18181b";
        }}
      >
        {/* Document icon */}
        <div
          className="flex items-center justify-center rounded-lg flex-shrink-0"
          style={{
            width: 40,
            height: 40,
            background: "rgba(139,92,246,0.12)",
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
        </div>

        {/* Text */}
        <div className="flex flex-col">
          <span
            className="font-mono text-sm font-medium"
            style={{ color: "#f4f4f5" }}
          >
            Resume
          </span>
          <span
            className="font-mono text-[11px] mt-0.5"
            style={{ color: "#71717a" }}
          >
            View on Google Drive ↗
          </span>
        </div>

        {/* External link arrow */}
        <svg
          className="ml-auto flex-shrink-0 transition-transform duration-200"
          style={{ color: "rgba(139,92,246,0.5)" }}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
      </a>

      <div
        className="rounded-xl overflow-hidden"
        style={{ border: "1px solid rgba(139,92,246,0.2)" }}
      >
        {highlights.map((h, i) => (
          <div
            key={h.label}
            className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-6 px-4 sm:px-6 py-3 sm:py-4"
            style={{
              borderBottom:
                i < highlights.length - 1
                  ? "1px solid rgba(139,92,246,0.1)"
                  : "none",
              background: i % 2 === 0 ? "#18181b" : "#1a1a1f",
            }}
          >
            <span
              className="font-mono text-xs sm:w-20 flex-shrink-0 mt-0.5"
              style={{ color: "rgba(139,92,246,0.7)" }}
            >
              {h.label}
            </span>
            <span className="font-sans text-sm" style={{ color: "#d4d4d8" }}>
              {h.value}
            </span>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
