"use client";

import { MouseEventHandler, useState } from "react";

/* 
  ボタンをグリッド上に配置
  最初の行・列のボタンは、その行・列の値を一律で１増やす
*/

function MyButton({
  count,
  handleClick,
}: {
  count: number;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      className="block border-4 border-black px-2 py-1"
      onClick={handleClick}
    >
      count: {count}
    </button>
  );
}

type buttonState = {
  count: number;
  setCount: any;
  handleClick?: void;
};

export default function Page() {
  const numOfButtons = 9;
  const buttonStates: buttonState[] = [];
  const [count, setCount] = useState(0);
  for (let i = 0; i < numOfButtons; i++) {
    buttonStates.push({ count: count, setCount: setCount });
  }
  const MyButtons = new Array(numOfButtons).fill(0).map((_, i) => {
    const handleClick = () => {
      buttonStates[i].setCount(buttonStates[i].count + 1);
    };
    return (
      <MyButton
        key={i}
        count={buttonStates[i].count}
        handleClick={handleClick}
      ></MyButton>
    );
  });
  return (
    <>
      <h1>UseState Tutorial</h1>
      <div className="m-4 grid grid-rows-3 grid-cols-3 gap-4 [&>*:nth-child(-n+1)]:bg-green-500 [&>*:nth-child(3n+4)]:bg-red-500 [&>*:nth-child(n+2):nth-child(-n+3)]:bg-blue-500">
        {MyButtons}
      </div>
    </>
  );
}
