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
} from "@heroui/react";

export default function Navbar() {
  return (
    <Nav className="dark bg-[#0f0f0f] border-b-1 border-[#6e6e6e]">
      <NavbarBrand>Some Logo!</NavbarBrand>
      <NavbarContent>
        <NavbarItem>Thing 1</NavbarItem>
        <NavbarItem>Thing 2</NavbarItem>
        <NavbarItem>Thing 3</NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} href="/auth/login">
            Log In
          </Button>
        </NavbarItem>
        <NavbarItem>Sign up</NavbarItem>
      </NavbarContent>
    </Nav>
  );
}
