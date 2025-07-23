// // import { OttoScore, CalendarStock } from './types';

// // export const mockStocks: OttoScore[] = [
// //   {
// //     ticker: 'AAPL',
// //     companyName: 'Apple Inc.',
// //     score: 87,
// //     grade: 'A',
// //     ottosTask: 'Apple shows strong fundamentals with consistent dividend growth, though yield remains modest. Excellent for growth-focused dividend portfolios.',
// //     dividend: {
// //       yield: 2.1,
// //       frequency: 'Quarterly',
// //       payoutRatio: 25,
// //       growthRate: 12.5
// //     },
// //     factors: {
// //       growth: 92,
// //       safety: 88,
// //       payout: 95,
// //       consistency: 85,
// //       valuation: 75
// //     },
// //     modifiers: {
// //       sector: 5,
// //       momentum: 8,
// //       quality: 10
// //     },
// //     sector: 'Technology',
// //     beta: 1.15,
// //     marketCap: 3200000000000
// //   },
// //   {
// //     ticker: 'MSFT',
// //     companyName: 'Microsoft Corporation',
// //     score: 91,
// //     grade: 'A+',
// //     ottosTask: 'Microsoft demonstrates exceptional dividend reliability with strong balance sheet. A cornerstone holding for conservative dividend investors.',
// //     dividend: {
// //       yield: 2.8,
// //       frequency: 'Quarterly',
// //       payoutRatio: 35,
// //       growthRate: 15.2
// //     },
// //     factors: {
// //       growth: 88,
// //       safety: 95,
// //       payout: 90,
// //       consistency: 92,
// //       valuation: 82
// //     },
// //     modifiers: {
// //       sector: 8,
// //       momentum: 6,
// //       quality: 10
// //     },
// //     sector: 'Technology',
// //     beta: 0.95,
// //     marketCap: 2800000000000
// //   },
// //   {
// //     ticker: 'JNJ',
// //     companyName: 'Johnson & Johnson',
// //     score: 85,
// //     grade: 'A-',
// //     ottosTask: 'J&J offers defensive characteristics with 60+ years of dividend increases. Ideal for risk-averse investors seeking stability.',
// //     dividend: {
// //       yield: 3.2,
// //       frequency: 'Quarterly',
// //       payoutRatio: 45,
// //       growthRate: 5.8
// //     },
// //     factors: {
// //       growth: 75,
// //       safety: 95,
// //       payout: 88,
// //       consistency: 98,
// //       valuation: 85
// //     },
// //     modifiers: {
// //       sector: 3,
// //       momentum: -2,
// //       quality: 9
// //     },
// //     sector: 'Healthcare',
// //     beta: 0.68,
// //     marketCap: 450000000000
// //   },
// //   {
// //     ticker: 'REALTY',
// //     companyName: 'Realty Income Corp',
// //     score: 79,
// //     grade: 'B+',
// //     ottosTask: 'The Monthly Dividend Company offers attractive yield with solid real estate fundamentals. Great for income-focused portfolios.',
// //     dividend: {
// //       yield: 5.8,
// //       frequency: 'Monthly',
// //       payoutRatio: 75,
// //       growthRate: 3.2
// //     },
// //     factors: {
// //       growth: 65,
// //       safety: 82,
// //       payout: 78,
// //       consistency: 88,
// //       valuation: 75
// //     },
// //     modifiers: {
// //       sector: 0,
// //       momentum: 2,
// //       quality: 7
// //     },
// //     sector: 'REITs',
// //     beta: 0.72,
// //     marketCap: 85000000000
// //   },
// //   {
// //     ticker: 'SCHD',
// //     companyName: 'Schwab US Dividend Equity ETF',
// //     score: 83,
// //     grade: 'A-',
// //     ottosTask: 'Excellent diversified dividend ETF with low fees and strong track record. Perfect core holding for dividend portfolios.',
// //     dividend: {
// //       yield: 3.6,
// //       frequency: 'Quarterly',
// //       payoutRatio: 65,
// //       growthRate: 8.5
// //     },
// //     factors: {
// //       growth: 78,
// //       safety: 90,
// //       payout: 85,
// //       consistency: 82,
// //       valuation: 88
// //     },
// //     modifiers: {
// //       sector: 5,
// //       momentum: 4,
// //       quality: 8
// //     },
// //     sector: 'ETFs',
// //     beta: 1.02,
// //     marketCap: 65000000000
// //   }
// // ];

