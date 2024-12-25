import { Button, Checkbox, InputAdornment, Stack, TextField, Typography } from "@mui/material"
import Image from "../../components/global/Image"
import MagicQrLogo from '../../assets/images/brand/magicqr-logo.png'
import { EmailOutlined, LockOutlined } from "@mui/icons-material"

const SignIn = () => {
   return (
      <Stack mt={{ lg: 2, xs: 8 }} alignItems="center" textAlign="center" spacing={12} padding={{ xs: 1, lg: 3 }} height={1}>
         <Image src={MagicQrLogo} alt="logo" width={220} sx={{ mr: 3.5 }} />
         <Stack width={1} alignItems="center" textAlign="center">
            <Typography fontWeight="bold" variant="h4">Welcome Back</Typography>
            <Typography color="text.secondary" variant="body2">Lorem ipsum dolor sit amet consectetur elit.</Typography>
            <Stack mt={4} width={0.8} spacing={3}>
               <Stack spacing={2}>
                  <TextField
                     fullWidth
                     type="email"
                     size="small"
                     label="Email"
                     slotProps={{
                        input: {
                           startAdornment: (
                              <InputAdornment position="start">
                                 <EmailOutlined />
                              </InputAdornment>
                           ),
                        },
                     }}
                  />
                  <TextField
                     fullWidth
                     type="password"
                     size="small"
                     label="Password"
                     slotProps={{
                        input: {
                           startAdornment: (
                              <InputAdornment position="start">
                                 <LockOutlined />
                              </InputAdornment>
                           ),
                        },
                     }}
                  />
               </Stack>
               <Stack direction="row" alignItems="center" justifyContent="space-between">
                  <Stack direction="row" alignItems="center" >
                     <Checkbox defaultChecked size="small" color="primary" />
                     <Typography color="text.secondary" variant="body2">Remember Me</Typography>
                  </Stack>
                  <Typography sx={{ cursor: 'pointer' }} color="text.secondary" variant="body2">Forgot Password?</Typography>
               </Stack>
               <Stack direction="row" width={1} justifyContent="space-around" spacing={3}>
                  <Button variant="contained" fullWidth>Sign In</Button>
                  <Button variant="outlined" fullWidth>Sign Up</Button>
               </Stack>
            </Stack>
         </Stack>
         <Stack>
            <Typography color="text.secondary" variant="body2">Powered By: <span style={{ cursor: 'pointer' }}>MagicQR.in</span></Typography>
            <Typography color="text.secondary" variant="body2">Version 1.0.0</Typography>
         </Stack>
      </Stack>
   )
}

export default SignIn