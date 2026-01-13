import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from 'react';

export type ThemeMode = 'light' | 'dark';

export type ThemeColors = {
  background: string;
  backgroundAlt: string;
  card: string;
  cardAccent: string;
  primary: string;
  primarySoft: string;
  accentPink: string;
  accentOrange: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  textOnPrimary: string;
  borderSubtle: string;
  shadow: string;
  danger: string;
};

export type Theme = {
  mode: ThemeMode;
  colors: ThemeColors;
};

const lightColors: ThemeColors = {
  background: '#F6F4FB',
  backgroundAlt: '#F8F7FB',
  card: '#FFFFFF',
  cardAccent: '#F1E8FF',
  primary: '#7C3AED',
  primarySoft: '#A66CFF',
  accentPink: '#F4A9FF',
  accentOrange: '#FF9E7C',
  textPrimary: '#1E1B2E',
  textSecondary: '#5A4B7A',
  textMuted: '#9A96A8',
  textOnPrimary: '#FFFFFF',
  borderSubtle: '#EEE9F8',
  shadow: '#2D1D47',
  danger: '#AD2C45',
};

const darkColors: ThemeColors = {
  background: '#080612',
  backgroundAlt: '#0F0B22',
  card: '#17132B',
  cardAccent: '#211A3C',
  primary: '#A66CFF',
  primarySoft: '#C39BFF',
  accentPink: '#FF8AD4',
  accentOrange: '#FFB48A',
  textPrimary: '#FFFFFF',
  textSecondary: '#D0C5FF',
  textMuted: '#8E88A5',
  textOnPrimary: '#1B102E',
  borderSubtle: '#2C2446',
  shadow: '#000000',
  danger: '#F97A9A',
};

const createTheme = (mode: ThemeMode): Theme => ({
  mode,
  colors: mode === 'light' ? lightColors : darkColors,
});

type ThemeContextValue = {
  theme: Theme;
  mode: ThemeMode;
  toggleMode: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

type ThemeProviderProps = {
  initialMode?: ThemeMode;
  children: ReactNode;
};

export const ThemeProvider = ({
  initialMode = 'light',
  children,
}: ThemeProviderProps) => {
  const [mode, setMode] = useState<ThemeMode>(initialMode);

  const value = useMemo<ThemeContextValue>(() => {
    const theme = createTheme(mode);
    return {
      theme,
      mode,
      toggleMode: () => {
        setMode(prev => (prev === 'light' ? 'dark' : 'light'));
      },
    };
  }, [mode]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return ctx;
};
