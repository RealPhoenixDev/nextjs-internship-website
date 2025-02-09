"use client";
import {
  Navbar as Nav,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/react";

export default function Page() {
  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 1 },
    { i: "b", x: 1, y: 0, w: 1, h: 1 },
    { i: "c", x: 4, y: 0, w: 1, h: 1 },
  ];
  return (
    <div className="w-full h-screen bg-[url(https://4kwallpapers.com/images/wallpapers/green-forest-woods-trails-pathway-sun-rays-glade-scenery-3440x1440-5696.jpg)]">
      <div className="w-full h-full backdrop-blur-lg backdrop-brightness-75 overflow-scroll box-border">
        <Nav className=" " maxWidth="xl">
          <NavbarBrand>
            <span className="font-bold text-lg">This is my navbar</span>
          </NavbarBrand>
          <NavbarItem>sa</NavbarItem>
        </Nav>
        <div className="w-full grid grid-cols-6 gap-8 box-border">
          <div className="w-96 bg-neutral-950 backdrop-blur-md bg-opacity-90 min-h-64 rounded-lg m-8 grid grid-cols-1 content-start py-2">
            <div className="w-full h-12 p-4  flex justify-between items-center">
              <p className="font-semibold">Buy list</p>
              <p className="font-bold">···</p>
            </div>
            <div className="bg-neutral-800 h-10 rounded-md mx-4 my-2 flex items-center pl-2">
              <p>Tomateos x 3</p>
            </div>
            <div className="bg-neutral-800 h-10 rounded-md mx-4 my-2 flex items-center pl-2">
              <p>Pasta</p>
            </div>
            <div className="bg-neutral-800 h-10 rounded-md mx-4 my-2 flex items-center pl-2">
              <p>Dumplings</p>
            </div>
            <div className="bg-neutral-800 h-10 rounded-md mx-4 my-2 flex items-center pl-2">
              <p>Potatoes x 1kg</p>
            </div>
            <div className="h-10 rounded-md mx-4 my-2 flex items-center pl-2 justify-center">
              <p className="text-sm text-neutral-40 font-[500]">
                + Add an item
              </p>
            </div>
          </div>
          <div className="w-96 bg-neutral-950 backdrop-blur-md bg-opacity-90 h-64 rounded-lg m-8"></div>
          <div className="w-96 bg-neutral-950 backdrop-blur-md bg-opacity-90 h-64 rounded-lg m-8"></div>
          <div className="w-96 bg-neutral-950 backdrop-blur-md bg-opacity-90 h-64 rounded-lg m-8"></div>
          <div className="w-96 bg-neutral-950 backdrop-blur-md bg-opacity-90 h-64 rounded-lg m-8"></div>
          <div className="w-96 bg-neutral-950 backdrop-blur-md bg-opacity-90 h-64 rounded-lg m-8"></div>
        </div>
      </div>
    </div>
  );
}
