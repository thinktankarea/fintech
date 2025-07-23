// 'use client';

// import { useState } from 'react';
// import ComparisonCard from '@/components/features/compare/ComparisonCard';
// import { ComparisonTable } from '@/components/features/compare/ComparisonTable';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { ottoAPI } from '@/utils/api';
// import { OttoScore } from '@/utils/types';
// import { ArrowLeft, Plus, X, GitCompare } from 'lucide-react';
// import Link from 'next/link';

// export default function ComparePage() {
//   /**
//    * @typedef {object} OttoScore
//    * @property {string} ticker - The stock's ticker symbol (e.g., AAPL).
//    * @property {string} companyName - The full name of the company.
//    * @property {number} currentPrice - The latest trading price of the stock.
//    * @property {number} dailyChange - The change in price since market open.
//    * @property {number} percentageChange - The daily change expressed as a percentage.
//    * @property {number} marketCapitalization - The total value of a company's outstanding shares.
//    * @property {number} dividendYield - The annual dividend payment per share, divided by the share price, expressed as a percentage.
//    * @property {number} annualDividend - The total dividend paid per share over a year.
//    * @property {number} peRatio - The Price-to-Earnings Ratio.
//    * @property {number} eps - Earnings Per Share.
//    * @property {number} volume - The number of shares traded in a given period.
//    * @property {number} fiftyTwoWeekHigh - The highest price in the last 52 weeks.
//    * @property {number} fiftyTwoWeekLow - The lowest price in the last 52 weeks.
//    * @property {number} beta - A measure of the stock's volatility relative to the market.
//    * @property {number} ottoScore - Your proprietary OttoScore for the stock.
//    *
//    * These are the recommended "proper relevant names" for the live stats
//    * that should be displayed in the ComparisonCard and ComparisonTable components.
//    */
//   const [compareStocks, setCompareStocks] = useState<OttoScore[]>([]);
//   const [searchTicker, setSearchTicker] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleAddStock = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!searchTicker.trim() || compareStocks.length >= 3) return;

//     if (compareStocks.some(stock => stock.ticker === searchTicker.toUpperCase())) {
//       alert('Stock already added to comparison');
//       return;
//     }

//     try {
//       setLoading(true);
//       const stock = await ottoAPI.getScore(searchTicker);
//       setCompareStocks([...compareStocks, stock]);
//       setSearchTicker('');
//     } catch (error) {
//       alert(`Could not find data for ${searchTicker.toUpperCase()}`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const removeStock = (ticker: string) => {
//     setCompareStocks(compareStocks.filter(stock => stock.ticker !== ticker));
//   };

//   const addQuickCompare = async () => {
//     const tickers = ['AAPL', 'MSFT', 'JNJ'];
//     try {
//       setLoading(true);
//       const stocks = await ottoAPI.compareStocks(tickers);
//       setCompareStocks(stocks);
//     } catch (error) {
//       console.error('Failed to load comparison stocks:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="mb-8">
//           <Link href="/">
//             <Button variant="ghost" className="flex items-center space-x-2 mb-4">
//               <ArrowLeft className="h-4 w-4" />
//               <span>Back to Dashboard</span>
//             </Button>
//           </Link>
//           <h1 className="text-3xl font-bold text-gray-900">OttoCompare™ Tool</h1>
//           <p className="text-gray-600 mt-2">
//             Compare up to 3 stocks side-by-side to make informed investment decisions
//           </p>
//         </div>

//         <Card className="mb-8">
//           <CardHeader>
//             <div className="flex justify-between items-center">
//               <CardTitle>Add Stocks to Compare</CardTitle>
//               {compareStocks.length === 0 && (
//                 <Button onClick={addQuickCompare} variant="outline" disabled={loading}>
//                   <GitCompare className="h-4 w-4 mr-2" />
//                   Quick Compare (AAPL, MSFT, JNJ)
//                 </Button>
//               )}
//             </div>
//           </CardHeader>
//           <CardContent>
//             <form onSubmit={handleAddStock} className="flex space-x-2 mb-4">
//               <Input
//                 placeholder="Enter ticker symbol (e.g., AAPL)"
//                 value={searchTicker}
//                 onChange={(e) => setSearchTicker(e.target.value)}
//                 disabled={compareStocks.length >= 3 || loading}
//                 className="flex-1"
//               />
//               <Button 
//                 type="submit" 
//                 disabled={compareStocks.length >= 3 || loading || !searchTicker.trim()}
//               >
//                 <Plus className="h-4 w-4 mr-2" />
//                 {loading ? 'Adding...' : 'Add Stock'}
//               </Button>
//             </form>

