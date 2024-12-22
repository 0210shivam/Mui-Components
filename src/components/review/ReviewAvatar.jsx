import { Avatar } from '@mui/material'
import React from 'react'

const ReviewAvatar = ({ avatar, ...props }) => {
   return (
      <Avatar
         {...props}
         src={avatar}
         sx={{
            width: '80px',
            height: '80px',
            borderRadius: '8px',
         }}
      />
   )
}

export default ReviewAvatar