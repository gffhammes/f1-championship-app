import React from 'react'
import { DataGrid as MuiDataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Box, Stack, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Image from 'next/image';

type Props = {
  rows: any[];
}

const DataGrid = styled(MuiDataGrid)(({ theme }) => ({
  "& .MuiDataGrid-columnHeaders": { display: "none" },
  "& .MuiDataGrid-virtualScroller": { marginTop: "0!important" },
}));

const columns: GridColDef[] = [
  {
    field: 'position',
    headerName: 'Pos',
    flex: 1
  },
  {
    field: 'driver',
    headerName: 'Driver',
    flex: 10, 
    renderCell: (params) => (
      <Stack>        
        <Typography fontSize={14}>{params.row.Driver.givenName} {params.row.Driver.familyName}</Typography>
        <Typography fontSize={12}>{params.row.Constructors[0].name} #{params.row.Driver.permanentNumber}</Typography>
      </Stack>
    )
  },
  {
    field: 'points',
    headerName: 'Points',
    flex: 5,
    renderCell: (params) => (
      <Typography textAlign='right' fontSize={12} sx={{ width: '100%' }}>{params.row.points} pts</Typography>
    )
  },
];

export const ChampionshipDatagrid = ({ rows }: Props) => {

  console.log(rows)

  return (
    <Box sx={{ height: 600, width: '100%', pt: 2 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={30}
        rowsPerPageOptions={[30]}
        disableSelectionOnClick
        getRowId={(row) => row.position}
      />
    </Box>
  )
}