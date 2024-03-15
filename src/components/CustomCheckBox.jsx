import { Checkbox } from "@mui/material";

export const CustomCheckBox = ({ onChange, checked }) => {
  return (
    <Checkbox
      onChange={onChange}
      checked={checked}
      sx={{
        border: "1px solid white",
        borderRadius: 2,
        width: 30,
        height: 30,
        "& svg": {
          scale: "1.4",
        },
        "&.MuiCheckbox-root": {
          border: 0,
        },
        "& .MuiSvgIcon-root": {
          color: "white",
        },
      }}
    />
  );
};

export default CustomCheckBox;
