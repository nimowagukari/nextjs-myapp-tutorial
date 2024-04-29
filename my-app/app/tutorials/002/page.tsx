import { Metadata } from "next";
import { Button, Typography } from "@mui/material";

export const metadata: Metadata = {
  title: "Single Button",
};

// TODO: display: block が機能しない事象の調査と解消
function MyButton() {
  return (
    <>
      <Button className="block" variant="text">
        text button
      </Button>
      <Button className="block" variant="contained">
        contained button
      </Button>
      <Button className="block" variant="outlined">
        outlined button
      </Button>
    </>
  );
}

export default function Page() {
  return (
    <>
      <Typography variant="h3">Single Button</Typography>
      <MyButton />
    </>
  );
}
