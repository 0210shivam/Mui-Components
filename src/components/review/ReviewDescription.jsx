import { Typography } from '@mui/material'

const ReviewDescription = () => {
   return (
      <Typography
         // mt={0.5}
         variant="body1"
         sx={{
            color: 'text.secondary',
            textAlign: 'justify',
            letterSpacing: '0.4px',
            display: '-webkit-box',
            lineHeight: 1.4,
            overflow: 'hidden',
            WebkitLineClamp: 6, // Limits text to 2 lines
            WebkitBoxOrient: 'vertical' // Required for -webkit-line-clamp to work
         }}
      >
         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, ipsum quasi debitis vitae soluta vel mollitia unde laborum corporis consectetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quos doloribus impedit nemo fugit doloremque maxime dolorem repellat nulla velit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Typography>
   )
}

export default ReviewDescription