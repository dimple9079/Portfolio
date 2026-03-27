import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Project from './components/Project';
import Achievement from './components/Achievement';
import ProofOfAction from './components/ProofOfAction';
import SystemThinking from './components/SystemThinking';
import Failures from './components/Failures';
import Metrics from './components/Metrics';
import Future from './components/Future';
import Contact from './components/Contact';

export default function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'dark';
    setTheme(saved);
    document.body.classList.toggle('light', saved === 'light');
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.body.classList.toggle('light', next === 'light');
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text)' }}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Project />
        <Achievement />
        <ProofOfAction />
        <SystemThinking />
        <Failures />
        <Metrics />
        <Future />
        <Contact />
      </main>
    </div>
  );
}
