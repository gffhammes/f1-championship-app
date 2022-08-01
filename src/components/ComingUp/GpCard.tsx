import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react'
import { getFormattedWeekendDates } from '../../helpers/getFormattedDate';

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
  height: '2rem',
  aspectRatio: '1 / 1',
  borderRadius: 1,
  border: '1px solid #bcbcbc'
}

export const GpCard = ({ gpData }: Props) => {
  const formattedDate = getFormattedWeekendDates(gpData);

  return (
    <Box sx={sxCardWrapper}>
      <Stack direction='row' alignItems='flex-start' spacing={2} >
        
        <Box sx={sxCountryFlag}>
          <Image
            src={`https://countryflagsapi.com/png/${gpData.Circuit.Location.country}`}
            alt=''
            layout='fill'
            objectFit='cover'
            style={{ borderRadius: '4px' }}
          />
        </Box>
        <Box>
          <Typography fontSize={18} fontWeight={600} lineHeight={1}>{gpData.raceName}</Typography>
          <Typography fontSize={12} lineHeight={1} sx={{ mt: .5, color: 'rgba(54, 54, 54, 0.8)' }}>{gpData.Circuit.circuitName}</Typography>
          <Typography fontSize={12} fontWeight={600} lineHeight={1} sx={{ mt: 1.25, color: 'rgba(54, 54, 54, 0.8)' }}>{formattedDate}</Typography>
        </Box>
      </Stack>
    </Box>
  )
}