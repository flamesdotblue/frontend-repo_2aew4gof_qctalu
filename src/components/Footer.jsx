import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-8 border-t border-orange-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-3">
        <p>
          © {new Date().getFullYear()} ZaikaOS • Built for Indian restaurants • Prices in INR • Time in IST
        </p>
        <div className="text-xs text-gray-500">
          Connect your Supabase URL and anon key via environment variables to go live.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