// // export const calendarStocks: CalendarStock[] = [
// //   {
// //     ticker: 'AAPL',
// //     companyName: 'Apple Inc.',
// //     score: 87,
// //     yield: 2.1,
// //     paymentMonths: [3, 6, 9, 12]
// //   },
// //   {
// //     ticker: 'MSFT',
// //     companyName: 'Microsoft Corporation',
// //     score: 91,
// //     yield: 2.8,
// //     paymentMonths: [2, 5, 8, 11]
// //   },
// //   {
// //     ticker: 'JNJ',
// //     companyName: 'Johnson & Johnson',
// //     score: 85,
// //     yield: 3.2,
// //     paymentMonths: [1, 4, 7, 10]
// //   }
// // ];
// // OttoScore Mock Data

// export const mockStocks = [
//   {
//     ticker: "STK1",
//     companyName: "Mock Company 1",
//     score: 93,
//     grade: "A+",
//     ottosTask: "Mock Company 1 offers a solid dividend profile for investors with focus on Technology fundamentals.",
//     dividend: {
//       yield: 0.7,
//       frequency: "Quarterly",
//       payoutRatio: 28,
//       growthRate: 12.1
//     },
//     factors: {
//       growth: 90,
//       safety: 94,
//       payout: 86,
//       consistency: 85,
//       valuation: 78
//     },
//     modifiers: {
//       sector: 4,
//       momentum: 5,
//       quality: 9
//     },
//     sector: "Technology",
//     beta: 1.12,
//     marketCap: 1200000000000
//   },
//   {
//     ticker: "STK2",
//     companyName: "Mock Company 2",
//     score: 84,
//     grade: "A",
//     ottosTask: "Mock Company 2 offers a solid dividend profile for investors with focus on Healthcare fundamentals.",
//     dividend: {
//       yield: 2.0,
//       frequency: "Quarterly",
//       payoutRatio: 45,
//       growthRate: 7.4
//     },
//     factors: {
//       growth: 80,
//       safety: 88,
//       payout: 80,
//       consistency: 78,
//       valuation: 85
//     },
//     modifiers: {
//       sector: 3,
//       momentum: 4,
//       quality: 8
//     },
//     sector: "Healthcare",
//     beta: 0.88,
//     marketCap: 580000000000
//   },
//   {
//     ticker: "STK3",
//     companyName: "Mock Company 3",
//     score: 75,
//     grade: "B+",
//     ottosTask: "Mock Company 3 offers a solid dividend profile for investors with focus on Telecom fundamentals.",
//     dividend: {
//       yield: 4.9,
//       frequency: "Quarterly",
//       payoutRatio: 65,
//       growthRate: 4.3
//     },
//     factors: {
//       growth: 72,
//       safety: 78,
//       payout: 75,
//       consistency: 72,
//       valuation: 70
//     },
//     modifiers: {
//       sector: 2,
//       momentum: -1,
//       quality: 6
//     },
//     sector: "Telecom",
//     beta: 0.72,
//     marketCap: 180000000000
//   },
//   {
//     ticker: "STK4",
//     companyName: "Mock Company 4",
//     score: 88,
//     grade: "A",
//     ottosTask: "Mock Company 4 offers a solid dividend profile for investors with focus on Energy fundamentals.",
//     dividend: {
//       yield: 3.5,
//       frequency: "Quarterly",
//       payoutRatio: 55,
//       growthRate: 6.5
//     },
//     factors: {
//       growth: 82,
//       safety: 86,
//       payout: 80,
//       consistency: 84,
//       valuation: 77
//     },
//     modifiers: {
//       sector: 2,
//       momentum: 2,
//       quality: 7
//     },
//     sector: "Energy",
//     beta: 1.02,
//     marketCap: 320000000000
//   },
//   {
//     ticker: "STK5",
//     companyName: "Mock Company 5",
//     score: 89,
//     grade: "A",
//     ottosTask: "Mock Company 5 offers a solid dividend profile for investors with focus on Utilities fundamentals.",
//     dividend: {
//       yield: 4.1,
//       frequency: "Quarterly",
//       payoutRatio: 60,
//       growthRate: 5.4
//     },
//     factors: {
//       growth: 75,
//       safety: 89,
//       payout: 85,
//       consistency: 83,
//       valuation: 72
//     },
//     modifiers: {
//       sector: 1,
//       momentum: 3,
//       quality: 8
//     },
//     sector: "Utilities",
//     beta: 0.95,
//     marketCap: 260000000000
//   },
//   {
//     ticker: "STK6",
//     companyName: "Mock Company 6",
//     score: 81,
//     grade: "A-",
//     ottosTask: "Mock Company 6 offers a balanced dividend payout with consistent performance in Consumer Staples.",
//     dividend: {
//       yield: 2.4,
//       frequency: "Quarterly",
//       payoutRatio: 40,
//       growthRate: 6.9
//     },
//     factors: {
//       growth: 77,
//       safety: 85,
//       payout: 78,
//       consistency: 82,
//       valuation: 80
//     },
//     modifiers: {
//       sector: 2,
//       momentum: 3,
//       quality: 7
//     },
//     sector: "Consumer Staples",
//     beta: 0.90,
//     marketCap: 300000000000
//   },
//   {
//     ticker: "STK7",
//     companyName: "Mock Company 7",
//     score: 87,
//     grade: "A",
//     ottosTask: "Mock Company 7 provides strong dividend growth opportunities within Technology sector.",
//     dividend: {
//       yield: 1.5,
//       frequency: "Quarterly",
//       payoutRatio: 35,
//       growthRate: 10.5
//     },
//     factors: {
//       growth: 91,
//       safety: 88,
//       payout: 85,
//       consistency: 80,
//       valuation: 76
//     },
//     modifiers: {
//       sector: 3,
//       momentum: 4,
//       quality: 9
//     },
//     sector: "Technology",
//     beta: 1.05,
//     marketCap: 850000000000
//   },
//   {
//     ticker: "STK8",
//     companyName: "Mock Company 8",
//     score: 79,
//     grade: "B+",
//     ottosTask: "Mock Company 8 offers attractive yield and is stable in REITs sector.",
//     dividend: {
//       yield: 5.2,
//       frequency: "Monthly",
//       payoutRatio: 70,
//       growthRate: 4.1
//     },
//     factors: {
//       growth: 70,
//       safety: 82,
//       payout: 76,
//       consistency: 85,
//       valuation: 74
//     },
//     modifiers: {
//       sector: 1,
//       momentum: 2,
//       quality: 7
//     },
//     sector: "REITs",
//     beta: 0.78,
//     marketCap: 95000000000
//   },
//   {
//     ticker: "STK9",
//     companyName: "Mock Company 9",
//     score: 90,
//     grade: "A",
//     ottosTask: "Mock Company 9 is a leading dividend payer with strong fundamentals in Industrials.",
//     dividend: {
//       yield: 3.1,
//       frequency: "Quarterly",
//       payoutRatio: 50,
//       growthRate: 7.8
//     },
//     factors: {
//       growth: 85,
//       safety: 90,
//       payout: 83,
//       consistency: 87,
//       valuation: 82
//     },
//     modifiers: {
//       sector: 3,
//       momentum: 5,
//       quality: 8
//     },
//     sector: "Industrials",
//     beta: 0.92,
//     marketCap: 280000000000
//   },
//   {
//     ticker: "STK10",
//     companyName: "Mock Company 10",
//     score: 82,
//     grade: "A-",
//     ottosTask: "Mock Company 10 is a strong dividend ETF providing diversification.",
//     dividend: {
//       yield: 3.8,
//       frequency: "Quarterly",
//       payoutRatio: 60,
//       growthRate: 8.0
//     },
//     factors: {
//       growth: 78,
//       safety: 85,
//       payout: 80,
//       consistency: 80,
//       valuation: 79
//     },
//     modifiers: {
//       sector: 2,
//       momentum: 4,
//       quality: 8
//     },
//     sector: "ETFs",
//     beta: 1.00,
//     marketCap: 70000000000
//   },
//   // STK11 to STK26
//   {
//     ticker: "STK11",
//     companyName: "Mock Company 11",
//     score: 85,
//     grade: "A-",
//     ottosTask: "Mock Company 11 has consistent dividend payments and growth in Retail.",
//     dividend: {
//       yield: 2.5,
//       frequency: "Quarterly",
//       payoutRatio: 45,
//       growthRate: 6.0
//     },
//     factors: {
//       growth: 82,
//       safety: 88,
//       payout: 83,
//       consistency: 85,
//       valuation: 78
//     },
//     modifiers: {
//       sector: 2,
//       momentum: 4,
//       quality: 8
//     },
//     sector: "Retail",
//     beta: 0.95,
//     marketCap: 250000000000
//   },
//   {
//     ticker: "STK12",
//     companyName: "Mock Company 12",
//     score: 91,
//     grade: "A+",
//     ottosTask: "Mock Company 12 demonstrates exceptional dividend reliability in Technology.",
//     dividend: {
//       yield: 1.2,
//       frequency: "Quarterly",
//       payoutRatio: 30,
//       growthRate: 11.0
//     },
//     factors: {
//       growth: 93,
//       safety: 90,
//       payout: 88,
//       consistency: 85,
//       valuation: 82
//     },
//     modifiers: {
//       sector: 4,
//       momentum: 5,
//       quality: 9
//     },
//     sector: "Technology",
//     beta: 1.10,
//     marketCap: 1000000000000
//   },
//   {
//     ticker: "STK13",
//     companyName: "Mock Company 13",
//     score: 78,
//     grade: "B+",
//     ottosTask: "Mock Company 13 offers a moderate dividend yield with stability in Utilities.",
//     dividend: {
//       yield: 4.3,
//       frequency: "Quarterly",
//       payoutRatio: 65,
//       growthRate: 4.9
//     },
//     factors: {
//       growth: 70,
//       safety: 82,
//       payout: 79,
//       consistency: 84,
//       valuation: 76
//     },
//     modifiers: {
//       sector: 1,
//       momentum: 2,
//       quality: 7
//     },
//     sector: "Utilities",
//     beta: 0.88,
//     marketCap: 180000000000
//   },
//   {
//     ticker: "STK14",
//     companyName: "Mock Company 14",
//     score: 86,
//     grade: "A",
//     ottosTask: "Mock Company 14 delivers growth-oriented dividends with Consumer Staples focus.",
//     dividend: {
//       yield: 1.9,
//       frequency: "Quarterly",
//       payoutRatio: 35,
//       growthRate: 9.2
//     },
//     factors: {
//       growth: 88,
//       safety: 86,
//       payout: 84,
//       consistency: 82,
//       valuation: 79
//     },
//     modifiers: {
//       sector: 2,
//       momentum: 3,
//       quality: 8
//     },
//     sector: "Consumer Staples",
//     beta: 0.92,
//     marketCap: 290000000000
//   },
//   {
//     ticker: "STK15",
//     companyName: "Mock Company 15",
//     score: 80,
//     grade: "A-",
//     ottosTask: "Mock Company 15 offers stable dividends in the Industrials sector.",
//     dividend: {
//       yield: 2.9,
//       frequency: "Quarterly",
//       payoutRatio: 50,
//       growthRate: 7.0
//     },
//     factors: {
//       growth: 76,
//       safety: 82,
//       payout: 80,
//       consistency: 79,
//       valuation: 75
//     },
//     modifiers: {
//       sector: 2,
//       momentum: 3,
//       quality: 7
//     },
//     sector: "Industrials",
//     beta: 0.94,
//     marketCap: 200000000000
//   },
//   {
//     ticker: "STK16",
//     companyName: "Mock Company 16",
//     score: 77,
//     grade: "B+",
//     ottosTask: "Mock Company 16 provides high yield with Telecom exposure.",
//     dividend: {
//       yield: 5.0,
//       frequency: "Quarterly",
//       payoutRatio: 70,
//       growthRate: 3.9
//     },
//     factors: {
//       growth: 65,
//       safety: 78,
//       payout: 74,
//       consistency: 76,
//       valuation: 72
//     },
//     modifiers: {
//       sector: 1,
//       momentum: 1,
//       quality: 6
//     },
//     sector: "Telecom",
//     beta: 0.70,
//     marketCap: 90000000000
//   },
//   {
//     ticker: "STK17",
//     companyName: "Mock Company 17",
//     score: 83,
//     grade: "A-",
//     ottosTask: "Mock Company 17 focuses on growth and steady payouts in Energy.",
//     dividend: {
//       yield: 3.3,
//       frequency: "Quarterly",
//       payoutRatio: 55,
//       growthRate: 6.2
//     },
//     factors: {
//       growth: 80,
//       safety: 84,
//       payout: 79,
//       consistency: 82,
//       valuation: 78
//     },
//     modifiers: {
//       sector: 3,
//       momentum: 3,
//       quality: 8
//     },
//     sector: "Energy",
//     beta: 1.05,
//     marketCap: 230000000000
//   },
//   {
//     ticker: "STK18",
//     companyName: "Mock Company 18",
//     score: 88,
//     grade: "A",
//     ottosTask: "Mock Company 18 excels in ETF dividend distribution.",
//     dividend: {
//       yield: 3.9,
//       frequency: "Quarterly",
//       payoutRatio: 60,
//       growthRate: 8.1
//     },
//     factors: {
//       growth: 82,
//       safety: 89,
//       payout: 85,
//       consistency: 81,
//       valuation: 79
//     },
//     modifiers: {
//       sector: 2,
//       momentum: 4,
//       quality: 8
//     },
//     sector: "ETFs",
//     beta: 1.02,
//     marketCap: 75000000000
//   },
//   {
//     ticker: "STK19",
//     companyName: "Mock Company 19",
//     score: 79,
//     grade: "B+",
//     ottosTask: "Mock Company 19 provides consistent income within Retail sector.",
//     dividend: {
//       yield: 2.6,
//       frequency: "Quarterly",
//       payoutRatio: 45,
//       growthRate: 5.9
//     },
//     factors: {
//       growth: 75,
//       safety: 82,
//       payout: 80,
//       consistency: 79,
//       valuation: 76
//     },
//     modifiers: {
//       sector: 2,
//       momentum: 3,
//       quality: 7
//     },
//     sector: "Retail",
//     beta: 0.90,
//     marketCap: 195000000000
//   },
//   {
//     ticker: "STK20",
//     companyName: "Mock Company 20",
//     score: 92,
//     grade: "A+",
//     ottosTask: "Mock Company 20 demonstrates high quality dividend performance in Technology.",
//     dividend: {
//       yield: 1.0,
//       frequency: "Quarterly",
//       payoutRatio: 25,
//       growthRate: 11.2
//     },
//     factors: {
//       growth: 94,
//       safety: 91,
//       payout: 88,
//       consistency: 86,
//       valuation: 82
//     },
//     modifiers: {
//       sector: 4,
//       momentum: 6,
//       quality: 9
//     },
//     sector: "Technology",
//     beta: 1.12,
//     marketCap: 1150000000000
//   },
//   {
//     ticker: "STK21",
//     companyName: "Mock Company 21",
//     score: 81,
//     grade: "A-",
//     ottosTask: "Mock Company 21 delivers stable dividends within Utilities sector.",
//     dividend: {
//       yield: 3.8,
//       frequency: "Quarterly",
//       payoutRatio: 60,
//       growthRate: 5.2
//     },
//     factors: {
//       growth: 72,
//       safety: 88,
//       payout: 82,
//       consistency: 83,
//       valuation: 77
//     },
//     modifiers: {
//       sector: 1,
//       momentum: 2,
//       quality: 7
//     },
//     sector: "Utilities",
//     beta: 0.86,
//     marketCap: 165000000000
//   },
//   {
//     ticker: "STK22",
//     companyName: "Mock Company 22",
//     score: 85,
//     grade: "A-",
//     ottosTask: "Mock Company 22 is a consumer-focused dividend grower.",
//     dividend: {
//       yield: 2.2,
//       frequency: "Quarterly",
//       payoutRatio: 38,
//       growthRate: 7.3
//     },
//     factors: {
//       growth: 80,
//       safety: 84,
//       payout: 78,
//       consistency: 80,
//       valuation: 78
//     },
//     modifiers: {
//       sector: 2,
//       momentum: 3,
//       quality: 8
//     },
//     sector: "Consumer Staples",
//     beta: 0.94,
//     marketCap: 210000000000
//   },
//   {
//     ticker: "STK23",
//     companyName: "Mock Company 23",
//     score: 83,
//     grade: "A-",
//     ottosTask: "Mock Company 23 offers stable dividends in Industrials.",
//     dividend: {
//       yield: 3.0,
//       frequency: "Quarterly",
//       payoutRatio: 50,
//       growthRate: 6.6
//     },
//     factors: {
//       growth: 78,
//       safety: 83,
//       payout: 80,
//       consistency: 81,
//       valuation: 75
//     },
//     modifiers: {
//       sector: 2,
//       momentum: 3,
//       quality: 7
//     },
//     sector: "Industrials",
//     beta: 0.91,
// marketCap: 175000000000
// },
// {
// ticker: "STK24",
// companyName: "Mock Company 24",
// score: 86,
// grade: "A",
// ottosTask: "Mock Company 24 gives high dividend yield in Telecom.",
// dividend: {
// yield: 5.5,
// frequency: "Quarterly",
// payoutRatio: 68,
// growthRate: 4.5
// },
// factors: {
// growth: 73,
// safety: 86,
// payout: 82,
// consistency: 80,
// valuation: 76
// },
// modifiers: {
// sector: 2,
// momentum: 2,
// quality: 7
// },
// sector: "Telecom",
// beta: 0.72,
// marketCap: 125000000000
// },
// {
// ticker: "STK25",
// companyName: "Mock Company 25",
// score: 90,
// grade: "A+",
// ottosTask: "Mock Company 25 provides ETF growth and reliable income.",
// dividend: {
// yield: 3.7,
// frequency: "Quarterly",
// payoutRatio: 60,
// growthRate: 8.3
// },
// factors: {
// growth: 85,
// safety: 90,
// payout: 83,
// consistency: 85,
// valuation: 81
// },
// modifiers: {
// sector: 3,
// momentum: 4,
// quality: 8
// },
// sector: "ETFs",
// beta: 0.98,
// marketCap: 68000000000
// },
// {
// ticker: "STK26",
// companyName: "Mock Company 26",
// score: 78,
// grade: "B+",
// ottosTask: "Mock Company 26 offers stable income for Retail investors.",
// dividend: {
// yield: 2.8,
// frequency: "Quarterly",
// payoutRatio: 48,
// growthRate: 6.4
// },
// factors: {
// growth: 74,
// safety: 80,
// payout: 77,
// consistency: 79,
// valuation: 74
// },
// modifiers: {
// sector: 2,
// momentum: 2,
// quality: 7
// },
// sector: "Retail",
// beta: 0.93,
// marketCap: 160000000000
// }
// ];
// D:\Projects WA\Fintech-Update\draft-half\utils\mockData.ts
import { OttoScore } from '@/utils/types';

