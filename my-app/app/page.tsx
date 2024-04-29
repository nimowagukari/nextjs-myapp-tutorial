import Link from "next/link";
import process from "process";
import fs from "fs";
import { Typography } from "@mui/material";

const tutorial_links = fs.readdirSync(process.cwd() + "/app/tutorials");

export default function Page() {
  const listItems = tutorial_links.map((link) => {
    return (
      <li key={link}>
        <Link href={"/tutorials/" + link}>tutorial{link}</Link>
      </li>
    );
  });

  return (
    <>
      <main>
        <Typography variant="h3">Hello, Next.js!</Typography>
        <div className="m-4">
          <ul title="Page Links">{listItems}</ul>
        </div>
      </main>
    </>
  );
}
