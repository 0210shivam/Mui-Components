import { Button, Stack } from '@mui/material'
import React from 'react'
import { OutlinedButton } from '../../theme/components/buttons'

const ReviewActions = () => {
   return (
      <Stack direction="row" justifyContent="space-between">
         <Stack direction="row" mt={2} spacing={2}>
            <OutlinedButton size="small">Share</OutlinedButton>
            <OutlinedButton size="small">View</OutlinedButton>
            <OutlinedButton size="small">AI Reply</OutlinedButton>
         </Stack>
         <Stack direction="row" mt={2} spacing={2}>
            <OutlinedButton color='error' variant='outlined' size="small">Delete</OutlinedButton>
         </Stack>
      </Stack>
   )
}

export default ReviewActions