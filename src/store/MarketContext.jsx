import { createContext, useEffect } from "react";
import MarketPlaceData from "../data/MarketPlaceData";

const MarketContext = createContext({});

export const MarketProvider = (props) => {
  const [MarketPlace, setMarketPlace] = useState(MarketPlaceData);

  useEffect(() => {
    setMarketPlace(MarketPlace);
  }, []);

  return (
    <MarketContext.Provider value={MarketPlace}>
      {props.children}
    </MarketContext.Provider>
  );
};

export default MarketContext;
