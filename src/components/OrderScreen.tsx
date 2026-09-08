import React from 'react';
import { HawkerStall } from '../types';
import { ArrowLeft, Check, Minus, Plus, Utensils } from 'lucide-react';

interface OrderScreenProps {
  stall: HawkerStall;
  quantity: number;
  onUpdateQuantity: (delta: number) => void;
  onBackToRecommend: () => void;
  onConfirmOrder: () => void;
}

export const OrderScreen: React.FC<OrderScreenProps> = ({
  stall,
  quantity,
  onUpdateQuantity,
  onBackToRecommend,
  onConfirmOrder
}) => {
  const itemSubtotal = (stall.price * quantity).toFixed(2);
  const readyMin = stall.waitTimeMin || 10;

  const getCravingEmoji = (c: string) => {
    switch (c) {
      case 'Noodles':
        return '🍜';
      case 'Rice':
        return '🍚';
      case 'Soup':
        return '🍲';
      case 'Snacks':
        return '🥟';
      case 'Drinks':
        return '🥤';
      default:
        return '🍽️';
    }
  };

  return (
    <div className="space-y-5">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <button
          id="order-back-button"
          onClick={onBackToRecommend}
          className="text-xs font-extrabold text-[#6B7280] hover:text-[#1F2933] flex items-center gap-1.5 transition cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Recommendations</span>
        </button>
        <span className="text-[11px] font-black uppercase tracking-wider text-[#6B7280]">
          Step 2 of 2: Checkout
        </span>
      </div>

      {/* Main Order Card */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-[#E5E7EB] shadow-xl space-y-5">
        <div>
          <span className="text-xs font-black uppercase tracking-wider text-[#F97316]">
            Confirm Order
          </span>
          <h2 className="text-2xl font-black text-[#1F2933] tracking-tight mt-0.5">
            Order Summary
          </h2>
          <p className="text-xs text-[#6B7280] mt-0.5">
            Please review your hawker stall order details below.
          </p>
        </div>

        {/* Selected Dish Details */}
        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-start justify-between gap-3">
          <div>
            <span className="text-[11px] font-mono font-bold text-[#6B7280]">
              {stall.unitNo} • {stall.name}
            </span>
            <h3 className="font-extrabold text-base text-[#1F2933] mt-0.5">{stall.dish}</h3>
            <p className="text-xs font-semibold text-[#6B7280] mt-1">
              Dietary: {stall.dietary} • {stall.craving}
            </p>
            <span className="inline-block mt-2 text-xs font-black text-[#F97316]">
              ${stall.price.toFixed(2)} each
            </span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-white border border-[#E5E7EB] flex items-center justify-center text-2xl shrink-0 shadow-xs">
            {getCravingEmoji(stall.craving)}
          </div>
        </div>

        {/* Quantity Stepper (+/-) */}
        <div className="flex items-center justify-between p-4 bg-white rounded-2xl border-2 border-[#E5E7EB]">
          <div>
            <span className="text-xs font-black text-[#1F2933] block">Quantity</span>
            <span className="text-[11px] text-[#6B7280]">Portions to prepare</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              id="decrease-qty-button"
              onClick={() => onUpdateQuantity(-1)}
              disabled={quantity <= 1}
              className="w-9 h-9 rounded-xl bg-slate-100 border border-[#E5E7EB] font-black text-base text-[#1F2933] hover:bg-slate-200 active:scale-90 flex items-center justify-center transition disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-8 text-center font-black text-lg text-[#1F2933]">{quantity}</span>
            <button
              id="increase-qty-button"
              onClick={() => onUpdateQuantity(1)}
              className="w-9 h-9 rounded-xl bg-slate-100 border border-[#E5E7EB] font-black text-base text-[#1F2933] hover:bg-slate-200 active:scale-90 flex items-center justify-center transition cursor-pointer"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Cost Breakdown */}
        <div className="space-y-2.5 pt-2 text-xs border-t border-[#E5E7EB]">
          <div className="flex justify-between text-[#6B7280]">
            <span>
              Item Subtotal ({quantity} portion{quantity > 1 ? 's' : ''})
            </span>
            <span className="font-bold text-[#1F2933]">${itemSubtotal}</span>
          </div>
          <div className="flex justify-between text-[#6B7280]">
            <span>Food Centre Table Pick-up</span>
            <span className="text-[#16A34A] font-bold uppercase text-[11px]">Free</span>
          </div>
          <div className="flex justify-between text-[#6B7280]">
            <span>Estimated Prep &amp; Wait</span>
            <span className="font-bold text-[#1F2933]">~{readyMin} minutes</span>
          </div>
          <div className="flex justify-between text-base font-black text-[#1F2933] pt-3 border-t border-[#E5E7EB]">
            <span>Total Amount Due</span>
            <span className="text-[#F97316] text-xl">${itemSubtotal}</span>
          </div>
        </div>

        {/* Pick up notes */}
        <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-xl text-[11px] text-amber-900 flex items-start gap-2">
          <Utensils className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <span>
            Food prepared live at <strong>Sunrise Lane Food Centre</strong>. Utensils, chili, and
            condiments available at stall counter.
          </span>
        </div>

        {/* Primary Confirm Order CTA */}
        <button
          id="confirm-final-order-button"
          onClick={onConfirmOrder}
          className="w-full py-4 px-6 bg-[#1F2933] hover:bg-black active:scale-[0.99] text-white font-black text-base rounded-2xl shadow-lg transition flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>Confirm Order (${itemSubtotal})</span>
          <Check className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
