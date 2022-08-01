import { Stack, Typography } from '@mui/material'
import React from 'react'

export interface IGpInfoProps {
  name: string;
  circuit: string;
  locality: string;
  country: string;
}

const primaryTextProps = {
  sx: {
    color: 'rgb(54, 54, 54)'
  },
  fontSize: 32,
  fontWeight: 600,
}

const secondaryTextProps = {
  sx: {
    color: 'rgba(54, 54, 54, .8)'
  },
}

export const GpInfo = ({
  name,
  circuit,
  locality,
  country,
}: IGpInfoProps) => {
  return (
    <Stack sx={{ mt: 1, mb: 3 }}>
      <Typography {...primaryTextProps}>{name}</Typography>
      <Typography {...secondaryTextProps}>{circuit}</Typography>
      <Typography {...secondaryTextProps}>{locality} &bull; {country}</Typography>
    </Stack>
  )
}