import { Box, Button, Card, Divider, List, ListItem, Stack, Typography } from '@mui/material'
import SoftRating from './SoftRating'
import AvtImg from '../../assets/avatars/avatar_15.jpg'
import ReviewAvatar from './ReviewAvatar'
import ReviewActions from './ReviewActions'
import React from 'react'

const ReviewList = ({ reviewData }) => {
   const [hover, setHover] = React.useState(false)

   return (
      <>
         <List sx={{ paddingY: 0, width: '100%' }}>
            <ListItem sx={{
               padding: 0,
               "&:hover": {
                  // border: '1px solid gray',
                  // padding: 2,
                  // boxShadow: '1px 1px 1px 3px rgba(0, 0, 0, 0.1)',
               }
            }}>
               <Card sx={{
                  width: 1, padding: 2,
                  background: 'rgb(255, 255, 255)'
               }}>
                  <Stack width={1} direction={{ xs: 'column', lg: 'row' }} spacing={2} alignItems="flex-start">
                     <Stack width={{ xs: 1, lg: 0.4 }} direction="row" spacing={2} alignItems="flex-start" sx={{ overflow: 'clip' }}>
                        <ReviewAvatar avatar={AvtImg} />
                        <Stack>
                           <Typography sx={{ fontWeight: 'bold', fontSize: '24px' }}>Shivam Shrivastava</Typography>
                           <Stack>
                              <Typography sx={{ color: 'text.secondary' }} variant='body1'>shivam.shrivastava@gmail.com</Typography>
                              <Typography sx={{ color: 'text.secondary' }} variant='body2'>+91 7024791281</Typography>
                           </Stack>
                        </Stack>
                     </Stack>
                     <Stack width={{ xs: 1, lg: 0.6 }}>
                        <Stack mb={0.5} mt={1} direction="row" alignItems="start" justifyContent="space-between">
                           <SoftRating />
                           <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }} variant='subtitle'>24-December-2024</Typography>
                        </Stack>
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
                        <ReviewActions />
                     </Stack>
                  </Stack>
               </Card>
            </ListItem>
            {/* <Box sx={{ mt: 2 }}>
               <Divider />
            </Box> */}
         </List>
      </>
   )
}

export default ReviewList