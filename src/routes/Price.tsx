import { useQuery } from "react-query";
import { fetchCoinTickers } from "../api";

interface ChartProps {
  coinId: string;
}

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}
function Price({ coinId }: ChartProps) {
  const {isLoading: tickerLaoding, data: tickersData}  = useQuery<PriceData>(
    ["tickers",coinId],
    () => fetchCoinTickers(coinId),
    {
      refetchInterval: 5000,
    }
  );
  const { isLoading, data } = useQuery<PriceData[]>(["ohlcv", coinId], () =>
  fetchCoinTickers(coinId)
);
console.log(data);
  return (
    <>
    {isLoading ? (
        "Loading chart..."
      ) :
      <>
      <p>ath_date : {tickersData?.quotes.USD.ath_date}</p>
      <p>ath_price : {tickersData?.quotes.USD.ath_price.toFixed(2)}</p>
      <p>price : {tickersData?.quotes.USD.price.toFixed(2)}</p>
      </>
    }
    </>
  )
}
  export default Price;