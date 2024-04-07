"use client";

function handleClick(e: PointerEvent) {
  alert(e.target!.textContent);
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
