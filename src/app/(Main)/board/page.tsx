"use client";
import GridLayout from "react-grid-layout";

export default function Page() {
  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 1 },
    { i: "b", x: 1, y: 0, w: 1, h: 1 },
    { i: "c", x: 4, y: 0, w: 1, h: 1 },
  ];
  return (
    <div className="w-full h-screen">
      <div>a</div>
      <GridLayout
        cols={12}
        height={60}
        width={1200}
        layout={layout}
        className="layout"
        rowHeight={60}
      >
        <div key="a" className="bg-neutral-400">
          tes 1
        </div>
        <div key="b" className="bg-neutral-500">
          tes 2
        </div>
        <div key="c" className="bg-neutral-600">
          tes 3
        </div>
      </GridLayout>
    </div>
  );
}