//             {compareStocks.length > 0 && (
//               <div className="flex flex-wrap gap-2">
//                 {compareStocks.map((stock) => (
//                   <div key={stock.ticker} className="flex items-center space-x-2 bg-blue-100 px-3 py-1 rounded-full">
//                     <span className="font-medium text-blue-900">{stock.ticker}</span>
//                     <Button
//                       size="sm"
//                       variant="ghost"
//                       onClick={() => removeStock(stock.ticker)}
//                       className="h-5 w-5 p-0 text-blue-600 hover:text-blue-800"
//                     >
//                       <X className="h-3 w-3" />
//                     </Button>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </CardContent>
//         </Card>

//         {compareStocks.length === 0 ? (
//           <Card>
//             <CardContent className="py-12">
//               <div className="text-center">
//                 <GitCompare className="h-16 w-16 text-gray-300 mx-auto mb-4" />
//                 <h3 className="text-lg font-semibold text-gray-600 mb-2">
//                   No Stocks Selected
//                 </h3>
//                 <p className="text-gray-500">
//                   Add stocks using the search above or try the quick compare option
//                 </p>
//               </div>
//             </CardContent>
//           </Card>
//         ) : (
//           <div className="space-y-8">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {compareStocks.map((stock) => (
//                 <ComparisonCard key={stock.ticker} stock={stock} />
//               ))}
//             </div>

//             {compareStocks.length >= 2 && (
//               <ComparisonTable stocks={compareStocks} />
//             )}
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }
// 'use client';

// import { useState, useEffect } from 'react';
// import ComparisonCard from '@/components/features/compare/ComparisonCard';
// import { ComparisonTable } from '@/components/features/compare/ComparisonTable';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { OttoScore } from '@/utils/types';
// import { ArrowLeft, Plus, X, GitCompare } from 'lucide-react';
// import Link from 'next/link';
// import { mockStocks } from '@/utils/mockData'; // ✅ Use your mock 26 companies

// export default function ComparePage() {
//   const [compareStocks, setCompareStocks] = useState<OttoScore[]>([]);
//   const [searchTicker, setSearchTicker] = useState('');

//   useEffect(() => {
//     // Load all mock stocks on initial render
//     setCompareStocks(mockStocks);
//   }, []);

//   const removeStock = (ticker: string) => {
//     setCompareStocks(compareStocks.filter(stock => stock.ticker !== ticker));
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="mb-8">
//           <Link href="/">
//             <Button variant="ghost" className="flex items-center space-x-2 mb-4">
//               <ArrowLeft className="h-4 w-4" />
//               <span>Back to Dashboard</span>
//             </Button>
//           </Link>
//           <h1 className="text-3xl font-bold text-gray-900">OttoCompare™ Tool</h1>
//           <p className="text-gray-600 mt-2">
//             View and compare 26 mock companies loaded from static data
//           </p>
//         </div>

//         <Card className="mb-8">
//           <CardHeader>
//             <CardTitle>Mock Stocks Preloaded</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="text-gray-600 text-sm">
//               All 26 mock companies are automatically loaded below for comparison.
//             </p>
//           </CardContent>
//         </Card>

//         <div className="space-y-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {compareStocks.map((stock) => (
//               <ComparisonCard key={stock.ticker} stock={stock} />
//             ))}
//           </div>

//           {compareStocks.length >= 2 && (
//             <ComparisonTable stocks={compareStocks} />
//           )}
//         </div>
//       </main>
//     </div>
//   );
// }

'use client';

import { useState, useEffect } from 'react';
import ComparisonCard from '@/components/features/compare/ComparisonCard';
import { ComparisonTable } from '@/components/features/compare/ComparisonTable';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { mockStocks } from '@/utils/mockData'; // ✅ Correct path here
import { OttoScore } from '@/utils/types';
import { ArrowLeft, GitCompare } from 'lucide-react';
import Link from 'next/link';

export default function ComparePage() {
  const [compareStocks, setCompareStocks] = useState<OttoScore[]>([]);

  useEffect(() => {
    setCompareStocks(mockStocks); // ✅ Load all 26 stocks on mount
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="flex items-center space-x-2 mb-4">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Dashboard</span>
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">OttoCompare™ Tool</h1>
          <p className="text-gray-600 mt-2">
            Compare multiple stocks side-by-side to make informed investment decisions.
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Showing All 26 Mock Companies</CardTitle>
              <GitCompare className="h-5 w-5 text-gray-400" />
            </div>
          </CardHeader>
        </Card>

        {compareStocks.length === 0 ? (
          <Card>
            <CardContent className="py-12">
              <div className="text-center">
                <GitCompare className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-600 mb-2">
                  No Stocks Loaded
                </h3>
                <p className="text-gray-500">
                  Something went wrong. Please refresh the page.
                </p>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {compareStocks.map((stock) => (
                <ComparisonCard key={stock.ticker} stock={stock} />
              ))}
            </div>

            {compareStocks.length >= 2 && (
              <ComparisonTable stocks={compareStocks} />
            )}
          </div>
        )}
      </main>
    </div>
  );
}
