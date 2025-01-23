import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className=" h-screen w-full flex justify-center items-center dark">
      <div className=" max-w-xl w-full h-fit flex flex-col items-center justify-center bg-neutral-950 rounded-2xl">
        {children}
      </div>
    </div>
  );
}
