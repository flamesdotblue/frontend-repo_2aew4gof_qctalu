import React, { useMemo, useState } from 'react';
import { Clock, CheckCircle2, XCircle, ChefHat } from 'lucide-react';

// INR currency formatter
const inr = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });

// IST time helper
const toIST = (date) =>
  new Intl.DateTimeFormat('en-IN', {
    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true,
    timeZone: 'Asia/Kolkata'
  }).format(date);

const statusColors = {
  Pending: 'bg-gray-100 text-gray-700',
  Preparing: 'bg-amber-100 text-amber-800',
  Ready: 'bg-green-100 text-green-800',
  Served: 'bg-blue-100 text-blue-800',
  Rejected: 'bg-red-100 text-red-800',
};

const LiveOrderDemo = () => {
  const [status, setStatus] = useState('Pending');
  const [eta, setEta] = useState('15 min');

  const items = useMemo(() => ([
    { name: 'Masala Dosa', qty: 1, price: 120 },
    { name: 'Paneer Tikka', qty: 1, price: 260 },
    { name: 'Sweet Lassi', qty: 2, price: 80 },
  ]), []);

  const total = items.reduce((sum, i) => sum + i.qty * i.price, 0);

  const advanceStatus = () => {
    setStatus((prev) => {
      if (prev === 'Pending') return 'Preparing';
      if (prev === 'Preparing') return 'Ready';
      if (prev === 'Ready') return 'Served';
      return 'Pending';
    });
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border border-orange-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Live Order Preview</h3>
            <span className={`text-xs px-2.5 py-1 rounded-full ${statusColors[status]}`}>{status}</span>
          </div>
          <p className="mt-1 text-sm text-gray-600">Table 12 • Updated at {toIST(new Date())}</p>
          <div className="mt-4 divide-y">
            {items.map((i, idx) => (
              <div key={idx} className="flex items-center justify-between py-3">
                <div>
                  <p className="font-medium text-gray-900">{i.name} × {i.qty}</p>
                  <p className="text-xs text-gray-500">Freshly prepared</p>
                </div>
                <p className="font-semibold text-gray-900">{inr.format(i.qty * i.price)}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Clock className="h-4 w-4 text-orange-600" /> ETA: <span className="font-medium">{eta}</span>
            </div>
            <p className="text-right font-bold text-gray-900">Total: {inr.format(total)}</p>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            <button
              onClick={advanceStatus}
              className="inline-flex items-center justify-center gap-2 bg-orange-600 text-white px-3 py-2 rounded-md text-sm hover:bg-orange-700"
            >
              <CheckCircle2 className="h-4 w-4" /> Next Status
            </button>
            <button
              onClick={() => setEta('25 min')}
              className="inline-flex items-center justify-center gap-2 bg-amber-500 text-white px-3 py-2 rounded-md text-sm hover:bg-amber-600"
            >
              <ChefHat className="h-4 w-4" /> Update ETA
            </button>
            <button
              onClick={() => setStatus('Rejected')}
              className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-3 py-2 rounded-md text-sm hover:bg-red-700"
            >
              <XCircle className="h-4 w-4" /> Reject
            </button>
          </div>

          <p className="mt-3 text-xs text-gray-500">
            This live demo simulates realtime flows you will get with Supabase listeners.
          </p>
        </div>

        <div className="bg-gradient-to-b from-white to-orange-50 border border-orange-200 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-gray-900">How the three ends stay in sync</h3>
          <ol className="mt-3 space-y-3 text-sm text-gray-700 list-decimal list-inside">
            <li>User places an order. Status is <span className="font-semibold">Pending</span>.</li>
            <li>Kitchen accepts → status becomes <span className="font-semibold">Preparing</span> and sets ETA.</li>
            <li>When food is ready, status switches to <span className="font-semibold">Ready</span>.</li>
            <li>After serving, mark as <span className="font-semibold">Served</span>. All updates broadcast instantly.</li>
          </ol>
          <div className="mt-6 p-4 rounded-xl bg-white border border-orange-200">
            <p className="text-sm text-gray-700">
              Currency shown in INR using Indian formatting and all times rendered in IST. You’ll wire this
              screen to Supabase Realtime channels for orders and menu tables.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveOrderDemo;
