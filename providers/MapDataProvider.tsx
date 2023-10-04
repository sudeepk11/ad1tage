"use client";

import { useContext, useState, createContext } from "react";

const mapDataContext = createContext(null);

export const MapDataProvider = ({ children }) => {
  const [mapData, setMapData] = useState(null);

  return (
    <mapDataContext.Provider value={{ mapData, setMapData }}>
      {children}
    </mapDataContext.Provider>
  );
};

export const useMapData = () => useContext(mapDataContext);
