import { Box, Container } from "@mui/material";
import { SectionTitle } from "../Common/SectionTitle";
import { CountryFlag } from "./CountryFlag";
import { GpInfo, IGpInfoProps } from "./GpInfo";
import { ISectionCardProps } from "./SectionsData/SectionCard";
import { SectionsData } from "./SectionsData/SectionsData";

export const NextGp = ({ nextGp }: any) => {
  const {
    raceName,
    Circuit,
    date,
    time,
    FirstPractice,
    SecondPractice,
    ThirdPractice,
    Qualifying,
    Sprint,
  } = nextGp;
  const { circuitName, Location } = Circuit;
  const { country, locality } = Location;

  const race: ISectionCardProps = {
    label: "Race",
    date: date,
    time: time,
    emphasis: true,
  };

  const fp1: ISectionCardProps = {
    label: "FP1",
    date: FirstPractice.date,
    time: FirstPractice.time,
  };

  const fp2: ISectionCardProps = {
    label: "FP2",
    date: SecondPractice.date,
    time: SecondPractice.time,
  };

  const fp3: ISectionCardProps = {
    label: "FP3",
    date: ThirdPractice?.date,
    time: ThirdPractice?.time,
  };

  const sprint: ISectionCardProps = {
    label: "Sprint",
    date: Sprint?.date,
    time: Sprint?.time,
  };

  const qualy: ISectionCardProps = {
    label: "Qualifying",
    date: Qualifying.date,
    time: Qualifying.time,
  };

  const normalSections = [race, fp1, fp2, fp3, qualy];
  const sprintSections = [race, fp1, qualy, fp2, sprint];

  return (
    <Box
      sx={{
        backgroundColor: "#363636",
        pt: 5,
        pb: 3,
        borderRadius: "0 0 .5rem .5rem",
      }}
    >
      <Container>
        <SectionTitle color="light">Next GP</SectionTitle>
        <CountryFlag countryName={country} />
        <GpInfo
          name={raceName}
          circuit={circuitName}
          locality={locality}
          country={country}
        />
      </Container>

      <SectionsData cardsData={Sprint ? sprintSections : normalSections} />
    </Box>
  );
};
