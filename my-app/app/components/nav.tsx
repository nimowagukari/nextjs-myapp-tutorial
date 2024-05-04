import fs from "fs";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import process from "process";
import { ListItemText } from "@mui/material";

const tutorial_links = fs.readdirSync(process.cwd() + "/app/tutorials");

export default function Nav() {
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
