import { Stack } from "@mui/material"
import bodyBg from "./assets/images/body-bg.jpg"
import Sidebar from "./components/sidebar/Sidebar"
// import bodyBg from "./assets/background/bg3.jpg"

const App = ({ children }) => {
  return (
    <Stack direction="row">
      <Stack display={{ xs: 'none', lg: 'flex' }} sx={{ width: '296px', backgroundColor: 'rgb(253, 253, 253)' }} />
      {/* <Sidebar /> */}
      <Stack
        sx={{
          backgroundImage: `url(${bodyBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          width: { xs: '100%', lg: 'calc(100% - 296px)' },
          height: 'auto'
        }}
        direction="row" alignItems="center" justifyContent="center" height="100vh">
        {children}
      </Stack>
    </Stack>
  )
}

export default App