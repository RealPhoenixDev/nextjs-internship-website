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
  return (
    <div className="w-full h-screen bg-[url(https://4kwallpapers.com/images/wallpapers/green-forest-woods-trails-pathway-sun-rays-glade-scenery-3440x1440-5696.jpg)]">
      <div className="w-full h-full backdrop-blur-lg backdrop-brightness-75 box-border">
        <Nav className=" " maxWidth="xl">
          <NavbarBrand>
            <span className="font-bold text-lg">This is my Task Board</span>
          </NavbarBrand>
          <NavbarItem>sa</NavbarItem>
        </Nav>
        <div className="w-full grid grid-cols-5 gap-2 box-border">
          <div className="w-80 bg-neutral-950 backdrop-blur-md bg-opacity-80 min-h-64 rounded-xl m-8 grid grid-cols-1 content-start py-2 gap-3">
            <div className="w-full h-10 px-4 flex justify-between items-center">
              <p className="font-semibold text-neutral-300 text-sm">Buy list</p>
              <p className="font-bold">···</p>
            </div>
            <div className="bg-neutral-800 h-10 rounded-md mx-4 flex items-center pl-2">
              <p className="text-neutral-300 text-[0.9rem]">Tomateos x 3</p>
            </div>
            <div className="bg-neutral-800 h-10 rounded-md mx-4 flex items-center pl-2">
              <p className="text-neutral-300 text-[0.9rem]">Pasta</p>
            </div>
            <div className="bg-neutral-800 h-10 rounded-md mx-4 flex items-center pl-2">
              <p className="text-neutral-300 text-[0.9rem]">Dumplings</p>
            </div>
            <div className="bg-neutral-800 h-10 rounded-md mx-4 flex items-center pl-2">
              <p className="text-neutral-300 text-[0.9rem]">Potatoes x 1kg</p>
            </div>
            <div className="h-10 rounded-md mx-4 my-2 flex items-center pl-2 justify-center">
              <p className="text-sm text-neutral-400 font-semibold">
                + Add an item
              </p>
            </div>
          </div>
          <div className="w-80 bg-neutral-950 backdrop-blur-md bg-opacity-80 h-fit rounded-xl m-8 grid grid-cols-1 content-start py-2 gap-3">
            <div className="w-full h-10 px-4 flex justify-between items-center">
              <p className="font-semibold text-neutral-300 text-sm">
                Books to read
              </p>
              <p className="font-bold">···</p>
            </div>
            <div className="bg-neutral-800 h-10 rounded-md mx-4 flex items-center pl-2">
              <p className="text-neutral-300 text-[0.9rem]">
                George Orwell - 1984
              </p>
            </div>
            <div className="bg-neutral-800 h-10 rounded-md mx-4 flex items-center pl-2">
              <p className="text-neutral-300 text-[0.9rem]">
                Harper Lee - To Kill a Mockingbird
              </p>
            </div>
            <div className="bg-neutral-800 h-10 rounded-md mx-4 flex items-center pl-2">
              <p className="text-neutral-300 text-[0.9rem]">
                F. Scott Fitzgerald - The Great Gatsby
              </p>
            </div>
            <div className="h-6 rounded-md mx-4 my-2 flex items-center pl-2 justify-center">
              <p className="text-sm text-neutral-400 font-semibold">
                + Add an item
              </p>
            </div>
          </div>
          <div className="w-80 bg-neutral-950 backdrop-blur-md bg-opacity-80 h-fit rounded-xl m-8 grid grid-cols-1 content-start py-2 gap-3">
            <div className="w-full h-10 px-4 flex justify-between items-center">
              <p className="font-semibold text-neutral-300 text-sm">
                Books to read
              </p>
              <p className="font-bold">···</p>
            </div>
            <div className="bg-neutral-800 h-10 rounded-md mx-4 flex items-center pl-2">
              <p className="text-neutral-300 text-[0.9rem]">
                George Orwell - 1984
              </p>
            </div>
            <div className="bg-neutral-800 h-10 rounded-md mx-4 flex items-center pl-2">
              <p className="text-neutral-300 text-[0.9rem]">
                Harper Lee - To Kill a Mockingbird
              </p>
            </div>
            <div className="bg-neutral-800 h-10 rounded-md mx-4 flex items-center pl-2">
              <p className="text-neutral-300 text-[0.9rem]">
                F. Scott Fitzgerald - The Great Gatsby
              </p>
            </div>
            <div className="h-6 rounded-md mx-4 my-2 flex items-center pl-2 justify-center">
              <p className="text-sm text-neutral-400 font-semibold">
                + Add an item
              </p>
            </div>
          </div>
          <div className="w-80 bg-neutral-950 backdrop-blur-md bg-opacity-80 h-fit rounded-xl m-8 grid grid-cols-1 content-start py-2 gap-3">
            <div className="h-6 rounded-md mx-4 my-2 flex items-center pl-2 justify-center">
              <p className="text-sm text-neutral-400 font-semibold">
                + Add a List
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
