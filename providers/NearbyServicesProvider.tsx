"use client";
import React, { createContext, useContext, useState } from "react";
import { Service } from "../types/services";

const NearbyServicesContext = createContext(null);

export const NearbyServicesProvider = ({ children }) => {
  const [nearbyServices, setNearbyServices] = useState<Service[]>(null);
  return (
    <NearbyServicesContext.Provider
      value={{ nearbyServices, setNearbyServices }}
    >
      {children}
    </NearbyServicesContext.Provider>
  );
};

export const useNearbyServices = () => useContext(NearbyServicesContext);
