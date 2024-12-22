import { Box, Checkbox } from "@mui/material"
import checkedIcon from '../assets/icons/checkbox/check.png'
import unCheckedIcon from '../assets/icons/checkbox/oval.png'

const CustomIcon = ({ src }) => (
   <Box
      component="span"
      sx={{
         width: 20,
         height: 20,
         backgroundImage: `url(${src})`,
         backgroundSize: 'contain',
         backgroundRepeat: 'no-repeat',
         backgroundPosition: 'center',
      }}
   />
);

const SoftCheckBox = () => {
   return (
      <div>
         <Checkbox
            icon={<CustomIcon src={unCheckedIcon} />}
            checkedIcon={<CustomIcon src={checkedIcon} />}
         />
      </div>
   )
}

export default SoftCheckBox