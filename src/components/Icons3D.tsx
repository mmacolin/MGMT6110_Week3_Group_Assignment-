import React from 'react';

export const HawkerLogoIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 10C4 14.4183 7.58172 18 12 18C16.4183 18 20 14.4183 20 10H4Z" fill="white" fillOpacity="0.95" />
    <path d="M8 18L7 21H17L16 18" stroke="white" strokeLinecap="round" strokeWidth="2" />
    <path d="M7 6C7.5 7.5 6.5 8.5 7 10M12 5C12.5 6.8 11.5 7.8 12 10M17 6C17.5 7.5 16.5 8.5 17 10" stroke="white" strokeLinecap="round" strokeWidth="1.8" />
  </svg>
);

export const NoodlesIcon3D: React.FC<{ className?: string }> = ({ className = "w-11 h-11" }) => (
  <svg className={`${className} drop-shadow-md`} viewBox="0 0 64 64" fill="none">
    <defs>
      <linearGradient id="bowlGrad" x1="12" y1="28" x2="52" y2="54" gradientUnits="userSpaceOnUse">
        <stop stopColor="#EA580C" />
        <stop offset="0.6" stopColor="#C2410C" />
        <stop offset="1" stopColor="#9A3412" />
      </linearGradient>
      <linearGradient id="noodleGrad" x1="18" y1="24" x2="46" y2="34" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FEF08A" />
        <stop offset="0.7" stopColor="#FACC15" />
        <stop offset="1" stopColor="#EAB308" />
      </linearGradient>
      <linearGradient id="stickGrad" x1="20" y1="6" x2="56" y2="20" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FED7AA" />
        <stop offset="1" stopColor="#B45309" />
      </linearGradient>
    </defs>
    <ellipse cx="32" cy="53" rx="16" ry="3" fill="#000000" fillOpacity="0.18" />
    <path d="M12 28C12 42 21 51 32 51C43 51 52 42 52 28H12Z" fill="url(#bowlGrad)" />
    <ellipse cx="32" cy="28" rx="20" ry="6" fill="#7C2D12" />
    <ellipse cx="32" cy="27" rx="18" ry="4.5" fill="url(#noodleGrad)" />
    <path d="M20 27C24 24 28 29 32 26C36 24 40 28 44 26" stroke="#FEF9C3" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M22 29C26 27 30 31 34 28C38 26 42 30 45 28" stroke="#CA8A04" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M14 8L48 24" stroke="url(#stickGrad)" strokeWidth="3" strokeLinecap="round" />
    <path d="M20 5L52 22" stroke="url(#stickGrad)" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M25 18C23 15 27 12 25 8" stroke="#FFFFFF" strokeOpacity="0.85" strokeWidth="2" strokeLinecap="round" />
    <path d="M33 17C31 14 35 11 33 7" stroke="#FFFFFF" strokeOpacity="0.9" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M40 19C38 16 42 13 40 9" stroke="#FFFFFF" strokeOpacity="0.75" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M14 29C20 32 44 32 50 29" stroke="#FB923C" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const RiceIcon3D: React.FC<{ className?: string }> = ({ className = "w-11 h-11" }) => (
  <svg className={`${className} drop-shadow-md`} viewBox="0 0 64 64" fill="none">
    <defs>
      <linearGradient id="riceBowl" x1="14" y1="28" x2="50" y2="52" gradientUnits="userSpaceOnUse">
        <stop stopColor="#475569" />
        <stop offset="0.6" stopColor="#334155" />
        <stop offset="1" stopColor="#1E293B" />
      </linearGradient>
      <linearGradient id="riceGrain" x1="20" y1="18" x2="44" y2="34" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFFFFF" />
        <stop offset="0.6" stopColor="#F8FAFC" />
        <stop offset="1" stopColor="#E2E8F0" />
      </linearGradient>
    </defs>
    <ellipse cx="32" cy="52" rx="15" ry="3" fill="#000000" fillOpacity="0.16" />
    <path d="M16 30C16 18 23 13 32 13C41 13 48 18 48 30Z" fill="url(#riceGrain)" />
    <circle cx="32" cy="18" r="4.5" fill="#F59E0B" />
    <circle cx="30.5" cy="16.5" r="1.3" fill="#FEF3C7" />
    <path d="M22 22L24 23M38 21L40 22M27 25L29 25M35 26L37 25" stroke="#CBD5E1" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M13 30C13 43 21 50 32 50C43 50 51 43 51 30H13Z" fill="url(#riceBowl)" />
    <ellipse cx="32" cy="30" rx="19" ry="3.5" fill="#1E293B" />
    <path d="M14 31C20 33 44 33 50 31" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M10 33C8 33 8 36 10 36" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M54 33C56 33 56 36 54 36" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export const SoupIcon3D: React.FC<{ className?: string }> = ({ className = "w-11 h-11" }) => (
  <svg className={`${className} drop-shadow-md`} viewBox="0 0 64 64" fill="none">
    <defs>
      <linearGradient id="potGrad" x1="16" y1="26" x2="48" y2="52" gradientUnits="userSpaceOnUse">
        <stop stopColor="#DC2626" />
        <stop offset="0.7" stopColor="#B91C1C" />
        <stop offset="1" stopColor="#7F1D1D" />
      </linearGradient>
      <linearGradient id="brothGrad" x1="20" y1="23" x2="44" y2="30" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FDE047" />
        <stop offset="0.8" stopColor="#EAB308" />
        <stop offset="1" stopColor="#CA8A04" />
      </linearGradient>
    </defs>
    <ellipse cx="32" cy="53" rx="16" ry="3" fill="#000000" fillOpacity="0.16" />
    <path d="M15 28C15 44 22 51 32 51C42 51 49 44 49 28H15Z" fill="url(#potGrad)" />
    <ellipse cx="32" cy="28" rx="17" ry="5" fill="#991B1B" />
    <ellipse cx="32" cy="28" rx="15" ry="4" fill="url(#brothGrad)" />
    <circle cx="28" cy="28" r="2" fill="#16A34A" />
    <circle cx="35" cy="27" r="1.8" fill="#15803D" />
    <circle cx="32" cy="29.5" r="1.2" fill="#DC2626" />
    <path d="M12 31H15M49 31H52" stroke="#475569" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M26 18C24 14 27 11 25 7" stroke="#FFFFFF" strokeOpacity="0.9" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M34 16C32 12 36 9 33 5" stroke="#FFFFFF" strokeOpacity="0.9" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M40 18C38 15 41 12 39 8" stroke="#FFFFFF" strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const SnacksIcon3D: React.FC<{ className?: string }> = ({ className = "w-11 h-11" }) => (
  <svg className={`${className} drop-shadow-md`} viewBox="0 0 64 64" fill="none">
    <defs>
      <linearGradient id="crustGrad" x1="16" y1="18" x2="48" y2="46" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FBBF24" />
        <stop offset="0.6" stopColor="#F59E0B" />
        <stop offset="1" stopColor="#D97706" />
      </linearGradient>
    </defs>
    <ellipse cx="32" cy="50" rx="17" ry="3" fill="#000000" fillOpacity="0.16" />
    <path d="M14 34C14 20 25 14 38 16C46 17 50 24 50 34C50 36 48 38 45 38H19C16 38 14 36 14 34Z" fill="url(#crustGrad)" />
    <path d="M20 28C22 23 25 24 27 28M27 26C29 21 32 22 34 26M34 25C36 20 39 21 41 25M41 26C43 22 46 23 47 28" stroke="#FDE68A" strokeWidth="2" strokeLinecap="round" />
    <path d="M22 34C28 32 38 32 44 34" stroke="#FFFBEB" strokeWidth="2" strokeLinecap="round" />
    <circle cx="28" cy="30" r="1.2" fill="#78350F" opacity="0.6" />
    <circle cx="36" cy="29" r="1" fill="#78350F" opacity="0.6" />
  </svg>
);

export const DrinksIcon3D: React.FC<{ className?: string }> = ({ className = "w-11 h-11" }) => (
  <svg className={`${className} drop-shadow-md`} viewBox="0 0 64 64" fill="none">
    <defs>
      <linearGradient id="glassGrad" x1="20" y1="18" x2="44" y2="52" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFFFFF" stopOpacity="0.8" />
        <stop offset="1" stopColor="#E2E8F0" stopOpacity="0.4" />
      </linearGradient>
      <linearGradient id="kopiGrad" x1="22" y1="24" x2="42" y2="48" gradientUnits="userSpaceOnUse">
        <stop stopColor="#78350F" />
        <stop offset="0.7" stopColor="#451A03" />
        <stop offset="1" stopColor="#FCD34D" />
      </linearGradient>
    </defs>
    <ellipse cx="32" cy="52" rx="12" ry="2.5" fill="#000000" fillOpacity="0.16" />
    <path d="M20 18L24 50H40L44 18H20Z" fill="url(#glassGrad)" />
    <path d="M21 24L24 49H40L43 24C39 26 25 26 21 24Z" fill="url(#kopiGrad)" />
    <path d="M23.5 45L24 49H40L40.5 45H23.5Z" fill="#FEF3C7" />
    <rect x="25" y="26" width="6.5" height="6.5" rx="1.5" fill="#FFFFFF" fillOpacity="0.7" stroke="#E2E8F0" strokeWidth="0.8" />
    <rect x="33" y="28" width="6" height="6" rx="1.5" fill="#FFFFFF" fillOpacity="0.75" stroke="#E2E8F0" strokeWidth="0.8" />
    <path d="M38 8L30 36" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
    <path d="M38 8L30 36" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="2 3" />
    <path d="M23 20L25 46" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.8" />
  </svg>
);

export const Under5Icon3D: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg className={`${className} drop-shadow-md`} viewBox="0 0 48 48" fill="none">
    <defs>
      <linearGradient id="coinGrad" x1="12" y1="8" x2="36" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#38BDF8" />
        <stop offset="0.6" stopColor="#0284C7" />
        <stop offset="1" stopColor="#0369A1" />
      </linearGradient>
      <linearGradient id="coinRim" x1="14" y1="10" x2="34" y2="38" gradientUnits="userSpaceOnUse">
        <stop stopColor="#E0F2FE" />
        <stop offset="1" stopColor="#BAE6FD" />
      </linearGradient>
    </defs>
    <ellipse cx="24" cy="40" rx="12" ry="2.5" fill="#000000" fillOpacity="0.18" />
    <circle cx="24" cy="23" r="16" fill="url(#coinGrad)" />
    <circle cx="24" cy="23" r="13" stroke="url(#coinRim)" strokeWidth="1.8" />
    <path d="M24 14V32M27 18H22C20.5 18 19 19 19 20.5C19 22 20.5 23 22 23H26C27.5 23 29 24 29 25.5C29 27 27.5 28 26 28H20" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const MidBudgetIcon3D: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg className={`${className} drop-shadow-md`} viewBox="0 0 48 48" fill="none">
    <defs>
      <linearGradient id="walletGrad" x1="10" y1="14" x2="38" y2="38" gradientUnits="userSpaceOnUse">
        <stop stopColor="#38BDF8" />
        <stop offset="0.7" stopColor="#0284C7" />
        <stop offset="1" stopColor="#075985" />
      </linearGradient>
      <linearGradient id="noteGrad" x1="16" y1="8" x2="32" y2="18" gradientUnits="userSpaceOnUse">
        <stop stopColor="#4ADE80" />
        <stop offset="1" stopColor="#16A34A" />
      </linearGradient>
    </defs>
    <ellipse cx="24" cy="39" rx="14" ry="2.5" fill="#000000" fillOpacity="0.16" />
    <rect x="16" y="10" width="16" height="12" rx="2" fill="url(#noteGrad)" stroke="#BBF7D0" strokeWidth="1" />
    <rect x="8" y="16" width="32" height="20" rx="4" fill="url(#walletGrad)" />
    <path d="M8 20H40" stroke="#0369A1" strokeWidth="1.5" />
    <path d="M28 22H38V30H28C26 30 26 22 28 22Z" fill="#0369A1" />
    <circle cx="34" cy="26" r="1.8" fill="#FACC15" />
    <path d="M10 18H38" stroke="#BAE6FD" strokeWidth="1" strokeLinecap="round" />
  </svg>
);

export const HighBudgetIcon3D: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg className={`${className} drop-shadow-md`} viewBox="0 0 48 48" fill="none">
    <defs>
      <linearGradient id="goldCoins" x1="14" y1="12" x2="34" y2="36" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FDE047" />
        <stop offset="0.6" stopColor="#F59E0B" />
        <stop offset="1" stopColor="#B45309" />
      </linearGradient>
      <linearGradient id="gemGrad" x1="20" y1="8" x2="28" y2="20" gradientUnits="userSpaceOnUse">
        <stop stopColor="#38BDF8" />
        <stop offset="1" stopColor="#0284C7" />
      </linearGradient>
    </defs>
    <ellipse cx="24" cy="40" rx="15" ry="2.5" fill="#000000" fillOpacity="0.18" />
    <ellipse cx="24" cy="34" rx="13" ry="4" fill="#B45309" />
    <ellipse cx="24" cy="31" rx="13" ry="4" fill="url(#goldCoins)" />
    <ellipse cx="24" cy="26" rx="13" ry="4" fill="#B45309" />
    <ellipse cx="24" cy="23" rx="13" ry="4" fill="url(#goldCoins)" />
    <path d="M24 8L29 14L24 20L19 14L24 8Z" fill="url(#gemGrad)" stroke="#E0F2FE" strokeWidth="1.2" />
    <circle cx="24" cy="14" r="1" fill="#FFFFFF" />
  </svg>
);

