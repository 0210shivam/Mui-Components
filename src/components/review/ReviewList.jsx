import { Button, Card, List, ListItem, Stack, Typography } from '@mui/material'
import SoftRating from './SoftRating'
import AvtImg from '../../assets/avatars/avatar_15.jpg'
import ReviewAvatar from './ReviewAvatar'
import ReviewDescription from './ReviewDescription'
import ReviewActions from './ReviewActions'

const ReviewList = ({ reviewData }) => {
   return (
      <List sx={{ paddingX: { xs: 1, lg: 4 }, paddingY: 0, width: '100%' }}>
         <ListItem sx={{ padding: 0 }}>
            <Card sx={{ width: 1, padding: 2 }}>
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
                     <ReviewDescription />
                     <ReviewActions />
                  </Stack>
               </Stack>
            </Card>
         </ListItem>
      </List>
   )
}

export default ReviewList