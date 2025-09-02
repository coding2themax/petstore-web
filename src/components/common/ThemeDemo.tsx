import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  FormControlLabel,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import { useTheme as useMuiTheme } from "@mui/material/styles";
import React from "react";
import { petStoreColors } from "../../types/theme";
import { useTheme } from "./useTheme";

/**
 * Example component demonstrating how to use the MUI theme in the pet store app
 */
const ThemeDemo: React.FC = () => {
  const muiTheme = useMuiTheme();
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Pet Store Theme Demo
        </Typography>
        <FormControlLabel
          control={<Switch checked={isDarkMode} onChange={toggleTheme} />}
          label={`${isDarkMode ? "Dark" : "Light"} Mode`}
        />
      </Box>

      <Stack spacing={3}>
        {/* Top Row - Color Palette and Buttons */}
        <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
          {/* Color Palette Demo */}
          <Box sx={{ flex: "1 1 300px", minWidth: "300px" }}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Color Palette
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
                  <Chip
                    label="Primary"
                    sx={{
                      backgroundColor: muiTheme.palette.primary.main,
                      color: muiTheme.palette.primary.contrastText,
                    }}
                  />
                  <Chip
                    label="Secondary"
                    sx={{
                      backgroundColor: muiTheme.palette.secondary.main,
                      color: muiTheme.palette.secondary.contrastText,
                    }}
                  />
                  <Chip
                    label="Success"
                    sx={{
                      backgroundColor: muiTheme.palette.success.main,
                      color: "#fff",
                    }}
                  />
                  <Chip
                    label="Warning"
                    sx={{
                      backgroundColor: muiTheme.palette.warning.main,
                      color: "#fff",
                    }}
                  />
                  <Chip
                    label="Error"
                    sx={{
                      backgroundColor: muiTheme.palette.error.main,
                      color: "#fff",
                    }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Box>

          {/* Buttons Demo */}
          <Box sx={{ flex: "1 1 300px", minWidth: "300px" }}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Buttons
                </Typography>
                <Stack spacing={2}>
                  <Button variant="contained" color="primary">
                    Shop Now
                  </Button>
                  <Button variant="contained" color="secondary">
                    Learn More
                  </Button>
                  <Button variant="outlined" color="primary">
                    Browse Pets
                  </Button>
                  <Button variant="text" color="secondary">
                    Contact Us
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Box>
        </Box>

        {/* Typography Demo */}
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Typography
            </Typography>
            <Typography variant="h1" gutterBottom>
              H1: Welcome to PetStore
            </Typography>
            <Typography variant="h2" gutterBottom>
              H2: Find Your Perfect Pet
            </Typography>
            <Typography variant="h3" gutterBottom>
              H3: Pet Care Services
            </Typography>
            <Typography variant="body1" gutterBottom>
              Body 1: We provide the best care for your beloved pets with our
              comprehensive services and high-quality products.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Body 2: Our experienced team is dedicated to ensuring your pet's
              health and happiness.
            </Typography>
          </CardContent>
        </Card>

        {/* Theme Colors Reference */}
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Theme Colors Reference
            </Typography>
            <Typography
              variant="body2"
              component="pre"
              sx={{ fontFamily: "monospace", overflow: "auto" }}
            >
              {JSON.stringify(petStoreColors, null, 2)}
            </Typography>
          </CardContent>
        </Card>
      </Stack>
    </Container>
  );
};

export default ThemeDemo;
