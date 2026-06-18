"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import styles from "./CinematicLayer.module.css";

type CinematicLayerProps = {
  intensity?: number;
};

export default function CinematicLayer({
  intensity = 1,
}: CinematicLayerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth;
    let height = container.clientHeight;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false,
      powerPreference: "high-performance",
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const particleCount = width < 768 ? 90 : 160;
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);
    const seeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 26;
      positions[i3 + 1] = (Math.random() - 0.5) * 16;
      positions[i3 + 2] = (Math.random() - 0.5) * 14;
      scales[i] = Math.random() * 1.8 + 0.7;
      seeds[i] = Math.random() * Math.PI * 2;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("aScale", new THREE.BufferAttribute(scales, 1));
    geometry.setAttribute("aSeed", new THREE.BufferAttribute(seeds, 1));

    const material = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: {
        uTime: { value: 0 },
        uIntensity: { value: intensity },
        uResolution: { value: new THREE.Vector2(width, height) },
      },
      vertexShader: `
        attribute float aScale;
        attribute float aSeed;
        uniform float uTime;
        varying float vAlpha;
        varying float vWarmth;

        void main() {
          vec3 pos = position;

          pos.y += sin(uTime * 0.25 + aSeed) * 0.35;
          pos.x += cos(uTime * 0.18 + aSeed * 1.3) * 0.22;
          pos.z += sin(uTime * 0.15 + aSeed * 0.7) * 0.18;

          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);

          float size = aScale * (22.0 / -mvPosition.z);
          gl_PointSize = size;

          vAlpha = 0.55 + 0.45 * sin(uTime * 0.35 + aSeed);
          vWarmth = fract(aSeed * 0.37);

          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying float vAlpha;
        varying float vWarmth;
        uniform float uIntensity;

        void main() {
          vec2 uv = gl_PointCoord - vec2(0.5);
          float dist = length(uv);

          float glow = smoothstep(0.5, 0.0, dist);
          glow = pow(glow, 2.4);

          vec3 warm = vec3(1.0, 0.56, 0.22);
          vec3 softWhite = vec3(1.0, 0.95, 0.9);
          vec3 color = mix(softWhite, warm, vWarmth * 0.9);

          float alpha = glow * vAlpha * 0.42 * uIntensity;

          gl_FragColor = vec4(color, alpha);
        }
      `,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const mouse = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    let animationId = 0;
    const clock = new THREE.Clock();

    const onPointerMove = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      target.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      target.y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
    };

    const onResize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
      material.uniforms.uResolution.value.set(width, height);
    };

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      const elapsed = clock.getElapsedTime();
      material.uniforms.uTime.value = elapsed;

      mouse.x += (target.x - mouse.x) * 0.03;
      mouse.y += (target.y - mouse.y) * 0.03;

      camera.position.x = mouse.x * 0.7;
      camera.position.y = mouse.y * 0.45;
      camera.lookAt(0, 0, 0);

      points.rotation.y = elapsed * 0.02;
      points.rotation.x = Math.sin(elapsed * 0.08) * 0.03;

      renderer.render(scene, camera);
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);

      geometry.dispose();
      material.dispose();
      renderer.dispose();

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [intensity]);

  return <div ref={containerRef} className={styles.layer} aria-hidden="true" />;
}
