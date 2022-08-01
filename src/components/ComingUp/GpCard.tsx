import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react'

type Props = {
  gpData: any;
}

const sxCardWrapper = {
  backgroundColor: '#E9E9E9',
  borderRadius: 2,
  p: 2
}

const sxCountryFlag = {
  position: 'relative',
  height: '4rem',
  aspectRatio: '1 / 1',
}

export const GpCard = ({ gpData }: Props) => {
  return (
    <Box sx={sxCardWrapper}>
      <Stack direction='row' alignItems='center' >
        
        <Box sx={sxCountryFlag}>
          <Image
            src={`https://countryflagsapi.com/png/${gpData.Circuit.Location.country}`}
            alt=''
            layout='fill'
            objectFit='cover'
          />
        </Box>
        <Box>
          <Typography fontSize={18} fontWeight={600} >{gpData.raceName}</Typography>
          <Typography fontSize={12} >{gpData.Circuit.circuitName}</Typography>
          <Typography fontSize={12} >Gp Dates</Typography>
        </Box>
      </Stack>
    </Box>
  )
}