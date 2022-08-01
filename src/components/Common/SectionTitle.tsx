import { Typography } from '@mui/material'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode;
  color?: 'light' | 'dark';
}

export const SectionTitle = ({ children, color = 'dark' }: Props) => {
  return (
    <Typography
    fontSize={12}
    fontWeight={600}
    sx={{ color: color === 'dark' ? 'rgba(54, 54, 54, 0.6)' : 'rgba(255, 255, 255, 0.6)', mb: 2 }}>
      {children?.toString().toUpperCase()}
    </Typography>
  )
}