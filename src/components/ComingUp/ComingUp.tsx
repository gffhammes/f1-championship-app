import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { SectionTitle } from "../Common/SectionTitle";
import { GpCard } from "./GpCard";

type Props = {
  comingUpGps: any[];
};

export const ComingUp = ({ comingUpGps }: Props) => {
  return (
    <Box>
      <Container>
        <SectionTitle>Coming Up</SectionTitle>
        <Grid container spacing={1}>
          {comingUpGps.slice(1, 5).map((gpData, index) => (
            <Grid key={index} item xs={12}>
              <GpCard gpData={gpData} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
