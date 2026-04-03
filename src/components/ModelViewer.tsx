import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { useReveal } from '../hooks/useReveal';
import Sparkles from './Sparkles';
import zipItModel from '../assets/ZipIt.stl?url';

function Model() {
  const geometry = useLoader(STLLoader, zipItModel);
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  geometry.center();
  geometry.computeVertexNormals();

  return (
    <mesh ref={meshRef} geometry={geometry} castShadow receiveShadow>
      <meshPhysicalMaterial
        color="#1a1a1a"
        metalness={0.7}
        roughness={0.25}
        clearcoat={0.3}
        clearcoatRoughness={0.2}
        envMapIntensity={1.2}
      />
    </mesh>
  );
}

export default function ModelViewer() {
  const ref = useReveal({ threshold: 0.1 });

  return (
    <section style={{
      padding: 'clamp(5rem, 12vh, 10rem) 0',
      background: '#0c0c10',
      position: 'relative',
    }}>
      <div ref={ref} style={{
        maxWidth: 980,
        margin: '0 auto',
        padding: '0 clamp(1.5rem, 5vw, 4rem)',
      }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{
            fontSize: '1.25rem',
            color: 'var(--color-accent)',
            fontWeight: 600,
            marginBottom: '0.75rem',
          }}>Interactive 3D</p>
          <h2 style={{
            fontSize: 'clamp(2rem, 6vw, 3.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            marginBottom: '1rem',
          }}>Take a closer look.</h2>
          <p style={{
            fontSize: '1.125rem',
            color: 'var(--color-gray)',
            maxWidth: 500,
            margin: '0 auto',
          }}>Drag to rotate. Scroll to zoom. Built to withstand anything except your screen-time habits.</p>
        </div>

        <div className="reveal" style={{
          transitionDelay: '0.15s',
          height: 'clamp(400px, 50vh, 600px)',
          borderRadius: 'var(--card-radius)',
          overflow: 'hidden',
          background: 'radial-gradient(ellipse at center, #111 0%, #000 100%)',
          border: '1px solid rgba(255,255,255,0.06)',
          position: 'relative',
        }}>
          <Sparkles particleDensity={40} speed={0.2} minSize={0.4} maxSize={1.2} />
          <Suspense fallback={
            <div style={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-gray)',
              fontSize: '0.875rem',
            }}>Loading 3D model...</div>
          }>
            <Canvas
              camera={{ position: [0, 0, 120], fov: 45 }}
              style={{ cursor: 'grab' }}
              gl={{ antialias: true, alpha: true }}
            >
              <ambientLight intensity={0.3} />
              <directionalLight position={[5, 5, 5]} intensity={1} />
              <directionalLight position={[-3, -3, 2]} intensity={0.4} color="#fcca03" />
              <spotLight position={[0, 10, 0]} intensity={0.5} angle={0.5} penumbra={1} />
              <Environment preset="city" />
              <Model />
              <OrbitControls
                enablePan={false}
                enableZoom={true}
                minDistance={60}
                maxDistance={200}
                autoRotate={false}
              />
            </Canvas>
          </Suspense>

          {/* Drag hint */}
          <div style={{
            position: 'absolute',
            bottom: '1.25rem',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: '0.75rem',
            color: 'var(--color-gray-dark)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            pointerEvents: 'none',
          }}>Drag to explore</div>
        </div>
      </div>
    </section>
  );
}
