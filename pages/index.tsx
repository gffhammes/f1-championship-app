import { Box, Stack } from "@mui/material";
import axios from "axios";
import Head from "next/head";
import { ChampionshipResults } from "../src/components/ChampionshipResults/ChampionshipResults";
import { ComingUp } from "../src/components/ComingUp/ComingUp";
import { NextGp } from "../src/components/NextGp/NextGp";
import { IRacesData } from "../src/interfaces";

interface IHome {
  racesData: IRacesData;
  driverStandings: any;
  constructorStandings: any;
}

export default function Home({
  racesData,
  driverStandings,
  constructorStandings,
}: IHome) {
  const today = new Date();

  const nextGp = racesData.MRData.RaceTable.Races.find((race: any) => {
    return new Date(race.date + " " + race.time) >= today;
  });

  const comingUpGps = racesData.MRData.RaceTable.Races.filter((race: any) => {
    return new Date(race.date + " " + race.time) >= today;
  });

  return (
    <>
      <Head>
        <title>F1 Championship App</title>
      </Head>
      <Stack component="main" spacing={6}>
        <NextGp nextGp={nextGp} />
        <ComingUp comingUpGps={comingUpGps} />
        <ChampionshipResults
          driverStandings={driverStandings}
          constructorStandings={constructorStandings}
        />
      </Stack>
    </>
  );
}

export async function getServerSideProps() {
  const { API_URL } = process.env;

  const racesResponse = await axios.get(`${API_URL}/current.json`);
  const racesData = await racesResponse.data;

  const driverStandingsResponse = await axios.get(
    `${API_URL}/current/driverStandings.json`
  );

  const constructorStandingsResponse = await axios.get(
    `${API_URL}/current/constructorStandings.json`
  );

  const driverStandingsData = await driverStandingsResponse.data;
  const constructorStandingsData = await constructorStandingsResponse.data;

  return {
    props: {
      racesData,
      driverStandings: await driverStandingsData.MRData.StandingsTable
        .StandingsLists[0].DriverStandings,
      constructorStandings: await constructorStandingsData.MRData.StandingsTable
        .StandingsLists[0].ConstructorStandings,
    },
  };
}
