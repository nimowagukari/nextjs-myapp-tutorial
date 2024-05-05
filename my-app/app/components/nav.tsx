"use client";

import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { ListItemText } from "@mui/material";

export default function Nav({ tutorial_links }: { tutorial_links: string[] }) {
  const links = tutorial_links.map((link) => {
    return (
      <ListItem key={link} sx={{ px: 1, py: 0.5 }}>
        <Link href={"/tutorials/" + link}>tutorial{link}</Link>
      </ListItem>
    );
  });

  return (
    <>
      <List sx={{ fontSize: 12 }}>
        <ListItem sx={{ px: 1, py: 0.5 }}>
          <ListItemText>
            <Link href={"/"}>Home</Link>
          </ListItemText>
        </ListItem>
        {links}
      </List>
    </>
  );
}
