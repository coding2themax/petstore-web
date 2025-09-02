import Box from "@mui/material/Box";
import React from "react";
import DefaultServiceCard from "../components/service/DefaultServiceCard";

const ServicesPage: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
      }}
    >
      <DefaultServiceCard />
      <DefaultServiceCard />
    </Box>
  );
};

export default ServicesPage;
