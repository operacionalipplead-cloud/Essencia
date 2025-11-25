import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { GlobalReach } from './components/GlobalReach';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-warm-50 text-gray-900 font-sans selection:bg-sage-200">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <About />
        <GlobalReach />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <ChatAssistant />
    </div>
  );
};

export default App;