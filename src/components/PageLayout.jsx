import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

export default function PageLayout({ tag, title, children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", path: "/about" },
    { label: "Skills", path: "/skills" },
    { label: "Projects", path: "/projects" },
    { label: "Achievements", path: "/achievements" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <div
      className="min-h-screen"
      style={{ background: "#09090b", color: "#f4f4f5" }}
    >
      <nav
        className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-5 relative"
        style={{ borderBottom: "1px solid rgba(139,92,246,0.12)" }}
      >
        <button
          onClick={() => navigate("/")}
          className="font-mono text-[11px] tracking-widest uppercase flex items-center gap-2 transition-colors duration-200"
          style={{ color: "rgba(139,92,246,0.6)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#8b5cf6")}
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = "rgba(139,92,246,0.6)")
          }
        >
          ← workflow
        </button>

        {/* Desktop nav links */}
        <div className="hidden md:flex gap-6">
          {navLinks.map(({ label, path }) => {
            const isActive = location.pathname === path;
            const defaultColor = isActive ? "#c4b5fd" : "#a1a1aa";
            return (
              <button
                key={label}
                onClick={() => navigate(path)}
                className="font-mono text-[11px] tracking-wider uppercase transition-colors duration-200"
                style={{
                  color: defaultColor,
                  fontWeight: isActive ? 600 : 400,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#f4f4f5")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = defaultColor)
                }
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Hamburger button — mobile/tablet only */}
        <button
          className="md:hidden font-mono text-xl"
          style={{ color: "rgba(139,92,246,0.7)" }}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
            style={{
              background: "#111113",
              borderBottom: "1px solid rgba(139,92,246,0.12)",
            }}
          >
            <div className="flex flex-col py-2">
              {navLinks.map(({ label, path }) => {
                const isActive = location.pathname === path;
                return (
                  <button
                    key={label}
                    onClick={() => {
                      navigate(path);
                      setMenuOpen(false);
                    }}
                    className="font-mono text-[11px] tracking-wider uppercase px-6 py-3 text-left transition-colors duration-200"
                    style={{
                      color: isActive ? "#c4b5fd" : "#a1a1aa",
                      fontWeight: isActive ? 600 : 400,
                      background: isActive
                        ? "rgba(139,92,246,0.06)"
                        : "transparent",
                    }}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 py-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {tag && (
            <p
              className="font-mono text-[10px] tracking-[0.3em] uppercase mb-3"
              style={{ color: "rgba(139,92,246,0.6)" }}
            >
              {tag}
            </p>
          )}
          <h1
            className={`font-mono text-xl sm:text-2xl font-semibold ${tag ? "mb-6" : "mb-4"}`}
            style={{ color: "#f4f4f5" }}
          >
            {title}
          </h1>
          {children}
        </motion.div>
      </main>

      {(() => {
        const currentIdx = navLinks.findIndex(
          (l) => l.path === location.pathname,
        );
        if (currentIdx === -1) return null;
        const prev =
          navLinks[(currentIdx - 1 + navLinks.length) % navLinks.length];
        const next = navLinks[(currentIdx + 1) % navLinks.length];
        const arrowStyle = {
          position: "fixed",
          top: "50%",
          transform: "translateY(-50%)",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "rgba(139,92,246,0.55)",
          fontSize: "28px",
          fontFamily: "monospace",
          padding: "12px 8px",
          transition: "color 0.2s, transform 0.2s",
          zIndex: 50,
        };
        return (
          <div className="hidden md:block">
            <button
              onClick={() => navigate(prev.path)}
              style={{ ...arrowStyle, left: "16px" }}
              title={prev.label}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "rgba(139,92,246,0.9)";
                e.currentTarget.style.transform =
                  "translateY(-50%) translateX(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(139,92,246,0.55)";
                e.currentTarget.style.transform = "translateY(-50%)";
              }}
            >
              ‹
            </button>
            <button
              onClick={() => navigate(next.path)}
              style={{ ...arrowStyle, right: "16px" }}
              title={next.label}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "rgba(139,92,246,0.9)";
                e.currentTarget.style.transform =
                  "translateY(-50%) translateX(2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(139,92,246,0.55)";
                e.currentTarget.style.transform = "translateY(-50%)";
              }}
            >
              ›
            </button>
          </div>
        );
      })()}
    </div>
  );
}
