import { Typography } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hello World",
};

export default function Page() {
  return (
    <>
      <Typography variant="h3">Hello, Next.js!</Typography>
    </>
  );
}
