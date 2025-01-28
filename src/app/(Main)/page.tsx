import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col justify-center items-center h-[90svh] w-full">
        <div className="flex">
          <div className="flex flex-col w-1/2">
            <h1 className="font-bold text-5xl">
              Innovative Software Solutions for a Smarter Future.
            </h1>
            <h2 className="my-6 text-neutral-400 text-lg">
              Specializing in scalable software engineering for businesses of
              all sizes.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
