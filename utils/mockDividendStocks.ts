export interface DividendStock {
  ticker: string;
  price: number;
  annualDividend: number;
  yield: number;
  dripEligible: boolean;
  months: string[];
}

export const mockDividendStocks: DividendStock[] = [
  {
    ticker: 'AAPL',
    price: 175.00,
    annualDividend: 0.92,
    yield: 0.53,
    dripEligible: true,
    months: ['Feb', 'May', 'Aug', 'Nov'],
  },
  {
    ticker: 'JNJ',
    price: 165.00,
    annualDividend: 4.76,
    yield: 2.88,
    dripEligible: true,
    months: ['Mar', 'Jun', 'Sep', 'Dec'],
  },
  {
    ticker: 'KO',
    price: 60.00,
    annualDividend: 1.84,
    yield: 3.07,
    dripEligible: true,
    months: ['Jan', 'Apr', 'Jul', 'Oct'],
  },
];
