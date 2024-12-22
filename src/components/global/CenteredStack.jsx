import { Stack } from '@mui/material'
import React from 'react'

const CenteredStack = ({ children }) => {
   return (
      <Stack direction="row" alignItems="start" spacing={1} mb={2}>
         {children}
      </Stack>
   )
}

export default CenteredStack