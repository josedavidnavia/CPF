import React, { createContext, useContext, useState } from "react";

interface PoemData {
  title: string;
  content: string;
  author: string;
}

interface PoemContextType {
  poemData: PoemData;
  updatePoemData: (key: keyof PoemData, value: string) => void;
  resetPoemData: () => void;
}

const defaultPoemData: PoemData = {
  title: "",
  content: "",
  author: "",
};

const PoemCreationContext = createContext<PoemContextType | undefined>(undefined);

export const PoemCreationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [poemData, setPoemData] = useState<PoemData>(defaultPoemData);

  const updatePoemData = (key: keyof PoemData, value: string) => {
    setPoemData((prev) => ({ ...prev, [key]: value }));
  };

  const resetPoemData = () => {
    setPoemData(defaultPoemData);
  };

  return (
    <PoemCreationContext.Provider value={{ poemData, updatePoemData, resetPoemData }}>
      {children}
    </PoemCreationContext.Provider>
  );
};

export const usePoemCreationContext = () => {
  const context = useContext(PoemCreationContext);
  if (!context) {
    throw new Error("usePoemCreationContext must be used within a PoemCreationProvider");
  }
  return context;
};
