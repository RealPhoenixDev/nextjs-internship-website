import LoginForm from "@/app/(Auth)/auth/components/login-form";

export default function LoginPage() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center box-border my-16 font-[family-name:var(--font-geist-mono)]">
      <div className="w-4/5 h-4/5">
        <h1 className=" text-[2.8rem]">Login</h1>
        <span className=" text-sm ">
          Dont have an Account?{" "}
          <a
            href="/auth/register"
            className="text-primary-500 underline hover:text-neutral-50"
          >
            Sign In
          </a>
        </span>
        <LoginForm />
      </div>
    </div>
  );
}
