"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  pulse: number;
  pulseSpeed: number;
}

interface Line {
  x1: number; y1: number;
  x2: number; y2: number;
  progress: number;
  speed: number;
  color: string;
  glowDot: number; // traveling dot position 0-1
}

export default function CircuitBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Create nodes
    const nodeCount = Math.floor((window.innerWidth * window.innerHeight) / 22000);
    const particles: Particle[] = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 2.5 + 1,
      opacity: Math.random() * 0.6 + 0.3,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.03 + 0.01,
    }));

    // Neon colors - purple, blue, gold accents
    const colors = [
      "rgba(139, 92, 246,", // purple
      "rgba(59, 130, 246,",  // blue
      "rgba(250, 189, 47,",  // gold
      "rgba(168, 85, 247,",  // violet
    ];

    const lines: Line[] = [];
    const maxLines = 18;

    const createLine = (p1: Particle, p2: Particle) => {
      if (lines.length < maxLines) {
        lines.push({
          x1: p1.x, y1: p1.y,
          x2: p2.x, y2: p2.y,
          progress: 0,
          speed: Math.random() * 0.004 + 0.002,
          color: colors[Math.floor(Math.random() * colors.length)],
          glowDot: 0,
        });
      }
    };

    let frame = 0;
    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      // Move particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.pulseSpeed;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });

      // Spawn circuit lines occasionally
      if (frame % 60 === 0) {
        const p1 = particles[Math.floor(Math.random() * particles.length)];
        const p2 = particles[Math.floor(Math.random() * particles.length)];
        const dist = Math.hypot(p2.x - p1.x, p2.y - p1.y);
        if (dist < 250 && dist > 50) createLine(p1, p2);
      }

      // Draw static near connections (soft)
      particles.forEach((p, i) => {
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dist = Math.hypot(q.x - p.x, q.y - p.y);
          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.15;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      });

      // Animate circuit lines (traveling glow)
      for (let i = lines.length - 1; i >= 0; i--) {
        const line = lines[i];
        line.glowDot = Math.min(1, line.glowDot + line.speed);

        const progress = line.glowDot;
        // Draw the line dimly
        ctx.beginPath();
        ctx.strokeStyle = `${line.color}0.12)`;
        ctx.lineWidth = 1;
        ctx.moveTo(line.x1, line.y1);
        ctx.lineTo(line.x2, line.y2);
        ctx.stroke();

        // Traveling dot with glow
        const dotX = line.x1 + (line.x2 - line.x1) * progress;
        const dotY = line.y1 + (line.y2 - line.y1) * progress;
        const grd = ctx.createRadialGradient(dotX, dotY, 0, dotX, dotY, 16);
        grd.addColorStop(0, `${line.color}0.9)`);
        grd.addColorStop(0.4, `${line.color}0.4)`);
        grd.addColorStop(1, `${line.color}0)`);
        ctx.beginPath();
        ctx.fillStyle = grd;
        ctx.arc(dotX, dotY, 16, 0, Math.PI * 2);
        ctx.fill();

        // Inner bright dot
        ctx.beginPath();
        ctx.fillStyle = `${line.color}1)`;
        ctx.arc(dotX, dotY, 2.5, 0, Math.PI * 2);
        ctx.fill();

        if (line.glowDot >= 1) {
          lines.splice(i, 1);
        }
      }

      // Draw nodes
      particles.forEach((p) => {
        const pulsedRadius = p.radius + Math.sin(p.pulse) * 0.8;
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, pulsedRadius * 4);
        grd.addColorStop(0, `rgba(139, 92, 246, ${p.opacity})`);
        grd.addColorStop(1, "rgba(139, 92, 246, 0)");

        ctx.beginPath();
        ctx.fillStyle = grd;
        ctx.arc(p.x, p.y, pulsedRadius * 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = `rgba(200, 160, 255, ${p.opacity * 0.9})`;
        ctx.arc(p.x, p.y, pulsedRadius, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0, opacity: 0.65 }}
    />
  );
}
