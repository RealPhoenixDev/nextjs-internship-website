"use client";
import Cookies from "js-cookie";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    Cookies.remove("session_token");
    Cookies.remove("access_token");
    redirect("/");
  }, []);
}
