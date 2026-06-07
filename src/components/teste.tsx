"use client";

import React, { useRef, useEffect, useCallback } from "react";
import { Box, Slider, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

// ─── Types ────────────────────────────────────────────────────────────────────

interface WaveConfig {
  colorL: string;
  colorR: string;
  opacL: number;
  opacR: number;
  particleCount: number;
  speed: number;
  bands: number;
  glowSize: number;
}

// ─── Defaults (edit these to change the initial look) ─────────────────────────

const DEFAULT_CONFIG: WaveConfig = {
  colorL: "#00bfff",
  colorR: "#ffaa00",
  opacL: 0.9,
  opacR: 0.9,
  particleCount: 220,
  speed: 3,
  bands: 16,
  glowSize: 55,
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function hex2rgb(hex: string) {
  return {
    r: parseInt(hex.slice(1, 3), 16),
    g: parseInt(hex.slice(3, 5), 16),
    b: parseInt(hex.slice(5, 7), 16),
  };
}

function bez(t: number, p0: number, p1: number, p2: number, p3: number) {
  const m = 1 - t;
  return m * m * m * p0 + 3 * m * m * t * p1 + 3 * m * t * t * p2 + t * t * t * p3;
}

function bezPt(
  t: number,
  x0: number, y0: number,
  x1: number, y1: number,
  x2: number, y2: number,
  x3: number, y3: number
) {
  return { x: bez(t, x0, x1, x2, x3), y: bez(t, y0, y1, y2, y3) };
}

function pathDef(side: "L" | "R", band: number, W: number, H: number) {
  const cy = H * 0.6;
  const spread = H * 0.7;
  const yOrigin = H * 0.25 + band * spread;
  const midCtrl = band * spread * 0.25;
  if (side === "L") {
    return { x0: 0, y0: yOrigin, x1: W * 0.2, y1: yOrigin + midCtrl * 0.6, x2: W * 0.44, y2: cy + midCtrl * 0.2, x3: W / 2, y3: cy };
  } else {
    return { x0: W, y0: yOrigin, x1: W * 0.8, y1: yOrigin + midCtrl * 0.6, x2: W * 0.56, y2: cy + midCtrl * 0.2, x3: W / 2, y3: cy };
  }
}

// ─── Particle class ───────────────────────────────────────────────────────────

class Particle {
  side: "L" | "R";
  bandIdx: number;
  nBands: number;
  t: number;
  speed: number;
  size: number;
  maxAlpha: number;

  constructor(side: "L" | "R", bandIdx: number, nBands: number) {
    this.side = side;
    this.bandIdx = bandIdx;
    this.nBands = nBands;
    this.t = Math.random();
    this.speed = 0.0005 + Math.random() * 0.0015;
    this.size = 0.8 + Math.random() * 2.8;
    this.maxAlpha = 0.4 + Math.random() * 0.6;
  }

  reset() {
    this.t = 0;
    this.speed = 0.0005 + Math.random() * 0.0015;
    this.size = 0.8 + Math.random() * 2.8;
    this.maxAlpha = 0.4 + Math.random() * 0.6;
  }

  update(dt: number, speed: number) {
    this.t += this.speed * speed * dt * 0.06;
    if (this.t > 1.08) this.reset();
  }

  draw(ctx: CanvasRenderingContext2D, W: number, H: number, cfg: WaveConfig) {
    const band = this.bandIdx / (this.nBands - 1) - 0.5;
    const d = pathDef(this.side, band, W, H);
    const pos = bezPt(Math.min(this.t, 1), d.x0, d.y0, d.x1, d.y1, d.x2, d.y2, d.x3, d.y3);
    const col = this.side === "L" ? cfg.colorL : cfg.colorR;
    const opac = this.side === "L" ? cfg.opacL : cfg.opacR;
    const { r, g, b } = hex2rgb(col);

    let a = this.maxAlpha * opac;
    if (this.t < 0.12) a *= this.t / 0.12;
    if (this.t > 0.8) a *= 1 - (this.t - 0.8) / 0.25;

    ctx.beginPath();
    ctx.arc(pos.x, pos.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${r},${g},${b},${a})`;
    ctx.fill();
  }
}

// ─── Draw functions ───────────────────────────────────────────────────────────

function drawStrands(ctx: CanvasRenderingContext2D, W: number, H: number, cfg: WaveConfig) {
  for (let i = 0; i < cfg.bands; i++) {
    const band = i / (cfg.bands - 1) - 0.5;
    const distFromCenter = Math.abs(band);
    const aCore = Math.max(0, 1 - distFromCenter * 2.5);

    (["L", "R"] as const).forEach((side) => {
      const d = pathDef(side, band, W, H);
      const col = side === "L" ? cfg.colorL : cfg.colorR;
      const opac = side === "L" ? cfg.opacL : cfg.opacR;
      const { r, g, b } = hex2rgb(col);

      ctx.beginPath();
      ctx.moveTo(d.x0, d.y0);
      ctx.bezierCurveTo(d.x1, d.y1, d.x2, d.y2, d.x3, d.y3);
      ctx.strokeStyle = `rgba(${r},${g},${b},${(aCore * 0.55 + 0.05) * opac})`;
      ctx.lineWidth = aCore * 2.5 + 0.4;
      ctx.stroke();

      if (aCore > 0.3) {
        ctx.beginPath();
        ctx.moveTo(d.x0, d.y0);
        ctx.bezierCurveTo(d.x1, d.y1, d.x2, d.y2, d.x3, d.y3);
        ctx.strokeStyle = `rgba(${r},${g},${b},${aCore * 0.12 * opac})`;
        ctx.lineWidth = aCore * 14 + 2;
        ctx.stroke();
      }
    });
  }
}

function drawGlow(ctx: CanvasRenderingContext2D, W: number, H: number, cfg: WaveConfig) {
  const gx = W / 2, gy = H * 0.6, gs = cfg.glowSize;

  [
    { col: cfg.colorL, opac: cfg.opacL, ox: -gs * 0.15 },
    { col: cfg.colorR, opac: cfg.opacR, ox: gs * 0.15 },
  ].forEach(({ col, opac, ox }) => {
    const { r, g, b } = hex2rgb(col);
    const grad = ctx.createRadialGradient(gx + ox, gy, 0, gx + ox, gy, gs * 1.8);
    grad.addColorStop(0, `rgba(${r},${g},${b},${0.55 * opac})`);
    grad.addColorStop(0.4, `rgba(${r},${g},${b},${0.18 * opac})`);
    grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
    ctx.beginPath();
    ctx.ellipse(gx + ox, gy, gs * 1.8, gs * 1.2, 0, 0, Math.PI * 2);
    ctx.fillStyle = grad;
    ctx.fill();
  });

  const flash = ctx.createRadialGradient(gx, gy, 0, gx, gy, gs * 0.3);
  flash.addColorStop(0, "rgba(255,255,255,0.7)");
  flash.addColorStop(1, "rgba(255,255,255,0)");
  ctx.beginPath();
  ctx.arc(gx, gy, gs * 0.3, 0, Math.PI * 2);
  ctx.fillStyle = flash;
  ctx.fill();
}

// ─── Styled Controls ──────────────────────────────────────────────────────────

const ControlRow = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  gap: 12,
  marginTop: 12,
});

const CtrlGroup = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  flex: 1,
  minWidth: 120,
});

// ─── Component ────────────────────────────────────────────────────────────────

interface EnergyWaveProps {
  height?: number;
  showControls?: boolean;
  initialConfig?: Partial<WaveConfig>;
}

export default function EnergyWave({
  height = 420,
  showControls = true,
  initialConfig = {},
}: EnergyWaveProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cfgRef = useRef<WaveConfig>({ ...DEFAULT_CONFIG, ...initialConfig });
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);
  const lastRef = useRef<number>(0);

  const [cfg, setCfg] = React.useState<WaveConfig>({ ...DEFAULT_CONFIG, ...initialConfig });

  // Keep cfgRef in sync with state (used inside the RAF loop)
  useEffect(() => { cfgRef.current = cfg; }, [cfg]);

  const buildParticles = useCallback(() => {
    const c = cfgRef.current;
    const list: Particle[] = [];
    const half = Math.floor(c.particleCount / 2);
    for (let i = 0; i < half; i++) list.push(new Particle("L", Math.floor(Math.random() * c.bands), c.bands));
    for (let i = 0; i < half; i++) list.push(new Particle("R", Math.floor(Math.random() * c.bands), c.bands));
    particlesRef.current = list;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = canvas.getBoundingClientRect().width;
      canvas.height = height;
      buildParticles();
    };
    resize();

    const ctx = canvas.getContext("2d")!;

    const loop = (ts: number) => {
      const dt = Math.min(ts - lastRef.current, 50);
      lastRef.current = ts;
      const W = canvas.width, H = canvas.height;
      const c = cfgRef.current;

      ctx.clearRect(0, 0, W, H);

      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      drawStrands(ctx, W, H, c);
      drawGlow(ctx, W, H, c);
      particlesRef.current.forEach((p) => { p.update(dt, c.speed); p.draw(ctx, W, H, c); });
      ctx.restore();

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, [height, buildParticles]);

  // Rebuild particles when count or bands change
  useEffect(() => { buildParticles(); }, [cfg.particleCount, cfg.bands, buildParticles]);

  const set = (key: keyof WaveConfig) => (_: Event, val: number | number[]) =>
    setCfg((prev) => ({ ...prev, [key]: Array.isArray(val) ? val[0] : val }));

  return (
    <Box>
      <canvas
        ref={canvasRef}
        style={{ display: "block", width: "100%", height, borderRadius: 8 }}
      />

      {showControls && (
        <ControlRow>
          {/* Color pickers */}
          {(["colorL", "colorR"] as const).map((key) => (
            <CtrlGroup key={key}>
              <Typography variant="caption" color="text.secondary">
                {key === "colorL" ? "Cor esquerda" : "Cor direita"}
              </Typography>
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <input
                  type="color"
                  value={cfg[key]}
                  onChange={(e) => setCfg((prev) => ({ ...prev, [key]: e.target.value }))}
                  style={{ width: 40, height: 28, border: "none", background: "none", padding: 0, cursor: "pointer" }}
                />
                <Slider
                  size="small"
                  min={10} max={100}
                  value={(key === "colorL" ? cfg.opacL : cfg.opacR) * 100}
                  onChange={set(key === "colorL" ? "opacL" : "opacR")}
                  sx={{ color: cfg[key] }}
                />
              </Box>
            </CtrlGroup>
          ))}

          <CtrlGroup>
            <Typography variant="caption" color="text.secondary">Partículas</Typography>
            <Slider size="small" min={60} max={500} step={10} value={cfg.particleCount} onChange={set("particleCount")} />
          </CtrlGroup>

          <CtrlGroup>
            <Typography variant="caption" color="text.secondary">Velocidade</Typography>
            <Slider size="small" min={1} max={10} value={cfg.speed} onChange={set("speed")} />
          </CtrlGroup>

          <CtrlGroup>
            <Typography variant="caption" color="text.secondary">Nº de faixas</Typography>
            <Slider size="small" min={4} max={30} value={cfg.bands} onChange={set("bands")} />
          </CtrlGroup>

          <CtrlGroup>
            <Typography variant="caption" color="text.secondary">Brilho</Typography>
            <Slider size="small" min={10} max={120} value={cfg.glowSize} onChange={set("glowSize")} />
          </CtrlGroup>
        </ControlRow>
      )}
    </Box>
  );
}