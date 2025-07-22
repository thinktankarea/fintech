'use client';

import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Info } from 'lucide-react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
} from 'recharts';
import LiveStatsPanel from '@/components/LiveStatsPanel';

export interface DividendStock {
  ticker: string;
  price: number;
  annualDividend: number;
  yield: number;
  dripEligible: boolean;
  months: string[];
  sector: string;
  ottoScore: number;
  payoutRatio: number;
  insight?: string;
}

const months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

const initialStocks: DividendStock[] = [
  {
    ticker: 'AAPL',
    price: 175.0,
    annualDividend: 0.92,
    yield: 0.53,
    dripEligible: true,
    months: ['Feb', 'May', 'Aug', 'Nov'],
    sector: 'Technology',
    ottoScore: 87,
    payoutRatio: 25,
    insight: 'Growth tech stock with stable dividend.',
  },
  {
    ticker: 'JNJ',
    price: 165.0,
    annualDividend: 4.76,
    yield: 2.88,
    dripEligible: true,
    months: ['Mar', 'Jun', 'Sep', 'Dec'],
    sector: 'Healthcare',
    ottoScore: 91,
    payoutRatio: 48,
    insight: 'Blue chip with strong dividend history.',
  },
  {
    ticker: 'KO',
    price: 60.0,
    annualDividend: 1.84,
    yield: 3.07,
    dripEligible: true,
    months: ['Jan', 'Apr', 'Jul', 'Oct'],
    sector: 'Consumer Staples',
    ottoScore: 85,
    payoutRatio: 75,
    insight: 'High yield stable income stock.',
  },
];

export default function OttoCalendar() {
  const [investment, setInvestment] = useState(10000);
  const [useDrip, setUseDrip] = useState(true);
  const [stocks, setStocks] = useState<DividendStock[]>(initialStocks);
  const [dividendPlan, setDividendPlan] = useState<
    { month: string; stocks: (DividendStock & { projectedDividend: number })[]; total: string }[]
  >([]);

  // 🔁 Fetch live price + yield data from Twelve Data
  useEffect(() => {
    const fetchLiveQuotes = async () => {
      const symbols = initialStocks.map(s => s.ticker).join(',');
      const res = await fetch(`https://api.twelvedata.com/quote?symbol=${symbols}&apikey=${process.env.NEXT_PUBLIC_TWELVE_DATA_API_KEY}`);
      const data = await res.json();

      const updated = initialStocks.map(stock => {
        const live = data[stock.ticker];
        const price = parseFloat(live?.close ?? stock.price);
        const yieldPercent = parseFloat(live?.dividend_yield ?? stock.yield.toString());

        return {
          ...stock,
          price,
          yield: yieldPercent,
        };
      });

      setStocks(updated);
    };

    fetchLiveQuotes();
  }, []);

  const calculatePlan = () => {
    const monthlyPlan: Record<string, (DividendStock & { projectedDividend: number })[]> = {};
    months.forEach(m => (monthlyPlan[m] = []));

    stocks.forEach(stock => {
      const shares = investment / stocks.length / stock.price;
      const dripShares = useDrip && stock.dripEligible ? shares + (shares * stock.yield / 4) : shares;
      stock.months.forEach(month => {
        monthlyPlan[month].push({
          ...stock,
          projectedDividend: (dripShares * stock.annualDividend) / 4,
        });
      });
    });

    const flatPlan = months.map(month => ({
      month,
      stocks: monthlyPlan[month],
      total: monthlyPlan[month].reduce((acc, s) => acc + s.projectedDividend, 0).toFixed(2),
    }));

    setDividendPlan(flatPlan);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Otto3x12™ Dividend Income Calendar</h1>
        <p className="text-gray-600 mb-6">Build monthly income streams using quarterly dividend stocks. Includes DRIP simulation, OttoScore ratings, and payout projections.</p>
        <div className="my-8">
          <LiveStatsPanel symbols={initialStocks.map(s => s.ticker)} />
        </div>

        <div className="flex gap-4 items-end mb-4">
          <Input
            type="number"
            value={investment}
            onChange={(e) => setInvestment(Number(e.target.value))}
            placeholder="Investment amount"
            className="w-64"
          />
          <Button onClick={calculatePlan}>📈 Build Income Plan</Button>
        </div>

        <div className="flex items-center mb-8 space-x-2">
          <input type="checkbox" checked={useDrip} onChange={() => setUseDrip(!useDrip)} />
          <label className="text-sm text-gray-700">Enable DRIP Simulation</label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
          {dividendPlan.map(({ month, stocks, total }) => (
            <Card key={month} className="shadow hover:shadow-xl transition-all duration-200">
              <CardContent className="p-5">
                <h2 className="text-2xl font-semibold mb-4 text-blue-800">{month}</h2>
                <ul className="space-y-4">
                  {stocks.map((s, i) => (
                    <li key={i} className="border-b pb-2">
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-lg font-medium">{s.ticker}</span>
                          <Badge className="ml-2">{s.sector}</Badge>
                          {s.dripEligible && <Badge variant="outline" className="ml-1">DRIP</Badge>}
                        </div>
                        <span className="font-semibold text-green-700">${s.projectedDividend.toFixed(2)}</span>
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        Yield: {s.yield.toFixed(2)}% | Payout Ratio: {s.payoutRatio}% | Score: {s.ottoScore}
                      </div>
                      {s.insight && (
                        <div className="flex items-center text-xs text-gray-500 mt-1">
                          <Info className="w-3 h-3 mr-1" />
                          <span>{s.insight}</span>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 font-semibold text-right text-blue-700">Total: ${total}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {dividendPlan.length > 0 && (
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-4">📊 Monthly Income Chart</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dividendPlan} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value: any) => `$${value}`} />
                <Bar dataKey="total" fill="#3B82F6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </main>
    </div>
  );
}
