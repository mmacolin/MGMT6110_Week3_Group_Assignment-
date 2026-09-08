import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FilterState, ScreenType, HawkerStall, ActiveOrder } from './types';
import { HAWKER_STALLS } from './data/stalls';
import { Header } from './components/Header';
import { DiscoverScreen } from './components/DiscoverScreen';
import { RecommendScreen } from './components/RecommendScreen';
import { OrderScreen } from './components/OrderScreen';
import { SuccessScreen } from './components/SuccessScreen';
import { StallDirectoryModal } from './components/StallDirectoryModal';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<ScreenType>('discover');
  const [filters, setFilters] = useState<FilterState>({
    craving: 'Noodles', // Default selection matching screenshot
    budget: 'All',
    dietary: 'Any',
    wait: 'Any'
  });

  const [selectedStall, setSelectedStall] = useState<HawkerStall>(HAWKER_STALLS[0]);
  const [alternatives, setAlternatives] = useState<HawkerStall[]>(HAWKER_STALLS.slice(1, 5));
  const [orderQuantity, setOrderQuantity] = useState<number>(1);
  const [activeOrder, setActiveOrder] = useState<ActiveOrder | null>(null);
  const [isDirectoryOpen, setIsDirectoryOpen] = useState<boolean>(false);

  // Filter matching computation
  const filteredMatches = useMemo(() => {
    return HAWKER_STALLS.filter((stall) => {
      if (filters.craving && stall.craving !== filters.craving) return false;
      if (filters.budget !== 'All' && stall.budgetCategory !== filters.budget) return false;
      if (filters.dietary !== 'Any') {
        if (filters.dietary === 'Halal' && stall.dietary !== 'Halal') return false;
        if (filters.dietary === 'Vegetarian' && stall.dietary !== 'Vegetarian') return false;
      }
      if (filters.wait !== 'Any' && stall.waitCategory !== filters.wait) return false;
      return true;
    });
  }, [filters]);

  const handleSetFilter = <K extends keyof FilterState>(key: K, val: FilterState[K]) => {
    setFilters((prev) => ({ ...prev, [key]: val }));
  };

  const handleResetFilters = () => {
    setFilters({
      craving: '',
      budget: 'All',
      dietary: 'Any',
      wait: 'Any'
    });
  };

  // Find stall matching logic
  const handleFindStall = () => {
    if (!filters.craving) return;

    let pool = [...filteredMatches];

    // Fallback relaxation if strict combination is empty
    if (pool.length === 0) {
      pool = HAWKER_STALLS.filter((s) => {
        if (s.craving !== filters.craving) return false;
        if (filters.dietary !== 'Any') {
          if (filters.dietary === 'Halal' && s.dietary !== 'Halal') return false;
          if (filters.dietary === 'Vegetarian' && s.dietary !== 'Vegetarian') return false;
        }
        return true;
      });
    }

    if (pool.length === 0) {
      pool = HAWKER_STALLS.filter((s) => s.craving === filters.craving);
    }

    // Prefer non-sold out highest rating
    const available = pool.filter((s) => !s.isSoldOut);
    const topPick = available.length > 0
      ? available.sort((a, b) => b.rating - a.rating)[0]
      : pool[0] || HAWKER_STALLS[0];

    // Find distinct alternatives
    const alts = HAWKER_STALLS
      .filter((s) => s.id !== topPick.id)
      .sort((a, b) => {
        if (a.craving === filters.craving && b.craving !== filters.craving) return -1;
        if (b.craving === filters.craving && a.craving !== filters.craving) return 1;
        return b.rating - a.rating;
      })
      .slice(0, 4);

    setSelectedStall(topPick);
    setAlternatives(alts);
    setActiveScreen('recommend');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Swap stall logic
  const handleSwapStall = (stallId: string) => {
    const picked = HAWKER_STALLS.find((s) => s.id === stallId);
    if (!picked) return;

    setSelectedStall(picked);
    const newAlts = HAWKER_STALLS
      .filter((s) => s.id !== picked.id)
      .sort((a, b) => {
        if (a.craving === filters.craving && b.craving !== filters.craving) return -1;
        if (b.craving === filters.craving && a.craving !== filters.craving) return 1;
        return b.rating - a.rating;
      })
      .slice(0, 4);

    setAlternatives(newAlts);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Direct select from directory modal
  const handleSelectFromDirectory = (stall: HawkerStall) => {
    setSelectedStall(stall);
    setFilters((prev) => ({
      ...prev,
      craving: stall.craving
    }));
    const newAlts = HAWKER_STALLS.filter((s) => s.id !== stall.id).slice(0, 4);
    setAlternatives(newAlts);
    setActiveScreen('recommend');
  };

  // Proceed to order
  const handleProceedToOrder = () => {
    if (selectedStall.isSoldOut) return;
    setOrderQuantity(1);
    setActiveScreen('order');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Confirm final order
  const handleConfirmOrder = () => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const prepMinutes = selectedStall.waitTimeMin || 8;
    const now = new Date();
    now.setMinutes(now.getMinutes() + prepMinutes);
    const timeFormatted = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const total = (selectedStall.price * orderQuantity).toFixed(2);

    setActiveOrder({
      orderNum: `#HK-${randomNum}`,
      stall: selectedStall,
      quantity: orderQuantity,
      readyTime: `${timeFormatted} (~${prepMinutes} mins)`,
      totalPrice: total,
      placedAt: new Date().toLocaleTimeString()
    });

    setActiveScreen('success');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F7F7F5] flex justify-center items-start sm:py-8 px-0 sm:px-4">
      {/* Container simulating the mobile app frame / desktop responsive container */}
      <div
        id="hawkerhunt-app-card"
        className="w-full max-w-lg bg-white min-h-screen sm:min-h-[860px] sm:rounded-3xl shadow-xl flex flex-col overflow-hidden border border-[#E5E7EB]"
      >
        {/* Sticky Header */}
        <Header
          activeScreen={activeScreen}
          onNavigate={(screen) => setActiveScreen(screen)}
          onResetFilters={handleResetFilters}
          onOpenDirectory={() => setIsDirectoryOpen(true)}
        />

        {/* Dynamic Screen View */}
        <main className="flex-1 p-4 sm:p-5 bg-[#F7F7F5] overflow-y-auto">
          <AnimatePresence mode="wait">
            {activeScreen === 'discover' && (
              <motion.div
                key="discover"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
              >
                <DiscoverScreen
                  filters={filters}
                  onSetFilter={handleSetFilter}
                  matchesCount={filteredMatches.length}
                  totalStallsCount={HAWKER_STALLS.length}
                  onFindStall={handleFindStall}
                />
              </motion.div>
            )}

            {activeScreen === 'recommend' && selectedStall && (
              <motion.div
                key="recommend"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
              >
                <RecommendScreen
                  selectedStall={selectedStall}
                  alternatives={alternatives}
                  craving={filters.craving}
                  onBackToDiscover={() => setActiveScreen('discover')}
                  onSwapStall={handleSwapStall}
                  onProceedToOrder={handleProceedToOrder}
                />
              </motion.div>
            )}

            {activeScreen === 'order' && selectedStall && (
              <motion.div
                key="order"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
              >
                <OrderScreen
                  stall={selectedStall}
                  quantity={orderQuantity}
                  onUpdateQuantity={(delta) =>
                    setOrderQuantity((prev) => Math.max(1, prev + delta))
                  }
                  onBackToRecommend={() => setActiveScreen('recommend')}
                  onConfirmOrder={handleConfirmOrder}
                />
              </motion.div>
            )}

            {activeScreen === 'success' && activeOrder && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <SuccessScreen
                  order={activeOrder}
                  onBackToDiscover={() => setActiveScreen('discover')}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>

      {/* Full Stall Directory Modal */}
      <StallDirectoryModal
        stalls={HAWKER_STALLS}
        isOpen={isDirectoryOpen}
        onClose={() => setIsDirectoryOpen(false)}
        onSelectStall={handleSelectFromDirectory}
      />
    </div>
  );
}
