import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MUI Navigation: Menu",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
