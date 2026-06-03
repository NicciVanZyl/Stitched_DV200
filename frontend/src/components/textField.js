import { TextField } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    //outlines
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "2rem",
          //   height: "4.44rem",
          backgroundColor: "#fff",
          margin: "0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.625rem",
          "& fieldset": {
            borderColor: "transparent",
            borderWidth: "0",
          },
          "&:hover fieldset": {
            borderColor: "transparent",
          },
          "&.Mui-focused fieldset": {
            borderColor: "transparent",
          },
          "&.Mui-error fieldset": {
            borderColor: "rgb(233, 56, 56)",
          },
        },
      },
    },

    // little label
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#000",
          //   background: "#ED7849",
          borderRadius: "12px 12px 0 0",
          paddingLeft: "5px",
          paddingRight: "5px",
          "&.Mui-focused": {
            color: "#000",
            // background: "#ED7849",
            borderRadius: "12px 12px 0 0",
            paddingLeft: "5px",
            paddingRight: "5px",
          },
          "&.Mui-error": { color: "rgb(255, 125, 125)" },
        },
      },
    },
  },
});

export default function ProfileTextFields({
  label,
  onChangeValue,
  value = "",
}) {
  return (
    <ThemeProvider theme={theme}>
      <TextField
        label={label}
        variant="outlined"
        fullWidth
        margin="normal"
        value={value}
        onChange={(event) => {
          if (onChangeValue) onChangeValue(event.target.value);
        }}
        sx={{ margin: 0, padding: 0 }}
      />
    </ThemeProvider>
  );
}
