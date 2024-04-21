import { Metadata } from "next";
import Image from "next/image";
import Pic from "../../../public/pose_dance_ukareru_woman.png";

export const metadata: Metadata = {
  title: "View Image",
};

export default function Page() {
  return (
    <>
      <h1>View Image</h1>
      <div className="w-[500px] h-[500px] relative">
        <Image
          src={Pic}
          alt="浮かれる人のイラスト(女性)"
          fill={true}
          className="object-contain"
        ></Image>
      </div>
    </>
  );
}
