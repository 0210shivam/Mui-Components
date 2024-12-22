import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import starFilled from '../../assets/icons/star.png';
import starEmpty from '../../assets/icons/empty-star.png';

const CustomIcon = styled('img')({
   width: 26,
   height: 26,
});

const SoftRating = ({ ...props }) => {
   return (
      <Rating
         {...props}
         defaultValue={3}
         max={5}
         icon={<CustomIcon src={starFilled} alt="filled-icon" />}
         emptyIcon={<CustomIcon src={starEmpty} alt="empty-icon" />}
      />
   );
};

export default SoftRating;
