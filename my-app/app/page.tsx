import Link from "next/link";
import process from "process";
import fs from "fs";

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
      <h1 className="text-4xl font-bold">Hello, Next.js!</h1>
      <div className="text-red-500">hogehoge</div>
      <ul title="Page Links">{listItems}</ul>
    </>
  );
}
