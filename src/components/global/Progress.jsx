import { CircularProgress } from "@mui/material"
import CenteredStack from "./CenteredStack"

const Progress = () => {
   return (
      <CenteredStack justifyContent="center">
         <CircularProgress />
      </CenteredStack>
   )
}

export default Progress