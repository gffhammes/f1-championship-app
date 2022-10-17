import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box } from "@mui/material";

type Props = {
  rows: any[];
  columns: GridColDef[];
};

export const ChampionshipDatagrid = ({ rows, columns }: Props) => {
  return (
    <Box sx={{ height: 600, width: "100%", pt: 2 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={30}
        rowsPerPageOptions={[30]}
        disableSelectionOnClick
        getRowId={(row) => row.position}
        headerHeight={30}
      />
    </Box>
  );
};
