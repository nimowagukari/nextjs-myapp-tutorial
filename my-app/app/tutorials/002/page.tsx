import { Metadata } from "next";
import { Button } from "@mui/material";

export const metadata: Metadata = {
  title: "Single Button",
};

function MyButton() {
  return (
    <>
      <Button variant="text">text button</Button>
      <Button variant="contained">contained button</Button>
      <Button variant="outlined">outlined button</Button>
    </>
  );
}

export default function Page() {
  return (
    <>
      <h1>Single Button</h1>
      <MyButton />
    </>
  );
}
