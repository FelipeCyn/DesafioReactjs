import { Button } from "@mui/material";

export const CustomButton = ({ children, onClick, disabled }) => {
  return (
    <Button
      disabled={disabled}
      onClick={onClick}
      sx={{
        backgroundColor: "#0047ab",
        color: "white",
        borderRadius: 20,
        paddingY: 1,
        width: "fit-content",
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
