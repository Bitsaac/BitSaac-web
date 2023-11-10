"use client";
import React, { useState, createContext } from "react";

export type NavContextType = {
  isNavShowing: boolean;
  more: boolean;
  setMore: (value: boolean) => void;
  handleToggleNav: () => void;
  setIsNavShowing: (value: boolean) => void;
};

type NavContextProviderProps = {
  children: React.ReactNode;
};

export const NavContext = createContext<NavContextType | null>(null);

export const NavContextProvider = ({ children }: NavContextProviderProps) => {
  const [isNavShowing, setIsNavShowing] = useState<boolean>(false);
  const [more, setMore] = useState<boolean>(false);

  const handleToggleNav = () => {
    setIsNavShowing((prev) => !prev);
    setMore(false);
  };

  return (
    <NavContext.Provider
      value={{
        isNavShowing,
        more,
        setMore,
        setIsNavShowing,
        handleToggleNav,
      }}
    >
      {children}
    </NavContext.Provider>
  );
};
