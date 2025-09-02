# PetStore Web Theme Documentation

This document explains how to use the MUI theme system in the PetStore Web application.

## Theme Overview

The PetStore theme is built using Material-UI's theming system and provides:

- **Primary Colors**: Green palette (#4CAF50) - representing nature and pets
- **Secondary Colors**: Orange palette (#FF9800) - representing warmth and friendliness
- **Consistent Typography**: Inter/Roboto font stack with defined hierarchy
- **Custom Component Styles**: Pre-styled MUI components
- **Dark/Light Mode Support**: Toggle between themes
- **Pet-friendly Design**: Rounded corners, subtle shadows, and smooth transitions

## Using the Theme

### 1. Theme Provider Setup

The theme is automatically provided to all components through the `ThemeProvider` wrapper in `App.tsx`:

```tsx
import { ThemeProvider } from "./components/common";

// ThemeProvider wraps the entire app
<ThemeProvider>{/* Your app content */}</ThemeProvider>;
```

### 2. Accessing Theme in Components

#### Using MUI's useTheme Hook

```tsx
import { useTheme } from "@mui/material/styles";

const MyComponent = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      }}
    >
      Content
    </Box>
  );
};
```

#### Using Custom Theme Hook for Dark/Light Mode

```tsx
import { useTheme } from "./components/common";

const MyComponent = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme}>
      Switch to {isDarkMode ? "Light" : "Dark"} Mode
    </Button>
  );
};
```

### 3. Using Theme Colors

#### Predefined Colors

```tsx
// Primary colors (Green)
theme.palette.primary.light; // #81C784
theme.palette.primary.main; // #4CAF50
theme.palette.primary.dark; // #388E3C

// Secondary colors (Orange)
theme.palette.secondary.light; // #FFB74D
theme.palette.secondary.main; // #FF9800
theme.palette.secondary.dark; // #F57C00

// Status colors
theme.palette.success.main; // #66BB6A
theme.palette.warning.main; // #FFA726
theme.palette.error.main; // #F44336
theme.palette.info.main; // #29B6F6
```

#### Using Colors in sx Prop

```tsx
<Box
  sx={{
    backgroundColor: "primary.main",
    color: "primary.contrastText",
    "&:hover": {
      backgroundColor: "primary.dark",
    },
  }}
>
  Content
</Box>
```

### 4. Typography

The theme provides a complete typography scale:

```tsx
<Typography variant="h1">Main Heading</Typography>
<Typography variant="h2">Section Heading</Typography>
<Typography variant="h3">Subsection</Typography>
<Typography variant="body1">Regular text</Typography>
<Typography variant="body2">Secondary text</Typography>
```

### 5. Pre-styled Components

Several MUI components have custom styling applied:

#### Buttons

```tsx
// Gradient primary buttons
<Button variant="contained" color="primary">Shop Now</Button>

// Gradient secondary buttons
<Button variant="contained" color="secondary">Learn More</Button>
```

#### Cards

```tsx
// Cards have rounded corners and hover effects
<Card>
  <CardContent>Content automatically gets proper styling</CardContent>
</Card>
```

#### Text Fields

```tsx
// Text fields have rounded borders and theme colors
<TextField label="Pet Name" variant="outlined" />
```

### 6. Responsive Design

Use MUI's breakpoint system with the theme:

```tsx
<Box
  sx={{
    padding: { xs: 2, md: 4 }, // 16px on mobile, 32px on desktop
    fontSize: { xs: "1rem", md: "1.2rem" },
  }}
>
  Responsive content
</Box>
```

### 7. Custom Colors

Access custom pet store colors directly:

```tsx
import { petStoreColors } from '../types/theme';

// Use in sx prop
<Box sx={{ backgroundColor: petStoreColors.primary.light }}>
```

## Theme Structure

### Files

- `src/types/theme.ts` - Main theme configuration
- `src/components/common/ThemeProvider.tsx` - Theme provider component
- `src/components/common/useTheme.ts` - Custom theme hook
- `src/components/common/ThemeDemo.tsx` - Demo component showing theme usage

### Color Palette Structure

```typescript
{
  primary: { light, main, dark, contrastText },
  secondary: { light, main, dark, contrastText },
  background: { default, paper },
  text: { primary, secondary },
  success: { light, main, dark },
  warning: { light, main, dark },
  error: { light, main, dark },
  info: { light, main, dark }
}
```

## Best Practices

1. **Use Theme Colors**: Always use theme colors instead of hardcoded hex values
2. **Responsive Design**: Leverage MUI's responsive breakpoint system
3. **Consistent Spacing**: Use theme spacing units (multiples of 8px)
4. **Typography Scale**: Stick to predefined typography variants
5. **Component Variants**: Use MUI component variants (contained, outlined, text)
6. **Dark Mode**: Test components in both light and dark modes

## Examples

See `src/components/common/ThemeDemo.tsx` for comprehensive examples of theme usage.

To view the theme demo, add it to any page:

```tsx
import { ThemeDemo } from "../components/common";

// In your page component
<ThemeDemo />;
```
