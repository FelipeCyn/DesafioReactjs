import { Box, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useNavigate } from "react-router-dom";

export const CustomHeader = ({ title, path }) => {
  const navigate = useNavigate();
  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      bgcolor='#0047ab'
      p={2}
    >
      <ChevronLeftIcon
        sx={{ color: "white", fontSize: "30px", cursor: "pointer" }}
        onClick={() => navigate(path)}
      />
      <Typography fontSize={20} color='white'>
        {title}
      </Typography>
      <Box></Box>
    </Box>
  );
};

export default CustomHeader;
