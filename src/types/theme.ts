import { createTheme, Theme } from "@mui/material/styles";

// Define custom color palette for the pet store theme
const petStoreColors = {
  primary: {
    light: "#81C784",
    main: "#4CAF50",
    dark: "#388E3C",
    contrastText: "#FFFFFF",
  },
  secondary: {
    light: "#FFB74D",
    main: "#FF9800",
    dark: "#F57C00",
    contrastText: "#000000",
  },
  background: {
    default: "#FAFAFA",
    paper: "#FFFFFF",
    light: "#F5F5F5",
  },
  text: {
    primary: "#212121",
    secondary: "#757575",
    light: "#BDBDBD",
  },
  success: {
    light: "#C8E6C9",
    main: "#66BB6A",
    dark: "#2E7D32",
  },
  warning: {
    light: "#FFE0B2",
    main: "#FFA726",
    dark: "#E65100",
  },
  error: {
    light: "#FFCDD2",
    main: "#F44336",
    dark: "#C62828",
  },
  info: {
    light: "#B3E5FC",
    main: "#29B6F6",
    dark: "#0277BD",
  },
};

// Create the main theme
export const petStoreTheme: Theme = createTheme({
  palette: {
    mode: "light",
    primary: petStoreColors.primary,
    secondary: petStoreColors.secondary,
    background: {
      default: petStoreColors.background.default,
      paper: petStoreColors.background.paper,
    },
    text: {
      primary: petStoreColors.text.primary,
      secondary: petStoreColors.text.secondary,
    },
    success: petStoreColors.success,
    warning: petStoreColors.warning,
    error: petStoreColors.error,
    info: petStoreColors.info,
  },
  typography: {
    fontFamily: [
      "Inter",
      "Roboto",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
    h1: {
      fontSize: "2.5rem",
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: "1.125rem",
      fontWeight: 600,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.6,
    },
    button: {
      fontSize: "0.875rem",
      fontWeight: 600,
      letterSpacing: "0.02em",
      textTransform: "none" as const,
    },
  },
  shape: {
    borderRadius: 12,
  },
  spacing: 8,
  components: {
    // Button component overrides
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          padding: "10px 24px",
          fontSize: "0.875rem",
          fontWeight: 600,
          textTransform: "none",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          },
        },
        containedPrimary: {
          background: `linear-gradient(135deg, ${petStoreColors.primary.main} 0%, ${petStoreColors.primary.dark} 100%)`,
          "&:hover": {
            background: `linear-gradient(135deg, ${petStoreColors.primary.dark} 0%, ${petStoreColors.primary.dark} 100%)`,
          },
        },
        containedSecondary: {
          background: `linear-gradient(135deg, ${petStoreColors.secondary.main} 0%, ${petStoreColors.secondary.dark} 100%)`,
          "&:hover": {
            background: `linear-gradient(135deg, ${petStoreColors.secondary.dark} 0%, ${petStoreColors.secondary.dark} 100%)`,
          },
        },
      },
    },
    // Card component overrides
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
          border: "1px solid rgba(0, 0, 0, 0.06)",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)",
          },
        },
      },
    },
    // AppBar component overrides
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          color: petStoreColors.text.primary,
          boxShadow: "0 2px 12px rgba(0, 0, 0, 0.08)",
          borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
        },
      },
    },
    // Paper component overrides
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          boxShadow: "0 2px 12px rgba(0, 0, 0, 0.08)",
        },
        elevation1: {
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
        },
        elevation2: {
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
        },
        elevation3: {
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
        },
      },
    },
    // Chip component overrides
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
          fontWeight: 500,
        },
        colorPrimary: {
          backgroundColor: petStoreColors.primary.light,
          color: petStoreColors.primary.dark,
        },
        colorSecondary: {
          backgroundColor: petStoreColors.secondary.light,
          color: petStoreColors.secondary.dark,
        },
      },
    },
    // TextField component overrides
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "12px",
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: petStoreColors.primary.light,
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: petStoreColors.primary.main,
            },
          },
        },
      },
    },
  },
});

// Dark theme variant (optional)
export const petStoreDarkTheme: Theme = createTheme({
  ...petStoreTheme,
  palette: {
    mode: "dark",
    primary: petStoreColors.primary,
    secondary: petStoreColors.secondary,
    background: {
      default: "#121212",
      paper: "#1E1E1E",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#B0B0B0",
    },
    success: petStoreColors.success,
    warning: petStoreColors.warning,
    error: petStoreColors.error,
    info: petStoreColors.info,
  },
  components: {
    ...petStoreTheme.components,
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#1E1E1E",
          color: "#FFFFFF",
          boxShadow: "0 2px 12px rgba(0, 0, 0, 0.3)",
        },
      },
    },
  },
});

// Export theme colors for use in components
export { petStoreColors };

// Export default theme
export default petStoreTheme;
