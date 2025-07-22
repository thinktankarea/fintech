// utils/mockDividendStocks.ts

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

// ✅ Mock fallback data (used when no API data is available)
export const mockDividendStocks: DividendStock[] = [
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
