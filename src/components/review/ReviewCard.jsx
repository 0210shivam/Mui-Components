import { Button, Card, CardActions, CardContent, Stack, Typography } from "@mui/material"
import SoftRating from "./SoftRating"

const ReviewCard = () => {
   return (
      <Card
         sx={{
            // width: 345,
            '&.MuiCard-root': {
               boxShadow: '0px 0px 3px 0px rgba(0,0,0,0.1)',
               borderRadius: '10px',
            },
            '&.MuiCard-root:hover': {
               cursor: 'pointer',
               boxShadow: '1px 1px 5px 3px rgba(0,0,0,0.1)',
            },
         }}
      >
         <CardContent>
            <Stack alignItems="start" justifyContent="left">
               <Typography variant="h5" component="div">
                  Shivam Shrivastava
               </Typography>
               <SoftRating />
            </Stack>
            <Typography
               mt={1}
               variant="body1"
               sx={{
                  color: 'text.secondary',
                  textAlign: 'justify',
                  letterSpacing: '0.4px',
                  display: '-webkit-box',
                  overflow: 'hidden',
                  WebkitLineClamp: 3, // Limits text to 2 lines
                  WebkitBoxOrient: 'vertical' // Required for -webkit-line-clamp to work
               }}
            >
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, ipsum quasi debitis vitae soluta vel mollitia unde laborum corporis consectetur!
            </Typography>
         </CardContent>
         <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
         </CardActions>
      </Card>
   )
}

export default ReviewCard