export const AnyDietIcon3D: React.FC<{ className?: string }> = ({ className = "w-7 h-7" }) => (
  <svg className={`${className} drop-shadow-md`} viewBox="0 0 48 48" fill="none">
    <defs>
      <linearGradient id="clocheGrad" x1="12" y1="16" x2="36" y2="34" gradientUnits="userSpaceOnUse">
        <stop stopColor="#C4B5FD" />
        <stop offset="0.6" stopColor="#8B5CF6" />
        <stop offset="1" stopColor="#6D28D9" />
      </linearGradient>
    </defs>
    <ellipse cx="24" cy="38" rx="16" ry="2.5" fill="#000000" fillOpacity="0.16" />
    <circle cx="24" cy="14" r="2.5" fill="#DDD6FE" />
    <path d="M12 32C12 21 17 16 24 16C31 16 36 21 36 32H12Z" fill="url(#clocheGrad)" />
    <path d="M14 28C18 20 30 20 34 28" stroke="#EDE9FE" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
    <rect x="8" y="32" width="32" height="3" rx="1.5" fill="#DDD6FE" />
  </svg>
);

export const HalalIcon3D: React.FC<{ className?: string }> = ({ className = "w-7 h-7" }) => (
  <svg className={`${className} drop-shadow-md`} viewBox="0 0 48 48" fill="none">
    <defs>
      <linearGradient id="moonGrad" x1="12" y1="12" x2="36" y2="36" gradientUnits="userSpaceOnUse">
        <stop stopColor="#DDD6FE" />
        <stop offset="0.5" stopColor="#A78BFA" />
        <stop offset="1" stopColor="#7C3AED" />
      </linearGradient>
    </defs>
    <ellipse cx="24" cy="40" rx="12" ry="2.5" fill="#000000" fillOpacity="0.16" />
    <path d="M26 10C17.7 10 11 16.7 11 25C11 33.3 17.7 40 26 40C29.5 40 32.7 38.8 35.3 36.8C28.5 35.8 23.3 30 23.3 23C23.3 16 28.5 10.2 35.3 9.2C32.7 9.7 29.5 10 26 10Z" fill="url(#moonGrad)" />
    <path d="M35 15L36.2 18.5L39.8 18.5L36.9 20.7L38 24.1L35 22L32 24.1L33.1 20.7L30.2 18.5L33.8 18.5L35 15Z" fill="#FDE047" />
  </svg>
);

