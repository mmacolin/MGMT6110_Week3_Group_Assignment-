import React from 'react';
import { ScreenType } from '../types';
import { HawkerLogoIcon } from './Icons3D';
import { Store, RotateCcw, ArrowLeft, Plus } from 'lucide-react';

interface HeaderProps {
  activeScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
  onResetFilters: () => void;
  onOpenDirectory: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeScreen,
  onNavigate,
  onResetFilters,
  onOpenDirectory
}) => {
  return (
    <header className="bg-white border-b border-[#E5E7EB] px-4 sm:px-6 py-3.5 sticky top-0 z-30 flex items-center justify-between">
      {/* Brand logo + Title */}
      <button
        id="hawkerhunt-logo-button"
        onClick={() => onNavigate('discover')}
        className="flex items-center gap-3 text-left focus:outline-none group"
      >
        <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-500 via-[#F97316] to-rose-600 flex items-center justify-center text-white shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform">
          <HawkerLogoIcon className="w-6 h-6 drop-shadow-sm" />
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <span className="font-extrabold text-lg tracking-tight text-[#1F2933]">
              Hawker<span className="text-[#F97316]">Hunt</span>
            </span>
            <span className="px-2 py-0.5 rounded-full bg-orange-100 text-[#F97316] text-[10px] font-extrabold uppercase tracking-wide flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] animate-pulse"></span>
              LIVE
            </span>
          </div>
          <span className="block text-[11px] font-semibold text-[#6B7280]">
            📍 Sunrise Lane Food Centre
          </span>
        </div>
      </button>

      {/* Nav Actions */}
      <div className="flex items-center gap-2">
        {/* Quick Directory Button */}
        <button
          id="view-all-stalls-button"
          onClick={onOpenDirectory}
          title="Browse All 17 Stalls"
          className="text-xs font-bold text-[#6B7280] hover:text-[#1F2933] p-1.5 sm:px-2.5 sm:py-1.5 rounded-full border border-[#E5E7EB] bg-white hover:bg-slate-50 transition flex items-center gap-1 shadow-xs"
        >
          <Store className="w-3.5 h-3.5 text-slate-500" />
          <span className="hidden sm:inline">All Stalls</span>
        </button>

        {activeScreen === 'discover' && (
          <button
            id="reset-filters-header-btn"
            onClick={onResetFilters}
            className="text-xs font-bold text-[#6B7280] hover:text-[#1F2933] px-3 py-1.5 rounded-full border border-[#E5E7EB] bg-white transition hover:bg-slate-50 shadow-xs flex items-center gap-1 active:scale-95"
          >
            <RotateCcw className="w-3 h-3 text-slate-400" />
            <span>Reset Filters</span>
          </button>
        )}

        {activeScreen === 'recommend' && (
          <button
            id="back-to-filters-btn"
            onClick={() => onNavigate('discover')}
            className="text-xs font-bold text-[#1F2933] bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-full transition flex items-center gap-1 shadow-xs active:scale-95"
          >
            <ArrowLeft className="w-3 h-3" />
            <span>Filters</span>
          </button>
        )}

        {activeScreen === 'order' && (
          <button
            id="back-to-recommend-btn"
            onClick={() => onNavigate('recommend')}
            className="text-xs font-bold text-[#1F2933] bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-full transition flex items-center gap-1 shadow-xs active:scale-95"
          >
            <ArrowLeft className="w-3 h-3" />
            <span>Change Stall</span>
          </button>
        )}

        {activeScreen === 'success' && (
          <button
            id="new-discovery-btn"
            onClick={() => {
              onResetFilters();
              onNavigate('discover');
            }}
            className="text-xs font-bold text-white bg-[#1F2933] hover:bg-black px-3.5 py-1.5 rounded-full transition shadow-xs flex items-center gap-1 active:scale-95"
          >
            <Plus className="w-3 h-3" />
            <span>New Discovery</span>
          </button>
        )}
      </div>
    </header>
  );
};
