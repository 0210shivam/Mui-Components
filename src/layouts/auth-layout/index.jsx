import { Stack } from "@mui/material"

const AuthLayout = ({ children }) => {
   return (
      <Stack minHeight="100vh" direction="row">
         <Stack display={{ xs: 'none', lg: 'flex' }} width={0.6}>
            {/* <h1>Hello</h1> */}
         </Stack>
         <Stack width={{ xs: 1, lg: 0.4 }}>
            {children}
         </Stack>
      </Stack>
   )
}

export default AuthLayout