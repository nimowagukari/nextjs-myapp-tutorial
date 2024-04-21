"use client";

function handleClick(e: PointerEvent) {
  // https://zenn.dev/usma11dia0/articles/how-to-know-event-type#%E5%9E%8B%E6%8E%A8%E8%AB%96%E3%81%A7%E4%B8%8A%E6%89%8B%E3%81%8F%E3%81%84%E3%81%8B%E3%81%AA%E3%81%84%E5%A0%B4%E5%90%88
  alert((e.target as Element).textContent);
}

function MyButton({
  name,
  handler,
}: {
  name: string;
  handler: (e: any) => void;
}) {
  return (
    <button className="my-2 border-2 border-black block" onClick={handler}>
      {name}
    </button>
  );
}

export default function ButtonWithHandler() {
  return (
    <>
      <MyButton name="buttonA" handler={handleClick} />
      <MyButton
        name="buttonB"
        handler={(e) => console.log(e.target.textContent)}
      />
    </>
  );
}
