// 'use client';

// import { useState, useEffect } from 'react';
// import { useParams } from 'next/navigation';
// import { Header } from '@/components/layout/Header';
// import { ScoreCard } from '@/components/features/score/ScoreCard';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Card, CardContent } from '@/components/ui/card';
// import { ottoAPI } from '@/utils/api';
// import { OttoScore } from '@/utils/types';
// import { mockStocks } from '@/utils/mockData';
// import { Search, ArrowLeft } from 'lucide-react';
// import Link from 'next/link';

// export async function generateStaticParams() {
//   return mockStocks.map((stock) => ({
//     ticker: stock.ticker,
//   }));
// }

// export default function ScorePage() {
//   const params = useParams();
//   const ticker = params?.ticker as string;
//   const [stock, setStock] = useState<OttoScore | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [searchTicker, setSearchTicker] = useState('');

//   useEffect(() => {
//     if (ticker) {
//       loadStock(ticker);
//     }
//   }, [ticker]);

//   const loadStock = async (tickerSymbol: string) => {
//     try {
//       setLoading(true);
//       setError(null);
//       const stockData = await ottoAPI.getScore(tickerSymbol);
//       setStock(stockData);
//     } catch (err) {
//       setError(`Could not load data for ${tickerSymbol.toUpperCase()}`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (searchTicker.trim()) {
//       window.location.href = `/score/${searchTicker.toUpperCase()}`;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header />
      
//       <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Navigation */}
//         <div className="flex items-center justify-between mb-8">
//           <Link href="/">
//             <Button variant="ghost" className="flex items-center space-x-2">
//               <ArrowLeft className="h-4 w-4" />
//               <span>Back to Dashboard</span>
//             </Button>
//           </Link>
          
//           <form onSubmit={handleSearch} className="flex space-x-2">
//             <Input
//               placeholder="Search ticker (e.g., AAPL)"
//               value={searchTicker}
//               onChange={(e) => setSearchTicker(e.target.value)}
//               className="w-48"
//             />
//             <Button type="submit">
//               <Search className="h-4 w-4" />
//             </Button>
//           </form>
//         </div>

//         {/* Content */}
//         {loading && (
//           <Card>
//             <CardContent className="py-12">
//               <div className="text-center">
//                 <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
//                 <p className="text-gray-600">Loading OttoScore for {ticker?.toUpperCase()}...</p>
//               </div>
//             </CardContent>
//           </Card>
//         )}

//         {error && (
//           <Card>
//             <CardContent className="py-12">
//               <div className="text-center">
//                 <p className="text-red-600 mb-4">{error}</p>
//                 <p className="text-gray-600 text-sm">
//                   Try searching for a different ticker or check back later.
//                 </p>
//               </div>
//             </CardContent>
//           </Card>
//         )}

//         {stock && !loading && !error && (
//           <ScoreCard stock={stock} />
//         )}
//       </main>
//     </div>
//   );
// }

// app/score/[ticker]/page.tsx

// app/score/[ticker]/page.tsx

// import { notFound } from 'next/navigation';
// import { ScoreCard } from '@/components/features/score/ScoreCard';
// import { ottoAPI } from '@/utils/api';
// import { ArrowLeft, Search } from 'lucide-react';
// import Link from 'next/link';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';

// interface Props {
//   params: { ticker: string };
//   searchParams: { [key: string]: string | undefined };
// }

// // ✅ For static export compatibility
// export async function generateStaticParams() {
//   return [
//     { ticker: 'AAPL' },
//     { ticker: 'MSFT' },
//     { ticker: 'JNJ' },
//     { ticker: 'REALTY' },
//     { ticker: 'SCHD' },
//   ];
// }

// export default async function ScorePage({ params }: Props) {
//   const ticker = params.ticker?.toUpperCase();
//   let stock = null;

//   try {
//     stock = await ottoAPI.getScore(ticker);
//   } catch (error) {
//     return notFound();
//   }

//   if (!stock) return notFound();

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Navigation */}
//         <div className="flex items-center justify-between mb-8">
//           <Link href="/screener">
//             <Button variant="ghost" className="flex items-center space-x-2">
//               <ArrowLeft className="h-4 w-4" />
//               <span>Back to Screener</span>
//             </Button>
//           </Link>
//           <form action="/score" method="get" className="flex space-x-2">
//             <Input name="ticker" placeholder="Search ticker (e.g., AAPL)" className="w-48" />
//             <Button type="submit">
//               <Search className="h-4 w-4" />
//             </Button>
//           </form>
//         </div>

//         <ScoreCard stock={stock} />
//       </main>
//     </div>
//   );
// }
// app/score/[ticker]/page.tsx

import { notFound } from 'next/navigation';
import { ScoreCard } from '@/components/features/score/ScoreCard';
import LiveStatsPanel from '@/components/LiveStatsPanel';
import { ottoAPI } from '@/utils/api';
import { ArrowLeft, Search } from 'lucide-react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface Props {
  params: { ticker: string };
  searchParams: { [key: string]: string | undefined };
}

// ✅ Restoring generateStaticParams for static export compatibility
export async function generateStaticParams() {
  return [
    { ticker: 'AAPL' },
    { ticker: 'MSFT' },
    { ticker: 'JNJ' },
    { ticker: 'REALTY' },
    { ticker: 'SCHD' },
  ];
}

export default async function ScorePage({ params }: Props) {
  const ticker = typeof params.ticker === 'string' ? params.ticker.toUpperCase() : undefined;
  let stock = null;

  try {
    if (ticker) {
      stock = await ottoAPI.getScore(ticker);
    } else {
      return notFound();
    }
  } catch (error) {
    return notFound();
  }

  if (!stock) return notFound();

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/screener">
            <Button variant="ghost" className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Screener</span>
            </Button>
          </Link>
          <form action="/score" method="get" className="flex space-x-2">
            <Input name="ticker" placeholder="Search ticker (e.g., AAPL)" className="w-48" />
            <Button type="submit">
              <Search className="h-4 w-4" />
            </Button>
          </form>
        </div>

        <ScoreCard stock={stock} />
        <div className="mt-8">
          {ticker && <LiveStatsPanel symbols={[ticker]} />}
        </div>
      </main>
    </div>
  );
}