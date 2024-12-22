import { Button, Card, CardActions, CardContent, CardMedia, Divider, Grid2, Stack, styled, Typography } from "@mui/material"
import ReviewList from "./review/ReviewList"

const CustomButton = styled(Button)(({ theme }) => ({
   border: '1px solid red',
   borderRadius: '16px'
}))



const Test = () => {
   return (
      <>
         {/* <Grid2 container spacing={1} sx={{ padding: 2, mt: 2 }}>
            <Grid2 size={{ xs: 12, lg: 6 }}>
               <ReviewCard />
            </Grid2>
            <Grid2 size={{ xs: 12, lg: 6 }}>
               <ReviewCard />
            </Grid2>
            <Grid2 size={{ xs: 12, lg: 6 }}>
               <ReviewCard />
            </Grid2>
            <Grid2 size={{ xs: 12, lg: 6 }}>
               <ReviewCard />
            </Grid2>
            <Grid2 size={{ xs: 12, lg: 6 }}>
               <ReviewCard />
            </Grid2>
            <Grid2 size={{ xs: 12, lg: 6 }}>
               <ReviewCard />
            </Grid2>
            <Grid2 size={{ xs: 12, lg: 6 }}>
               <ReviewCard />
            </Grid2>
            <Grid2 size={{ xs: 12, lg: 6 }}>
               <ReviewCard />
            </Grid2>
            <Grid2 size={{ xs: 12, lg: 6 }}>
               <ReviewCard />
            </Grid2>
            <Grid2 size={{ xs: 12, lg: 6 }}>
               <ReviewCard />
            </Grid2>
            <Grid2 size={{ xs: 12, lg: 6 }}>
               <ReviewCard />
            </Grid2>
            <Grid2 size={{ xs: 12, lg: 6 }}>
               <ReviewCard />
            </Grid2>
            <Grid2 size={{ xs: 12, lg: 6 }}>
               <ReviewCard />
            </Grid2>
            <Grid2 size={{ xs: 12, lg: 6 }}>
               <ReviewCard />
            </Grid2>
            <Grid2 size={{ xs: 12, lg: 6 }}>
               <ReviewCard />
            </Grid2>
            <Grid2 size={{ xs: 12, lg: 6 }}>
               <ReviewCard />
            </Grid2>
         </Grid2> */}
         <Stack spacing={2} width={1}>
            <ReviewList />
            <ReviewList />
            <ReviewList />
            <ReviewList />
            <ReviewList />
            <ReviewList />
            <ReviewList />
         </Stack>
         {/* <CustomButton size="small" variant="text">Click me</CustomButton> */}
         {/* <CustomButton size="large" variant="outined">Click me</CustomButton> */}
         {/* <CustomButton size="large" variant="text">Click me</CustomButton> */}
      </>
   )
}

export default Test