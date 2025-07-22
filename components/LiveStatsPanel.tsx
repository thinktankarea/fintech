'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { formatNumber } from '@/utils/format';
import { ArrowDown, ArrowUp, DollarSign, TrendingUp } from 'lucide-react';

interface LiveStat {
  name: string;
  close: string;
  percent_change: string;
  fifty_two_week: {
    high: string;
    low: string;
  };
  market_cap: number;
  dividend_yield: number;
  pe_ratio: number;
}

interface LiveStatsPanelProps {
  symbols: string[];
}

export default function LiveStatsPanel({ symbols }: LiveStatsPanelProps) {
  const [stats, setStats] = useState<Record<string, LiveStat>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      if (symbols.length === 0) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `https://api.twelvedata.com/quote?symbol=${symbols.join(',')}&apikey=${process.env.NEXT_PUBLIC_TWELVE_DATA_API_KEY}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch live stats');
        }
        const data = await response.json();
        setStats(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [symbols]);

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Live Market Stats</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Loading...</p>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Live Market Stats</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-red-500">{error}</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Live Market Stats</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(stats).map(([symbol, data]) => (
          <div key={symbol} className="p-4 border rounded-lg">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold">{data?.name} ({symbol})</h3>
              <Badge>{data?.percent_change}% {parseFloat(data?.percent_change) >= 0 ? <ArrowUp className="h-4 w-4 ml-1" /> : <ArrowDown className="h-4 w-4 ml-1" />}</Badge>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
              <div className="flex items-center"><DollarSign className="h-4 w-4 mr-1" /> Price: {data?.close}</div>
              <div className="flex items-center"><TrendingUp className="h-4 w-4 mr-1" /> 52w H/L: {data?.fifty_two_week?.high} / {data?.fifty_two_week?.low}</div>
              <div>Market Cap: {formatNumber(data?.market_cap)}</div>
              <div>Div Yield: {data?.dividend_yield}%</div>
              <div>P/E Ratio: {data?.pe_ratio}</div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}