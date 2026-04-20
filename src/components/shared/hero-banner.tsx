"use client";

import { motion } from "framer-motion";
import type { VisualStyleId } from "./style-switcher";

function WavesSVG({ color1, color2 }: { color1: string; color2: string }) {
  return (
    <svg className="absolute bottom-0 left-0 w-full h-48 sm:h-64" viewBox="0 0 1440 200" preserveAspectRatio="none">
      <motion.path
        d="M0,100 C360,180 720,20 1440,100 L1440,200 L0,200 Z"
        fill={color1}
        animate={{ d: ["M0,100 C360,180 720,20 1440,100 L1440,200 L0,200 Z", "M0,120 C360,40 720,180 1440,80 L1440,200 L0,200 Z", "M0,100 C360,180 720,20 1440,100 L1440,200 L0,200 Z"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d="M0,140 C480,80 960,180 1440,120 L1440,200 L0,200 Z"
        fill={color2}
        animate={{ d: ["M0,140 C480,80 960,180 1440,120 L1440,200 L0,200 Z", "M0,120 C480,180 960,60 1440,140 L1440,200 L0,200 Z", "M0,140 C480,80 960,180 1440,120 L1440,200 L0,200 Z"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}

function FloatingShapes({ colors }: { colors: string[] }) {
  return (
    <>
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-40 blur-md"
          style={{
            background: colors[i % colors.length],
            width: 80 + Math.random() * 150,
            height: 80 + Math.random() * 150,
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
          }}
          animate={{
            x: [0, 30 * (i % 2 === 0 ? 1 : -1), 0],
            y: [0, 20 * (i % 2 === 0 ? -1 : 1), 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 4 + i * 0.7, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </>
  );
}

function MeshGradient({ colors }: { colors: [string, string, string] }) {
  return (
    <>
      <motion.div
        className="absolute inset-0"
        animate={{ background: [
          `radial-gradient(circle at 20% 50%, ${colors[0]} 0%, transparent 50%), radial-gradient(circle at 80% 50%, ${colors[1]} 0%, transparent 50%), radial-gradient(circle at 50% 80%, ${colors[2]} 0%, transparent 50%)`,
          `radial-gradient(circle at 50% 20%, ${colors[0]} 0%, transparent 50%), radial-gradient(circle at 20% 80%, ${colors[1]} 0%, transparent 50%), radial-gradient(circle at 80% 50%, ${colors[2]} 0%, transparent 50%)`,
          `radial-gradient(circle at 80% 30%, ${colors[0]} 0%, transparent 50%), radial-gradient(circle at 50% 70%, ${colors[1]} 0%, transparent 50%), radial-gradient(circle at 20% 50%, ${colors[2]} 0%, transparent 50%)`,
        ] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  );
}

function ScanLines() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.03)_2px,rgba(255,255,255,0.03)_4px)]" />
      <motion.div
        className="absolute left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent shadow-[0_0_15px_rgba(34,211,238,0.4)]"
        animate={{ top: ["-5%", "105%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

function PulseRings({ color }: { color: string }) {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
          style={{ borderColor: color }}
          animate={{ width: [100, 800], height: [100, 800], opacity: [0.5, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: i * 1.3, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}

function MovingGrid() {
  return (
    <motion.div
      className="absolute inset-0 opacity-[0.04]"
      animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      style={{
        backgroundImage: "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    />
  );
}

function DiagonalStripes() {
  return (
    <motion.div
      className="absolute inset-0"
      animate={{ backgroundPosition: ["0px 0px", "80px 80px"] }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      style={{
        backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(0,0,0,0.06) 20px, rgba(0,0,0,0.06) 22px)",
      }}
    />
  );
}

export function HeroBanner({ style }: { style: VisualStyleId }) {
  switch (style) {
    case "classic":
      return (
        <>
          <MeshGradient colors={["rgba(30,64,120,0.15)", "rgba(180,150,50,0.12)", "rgba(30,64,120,0.08)"]} />
          <WavesSVG color1="rgba(30,64,120,0.08)" color2="rgba(180,150,50,0.06)" />
          <FloatingShapes colors={["rgba(30,64,120,0.25)", "rgba(180,150,50,0.20)"]} />
          <PulseRings color="rgba(30,64,120,0.06)" />
        </>
      );
    case "gradient":
      return (
        <>
          <MeshGradient colors={["rgba(99,102,241,0.35)", "rgba(168,85,247,0.3)", "rgba(236,72,153,0.25)"]} />
          <FloatingShapes colors={["#818cf8", "#a78bfa", "#f472b6"]} />
          <WavesSVG color1="rgba(255,255,255,0.08)" color2="rgba(255,255,255,0.05)" />
          <PulseRings color="rgba(255,255,255,0.15)" />
        </>
      );
    case "glass":
      return (
        <>
          <MeshGradient colors={["rgba(147,197,253,0.3)", "rgba(199,210,254,0.25)", "rgba(255,255,255,0.4)"]} />
          <FloatingShapes colors={["rgba(96,165,250,0.2)", "rgba(129,140,248,0.15)", "rgba(167,139,250,0.12)"]} />
        </>
      );
    case "dark":
      return (
        <>
          <MeshGradient colors={["rgba(59,130,246,0.08)", "rgba(139,92,246,0.06)", "rgba(6,182,212,0.04)"]} />
          <MovingGrid />
          <PulseRings color="rgba(59,130,246,0.08)" />
        </>
      );
    case "neon":
      return (
        <>
          <ScanLines />
          <MeshGradient colors={["rgba(168,85,247,0.25)", "rgba(6,182,212,0.2)", "rgba(168,85,247,0.15)"]} />
          <PulseRings color="rgba(168,85,247,0.2)" />
          <FloatingShapes colors={["#a855f7", "#06b6d4", "#ec4899"]} />
        </>
      );
    case "aurora":
      return (
        <>
          <MeshGradient colors={["rgba(52,211,153,0.15)", "rgba(45,212,191,0.12)", "rgba(34,211,238,0.1)"]} />
          <WavesSVG color1="rgba(52,211,153,0.06)" color2="rgba(34,211,238,0.04)" />
          <FloatingShapes colors={["#34d399", "#2dd4bf", "#22d3ee"]} />
        </>
      );
    case "warm":
      return (
        <>
          <MeshGradient colors={["rgba(251,191,36,0.15)", "rgba(251,146,60,0.12)", "rgba(244,114,182,0.08)"]} />
          <WavesSVG color1="rgba(251,191,36,0.06)" color2="rgba(251,146,60,0.04)" />
          <FloatingShapes colors={["#fbbf24", "#fb923c", "#f472b6"]} />
        </>
      );
    case "ocean":
      return (
        <>
          <MeshGradient colors={["rgba(59,130,246,0.15)", "rgba(6,182,212,0.12)", "rgba(14,165,233,0.1)"]} />
          <WavesSVG color1="rgba(6,182,212,0.08)" color2="rgba(59,130,246,0.06)" />
          <PulseRings color="rgba(6,182,212,0.08)" />
        </>
      );
    case "minimal":
      return (
        <>
          <MovingGrid />
          <PulseRings color="rgba(0,0,0,0.04)" />
        </>
      );
    case "brutalist":
      return (
        <>
          <DiagonalStripes />
          <FloatingShapes colors={["rgba(0,0,0,0.08)", "rgba(220,38,38,0.1)"]} />
        </>
      );
    default:
      return null;
  }
}
