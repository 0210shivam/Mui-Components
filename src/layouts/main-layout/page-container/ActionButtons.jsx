import { Stack } from '@mui/material'
import React from 'react'
import { ContainedButton, OutlinedButton } from '../../../theme/components/buttons'

const ActionButtons = () => {
   return (
      <Stack direction="row" spacing={2}>
         <OutlinedButton variant="outlined" color="primary">Add</OutlinedButton>
         <OutlinedButton variant="outlined" color="primary">View</OutlinedButton>
         <OutlinedButton variant="outlined" color="primary">Edit</OutlinedButton>
      </Stack>
   )
}

export default ActionButtons