"use client";
import LoginForm from "@/app/(Auth)/auth/components/login-form";
import { Link } from "@heroui/link";
import Cookies from "js-cookie";
import { redirect } from "next/navigation";
import { useEffect, useRef } from "react";

export default function LoginPage() {
  const isMounted = useRef(false);

  if (!isMounted.current) {
    if (Cookies.get("session_token")) {
      redirect("/");
    }
  }
  useEffect(() => {
    isMounted.current = true;
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center box-border my-16 font-[family-name:var(--font-geist-mono)]">
      <div className="w-4/5 h-4/5">
        <Link
          href="/"
          className=" text-sm text-primary-500 underline hover:text-neutral-50"
        >
          {"<-Home"}
        </Link>
        <h1 className=" text-[2.8rem]">Login</h1>
        <span className=" text-sm ">
          Dont have an Account?{" "}
          <Link
            href="/auth/register"
            className="text-primary-500 underline hover:text-neutral-50"
          >
            Sign In
          </Link>
        </span>
        <LoginForm />
      </div>
    </div>
  );
}
