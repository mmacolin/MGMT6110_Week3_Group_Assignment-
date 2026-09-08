import React, { useState, useEffect } from 'react';
import { ActiveOrder } from '../types';
import { CheckCircle2, Clock, MapPin, Store, Bell, ArrowRight } from 'lucide-react';

interface SuccessScreenProps {
  order: ActiveOrder;
  onBackToDiscover: () => void;
}

export const SuccessScreen: React.FC<SuccessScreenProps> = ({ order, onBackToDiscover }) => {
  const [buzzerRung, setBuzzerRung] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(
    (order.stall?.waitTimeMin || 8) * 60
  );

  useEffect(() => {
    if (secondsRemaining <= 0) return;
    const interval = setInterval(() => {
      setSecondsRemaining((prev) => Math.max(0, prev - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [secondsRemaining]);

  const formatCountdown = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainderSecs = secs % 60;
    return `${mins}m ${remainderSecs < 10 ? '0' : ''}${remainderSecs}s`;
  };

  const isReady = secondsRemaining === 0;

  return (
    <div className="space-y-6 pt-2 text-center">
      {/* Prominent Green Ordered Status Badge (#16A34A) */}
      <div className="inline-flex items-center gap-2.5 px-6 py-2.5 bg-[#16A34A] text-white rounded-full font-black text-sm uppercase tracking-wider shadow-lg shadow-green-600/20">
        <span className="w-3 h-3 rounded-full bg-white animate-pulse" />
        <span>Status: {isReady ? 'Ready for Pick-up!' : 'Order Placed & In Kitchen'}</span>
      </div>

      <div className="bg-white rounded-3xl p-5 sm:p-7 border border-[#E5E7EB] shadow-xl text-left space-y-5">
        {/* Ticket Header */}
        <div className="text-center pb-4 border-b border-[#E5E7EB]">
          <span className="text-[11px] uppercase font-black text-[#6B7280] tracking-widest">
            Digital Counter Slip
          </span>
          <div className="text-4xl sm:text-5xl font-black text-[#1F2933] tracking-tight mt-1 font-mono">
            {order.orderNum}
          </div>
          <p className="text-xs font-semibold text-[#6B7280] mt-2">
            Flash this ticket number at the stall counter when your buzzer alerts.
          </p>
        </div>

        {/* Live Prep Progress Bar */}
        <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="text-slate-600 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#14B8A6]" />
              Estimated Wait
            </span>
            <span className="text-[#14B8A6] font-extrabold font-mono">
              {isReady ? '00:00 (Ready!)' : formatCountdown(secondsRemaining)}
            </span>
          </div>
          <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
            <div
              className="bg-[#16A34A] h-full rounded-full transition-all duration-1000"
              style={{
                width: `${Math.min(
                  100,
                  Math.max(
                    10,
                    100 -
                      (secondsRemaining / ((order.stall?.waitTimeMin || 8) * 60)) * 100
                  )
                )}%`
              }}
            />
          </div>
        </div>

        {/* Detailed Breakdown */}
        <div className="space-y-3 text-xs">
          <div className="flex justify-between py-1.5 border-b border-slate-100">
            <span className="text-[#6B7280] font-medium flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              Hawker Centre:
            </span>
            <span className="font-extrabold text-[#1F2933] text-right">
              Sunrise Lane Food Centre
            </span>
          </div>

          <div className="flex justify-between py-1.5 border-b border-slate-100">
            <span className="text-[#6B7280] font-medium flex items-center gap-1.5">
              <Store className="w-3.5 h-3.5 text-slate-400" />
              Stall Name &amp; Unit:
            </span>
            <span className="font-extrabold text-[#1F2933] text-right">
              {order.stall?.name}{' '}
              <span className="font-mono text-[#F97316]">({order.stall?.unitNo})</span>
            </span>
          </div>

          <div className="flex justify-between py-1.5 border-b border-slate-100">
            <span className="text-[#6B7280] font-medium">Dish Ordered:</span>
            <span className="font-black text-[#1F2933] text-right">
              {order.stall?.dish} ({order.quantity}x)
            </span>
          </div>

          <div className="flex justify-between py-1.5 border-b border-slate-100">
            <span className="text-[#6B7280] font-medium">Total Paid:</span>
            <span className="font-black text-base text-[#1F2933]">${order.totalPrice}</span>
          </div>

          <div className="flex items-center justify-between p-3.5 bg-green-50 rounded-2xl border border-green-200">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#16A34A]" />
              <span className="text-green-900 font-bold text-xs">Pickup Target:</span>
            </div>
            <span className="font-black text-green-900 text-sm">{order.readyTime}</span>
          </div>
        </div>

        {/* Test Buzzer Trigger */}
        <div className="pt-1">
          <button
            onClick={() => {
              setBuzzerRung(true);
              setSecondsRemaining(0);
            }}
            className={`w-full py-2.5 px-4 text-xs font-bold rounded-xl border transition flex items-center justify-center gap-2 ${
              buzzerRung
                ? 'bg-amber-100 border-amber-300 text-amber-800'
                : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700'
            }`}
          >
            <Bell className="w-3.5 h-3.5 text-amber-600" />
            <span>
              {buzzerRung
                ? '🔔 Buzz! Your order is waiting at counter #' + (order.stall?.unitNo || '')
                : 'Simulate Counter Buzzer Notification'}
            </span>
          </button>
        </div>

        {/* Back to Discover CTA button */}
        <button
          id="back-to-discover-after-order"
          onClick={onBackToDiscover}
          className="w-full py-4 px-6 bg-[#1F2933] hover:bg-black active:scale-[0.99] text-white font-black text-base rounded-2xl shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>Back to Discover</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <p className="text-xs font-semibold text-[#6B7280]">
        Order safely recorded in active session. No page reloads required.
      </p>
    </div>
  );
};
