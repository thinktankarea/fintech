// /data/mockStocks.ts
import { OttoScore } from '@/utils/types';

export const mockStocks: OttoScore[] = [
  {
    ticker: 'AAPL',
    companyName: 'Apple Inc.',
    sector: 'Technology',
    score: 92,
    grade: 'A',
    ottosTask: 'Evaluate dividend stability',
    dividend: {
      yield: 0.55,
      frequency: 'Quarterly',
      payoutRatio: 15.5,
      growthRate: 5.2,
    },
    factors: {
      growth: 8.5,
      safety: 9.2,
      payout: 6.3,
      consistency: 7.9,
      valuation: 7.5,
    },
    modifiers: {
      sector: 1.2,
      momentum: 1.1,
      quality: 1.3,
    },
    beta: 1.2,
    marketCap: 2500000,
  },
  {
    ticker: 'MSFT',
    companyName: 'Microsoft Corporation',
    sector: 'Technology',
    score: 89,
    grade: 'A',
    ottosTask: 'Assess consistent dividends',
    dividend: {
      yield: 0.82,
      frequency: 'Quarterly',
      payoutRatio: 28.3,
      growthRate: 6.7,
    },
    factors: {
      growth: 9.1,
      safety: 9.0,
      payout: 7.0,
      consistency: 8.5,
      valuation: 8.0,
    },
    modifiers: {
      sector: 1.1,
      momentum: 1.3,
      quality: 1.4,
    },
    beta: 1.1,
    marketCap: 2300000,
  },
  {
    ticker: 'JNJ',
    companyName: 'Johnson & Johnson',
    sector: 'Healthcare',
    score: 85,
    grade: 'B',
    ottosTask: 'Monitor dividend yield',
    dividend: {
      yield: 2.5,
      frequency: 'Quarterly',
      payoutRatio: 50.4,
      growthRate: 4.5,
    },
    factors: {
      growth: 7.2,
      safety: 8.8,
      payout: 7.5,
      consistency: 8.0,
      valuation: 6.9,
    },
    modifiers: {
      sector: 1.0,
      momentum: 1.0,
      quality: 1.2,
    },
    beta: 0.9,
    marketCap: 450000,
  },
  {
    ticker: 'KO',
    companyName: 'Coca-Cola Company',
    sector: 'Consumer Staples',
    score: 81,
    grade: 'B',
    ottosTask: 'Track stable dividend payout',
    dividend: {
      yield: 3.1,
      frequency: 'Quarterly',
      payoutRatio: 78.0,
      growthRate: 3.1,
    },
    factors: {
      growth: 5.5,
      safety: 8.4,
      payout: 9.1,
      consistency: 8.9,
      valuation: 6.0,
    },
    modifiers: {
      sector: 0.9,
      momentum: 0.8,
      quality: 1.1,
    },
    beta: 0.6,
    marketCap: 280000,
  },
  {
    ticker: 'PG',
    companyName: 'Procter & Gamble Co.',
    sector: 'Consumer Staples',
    score: 79,
    grade: 'B',
    ottosTask: 'Analyze dividend growth',
    dividend: {
      yield: 2.3,
      frequency: 'Quarterly',
      payoutRatio: 61.2,
      growthRate: 4.0,
    },
    factors: {
      growth: 6.0,
      safety: 8.0,
      payout: 7.5,
      consistency: 8.7,
      valuation: 7.0,
    },
    modifiers: {
      sector: 1.0,
      momentum: 1.1,
      quality: 1.3,
    },
    beta: 0.7,
    marketCap: 340000,
  },
  {
    ticker: 'VZ',
    companyName: 'Verizon Communications Inc.',
    sector: 'Telecommunications',
    score: 74,
    grade: 'C',
    ottosTask: 'High-yield risk check',
    dividend: {
      yield: 6.5,
      frequency: 'Quarterly',
      payoutRatio: 85.0,
      growthRate: 1.8,
    },
    factors: {
      growth: 4.0,
      safety: 6.2,
      payout: 8.5,
      consistency: 7.0,
      valuation: 6.5,
    },
    modifiers: {
      sector: 0.8,
      momentum: 0.7,
      quality: 1.0,
    },
    beta: 0.9,
    marketCap: 220000,
  },
  {
    ticker: 'T',
    companyName: 'AT&T Inc.',
    sector: 'Telecommunications',
    score: 70,
    grade: 'C',
    ottosTask: 'Check dividend sustainability',
    dividend: {
      yield: 6.8,
      frequency: 'Quarterly',
      payoutRatio: 90.5,
      growthRate: 1.5,
    },
    factors: {
      growth: 3.5,
      safety: 5.9,
      payout: 8.7,
      consistency: 6.8,
      valuation: 6.2,
    },
    modifiers: {
      sector: 0.7,
      momentum: 0.6,
      quality: 0.9,
    },
    beta: 0.8,
    marketCap: 200000,
  },
  {
    ticker: 'XOM',
    companyName: 'Exxon Mobil Corporation',
    sector: 'Energy',
    score: 82,
    grade: 'B',
    ottosTask: 'Evaluate energy sector stability',
    dividend: {
      yield: 3.7,
      frequency: 'Quarterly',
      payoutRatio: 54.5,
      growthRate: 4.2,
    },
    factors: {
      growth: 7.0,
      safety: 7.8,
      payout: 7.4,
      consistency: 8.0,
      valuation: 7.1,
    },
    modifiers: {
      sector: 1.1,
      momentum: 1.2,
      quality: 1.1,
    },
    beta: 1.3,
    marketCap: 420000,
  },
  {
    ticker: 'CVX',
    companyName: 'Chevron Corporation',
    sector: 'Energy',
    score: 80,
    grade: 'B',
    ottosTask: 'Check dividend coverage',
    dividend: {
      yield: 4.0,
      frequency: 'Quarterly',
      payoutRatio: 60.0,
      growthRate: 3.8,
    },
    factors: {
      growth: 6.8,
      safety: 7.5,
      payout: 7.8,
      consistency: 7.5,
      valuation: 6.9,
    },
    modifiers: {
      sector: 1.1,
      momentum: 1.1,
      quality: 1.0,
    },
    beta: 1.2,
    marketCap: 410000,
  },
  {
    ticker: 'PEP',
    companyName: 'PepsiCo, Inc.',
    sector: 'Consumer Staples',
    score: 77,
    grade: 'B',
    ottosTask: 'Track payout consistency',
    dividend: {
      yield: 2.6,
      frequency: 'Quarterly',
      payoutRatio: 65.0,
      growthRate: 4.1,
    },
    factors: {
      growth: 6.3,
      safety: 8.0,
      payout: 7.3,
      consistency: 8.2,
      valuation: 6.8,
    },
    modifiers: {
      sector: 1.0,
      momentum: 0.9,
      quality: 1.2,
    },
    beta: 0.8,
    marketCap: 300000,
  },
];