export const VegetarianIcon3D: React.FC<{ className?: string }> = ({ className = "w-7 h-7" }) => (
  <svg className={`${className} drop-shadow-md`} viewBox="0 0 48 48" fill="none">
    <defs>
      <linearGradient id="leafGrad1" x1="14" y1="12" x2="28" y2="34" gradientUnits="userSpaceOnUse">
        <stop stopColor="#4ADE80" />
        <stop offset="0.7" stopColor="#16A34A" />
        <stop offset="1" stopColor="#15803D" />
      </linearGradient>
      <linearGradient id="leafGrad2" x1="22" y1="14" x2="36" y2="36" gradientUnits="userSpaceOnUse">
        <stop stopColor="#86EFAC" />
        <stop offset="1" stopColor="#22C55E" />
      </linearGradient>
    </defs>
    <ellipse cx="24" cy="40" rx="12" ry="2.5" fill="#000000" fillOpacity="0.16" />
    <path d="M24 38C24 30 25 24 28 20" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M24 26C16 26 12 18 16 12C24 12 26 20 24 26Z" fill="url(#leafGrad1)" />
    <path d="M16 14C20 18 23 22 23 25" stroke="#DCFCE7" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M26 22C34 22 37 15 33 10C26 10 24 17 26 22Z" fill="url(#leafGrad2)" />
  </svg>
);

export const AnyWaitIcon3D: React.FC<{ className?: string }> = ({ className = "w-7 h-7" }) => (
  <svg className={`${className} drop-shadow-md`} viewBox="0 0 48 48" fill="none">
    <defs>
      <linearGradient id="clockGrad" x1="12" y1="8" x2="36" y2="38" gradientUnits="userSpaceOnUse">
        <stop stopColor="#2DD4BF" />
        <stop offset="0.7" stopColor="#0D9488" />
        <stop offset="1" stopColor="#115E59" />
      </linearGradient>
    </defs>
    <ellipse cx="24" cy="40" rx="12" ry="2.5" fill="#000000" fillOpacity="0.16" />
    <circle cx="24" cy="24" r="15" fill="url(#clockGrad)" />
    <circle cx="24" cy="24" r="12" fill="#FFFFFF" />
    <circle cx="24" cy="24" r="2" fill="#0D9488" />
    <path d="M24 16V24L29 27" stroke="#0F766E" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export const Under10Icon3D: React.FC<{ className?: string }> = ({ className = "w-7 h-7" }) => (
  <svg className={`${className} drop-shadow-md`} viewBox="0 0 48 48" fill="none">
    <defs>
      <linearGradient id="stopwatch" x1="12" y1="10" x2="36" y2="38" gradientUnits="userSpaceOnUse">
        <stop stopColor="#2DD4BF" />
        <stop offset="0.6" stopColor="#0D9488" />
        <stop offset="1" stopColor="#115E59" />
      </linearGradient>
    </defs>
    <ellipse cx="24" cy="41" rx="12" ry="2.5" fill="#000000" fillOpacity="0.16" />
    <rect x="21" y="6" width="6" height="4" rx="1.5" fill="#5EEAD4" />
    <circle cx="24" cy="25" r="15" fill="url(#stopwatch)" />
    <circle cx="24" cy="25" r="12" fill="#134E4A" />
    <path d="M25 15L18 25H24L23 33L31 23H25L27 15H25Z" fill="#FDE047" stroke="#FEF08A" strokeWidth="0.8" />
  </svg>
);

export const Wait10to20Icon3D: React.FC<{ className?: string }> = ({ className = "w-7 h-7" }) => (
  <svg className={`${className} drop-shadow-md`} viewBox="0 0 48 48" fill="none">
    <defs>
      <linearGradient id="hourGrad" x1="14" y1="8" x2="34" y2="38" gradientUnits="userSpaceOnUse">
        <stop stopColor="#5EEAD4" />
        <stop offset="0.5" stopColor="#14B8A6" />
        <stop offset="1" stopColor="#0F766E" />
      </linearGradient>
    </defs>
    <ellipse cx="24" cy="40" rx="11" ry="2.5" fill="#000000" fillOpacity="0.16" />
    <path d="M16 10H32M16 38H32M17 10L24 24L31 10M17 38L24 24L31 38" stroke="url(#hourGrad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 13H28L24 21L20 13Z" fill="#FEF08A" />
    <path d="M21 35H27L24 30L21 35Z" fill="#FACC15" />
    <circle cx="24" cy="26" r="1" fill="#FDE047" />
  </svg>
);
