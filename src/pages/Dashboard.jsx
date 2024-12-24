import { Stack } from '@mui/material'
import ReviewList from '../components/review/ReviewList'

const Dashboard = () => {
   return (
      <Stack spacing={2} width={1}>
         <ReviewList />
         <ReviewList />
         <ReviewList />
         <ReviewList />
         <ReviewList />
         <ReviewList />
         <ReviewList />
      </Stack>
   )
}

export default Dashboard