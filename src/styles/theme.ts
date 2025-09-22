export const theme = {
  colors: {
    primary: '#CC5500', // Dark orange
    primaryDark: '#AA4400',
    primaryLight: '#FF6600',
    secondary: '#1A1A1A', // Black
    secondaryDark: '#000000',
    secondaryLight: '#333333',
    white: '#FFFFFF',
    gray: {
      light: '#F5F5F5',
      medium: '#CCCCCC',
      dark: '#666666',
    },
    success: '#4CAF50',
    error: '#F44336',
    warning: '#FFC107',
  },
  fonts: {
    primary: "'Rye', 'Fredoka One', 'Georgia', serif",
    heading: "'Rye', 'Bebas Neue', 'Impact', serif",
    footer: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1440px',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '16px',
    round: '50%',
  },
  shadows: {
    sm: '0 2px 4px rgba(0, 0, 0, 0.1)',
    md: '0 4px 8px rgba(0, 0, 0, 0.15)',
    lg: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
  transitions: {
    fast: '0.2s ease-in-out',
    normal: '0.3s ease-in-out',
    slow: '0.5s ease-in-out',
  },
};

export type Theme = typeof theme;