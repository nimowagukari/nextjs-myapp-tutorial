import { Metadata } from "next";
import Image from "next/image";
import Pic from "../../../public/pose_dance_ukareru_woman.png";
import { Typography } from "@mui/material";

export const metadata: Metadata = {
  title: "View Image",
};

export default function Page() {
  return (
    <>
      <Typography variant="h3">View Image</Typography>
      <div className="w-[300px] h-[300px] relative">
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
