// utils/twelveData.ts
export async function fetchLiveStockData(symbols: string[]) {
  const joinedSymbols = symbols.join(',');
  const res = await fetch(`https://api.twelvedata.com/quote?symbol=${joinedSymbols}&apikey=${process.env.NEXT_PUBLIC_TWELVE_DATA_API_KEY}`);
  const data = await res.json();

  // If only one symbol, wrap in array for consistency
  if (!Array.isArray(data)) {
    return symbols.length === 1 ? [data] : Object.values(data);
  }

  return data;
}
