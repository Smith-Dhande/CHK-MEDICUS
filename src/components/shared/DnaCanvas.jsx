import React, { useRef, useEffect } from 'react';

export default function DnaCanvas({ className = '' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    let angle = 0;
    const numPoints = 32;
    const radius = 70;
    const speed = 0.01; // slow, smooth continuous rotation
    const focalLength = 320;

    // Ambient floating particles
    const particles = [];
    const numParticles = 40;
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * 200 - 100,
        y: Math.random() * 500 - 250,
        z: Math.random() * 200 - 100,
        r: Math.random() * 1.5 + 0.5,
        speed: Math.random() * 0.005 + 0.002
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width * 0.55; // Offset slightly to match the right-side placement
      const centerY = height / 2;

      // Render floating dust particles first
      particles.forEach((p) => {
        // Rotate around Y-axis
        const cosY = Math.cos(p.speed);
        const sinY = Math.sin(p.speed);
        const rx = p.x * cosY - p.z * sinY;
        const rz = p.x * sinY + p.z * cosY;
        p.x = rx;
        p.z = rz;

        const scale = focalLength / (focalLength + p.z);
        const px = centerX + p.x * scale;
        const py = centerY + p.y * scale;

        if (px >= 0 && px <= width && py >= 0 && py <= height) {
          const opacity = Math.max(0.05, (focalLength - p.z) / (focalLength * 2.5));
          ctx.beginPath();
          ctx.arc(px, py, p.r * scale, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(168, 85, 247, ${opacity * 0.35})`;
          ctx.fill();
        }
      });

      // Render DNA ladder rungs (connecting rods)
      for (let i = 0; i < numPoints; i++) {
        // Spiral equations
        const t = (i / numPoints) * Math.PI * 4; // Multiple spiral twists
        const yOffset = (i / numPoints - 0.5) * (height * 0.95);

        // Strand 1
        const theta1 = t + angle;
        const x1 = Math.cos(theta1) * radius;
        const z1 = Math.sin(theta1) * radius;

        // Strand 2 (180 degree offset)
        const theta2 = t + angle + Math.PI;
        const x2 = Math.cos(theta2) * radius;
        const z2 = Math.sin(theta2) * radius;

        // Projection
        const scale1 = focalLength / (focalLength + z1);
        const px1 = centerX + x1 * scale1;
        const py1 = centerY + yOffset * scale1;

        const scale2 = focalLength / (focalLength + z2);
        const px2 = centerX + x2 * scale2;
        const py2 = centerY + yOffset * scale2;

        const avgZ = (z1 + z2) / 2;
        const opacity = Math.max(0.1, (focalLength - avgZ) / (focalLength * 1.5));

        // Connect the nodes
        ctx.beginPath();
        ctx.moveTo(px1, py1);
        ctx.lineTo(px2, py2);

        // Glow gradient connecting lines
        const lineGrad = ctx.createLinearGradient(px1, py1, px2, py2);
        lineGrad.addColorStop(0, `rgba(168, 85, 247, ${opacity * 0.45})`); // Purple
        lineGrad.addColorStop(0.5, `rgba(236, 72, 153, ${opacity * 0.25})`); // Pink
        lineGrad.addColorStop(1, `rgba(59, 130, 246, ${opacity * 0.45})`); // Blue

        ctx.strokeStyle = lineGrad;
        ctx.lineWidth = 1.2 * ((scale1 + scale2) / 2);
        ctx.stroke();
      }

      // Render backbones (helical nodes)
      for (let i = 0; i < numPoints; i++) {
        const t = (i / numPoints) * Math.PI * 4;
        const yOffset = (i / numPoints - 0.5) * (height * 0.95);

        // Strand 1
        const theta1 = t + angle;
        const x1 = Math.cos(theta1) * radius;
        const z1 = Math.sin(theta1) * radius;

        // Strand 2
        const theta2 = t + angle + Math.PI;
        const x2 = Math.cos(theta2) * radius;
        const z2 = Math.sin(theta2) * radius;

        // Projection
        const scale1 = focalLength / (focalLength + z1);
        const px1 = centerX + x1 * scale1;
        const py1 = centerY + yOffset * scale1;

        const scale2 = focalLength / (focalLength + z2);
        const px2 = centerX + x2 * scale2;
        const py2 = centerY + yOffset * scale2;

        const r1 = 4.5 * scale1;
        const r2 = 4.5 * scale2;

        // Node A - Purple/Indigo
        ctx.beginPath();
        ctx.arc(px1, py1, r1, 0, Math.PI * 2);
        const glowA = ctx.createRadialGradient(px1, py1, 0, px1, py1, r1);
        glowA.addColorStop(0, '#ffffff');
        glowA.addColorStop(0.3, '#a855f7');
        glowA.addColorStop(1, 'rgba(168, 85, 247, 0)');
        ctx.fillStyle = glowA;
        ctx.fill();

        // Node B - Pink/Magenta
        ctx.beginPath();
        ctx.arc(px2, py2, r2, 0, Math.PI * 2);
        const glowB = ctx.createRadialGradient(px2, py2, 0, px2, py2, r2);
        glowB.addColorStop(0, '#ffffff');
        glowB.addColorStop(0.3, '#ec4899');
        glowB.addColorStop(1, 'rgba(236, 72, 153, 0)');
        ctx.fillStyle = glowB;
        ctx.fill();
      }

      angle += speed;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className={`w-full h-full ${className}`} />;
}
