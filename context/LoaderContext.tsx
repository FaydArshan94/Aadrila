"use client";
import { createContext, useContext, useState } from "react";

type LoaderContextType = {
  isLoading: boolean;
  setIsLoading: (v: boolean) => void;
};

const LoaderContext = createContext<LoaderContextType | null>(null);

export const LoaderProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => {
  const ctx = useContext(LoaderContext);
  if (!ctx) throw new Error("useLoader must be used inside LoaderProvider");
  return ctx;
};
