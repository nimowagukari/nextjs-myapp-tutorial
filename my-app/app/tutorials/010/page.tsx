import { Typography } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simple Layout 1",
};

export default function Page() {
  return (
    <>
      <header className="p-8 w-full h-[48px] bg-green-100">header</header>
      <div className="flex gap-10 h-[500px] bg-blue-100">
        <div className="max-md:hidden min-w-[300px] w-[300px] bg-red-100">
          nav
        </div>
        <div>
          main
          <Typography variant="h3">Simple Layout 1</Typography>
        </div>
      </div>
      <footer className="p-8 w-full h-[80px] bg-gray-100">footer</footer>
    </>
  );
}
