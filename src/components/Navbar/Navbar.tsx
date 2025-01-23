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
    <Nav
      className="dark bg-opacity-40 z-10 font-[family-name:var(--font-geist-mono)]"
      maxWidth="xl"
      height={64}
    >
      <NavbarBrand>
        <Image
          src="Company Logo White.svg"
          alt="Company logo"
          className="opacity-100 max-h-full h-full"
          height={64}
        />
        <p className="font-thin text-2xl">MKM Engineering</p>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Link href="/" underline="hover">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/about" underline="hover">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/contacts" underline="hover">
            Contacts
          </Link>
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
