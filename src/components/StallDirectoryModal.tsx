import React, { useState } from 'react';
import { HawkerStall } from '../types';
import { X, Search, Star, Clock, Flame } from 'lucide-react';

interface StallDirectoryModalProps {
  stalls: HawkerStall[];
  isOpen: boolean;
  onClose: () => void;
  onSelectStall: (stall: HawkerStall) => void;
}

export const StallDirectoryModal: React.FC<StallDirectoryModalProps> = ({
  stalls,
  isOpen,
  onClose,
  onSelectStall
}) => {
  const [query, setQuery] = useState('');
  const [selectedCraving, setSelectedCraving] = useState<string>('All');

  if (!isOpen) return null;

  const filtered = stalls.filter((stall) => {
    const matchesQuery =
      stall.name.toLowerCase().includes(query.toLowerCase()) ||
      stall.dish.toLowerCase().includes(query.toLowerCase()) ||
      stall.unitNo.toLowerCase().includes(query.toLowerCase()) ||
      stall.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()));

    const matchesCraving = selectedCraving === 'All' || stall.craving === selectedCraving;
    return matchesQuery && matchesCraving;
  });

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white w-full max-w-xl max-h-[90vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-[#E5E7EB] animate-in fade-in zoom-in-95">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-[#E5E7EB] flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-black text-[#1F2933]">Sunrise Lane Directory</h2>
              <span className="px-2 py-0.5 rounded-full bg-orange-100 text-[#F97316] text-[10px] font-extrabold uppercase">
                {stalls.length} Stalls
              </span>
            </div>
            <p className="text-xs text-[#6B7280] mt-0.5">
              Explore all active hawker stalls and signature offerings
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Search & Category Filter */}
        <div className="p-4 bg-slate-50 border-b border-[#E5E7EB] space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by stall name, dish, or tag (e.g. wonton, laksa)..."
              className="w-full pl-10 pr-4 py-2 text-xs bg-white border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F97316] font-medium"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto hide-scrollbar text-xs">
            {['All', 'Noodles', 'Rice', 'Soup', 'Snacks', 'Drinks'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCraving(cat)}
                className={`px-3 py-1 rounded-full text-[11px] font-bold shrink-0 transition ${
                  selectedCraving === cat
                    ? 'bg-[#1F2933] text-white'
                    : 'bg-white text-[#6B7280] border border-[#E5E7EB] hover:border-slate-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Stall List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-slate-500">
              <p className="text-sm font-bold">No stalls matched your search</p>
              <p className="text-xs text-slate-400 mt-1">Try clearing your filters or query</p>
            </div>
          ) : (
            filtered.map((stall) => (
              <div
                key={stall.id}
                className={`p-3.5 rounded-2xl border transition flex items-start justify-between gap-3 ${
                  stall.isSoldOut
                    ? 'bg-slate-50 border-slate-200 opacity-60'
                    : 'bg-white border-[#E5E7EB] hover:border-orange-300 shadow-xs'
                }`}
              >
                <div className="space-y-1 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] font-bold text-slate-500">
                      {stall.unitNo}
                    </span>
                    <span className="text-[10px] font-bold text-[#F97316] uppercase bg-orange-50 px-1.5 py-0.5 rounded">
                      {stall.craving}
                    </span>
                    <span className="text-[10px] font-bold text-purple-600 bg-purple-50 px-1.5 py-0.5 rounded">
                      {stall.dietary}
                    </span>
                  </div>

                  <h3 className="text-sm font-black text-[#1F2933]">{stall.name}</h3>
                  <p className="text-xs text-slate-600 font-medium">{stall.dish}</p>

                  <div className="flex items-center gap-2 text-[11px] pt-1">
                    <span className="font-black text-[#F97316]">${stall.price.toFixed(2)}</span>
                    <span>•</span>
                    <span className="text-amber-700 font-bold flex items-center gap-0.5">
                      <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                      {stall.rating.toFixed(1)}
                    </span>
                    <span>•</span>
                    <span className="text-teal-700 font-bold flex items-center gap-0.5">
                      <Clock className="w-3 h-3" />
                      {stall.waitTimeMin}m
                    </span>
                  </div>
                </div>

                <div className="shrink-0 flex flex-col items-end gap-2">
                  {stall.isSoldOut ? (
                    <span className="text-[10px] font-black uppercase text-red-600 bg-red-50 px-2 py-1 rounded-md">
                      Sold Out
                    </span>
                  ) : (
                    <button
                      onClick={() => {
                        onSelectStall(stall);
                        onClose();
                      }}
                      className="px-3 py-1.5 text-xs font-black bg-[#1F2933] text-white hover:bg-black rounded-xl transition shadow-xs flex items-center gap-1 cursor-pointer"
                    >
                      <span>Select</span>
                      <Flame className="w-3 h-3 text-amber-400" />
                    </button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
