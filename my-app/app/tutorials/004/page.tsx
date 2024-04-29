import { Metadata } from "next";
import ButtonWithHandler from "./func";
import { Typography } from "@mui/material";

export const metadata: Metadata = {
  title: "Passing handler as a component argument",
};

export default function Page() {
  return (
    <>
      <Typography variant="h3">
        Passing handler as a component argument
      </Typography>
      <div className="mx-3 my-5">
        <ButtonWithHandler />
      </div>
    </>
  );
}
