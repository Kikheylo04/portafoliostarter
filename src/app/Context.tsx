"use client";
import React, { createContext, useReducer, useEffect } from "react";

interface ThemeState {
  darkMode: boolean;
}

type ThemeAction = { type: "toggle" };

interface ThemeContextValue {
  state: ThemeState;
  dispatch: React.Dispatch<ThemeAction>;
}

export const themeContext = createContext<ThemeContextValue>({
  state: { darkMode: true },
  dispatch: () => undefined,
});

const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
  switch (action.type) {
    case "toggle":
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

function getInitialDarkMode(): boolean {
  if (typeof window === "undefined") return true;
  const saved = localStorage.getItem("darkMode");
  if (saved !== null) return saved === "true";
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(themeReducer, { darkMode: true }, () => ({
    darkMode: getInitialDarkMode(),
  }));

  useEffect(() => {
    localStorage.setItem("darkMode", String(state.darkMode));
  }, [state.darkMode]);

  return (
    <themeContext.Provider value={{ state, dispatch }}>
      {children}
    </themeContext.Provider>
  );
}
