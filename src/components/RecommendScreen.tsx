import React from 'react';
import { HawkerStall } from '../types';
import { ArrowLeft, Sparkles, Star, ArrowRight, RefreshCw, Clock } from 'lucide-react';

interface RecommendScreenProps {
  selectedStall: HawkerStall;
  alternatives: HawkerStall[];
  craving: string;
  onBackToDiscover: () => void;
  onSwapStall: (stallId: string) => void;
  onProceedToOrder: () => void;
}

export const RecommendScreen: React.FC<RecommendScreenProps> = ({
  selectedStall,
  alternatives,
  craving,
  onBackToDiscover,
  onSwapStall,
  onProceedToOrder
}) => {
  const isSoldOut = selectedStall.isSoldOut;

  const getCrowdBadge = (crowd: HawkerStall['crowdLevel']) => {
    if (crowd === 'Low') {
      return (
        <span className="px-2.5 py-1 rounded-md bg-[#16A34A] text-white text-[10px] font-black uppercase tracking-wider">
          Crowd: Low
        </span>
      );
    }
    if (crowd === 'Medium') {
      return (
        <span className="px-2.5 py-1 rounded-md bg-[#F59E0B] text-white text-[10px] font-black uppercase tracking-wider">
          Crowd: Med
        </span>
      );
    }
    return (
      <span className="px-2.5 py-1 rounded-md bg-[#DC2626] text-white text-[10px] font-black uppercase tracking-wider">
        Crowd: High
      </span>
    );
  };

  const getWaitBadge = (mins: number) => {
    const isLonger = mins > 15;
    return (
      <span
        className={`px-2 py-0.5 rounded-md text-white text-[10px] font-bold flex items-center gap-1 ${
          isLonger ? 'bg-[#F59E0B]' : 'bg-[#14B8A6]'
        }`}
      >
        <Clock className="w-2.5 h-2.5" />
        <span>{mins}m wait</span>
      </span>
    );
  };

  return (
    <div className="space-y-5">
      {/* Top Navigation */}
      <div className="flex items-center justify-between">
        <button
          id="recommend-back-link"
          onClick={onBackToDiscover}
          className="text-xs font-extrabold text-[#6B7280] hover:text-[#1F2933] flex items-center gap-1.5 transition cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Change Preferences</span>
        </button>
        <span className="text-[11px] font-black uppercase tracking-widest text-[#F97316] bg-orange-50 border border-orange-200 px-3 py-1 rounded-full">
          Matched Stall
        </span>
      </div>

      {/* Hero Recommended Stall Card */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border-2 border-[#F97316] shadow-xl relative overflow-hidden">
        {/* Ribbon */}
        <div className="absolute top-0 right-0 bg-[#F97316] text-white text-[10px] font-black uppercase px-3.5 py-1 rounded-bl-xl tracking-wider shadow-sm">
          Top Recommendation
        </div>

        {/* Stall Details */}
        <div className="flex items-start justify-between gap-3 pt-1">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-black text-[#6B7280] uppercase tracking-wider font-mono">
                {selectedStall.unitNo}
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              <span className="text-xs font-bold text-[#F97316]">{selectedStall.craving}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-[#1F2933] tracking-tight mt-0.5 leading-snug">
              {selectedStall.name}
            </h2>
            <p className="text-xs font-bold text-slate-700 mt-1">
              Signature:{' '}
              <span className="text-[#1F2933] underline decoration-[#F97316]/50 decoration-2">
                {selectedStall.dish}
              </span>
            </p>
          </div>
          <div className="text-right shrink-0">
            <div className="text-2xl font-black text-[#1F2933] tracking-tight">
              ${selectedStall.price.toFixed(2)}
            </div>
            <span className="text-[10px] font-bold text-[#6B7280]">standard bowl</span>
          </div>
        </div>

        {/* Why Match Callout */}
        <div className="mt-4 p-3 bg-orange-50 rounded-2xl border border-orange-200 flex items-start gap-2.5">
          <Sparkles className="w-4 h-4 text-[#F97316] shrink-0 mt-0.5" />
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider text-[#F97316] block">
              Why it was recommended:
            </span>
            <p className="text-xs font-bold text-slate-800 leading-relaxed mt-0.5">
              {selectedStall.whyMatch}
            </p>
          </div>
        </div>

        {/* Description */}
        {selectedStall.description && (
          <p className="text-xs text-slate-600 mt-3 font-medium leading-relaxed">
            {selectedStall.description}
          </p>
        )}

        {/* Badges & Metrics */}
        <div className="flex flex-wrap items-center gap-2 mt-4">
          <span className="px-2.5 py-1 rounded-md bg-amber-50 text-amber-900 border border-amber-200 text-xs font-black flex items-center gap-1">
            <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
            <span>{selectedStall.rating.toFixed(1)}</span>
          </span>

          {getCrowdBadge(selectedStall.crowdLevel)}
          {getWaitBadge(selectedStall.waitTimeMin)}

          <span className="px-2.5 py-1 rounded-md bg-purple-50 text-[#8B5CF6] border border-purple-200 text-[10px] font-bold">
            {selectedStall.dietary}
          </span>

          {isSoldOut && (
            <span className="px-2.5 py-1 rounded-md bg-[#DC2626] text-white text-[10px] font-black uppercase tracking-wider">
              Sold Out Today
            </span>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-[#E5E7EB]">
          {selectedStall.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-slate-100 text-[#6B7280] text-[10px] font-semibold rounded-md"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-5">
          {isSoldOut ? (
            <button
              disabled
              className="w-full py-3.5 px-4 bg-red-100 text-red-600 font-extrabold text-sm rounded-2xl cursor-not-allowed text-center border border-red-200"
            >
              Sold Out for the Day — Please Pick an Alternative Below
            </button>
          ) : (
            <button
              id="proceed-order-button"
              onClick={onProceedToOrder}
              className="w-full py-4 px-6 bg-[#1F2933] hover:bg-black active:scale-[0.99] text-white font-extrabold text-sm sm:text-base rounded-2xl shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Order here (${selectedStall.price.toFixed(2)})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Alternative Stalls List */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-black text-[#1F2933] uppercase tracking-wide">
              Alternative Stalls ({alternatives.length})
            </h3>
            <span className="text-[11px] text-[#6B7280]">
              Tap &quot;Swap to this stall&quot; to re-target your order
            </span>
          </div>
          <span className="text-xs font-bold text-[#F97316]">Sunrise Lane Centre</span>
        </div>

        <div className="space-y-2.5">
          {alternatives.map((alt) => {
            const altSoldOut = alt.isSoldOut;
            return (
              <div
                key={alt.id}
                id={`alt-card-${alt.id}`}
                className={`bg-white rounded-2xl p-4 border border-[#E5E7EB] hover:border-slate-400 transition shadow-xs flex flex-col justify-between gap-3 ${
                  altSoldOut ? 'opacity-70 bg-red-50/20' : ''
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] font-extrabold font-mono text-[#6B7280]">
                        {alt.unitNo}
                      </span>
                      <span className="text-[10px] font-bold text-[#F97316] uppercase bg-orange-50 px-1.5 py-0.5 rounded">
                        {alt.craving}
                      </span>
                    </div>
                    <h4 className="font-extrabold text-sm text-[#1F2933] mt-0.5">{alt.name}</h4>
                    <p className="text-xs text-[#6B7280] mt-0.5">{alt.dish}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-base font-black text-[#1F2933]">
                      ${alt.price.toFixed(2)}
                    </span>
                    <div className="text-[11px] font-bold text-amber-700 flex items-center justify-end gap-0.5">
                      <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                      <span>{alt.rating.toFixed(1)}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-1.5">
                    {getCrowdBadge(alt.crowdLevel)}
                    {getWaitBadge(alt.waitTimeMin)}
                    {altSoldOut && (
                      <span className="px-2 py-0.5 rounded-md bg-[#DC2626] text-white text-[10px] font-bold">
                        Sold Out
                      </span>
                    )}
                  </div>

                  {altSoldOut ? (
                    <button
                      disabled
                      className="text-xs font-bold text-red-400 px-3 py-1 bg-red-50 rounded-lg cursor-not-allowed"
                    >
                      Unavailable
                    </button>
                  ) : (
                    <button
                      id={`swap-to-${alt.id}`}
                      onClick={() => onSwapStall(alt.id)}
                      className="text-xs font-extrabold text-[#1F2933] hover:text-white bg-slate-100 hover:bg-[#1F2933] px-3.5 py-1.5 rounded-xl transition active:scale-95 shadow-xs flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Swap to this stall</span>
                      <RefreshCw className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
