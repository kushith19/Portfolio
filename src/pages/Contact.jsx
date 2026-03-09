import PageLayout from "../components/PageLayout";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const links = [
  {
    label: "GitHub",
    handle: "@kushith19",
    href: "https://github.com/kushith19/",
    icon: "simple-icons:github",
    desc: "Project repos",
  },
  {
    label: "LinkedIn",
    handle: "linkedin.com/in/kushith-gowda",
    href: "https://www.linkedin.com/in/kushith-gowda/",
    icon: "simple-icons:linkedin",
    desc: "Professional background & network",
  },
  {
    label: "Email",
    handle: "kushrgo1935@gmail.com",
    href: "mailto:kushrgo1935@gmail.com",
    icon: "mdi:email",
    desc: "For project discussions or opportunities",
  },
];

export default function Contact() {
  return (
    <PageLayout title="Let's Connect">
      <p className="text-sm mb-10" style={{ color: "#71717a" }}>
        Always open to exciting roles, internships, and collaborations — let's build.
      </p>

      <div className="flex flex-col gap-4">
        {links.map((l, i) => (
          <motion.a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12 + 0.1 }}
            className="flex items-center gap-5 rounded-xl px-6 py-5 transition-all duration-200 group"
            style={{
              background: "#18181b",
              border: "1px solid rgba(139,92,246,0.18)",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.border = "1px solid rgba(139,92,246,0.5)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.border = "1px solid rgba(139,92,246,0.18)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <span
              className="w-8 flex justify-center flex-shrink-0"
              style={{ color: "rgba(139,92,246,0.6)" }}
            >
              <Icon icon={l.icon} width="24" />
            </span>
            <div className="flex-1">
              <div className="flex items-baseline gap-3">
                <span
                  className="font-mono text-sm font-medium"
                  style={{ color: "#f4f4f5" }}
                >
                  {l.label}
                </span>
                <span
                  className="font-mono text-xs"
                  style={{ color: "#8b5cf6" }}
                >
                  {l.handle}
                </span>
              </div>
              <p className="text-xs mt-0.5" style={{ color: "#52525b" }}>
                {l.desc}
              </p>
            </div>
            <span
              className="font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ color: "rgba(139,92,246,0.6)" }}
            >
              open →
            </span>
          </motion.a>
        ))}
      </div>
    </PageLayout>
  );
}
