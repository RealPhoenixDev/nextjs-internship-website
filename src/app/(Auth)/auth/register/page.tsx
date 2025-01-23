import RegisterForm from "@/app/(Auth)/auth/components/register-form";

export default function RegisterPage() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center box-border my-16 font-[family-name:var(--font-geist-mono)]">
      <div className="w-4/5 h-4/5">
        <h1 className=" text-[2.8rem]">Create an account</h1>
        <span className=" text-sm ">
          Already have an Account?{" "}
          <a
            href="/auth/login"
            className="text-primary-500 underline hover:text-neutral-50"
          >
            Log In
          </a>
        </span>
        <RegisterForm />
      </div>
    </div>
  );
}
