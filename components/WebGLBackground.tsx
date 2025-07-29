import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const WebGLBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const snoise = `
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
      vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
      float snoise(vec3 v) {
          const vec2 C = vec2(1.0/6.0, 1.0/3.0); const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
          vec3 i = floor(v + dot(v, C.yyy)); vec3 x0 = v - i + dot(i, C.xxx);
          vec3 g = step(x0.yzx, x0.xyz); vec3 l = 1.0 - g;
          vec3 i1 = min(g.xyz, l.zxy); vec3 i2 = max(g.xyz, l.zxy);
          vec3 x1 = x0 - i1 + C.xxx; vec3 x2 = x0 - i2 + C.yyy; vec3 x3 = x0 - D.yyy;
          i = mod289(i); 
          vec4 p = permute(permute(permute( i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));
          float n_ = 0.142857142857; vec3 ns = n_ * D.wyz - D.xzx;
          vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
          vec4 x_ = floor(j * ns.z); vec4 y_ = floor(j - 7.0 * x_);
          vec4 x = x_ * ns.x + ns.yyyy; vec4 y = y_ * ns.x + ns.yyyy;
          vec4 h = 1.0 - abs(x) - abs(y);
          vec4 b0 = vec4(x.xy, y.xy); vec4 b1 = vec4(x.zw, y.zw);
          vec4 s0 = floor(b0)*2.0 + 1.0; vec4 s1 = floor(b1)*2.0 + 1.0;
          vec4 sh = -step(h, vec4(0.0));
          vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy; vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
          vec3 p0 = vec3(a0.xy,h.x); vec3 p1 = vec3(a0.zw,h.y);
          vec3 p2 = vec3(a1.xy,h.z); vec3 p3 = vec3(a1.zw,h.w);
          vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
          p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
          vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
          m = m * m;
          return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
      }
    `;

    // Setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current, 
      antialias: true, 
      alpha: true 
    });
    rendererRef.current = renderer;
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    // Uniforms - Updated with your current turquoise theme colors
    const uniforms = {
      u_time: { value: 0.0 },
      u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      u_color1: { value: new THREE.Color('#BCDED2') }, // Light turquoise from your theme
      u_color2: { value: new THREE.Color('#339999') }, // Medium turquoise from your theme  
      u_color3: { value: new THREE.Color('#003333') }, // Dark turquoise from your theme
      u_caustic_brightness: { value: 0.15 },
      u_caustic_power: { value: 15.0 }
    };

    // Shaders
    const vertexShader = `
      varying vec2 v_uv;
      void main() {
          v_uv = uv;
          gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      ${snoise}
      uniform vec2 u_resolution;
      uniform float u_time;
      uniform vec3 u_color1;
      uniform vec3 u_color2;
      uniform vec3 u_color3;
      uniform float u_caustic_brightness;
      uniform float u_caustic_power;
      varying vec2 v_uv;

      float layered_noise(vec2 uv) {
          float noise = 0.0;
          noise += snoise(vec3(uv, u_time * 0.1)) * 0.5;
          noise += snoise(vec3(uv * 2.0, u_time * 0.2)) * 0.25;
          noise += snoise(vec3(uv * 4.0, u_time * 0.3)) * 0.125;
          return noise;
      }

      void main() {
          vec2 uv = v_uv;
          uv.x *= u_resolution.x / u_resolution.y;
          float noise1 = layered_noise(uv * 2.0);
          float noise2 = layered_noise(uv * 2.5 + noise1);
          float combined_noise = noise1 + noise2;
          float caustics = pow(1.0 - abs(combined_noise), u_caustic_power);
          float base_texture = layered_noise(uv * 0.5);
          
          // Use three colors for more variety matching your gradient
          vec3 base_color = mix(
            mix(u_color2, u_color1, smoothstep(-0.5, 0.5, base_texture)),
            u_color3,
            smoothstep(-0.2, 0.8, sin(base_texture * 3.14159))
          );
          
          vec3 final_color = base_color + (vec3(1.0) * caustics * u_caustic_brightness);
          gl_FragColor = vec4(final_color, 1.0);
      }
    `;

    // Create mesh
    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({ vertexShader, fragmentShader, uniforms });
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    // Scroll control
    let targetTime = 0;
    const updateScroll = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollableHeight <= 0) return;
      const scrollPercent = window.scrollY / scrollableHeight;
      targetTime = scrollPercent * 10.0;
    };

    window.addEventListener('scroll', updateScroll);
    updateScroll();

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      uniforms.u_time.value += (targetTime - uniforms.u_time.value) * 0.05;
      renderer.render(scene, camera);
    };

    // Resize handler
    const handleResize = () => {
      uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight);
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    animate();

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('scroll', updateScroll);
      window.removeEventListener('resize', handleResize);
      
      // Dispose of Three.js resources
      geometry.dispose();
      material.dispose();
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        outline: 'none'
      }}
    />
  );
};

export default WebGLBackground;