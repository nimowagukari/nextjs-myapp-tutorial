"use client";

function MyButton({ name, handler }) {
  return (
    <button className="my-2 border-2 border-black block" onClick={handler}>
      {name}
    </button>
  );
}

export default function Page() {
  function handleClick(e: PointerEvent) {
    alert(e.target.textContent);
  }

  return (
    <>
      <h1>Passing handler as a component argument.</h1>
      <div className="mx-3 my-5">
        <MyButton name="buttonA" handler={handleClick} />
        <MyButton
          name="buttonB"
          handler={(e) => console.log(e.target.textContent)}
        />
      </div>
    </>
  );
}
