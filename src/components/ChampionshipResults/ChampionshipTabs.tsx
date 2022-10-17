import React, { ReactNode, SyntheticEvent, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ChampionshipDatagrid } from "./ChampionshipDatagrid";
import { Stack } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

interface IChampionshipTabsProps {
  driverStandings: any[];
  constructorStandings: any[];
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

export const ChampionshipTabs = ({
  driverStandings,
  constructorStandings,
}: IChampionshipTabsProps) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab label="Drivers" />
          <Tab label="Constructors" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ChampionshipDatagrid rows={driverStandings} columns={driversColumns} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ChampionshipDatagrid
          rows={constructorStandings}
          columns={constructorsColumns}
        />
      </TabPanel>
    </Box>
  );
};

const driversColumns: GridColDef[] = [
  {
    field: "position",
    headerName: "Pos",
    flex: 1,
  },
  {
    field: "driver",
    headerName: "Driver",
    flex: 10,
    renderCell: (params) => (
      <Stack>
        <Typography fontSize={14}>
          {params.row.Driver.givenName} {params.row.Driver.familyName}
        </Typography>
        <Typography fontSize={12} color="#acacac">
          {params.row.Constructors[0].name} #{params.row.Driver.permanentNumber}
        </Typography>
      </Stack>
    ),
  },
  {
    field: "points",
    headerName: "Points",
    flex: 5,
    renderCell: (params) => (
      <Typography textAlign="right" fontSize={12} sx={{ width: "100%" }}>
        {params.row.points} pts
      </Typography>
    ),
  },
];

const constructorsColumns: GridColDef[] = [
  {
    field: "position",
    headerName: "Pos",
    flex: 1,
  },
  {
    field: "constructor",
    headerName: "Constructor",
    flex: 10,
    renderCell: (params) => (
      <Stack>
        <Typography fontSize={14}>{params.row.Constructor.name}</Typography>
        <Typography fontSize={12} color="#acacac">
          {params.row.Constructor.nationality}
        </Typography>
      </Stack>
    ),
  },
  {
    field: "points",
    headerName: "Points",
    flex: 5,
    renderCell: (params) => (
      <Typography textAlign="right" fontSize={12} sx={{ width: "100%" }}>
        {params.row.points} pts
      </Typography>
    ),
  },
];
