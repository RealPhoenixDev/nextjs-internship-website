"use client";
// import { Button } from "@heroui/button";
// import { Button, Link } from "@heroui/react";
import Cookies from "js-cookie";
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
  Dropdown,
  DropdownItem,
  DropdownTrigger,
  DropdownMenu,
  Avatar,
} from "@heroui/react";
import { useEffect, useState } from "react";
import axios from "axios";

function isLoggedIn() {
  if (Cookies.get("session_token")) {
    console.log("logged in");
  } else {
    console.log("not logged in");
  }
}

export default function Navbar() {
  const [user, setUser] = useState(false);
  const [username, setUsername] = useState("");
  const [name, setName] = useState({});

  useEffect(() => {
    if (Cookies.get("session_token")) {
      setUser(true);
      const access_token = Cookies.get("access_token");
      axios
        .get("/api/user/username", {
          params: { access_token: access_token },
        })
        .catch((err) => {
          console.log(err);
        })
        .then((res) => {
          if (res) {
            setUsername(res.data.username);
          }
        });
      axios
        .get("/api/user/name", {
          params: { access_token: access_token },
        })
        .catch((err) => {
          console.log(err);
        })
        .then((res) => {
          if (res) {
            setName(res.data);
          }
        });
    }
  }, []);

  return (
    <Nav
      className="bg-opacity-40 z-20 font-[family-name:var(--font-geist-mono)]"
      maxWidth="xl"
      height={64}
    >
      <NavbarBrand>
        <Image
          src="/Company Logo White.svg"
          alt="Company logo"
          className=" max-h-full h-full"
          height={64}
          disableAnimation={true}
        />
        <p className="font-thin text-2xl">MKM Engineering</p>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Link href="/" underline="hover" color="foreground">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/about" underline="hover" color="foreground">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/contacts" underline="hover" color="foreground">
            Contacts
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {!user && (
          <NavbarItem>
            <Button
              variant="bordered"
              as={Link}
              href="/auth/register"
              radius="sm"
            >
              Sign Up
            </Button>
          </NavbarItem>
        )}
        {!user && (
          <NavbarItem>
            <Button as={Link} href="/auth/login" color="secondary" radius="sm">
              Log In
            </Button>
          </NavbarItem>
        )}
        {user && (
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform "
                color="secondary"
                name={name.first_name}
                size="md"
              />
            </DropdownTrigger>
            <DropdownMenu
            // aria-label="Profile Actions"
            // variant="flat"
            // className="box-border data-[focus-visible=true]:z-10 shadow-medium rounded-large bg-default-800 "
            >
              <DropdownItem key="profile" href="/user/settings">
                Profile
              </DropdownItem>
              <DropdownItem key="settings">Settings</DropdownItem>
              <DropdownItem key="logout" color="danger" href="/auth/logout">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        )}
      </NavbarContent>
    </Nav>
  );
}
