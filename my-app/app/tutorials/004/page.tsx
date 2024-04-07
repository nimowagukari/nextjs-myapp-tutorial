import { Metadata } from "next";
import ButtonWithHandler from "./func";

export const metadata: Metadata = {
  title: "Passing handler as a component argument",
};

export default function Page() {
  return (
    <>
      <h1>Passing handler as a component argument.</h1>
      <div className="mx-3 my-5">
        <ButtonWithHandler />
      </div>
    </>
  );
}
