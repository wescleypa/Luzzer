'use client';
import { createTheme, ThemeOptions } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark', // Base escura para contrastar com as cores vibrantes
    primary: {
      main: '#FFCF47', // Amarelo/dourado principal
      light: '#FFE47A',
      dark: '#D4B43A',
      contrastText: '#000000',
    },
    secondary: {
      main: '#00BDDB', // Ciano/azul claro secundário
      light: '#33CBE5',
      dark: '#0099B3',
      contrastText: '#000000',
    },
    background: {
      default: '#0A0A0A', // Fundo preto suave (igual ao do Hero)
      paper: '#121212',   // Fundo para cards, modais, etc.
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.3)',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    success: {
      main: '#00BDDB', // Pode usar o secondary como sucesso, se fizer sentido
    },
    warning: {
      main: '#FFD957',
    },
    info: {
      main: '#00BDDB',
    },
    error: {
      main: '#f44336', // mantém padrão
    },
  },
  typography: {
    fontFamily: '"Inter", "Segoe UI", "Poppins", system-ui, sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 700,
    },
    button: {
      fontWeight: 600,
      textTransform: 'none', // Remove o uppercase automático dos botões
      letterSpacing: '0.02em',
    },
    overline: {
      fontWeight: 600,
      letterSpacing: '0.1em',
    },
  },
  shape: {
    borderRadius: 16, // Bordas arredondadas mais modernas
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(0,0,0,0.2)',
    '0px 4px 8px rgba(0,0,0,0.2)',
    '0px 8px 16px rgba(0,0,0,0.2)',
    '0px 12px 24px rgba(0,0,0,0.2)',
    '0px 16px 32px rgba(0,0,0,0.2)',
    '0px 20px 40px rgba(0,0,0,0.3)',
    '0px 24px 48px rgba(0,0,0,0.3)',
    '0px 28px 56px rgba(0,0,0,0.3)',
    '0px 32px 64px rgba(0,0,0,0.3)',
    '0px 36px 72px rgba(0,0,0,0.3)',
    '0px 40px 80px rgba(0,0,0,0.3)',
    '0px 44px 88px rgba(0,0,0,0.3)',
    '0px 48px 96px rgba(0,0,0,0.3)',
    '0px 52px 104px rgba(0,0,0,0.3)',
    '0px 56px 112px rgba(0,0,0,0.3)',
    '0px 60px 120px rgba(0,0,0,0.3)',
    '0px 64px 128px rgba(0,0,0,0.3)',
    '0px 68px 136px rgba(0,0,0,0.3)',
    '0px 72px 144px rgba(0,0,0,0.3)',
    '0px 76px 152px rgba(0,0,0,0.3)',
    '0px 80px 160px rgba(0,0,0,0.3)',
    '0px 84px 168px rgba(0,0,0,0.3)',
    '0px 88px 176px rgba(0,0,0,0.3)',
    '0px 92px 184px rgba(0,0,0,0.3)',
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 60,
          padding: '10px 24px',
          transition: 'all 0.2s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
          },
        },
        containedPrimary: {
          boxShadow: '0 8px 20px rgba(255, 217, 87, 0.2)',
          '&:hover': {
            boxShadow: '0 12px 28px rgba(255, 217, 87, 0.3)',
          },
        },
        outlinedSecondary: {
          borderColor: 'rgba(0, 189, 219, 0.5)',
          '&:hover': {
            borderColor: '#00BDDB',
            backgroundColor: 'rgba(0, 189, 219, 0.08)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#121212',
          borderRadius: 24,
          border: '1px solid rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(10px)',
          backgroundImage: 'none',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(10, 10, 10, 0.7)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255, 217, 87, 0.15)',
          boxShadow: 'none',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          fontWeight: 500,
        },
        colorPrimary: {
          backgroundColor: '#FFD95720',
          color: '#FFD957',
          borderColor: '#FFD95740',
        },
        colorSecondary: {
          backgroundColor: '#00BDDB20',
          color: '#00BDDB',
          borderColor: '#00BDDB40',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#FFD957',
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
            color: '#00BDDB',
          },
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
        },
        bar: {
          borderRadius: 10,
        },
      },
    },
  },
} as ThemeOptions);

export default theme;