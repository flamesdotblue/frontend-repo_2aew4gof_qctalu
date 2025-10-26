import React from 'react';
import Header from './components/Header';
import ModuleCards from './components/ModuleCards';
import LiveOrderDemo from './components/LiveOrderDemo';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <ModuleCards />
      <LiveOrderDemo />
      <Footer />
    </div>
  );
}

export default App;
