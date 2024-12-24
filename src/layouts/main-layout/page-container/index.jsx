import { Stack, Typography } from "@mui/material"
import BreadCrumbsContainer from "./BreadCrumbs"
import { ContainedButton, OutlinedButton } from "../../../theme/components/buttons"
import ActionButtons from "./ActionButtons"
import { useLocation } from "react-router"
import sitemap from "../../../routes/sitemap"

const PageContainer = () => {
   const path = useLocation().pathname;
   const page = sitemap.find((item) => item.path === path);
   const pageTitle = page.title ?? "Page not found";
   const pageSubtitle = page.subtitle ?? "This page does not exist";

   return (
      <Stack sx={{ paddingX: { xs: 1, lg: 3.8 } }}>
         <BreadCrumbsContainer />
         <Stack mt={1} direction="row" justifyContent="space-between" alignItems="start">
            <Stack>
               <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                  {pageTitle}
               </Typography>
               <Typography variant="body1">
                  {pageSubtitle}
               </Typography>
            </Stack>
            <ActionButtons />
         </Stack>
      </Stack>
   )
}

export default PageContainer