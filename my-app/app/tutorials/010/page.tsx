import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { Typography } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simple Layout 1",
};

export default function Page() {
  return (
    <>
      <header className="flex w-full h-[64px] bg-green-200">
        <div className="w-[64px] md:hidden content-center m-auto">
          <IconButton size="large">
            <MenuIcon />
          </IconButton>
        </div>
        <div className="w-full">header</div>
      </header>
      <div className="flex h-[500px] bg-gray-200">
        <div className="max-md:hidden min-w-[300px] w-[300px] p-4 bg-red-200">
          nav
        </div>
        <div className="w-full p-4 bg-blue-200">
          main
          <Typography variant="h3">Simple Layout 1</Typography>
        </div>
      </div>
      <footer className="p-8 w-full h-[80px] bg-amber-200">footer</footer>
    </>
  );
}
