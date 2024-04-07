import Link from "next/link";

const tutorial_links = [
  { id: 1, href: "./tutorials/001" },
  { id: 2, href: "./tutorials/002" },
  { id: 3, href: "./tutorials/003" },
  { id: 4, href: "./tutorials/004" },
];

export default function Page() {
  const listItems = tutorial_links.map((link) => {
    return (
      <li key={link.id}>
        <Link href={link.href}>tutorial{link.id}</Link>
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
