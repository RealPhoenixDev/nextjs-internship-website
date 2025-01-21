import LoginForm from "@/app/auth/components/login-form"


export default function LoginPage() {
    
    return(
        <div className="w-full h-full flex flex-col items-center justify-center my-16">
        <div className="w-4/5">
            <h1 className=" text-[3rem]">Sign In</h1>
            <span className=" text-sm ">Dont have an Account? <a href="/auth/register" className='text-accent-700 underline hover:text-accent-900'>Create one</a></span>
            <LoginForm />
        </div>
    </div>
    )
}