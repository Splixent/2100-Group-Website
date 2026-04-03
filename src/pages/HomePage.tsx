import { useState, Suspense, lazy } from 'react';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import TechSpecs from '../components/TechSpecs';
import ColorOptions from '../components/ColorOptions';
import CallToAction from '../components/CallToAction';
import Comparison from '../components/Comparison';
import TestimonialMarquee from '../components/TestimonialMarquee';
import VideoModal from '../components/VideoModal';

const ModelViewer = lazy(() => import('../components/ModelViewer'));

const Divider = () => (
  <div style={{
    height: 1,
    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)',
  }} />
);

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Hero onWatchFilm={() => setModalOpen(true)} />
      <Divider />
      <HowItWorks />
      <Divider />
      <Features />
      <Divider />
      <Suspense fallback={
        <div style={{ height: '60vh', background: '#0c0c10', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gray)' }}>
          Loading 3D viewer...
        </div>
      }>
        <ModelViewer />
      </Suspense>
      <Divider />
      <TechSpecs />
      <Divider />
      <ColorOptions />
      <Divider />
      <Comparison />
      <Divider />
      <TestimonialMarquee />
      <Divider />
      <CallToAction />
      <VideoModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
