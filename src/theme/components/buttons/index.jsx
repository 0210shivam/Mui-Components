import { Button, styled } from "@mui/material";

export const CustomButton = styled(Button)(({ theme }) => ({
   borderRadius: '12px'
}));

export const OutlinedButton = ({ children, ...props }) => {
   return (
      <CustomButton {...props} variant="outlined">{children}</CustomButton>
   )
}

export const ContainedButton = ({ children, ...props }) => {
   return (
      <CustomButton {...props} variant="contained">{children}</CustomButton>
   )
}

export const TextButton = ({ children, ...props }) => {
   return (
      <CustomButton {...props} variant="text">{children}</CustomButton>
   )
}