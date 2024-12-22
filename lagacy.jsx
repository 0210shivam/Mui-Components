import { Button } from '@mui/material'
import React from 'react'

const lagacy = () => {
   return (
      <div>
         <Button
            // variant="outlined"
            sx={{
               position: 'relative',
               overflow: 'hidden',
               borderRadius: '8px',
               padding: '4px 8px',
               color: '#5356fb', // Text color
               background: 'transparent', // Ensure background inside the button is clear
               '&:before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: 'inherit',
                  padding: '2px', // Adjust for border thickness
                  background: 'linear-gradient(134.38deg, #f539f8 0%, #c342f9 43.55%, #5356fb 104.51%)',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  zIndex: 1,
               },
               '& .MuiButton-root': {
                  zIndex: 2,
               },
               '&:hover:before': {
                  opacity: 0.9, // Hover effect for the border
               },
            }}
         >
            AI Reply
         </Button>
      </div>
   )
}

export default lagacy