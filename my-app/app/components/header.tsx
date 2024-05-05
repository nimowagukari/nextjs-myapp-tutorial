"use client";

import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Nav from "./nav";

export default function Header({
  tutorial_links,
}: {
  tutorial_links: string[];
}) {
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  return (
    <header className="flex w-full h-[64px] bg-green-200">
      <div className="w-[64px] md:hidden content-center m-auto">
        <IconButton size="large" onClick={() => toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
        <Drawer open={open} onClose={() => toggleDrawer(false)}>
          <div className="w-[200px]">
            <Nav tutorial_links={tutorial_links} />
          </div>
        </Drawer>
      </div>
      <div className="w-full">header</div>
    </header>
  );
}
