import { Typography } from "@mui/material";
import clsx from "clsx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Filtering Array",
};

const ingredients = [
  { id: 1, type: "fruit", name: "apple" },
  { id: 2, type: "vegetable", name: "carrot" },
  { id: 3, type: "fruit", name: "orange" },
  { id: 4, type: "fruit", name: "banana" },
  { id: 5, type: "vegetable", name: "pumpkin" },
];

// 引数を受け入れるコンポーネントを作成
function IngredientList({
  id,
  type,
  name,
}: {
  id: number;
  type: string;
  name: string;
}) {
  return (
    // TODO: list-style-type が反映されない件の原因調査と解消
    <li
      key={id}
      className={clsx("text-2xl", { "text-red-500": type == "fruit" })}
    >
      {name}
    </li>
  );
}

export default function Page() {
  const listItems = ingredients.map((i) => {
    return <IngredientList key={i.id} id={i.id} type={i.type} name={i.name} />;
  });

  return (
    <>
      <Typography variant="h3">Filtering Array</Typography>
      <div className="ml-8">
        <ul className="list-disc">{listItems}</ul>
      </div>
    </>
  );
}
