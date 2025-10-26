import React from 'react';
import { ChefHat, User, Shield, Sparkles } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-white to-orange-50 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center gap-3 mb-4">
          <ChefHat className="h-8 w-8 text-orange-600" />
          <h1 className="text-2xl font-bold tracking-tight text-orange-700">ZaikaOS</h1>
          <span className="inline-flex items-center gap-1 text-xs text-orange-700/80 bg-orange-100 px-2 py-1 rounded-full">
            <Sparkles className="h-3 w-3" />
            Realtime
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
          Restaurant Management for India
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl">
          Three connected ends built for speed and simplicity — Customers, Kitchen, and Admin —
          with realtime updates, OTP login, and beautiful dashboards in an Indian design theme.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-2 text-sm bg-white border border-orange-200 text-orange-700 px-3 py-2 rounded-md shadow-sm">
            <User className="h-4 w-4" /> User End
          </span>
          <span className="inline-flex items-center gap-2 text-sm bg-white border border-orange-200 text-orange-700 px-3 py-2 rounded-md shadow-sm">
            <ChefHat className="h-4 w-4" /> Kitchen End
          </span>
          <span className="inline-flex items-center gap-2 text-sm bg-white border border-orange-200 text-orange-700 px-3 py-2 rounded-md shadow-sm">
            <Shield className="h-4 w-4" /> Admin End
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
