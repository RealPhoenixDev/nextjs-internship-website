"use client";
// import { Button } from "@heroui/button";
// import { Button, Link } from "@heroui/react";
import {
  Navbar as Nav,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Link,
  Image,
} from "@heroui/react";

export default function Navbar() {
  return (
    <Nav className="dark bg-opacity-40 z-10" height={64}>
      <NavbarBrand>
        <Image src="Company Logo White.svg" alt="Company logo" className="" />
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent>
        <NavbarItem>
          <Link href="/">Home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/about">About Us</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/contacts">Contacts</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button variant="bordered" as={Link} href="/auth/login">
            Sign Up
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} href="/auth/login">
            Log In
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Nav>
  );
}