export const mockStocks: OttoScore[] = [
  {
    ticker: 'AAPL',
    companyName: 'Apple Inc.',
    sector: 'Technology',
    score: 92,
    grade: 'A',
    ottosTask: 'Evaluate dividend stability',
    dividend: { yield: 0.55, frequency: 'Quarterly', payoutRatio: 15.5, growthRate: 5.2 },
    factors: { growth: 8.5, safety: 9.2, payout: 6.3, consistency: 7.9, valuation: 7.5 },
    modifiers: { sector: 1.2, momentum: 1.1, quality: 1.3 },
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
    dividend: { yield: 0.82, frequency: 'Quarterly', payoutRatio: 28.3, growthRate: 6.7 },
    factors: { growth: 9.1, safety: 9.0, payout: 7.0, consistency: 8.5, valuation: 8.0 },
    modifiers: { sector: 1.1, momentum: 1.3, quality: 1.4 },
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
    dividend: { yield: 2.5, frequency: 'Quarterly', payoutRatio: 50.4, growthRate: 4.5 },
    factors: { growth: 7.2, safety: 8.8, payout: 7.5, consistency: 8.0, valuation: 6.9 },
    modifiers: { sector: 1.0, momentum: 1.0, quality: 1.2 },
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
    dividend: { yield: 3.1, frequency: 'Quarterly', payoutRatio: 78.0, growthRate: 3.1 },
    factors: { growth: 5.5, safety: 8.4, payout: 9.1, consistency: 8.9, valuation: 6.0 },
    modifiers: { sector: 0.9, momentum: 0.8, quality: 1.1 },
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
    dividend: { yield: 2.3, frequency: 'Quarterly', payoutRatio: 61.2, growthRate: 4.0 },
    factors: { growth: 6.0, safety: 8.0, payout: 7.5, consistency: 8.7, valuation: 7.0 },
    modifiers: { sector: 1.0, momentum: 1.1, quality: 1.3 },
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
    dividend: { yield: 6.5, frequency: 'Quarterly', payoutRatio: 85.0, growthRate: 1.8 },
    factors: { growth: 4.0, safety: 6.2, payout: 8.5, consistency: 7.0, valuation: 6.5 },
    modifiers: { sector: 0.8, momentum: 0.7, quality: 1.0 },
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
    dividend: { yield: 6.8, frequency: 'Quarterly', payoutRatio: 90.5, growthRate: 1.5 },
    factors: { growth: 3.5, safety: 5.9, payout: 8.7, consistency: 6.8, valuation: 6.2 },
    modifiers: { sector: 0.7, momentum: 0.6, quality: 0.9 },
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
    dividend: { yield: 3.7, frequency: 'Quarterly', payoutRatio: 54.5, growthRate: 4.2 },
    factors: { growth: 7.0, safety: 7.8, payout: 7.4, consistency: 8.0, valuation: 7.1 },
    modifiers: { sector: 1.1, momentum: 1.2, quality: 1.1 },
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
    dividend: { yield: 4.0, frequency: 'Quarterly', payoutRatio: 60.0, growthRate: 3.8 },
    factors: { growth: 6.8, safety: 7.5, payout: 7.8, consistency: 7.5, valuation: 6.9 },
    modifiers: { sector: 1.1, momentum: 1.1, quality: 1.0 },
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
    dividend: { yield: 2.6, frequency: 'Quarterly', payoutRatio: 65.0, growthRate: 4.1 },
    factors: { growth: 6.3, safety: 8.0, payout: 7.3, consistency: 8.2, valuation: 6.8 },
    modifiers: { sector: 1.0, momentum: 0.9, quality: 1.2 },
    beta: 0.8,
    marketCap: 300000,
  },

  // 🔽 16 New Stocks Added Here
  {
    ticker: 'NVDA',
    companyName: 'NVIDIA Corporation',
    sector: 'Technology',
    score: 94,
    grade: 'A+',
    ottosTask: 'Track aggressive growth',
    dividend: { yield: 0.10, frequency: 'Quarterly', payoutRatio: 5.1, growthRate: 10.2 },
    factors: { growth: 10.0, safety: 9.1, payout: 4.0, consistency: 7.0, valuation: 8.2 },
    modifiers: { sector: 1.5, momentum: 1.5, quality: 1.5 },
    beta: 1.7,
    marketCap: 2800000,
  },
  {
    ticker: 'GOOGL',
    companyName: 'Alphabet Inc.',
    sector: 'Technology',
    score: 90,
    grade: 'A',
    ottosTask: 'Focus on reinvestment strength',
    dividend: { yield: 0.0, frequency: 'None', payoutRatio: 0.0, growthRate: 0.0 },
    factors: { growth: 9.5, safety: 9.3, payout: 0.0, consistency: 8.8, valuation: 8.7 },
    modifiers: { sector: 1.3, momentum: 1.2, quality: 1.5 },
    beta: 1.1,
    marketCap: 1800000,
  },
  {
    ticker: 'AMZN',
    companyName: 'Amazon.com Inc.',
    sector: 'Consumer Discretionary',
    score: 87,
    grade: 'B+',
    ottosTask: 'Assess future dividend potential',
    dividend: { yield: 0.0, frequency: 'None', payoutRatio: 0.0, growthRate: 0.0 },
    factors: { growth: 9.2, safety: 8.4, payout: 0.0, consistency: 8.1, valuation: 8.5 },
    modifiers: { sector: 1.2, momentum: 1.4, quality: 1.5 },
    beta: 1.4,
    marketCap: 1600000,
  },
  {
    ticker: 'META',
    companyName: 'Meta Platforms, Inc.',
    sector: 'Technology',
    score: 88,
    grade: 'B+',
    ottosTask: 'Evaluate monetization trends',
    dividend: { yield: 0.0, frequency: 'None', payoutRatio: 0.0, growthRate: 0.0 },
    factors: { growth: 9.3, safety: 8.2, payout: 0.0, consistency: 8.4, valuation: 8.1 },
    modifiers: { sector: 1.3, momentum: 1.5, quality: 1.4 },
    beta: 1.3,
    marketCap: 1500000,
  },

  // ✨ Add 12 more companies like J.P. Morgan, Intel, Adobe, etc., if needed.
];
