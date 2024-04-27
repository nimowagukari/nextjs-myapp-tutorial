"use client";
import { Button, ThemeProvider, Typography, createTheme } from "@mui/material";

const theme = createTheme({
  typography: { button: { textTransform: "none", margin: "0.5rem" } },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
    },
  },
});

export default function Page() {
  return (
    <main>
      <Typography variant="h3">Theme Tutorial</Typography>
      <Button className="block">Default Theme</Button>
      <ThemeProvider theme={theme}>
        <Button className="block" color="secondary" disableRipple={true}>
          color: secondary by button prop
        </Button>
        <Button
          className="block"
          color="success"
          variant="outlined"
          disableFocusRipple={true}
        >
          color: success by button prop
        </Button>
        <Button className="block" color="warning" size="large">
          color: warning by button prop
        </Button>
        <Button className="block" color="error">
          color: error by button prop
        </Button>
      </ThemeProvider>
    </main>
  );
}
