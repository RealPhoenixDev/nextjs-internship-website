import RegisterForm from '@/app/auth/components/register-form'

export default function RegisterPage() {
    
    return (
        <div className="w-full h-full flex flex-col items-center justify-center box-border my-16">
            <div className="w-4/5 h-4/5">
                <h1 className=" text-[3rem]">Create an account</h1>
                <span className=" text-sm ">Already have an Account? <a href="/auth/login" className='text-accent-700 underline hover:text-accent-900'>Log In</a></span>
                <RegisterForm />
            </div>
        </div>
    )
}