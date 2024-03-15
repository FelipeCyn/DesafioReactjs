import { Box, Input } from "@mui/material";

export const CustomInput = ({ onChange, value, placeholder, theme, error }) => {
  return (
    <Box width='100%'>
      <Input
        onChange={onChange}
        value={value}
        fullWidth
        placeholder={placeholder}
        InputProps={{
          disableUnderline: true,
        }}
        sx={{
          border: error ? "3px solid red" : `3px solid ${theme}`,
          borderRadius: "30px",
          backgroundColor: "transparent",
          color: theme,
          paddingLeft: "12px",
          paddingRight: "10px",
          paddingTop: "1px",
          "&.MuiInput-root::before": {
            border: "none",
          },
          "&.MuiFilledInput-root.Mui-focused": {
            border: "none",
          },
          "&.MuiInput-underline:hover:not(.Mui-disabled):before": {
            border: "none",
          },
          "&.MuiInput-underline:after": {
            border: "none",
          },
        }}
      />
    </Box>
  );
};

export default CustomInput;
