import fs from "fs";
import process from "process";

export const tutorial_links: string[] = fs.readdirSync(
  process.cwd() + "/app/tutorials",
);
