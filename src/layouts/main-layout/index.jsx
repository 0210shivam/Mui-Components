import { Stack } from "@mui/material"
import SideBar from "./sidebar"
import TopBar from "./topbar"
import Footer from "./footer"
import PageContainer from "./page-container"

const MainLayout = ({ children }) => {
   return (
      <Stack minHeight="100vh" direction="row">
         <SideBar />
         <Stack px={1} width={{ xs: 1, lg: 'calc(100% - 290px)' }}>
            <TopBar />
            <Stack mt={2} height={1} spacing={3}>
               <PageContainer />
               {children}
            </Stack>
         </Stack>
      </Stack>
   )
}

export default MainLayout