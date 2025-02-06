import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className=" h-screen w-full bg-[url(/auth_bg.avif)] bg-no-repeat"
      style={{ backgroundSize: "200%" }}
    >
      <div className="w-full h-full backdrop-blur-3xl flex justify-center backdrop-contrast-[2] backdrop-saturate-[0.6] backdrop-brightness-75 items-center bg-[#000000cc]">
        <div className=" max-w-xl w-full h-fit flex flex-col items-center justify-center bg-[#060606] border-1 border-neutral-900 rounded-2xl">
          {children}
        </div>
      </div>
    </div>
  );
}
