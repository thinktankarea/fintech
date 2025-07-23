// // app/screener/page.tsx
// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { ArrowLeft } from 'lucide-react';
// // Removed Header import to prevent duplicate rendering
// import { FilterPanel } from '@/components/features/screener/FilterPanel';
// import { ResultsGrid } from '@/components/features/screener/ResultsGrid';
// import LiveStatsPanel from '@/components/LiveStatsPanel';
// import { Button } from '@/components/ui/button';
// import { ottoAPI } from '@/utils/api';
// import { OttoScore, ScreenerFilters } from '@/utils/types';

// export default function ScreenerPage() {
//   const [stocks, setStocks] = useState<OttoScore[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [filters, setFilters] = useState<ScreenerFilters>({});

//   useEffect(() => {
//     loadStocks();
//   }, []);

//   const loadStocks = async (searchFilters?: ScreenerFilters) => {
//     try {
//       setLoading(true);
//       const results = await ottoAPI.screenStocks(searchFilters || filters);
//       setStocks(results);
//     } catch (error) {
//       console.error('Failed to load stocks:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleFiltersChange = (newFilters: ScreenerFilters) => {
//     setFilters(newFilters);
//     loadStocks(newFilters);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Removed <Header /> to prevent double header */}

//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="flex items-center justify-between mb-8">
//           <div>
//             <Link href="/">
//               <Button variant="ghost" className="flex items-center space-x-2 mb-4">
//                 <ArrowLeft className="h-4 w-4" />
//                 <span>Back to Dashboard</span>
//               </Button>
//             </Link>
//             <h1 className="text-3xl font-bold text-gray-900">OttoCore™ Screener</h1>
//             <p className="text-gray-600 mt-2">
//               Discover dividend stocks and funds that match your investment criteria
//             </p>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//           <div className="lg:col-span--1">
//             <FilterPanel onFiltersChange={handleFiltersChange} />
//           </div>

//           <div className="lg:col-span-3">
//             <div className="mb-6">
//               <h2 className="text-xl font-semibold text-gray-900 mb-2">
//                 {loading ? 'Searching...' : `${stocks.length} Results Found`}
//               </h2>
//               {!loading && stocks.length > 0 && (
//                 <p className="text-gray-600 text-sm">
//                   Click on any stock card to view detailed OttoScore analysis
//                 </p>
//               )}
//             </div>

//             <div className="mb-8">
//               <LiveStatsPanel symbols={stocks.map(s => s.ticker)} />
//             </div>
//             <ResultsGrid stocks={stocks} loading={loading} />
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }
// app/screener/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
// Removed Header import to prevent duplicate rendering
import { FilterPanel } from '@/components/features/screener/FilterPanel';
import { ResultsGrid } from '@/components/features/screener/ResultsGrid';
import LiveStatsPanel from '@/components/LiveStatsPanel';
import { Button } from '@/components/ui/button';
// import { ottoAPI } from '@/utils/api'; // Remove API
import { OttoScore, ScreenerFilters } from '@/utils/types';
//import { mockStocks } from '@/data/mockStocks'; // ✅ Import your 26 mock entries
import { mockStocks } from '@/utils/mockData';
export default function ScreenerPage() {
  const [stocks, setStocks] = useState<OttoScore[]>([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState<ScreenerFilters>({});

  useEffect(() => {
    loadStocks();
  }, []);

  const loadStocks = (searchFilters?: ScreenerFilters) => {
    setLoading(true);

    // For now, simply return all 26 mock stocks
    let filtered = [...mockStocks];

    // (Optional) Basic filter logic (e.g., by sector, min yield, etc.)
    if (searchFilters?.sector) {
      filtered = filtered.filter(stock => stock.sector === searchFilters.sector);
    }

    if (typeof searchFilters?.minYield === 'number') {
      filtered = filtered.filter(stock => stock.dividend.yield >= searchFilters.minYield!);
    }

    setStocks(filtered);
    setLoading(false);
  };

  const handleFiltersChange = (newFilters: ScreenerFilters) => {
    setFilters(newFilters);
    loadStocks(newFilters);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link href="/">
              <Button variant="ghost" className="flex items-center space-x-2 mb-4">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Dashboard</span>
              </Button>
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">OttoCore™ Screener</h1>
            <p className="text-gray-600 mt-2">
              Discover dividend stocks and funds that match your investment criteria
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <FilterPanel onFiltersChange={handleFiltersChange} />
          </div>

          <div className="lg:col-span-3">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {loading ? 'Searching...' : `${stocks.length} Results Found`}
              </h2>
              {!loading && stocks.length > 0 && (
                <p className="text-gray-600 text-sm">
                  Click on any stock card to view detailed OttoScore analysis
                </p>
              )}
            </div>

            <div className="mb-8">
              <LiveStatsPanel symbols={stocks.map(s => s.ticker)} />
            </div>

            <ResultsGrid stocks={stocks} loading={loading} />
          </div>
        </div>
      </main>
    </div>
  );
}
