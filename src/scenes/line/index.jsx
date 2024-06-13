import React from 'react';
import { useTheme } from "@emotion/react";
import Header from "../../components/Header";
import { Box } from "@mui/material";
import OperadoresLogados from '../../components/OperadoresLogados';
import LineChart from '../../components/LineChart';


const LineC = () => {

  const theme   = useTheme();

  return (
    
    <Box m="20px">
          <Header title="Line Chart" subtitle="Simple Line Chart" />
            <OperadoresLogados />
            <LineChart />
      </Box>
  );
};

export default LineC;
