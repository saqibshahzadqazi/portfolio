import React, {useEffect, useRef} from "react";
import "./AIBackground.scss";

/**
 * Full-page animated neural-network background: floating nodes connected by
 * lines that react to proximity, giving a subtle moving "AI" feel behind the
 * whole site. Rendered on a fixed canvas behind all content.
 */
export default function AIBackground({isDark}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let animationId;

    const COUNT = Math.min(
      90,
      Math.floor((window.innerWidth * window.innerHeight) / 16000)
    );
    const LINK_DIST = 140;
    const accent = isDark ? "129, 140, 248" : "79, 70, 229"; // indigo

    const nodes = Array.from({length: COUNT}, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5
    }));

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        // node dot
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.7, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${accent}, 0.7)`;
        ctx.fill();

        // links
        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j];
          const dx = n.x - m.x;
          const dy = n.y - m.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.strokeStyle = `rgba(${accent}, ${
              (1 - dist / LINK_DIST) * 0.32
            })`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [isDark]);

  return <canvas ref={canvasRef} className="ai-background" />;
}
