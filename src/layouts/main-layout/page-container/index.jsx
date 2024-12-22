import { Stack, Typography } from "@mui/material"
import BreadCrumbsContainer from "./BreadCrumbs"
import { ContainedButton, OutlinedButton } from "../../../theme/components/buttons"
import ActionButtons from "./ActionButtons"

const PageContainer = () => {
   return (
      <Stack sx={{ paddingX: 3.8 }}>
         <BreadCrumbsContainer />
         <Stack mt={1} direction="row" justifyContent="space-between" alignItems="start">
            <Stack>
               <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                  Feedbacks
               </Typography>
               <Typography variant="body1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fugiat.
               </Typography>
            </Stack>
            <ActionButtons />
         </Stack>
      </Stack>
   )
}

export default PageContainer