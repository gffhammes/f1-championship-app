import { Box, Container } from "@mui/material";
import React from "react";
import { SectionTitle } from "../Common/SectionTitle";
import { ChampionshipTabs } from "./ChampionshipTabs";

type Props = {
  driverStandings: any[];
  constructorStandings: any[];
};

export const ChampionshipResults = ({
  driverStandings,
  constructorStandings,
}: Props) => {
  return (
    <Box sx={{ pb: 5 }}>
      <Container>
        <SectionTitle>Championship Standing</SectionTitle>
        <ChampionshipTabs
          driverStandings={driverStandings}
          constructorStandings={constructorStandings}
        />
      </Container>
    </Box>
  );
};
