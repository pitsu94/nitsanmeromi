import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-right" dir="rtl">
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <Services />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;