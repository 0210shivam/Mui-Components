import { Stack } from '@mui/material'
import React from 'react'

const CenteredStack = ({ children, ...props }) => {
   return (
      <Stack {...props} direction="row" spacing={1}>
         {children}
      </Stack>
   )
}

export default CenteredStack