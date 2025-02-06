"use client";
import RegisterForm from "@/app/(Auth)/auth/components/register-form";
import { redirect } from "next/navigation";
import Cookies from "js-cookie";
import { useEffect, useRef } from "react";
import { Link } from "@heroui/link";
export default function RegisterPage() {
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
        <h1 className=" text-[2.8rem]">Create an account</h1>
        <span className=" text-sm ">
          Already have an Account?{" "}
          <Link
            href="/auth/login"
            className="text-primary-500 underline hover:text-neutral-50"
          >
            Log In
          </Link>
        </span>
        <RegisterForm />
      </div>
    </div>
  );
}
