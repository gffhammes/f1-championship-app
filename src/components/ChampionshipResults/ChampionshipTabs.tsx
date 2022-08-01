import React, { ReactNode, SyntheticEvent, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ChampionshipDatagrid } from './ChampionshipDatagrid';

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

interface IChampionshipTabsProps {
  driverStandings: any[];
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
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
}

export const ChampionshipTabs = ({ driverStandings }: IChampionshipTabsProps) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
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
        <ChampionshipDatagrid rows={driverStandings} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ChampionshipDatagrid rows={driverStandings} />
      </TabPanel>
    </Box>
  );
}
