import React from 'react';
import { User, ChefHat, Shield, ShoppingCart, Clock, Activity } from 'lucide-react';

const Card = ({ icon: Icon, title, description, features, accent }) => (
  <div className="group relative bg-white border border-orange-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
    <div className={`inline-flex items-center justify-center h-12 w-12 rounded-xl ${accent} text-white mb-4`}>
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    <p className="mt-2 text-sm text-gray-600">{description}</p>
    <ul className="mt-4 space-y-2 text-sm text-gray-700">
      {features.map((f, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-500" />
          <span>{f}</span>
        </li>
      ))}
    </ul>
  </div>
);

const ModuleCards = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <div className="grid md:grid-cols-3 gap-6">
        <Card
          icon={User}
          title="User End"
          description="Browse the live menu, add to cart, place orders, and track status instantly."
          features={["Live availability via realtime updates", "Prices in ₹ (INR)", "IST timestamps", "OTP phone login"]}
          accent="bg-orange-500"
        />
        <Card
          icon={ChefHat}
          title="Kitchen End"
          description="Manage incoming orders with lightning speed and clear statuses."
          features={["Accept and prepare", "Update ETA easily", "Mark Ready / Served", "Syncs to all ends"]}
          accent="bg-amber-500"
        />
        <Card
          icon={Shield}
          title="Admin End"
          description="Control menu, approvals, and analytics with secure role-based access."
          features={["Accept / Reject orders", "Toggle availability", "Sales & summary cards", "Charts-ready dashboard"]}
          accent="bg-orange-600"
        />
      </div>

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-orange-50 to-white border border-orange-200 rounded-2xl p-6">
          <div className="flex items-center gap-3">
            <ShoppingCart className="h-5 w-5 text-orange-600" />
            <h4 className="font-semibold text-gray-900">Streamlined Ordering</h4>
          </div>
          <p className="mt-2 text-sm text-gray-600">
            Clean cart flow with INR prices, taxes-ready, and receipt-friendly formatting.
          </p>
        </div>
        <div className="bg-gradient-to-br from-orange-50 to-white border border-orange-200 rounded-2xl p-6">
          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-orange-600" />
            <h4 className="font-semibold text-gray-900">IST Timekeeping</h4>
          </div>
          <p className="mt-2 text-sm text-gray-600">
            Every order and ETA is displayed in Indian Standard Time for clarity.
          </p>
        </div>
        <div className="bg-gradient-to-br from-orange-50 to-white border border-orange-200 rounded-2xl p-6">
          <div className="flex items-center gap-3">
            <Activity className="h-5 w-5 text-orange-600" />
            <h4 className="font-semibold text-gray-900">Realtime by Design</h4>
          </div>
          <p className="mt-2 text-sm text-gray-600">
            Built to plug into Supabase Realtime for instant status changes across modules.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ModuleCards;
