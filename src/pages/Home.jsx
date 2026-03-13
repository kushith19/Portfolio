import { motion } from "framer-motion";
import WorkflowCanvas from "../components/WorkflowCanvas";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ background: "#09090b", padding: "20px 16px", gap: "0px" }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-6 sm:mb-12"
      >
        <h1
          className="font-mono text-xl sm:text-3xl font-semibold tracking-tight"
          style={{ color: "#f4f4f5" }}
        >
          Kushith Gowda
        </h1>
        <p
          className="mt-2 text-xs sm:text-sm font-sans"
          style={{ color: "#71717a" }}
        >
          Development · Machine Learning · AI
        </p>
      </motion.div>

      {/* Canvas wrapper — horizontal scroll on small screens */}
      <div className="mt-4" style={{ overflowX: "auto", maxWidth: "100vw" }}>
        <WorkflowCanvas />
      </div>

      {/* n8n-inspired corner watermark */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="fixed bottom-5 left-6 font-mono text-[10px] tracking-widest"
        style={{ color: "rgba(139,92,246,0.25)" }}
      >
      </motion.span>
    </div>
  );
}
