import React from 'react';
import { FilterState, CravingType, BudgetType, DietaryType, WaitTimeType } from '../types';
import {
  NoodlesIcon3D,
  RiceIcon3D,
  SoupIcon3D,
  SnacksIcon3D,
  DrinksIcon3D,
  Under5Icon3D,
  MidBudgetIcon3D,
  HighBudgetIcon3D,
  AnyDietIcon3D,
  HalalIcon3D,
  VegetarianIcon3D,
  AnyWaitIcon3D,
  Under10Icon3D,
  Wait10to20Icon3D
} from './Icons3D';
import { ArrowRight, Flame } from 'lucide-react';

interface DiscoverScreenProps {
  filters: FilterState;
  onSetFilter: <K extends keyof FilterState>(key: K, val: FilterState[K]) => void;
  matchesCount: number;
  totalStallsCount: number;
  onFindStall: () => void;
}

export const DiscoverScreen: React.FC<DiscoverScreenProps> = ({
  filters,
  onSetFilter,
  matchesCount,
  totalStallsCount,
  onFindStall
}) => {
  const hasCraving = Boolean(filters.craving);

  const cravingOptions: { id: CravingType; label: string; icon: React.ReactNode }[] = [
    { id: 'Noodles', label: 'Noodles', icon: <NoodlesIcon3D /> },
    { id: 'Rice', label: 'Rice', icon: <RiceIcon3D /> },
    { id: 'Soup', label: 'Soup', icon: <SoupIcon3D /> },
    { id: 'Snacks', label: 'Snacks', icon: <SnacksIcon3D /> },
    { id: 'Drinks', label: 'Drinks', icon: <DrinksIcon3D /> }
  ];

  const budgetOptions: { id: BudgetType; label: string; icon: React.ReactNode }[] = [
    { id: 'All', label: 'Any Price', icon: <Under5Icon3D /> },
    { id: 'Under $5', label: 'Under $5', icon: <Under5Icon3D /> },
    { id: '$5–$8', label: '$5 – $8', icon: <MidBudgetIcon3D /> },
    { id: 'Above $8', label: 'Above $8', icon: <HighBudgetIcon3D /> }
  ];

  const dietaryOptions: { id: DietaryType; label: string; icon: React.ReactNode }[] = [
    { id: 'Any', label: 'Any Diet', icon: <AnyDietIcon3D /> },
    { id: 'Halal', label: 'Halal Cer...', icon: <HalalIcon3D /> },
    { id: 'Vegetarian', label: 'Vegetari...', icon: <VegetarianIcon3D /> }
  ];

  const waitOptions: { id: WaitTimeType; label: string; icon: React.ReactNode }[] = [
    { id: 'Any', label: 'Any Wait', icon: <AnyWaitIcon3D /> },
    { id: 'Under 10 min', label: '⚡ < 10 m...', icon: <Under10Icon3D /> },
    { id: '10–20 min', label: '⏳ 10–20 ...', icon: <Wait10to20Icon3D /> }
  ];

  const toggleCraving = (id: CravingType) => {
    if (filters.craving === id) {
      onSetFilter('craving', '');
    } else {
      onSetFilter('craving', id);
    }
  };

  return (
    <div className="space-y-4 sm:space-y-5">
      {/* Hero Banner with Dark Gradient */}
      <div className="bg-gradient-to-br from-[#1F2933] via-[#334155] to-[#0F172A] rounded-3xl p-5 sm:p-6 text-white shadow-xl relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute -right-8 -bottom-8 w-36 h-36 bg-[#F97316]/20 rounded-full blur-2xl pointer-events-none" />
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-[11px] font-bold backdrop-blur-md">
            <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>{totalStallsCount} Freshly Prepared Options</span>
          </span>
          <span className="text-[11px] font-medium text-slate-300">Live stall status</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight mt-3 leading-tight">
          What are you craving right now?
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">
          Select your filters below to instantly pinpoint the best hawker stall.
        </p>
      </div>

      {/* Selected Filters Summary Bar */}
      <div className="bg-white rounded-2xl p-3 sm:p-3.5 border border-[#E5E7EB] shadow-xs flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto hide-scrollbar py-0.5 text-xs font-semibold">
          <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#6B7280] shrink-0">
            SELECTED:
          </span>
          <span
            className={`px-2.5 py-1 rounded-lg shrink-0 text-xs font-bold transition-colors ${
              filters.craving
                ? 'bg-orange-50 text-[#F97316] border border-orange-200'
                : 'bg-slate-100 text-[#6B7280]'
            }`}
          >
            {filters.craving || 'Any Craving'}
          </span>
          <span
            className={`px-2.5 py-1 rounded-lg shrink-0 text-xs font-semibold transition-colors ${
              filters.budget !== 'All'
                ? 'bg-sky-50 text-[#0EA5E9] font-bold border border-sky-200'
                : 'bg-slate-100 text-[#6B7280]'
            }`}
          >
            {filters.budget === 'All' ? 'Any Budget' : filters.budget}
          </span>
          <span
            className={`px-2.5 py-1 rounded-lg shrink-0 text-xs font-semibold transition-colors ${
              filters.dietary !== 'Any'
                ? 'bg-purple-50 text-[#8B5CF6] font-bold border border-purple-200'
                : 'bg-slate-100 text-[#6B7280]'
            }`}
          >
            {filters.dietary}
          </span>
          <span
            className={`px-2.5 py-1 rounded-lg shrink-0 text-xs font-semibold transition-colors ${
              filters.wait !== 'Any'
                ? 'bg-teal-50 text-[#14B8A6] font-bold border border-teal-200'
                : 'bg-slate-100 text-[#6B7280]'
            }`}
          >
            {filters.wait}
          </span>
        </div>
        <div className="text-[11px] font-bold text-[#1F2933] shrink-0 bg-slate-100 px-2.5 py-1 rounded-md">
          {matchesCount} {matchesCount === 1 ? 'match' : 'matches'}
        </div>
      </div>

      {/* 1. SELECT CRAVING (REQUIRED) */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#1F2933] flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F97316]" />
            1. SELECT CRAVING (REQUIRED)
          </span>
          <span className="text-[11px] text-[#6B7280]">Tap to toggle</span>
        </div>
        <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
          {cravingOptions.map((c) => {
            const isSelected = filters.craving === c.id;
            return (
              <button
                key={c.id}
                id={`filter-craving-${c.id.toLowerCase()}`}
                onClick={() => toggleCraving(c.id)}
                className={`group flex flex-col items-center justify-center p-2 sm:p-2.5 rounded-2xl border transition-all active:scale-95 text-center cursor-pointer ${
                  isSelected
                    ? 'bg-[#F97316] border-[#F97316] text-white shadow-lg ring-2 ring-[#F97316]/30'
                    : 'bg-white border-[#E5E7EB] hover:border-orange-300 text-[#1F2933]'
                }`}
              >
                <div className="w-10 h-10 flex items-center justify-center transition-transform group-hover:scale-105">
                  {c.icon}
                </div>
                <span
                  className={`mt-1.5 text-[11px] font-extrabold truncate w-full tracking-tight ${
                    isSelected ? 'text-white' : 'text-[#1F2933]'
                  }`}
                >
                  {c.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. BUDGET PREFERENCE */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#1F2933] flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0EA5E9]" />
            2. BUDGET PREFERENCE
          </span>
          <span className="text-[11px] text-[#6B7280]">Per portion</span>
        </div>
        <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
          {budgetOptions.map((b) => {
            const isSelected = filters.budget === b.id;
            return (
              <button
                key={b.id}
                id={`filter-budget-${b.id.replace(/\s+/g, '-').toLowerCase()}`}
                onClick={() => onSetFilter('budget', b.id)}
                className={`flex flex-col items-center justify-center p-2 rounded-2xl border transition-all active:scale-95 text-center cursor-pointer ${
                  isSelected
                    ? 'bg-[#0EA5E9] border-[#0EA5E9] text-white shadow-lg ring-2 ring-[#0EA5E9]/30'
                    : 'bg-white border-[#E5E7EB] hover:border-sky-300 text-[#1F2933]'
                }`}
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  {b.icon}
                </div>
                <span
                  className={`mt-1 text-[11px] font-extrabold tracking-tight truncate w-full ${
                    isSelected ? 'text-white' : 'text-[#1F2933]'
                  }`}
                >
                  {b.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. DIETARY REQUIREMENT & 4. MAX WAIT TIME */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {/* Dietary */}
        <div className="space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#1F2933] flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#8B5CF6]" />
            3. DIETARY REQUIREMENT
          </span>
          <div className="grid grid-cols-3 gap-1.5">
            {dietaryOptions.map((d) => {
              const isSelected = filters.dietary === d.id;
              return (
                <button
                  key={d.id}
                  id={`filter-dietary-${d.id.toLowerCase()}`}
                  onClick={() => onSetFilter('dietary', d.id)}
                  className={`flex flex-col items-center justify-center p-2 rounded-2xl border transition-all active:scale-95 text-center cursor-pointer ${
                    isSelected
                      ? 'bg-[#8B5CF6] border-[#8B5CF6] text-white shadow-lg ring-2 ring-[#8B5CF6]/30'
                      : 'bg-white border-[#E5E7EB] hover:border-purple-300 text-[#1F2933]'
                  }`}
                >
                  <div className="w-7 h-7 flex items-center justify-center">
                    {d.icon}
                  </div>
                  <span
                    className={`mt-1 text-[10px] font-extrabold truncate w-full ${
                      isSelected ? 'text-white' : 'text-[#1F2933]'
                    }`}
                  >
                    {d.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Max Wait Time */}
        <div className="space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#1F2933] flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#14B8A6]" />
            4. MAX WAIT TIME
          </span>
          <div className="grid grid-cols-3 gap-1.5">
            {waitOptions.map((w) => {
              const isSelected = filters.wait === w.id;
              return (
                <button
                  key={w.id}
                  id={`filter-wait-${w.id.replace(/\s+/g, '-').toLowerCase()}`}
                  onClick={() => onSetFilter('wait', w.id)}
                  className={`flex flex-col items-center justify-center p-2 rounded-2xl border transition-all active:scale-95 text-center cursor-pointer ${
                    isSelected
                      ? 'bg-[#14B8A6] border-[#14B8A6] text-white shadow-lg ring-2 ring-[#14B8A6]/30'
                      : 'bg-white border-[#E5E7EB] hover:border-teal-300 text-[#1F2933]'
                  }`}
                >
                  <div className="w-7 h-7 flex items-center justify-center">
                    {w.icon}
                  </div>
                  <span
                    className={`mt-1 text-[10px] font-extrabold truncate w-full ${
                      isSelected ? 'text-white' : 'text-[#1F2933]'
                    }`}
                  >
                    {w.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Primary CTA Button */}
      <div className="pt-2 sticky bottom-2 z-20">
        {hasCraving ? (
          <button
            id="find-stall-submit-btn"
            onClick={onFindStall}
            className="w-full py-4 px-6 bg-[#1F2933] hover:bg-black active:scale-[0.99] text-white font-extrabold text-sm sm:text-base rounded-2xl shadow-xl flex items-center justify-center gap-3 transition-all cursor-pointer"
          >
            <span>Find me a stall for {filters.craving}</span>
            <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs">
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </button>
        ) : (
          <button
            disabled
            id="find-stall-disabled-btn"
            className="w-full py-4 px-6 bg-[#E5E7EB] text-[#6B7280] font-bold text-sm rounded-2xl cursor-not-allowed flex items-center justify-center gap-2"
          >
            <span>Please select a craving above</span>
            <span className="text-xs">🔒</span>
          </button>
        )}
      </div>
    </div>
  );
};
