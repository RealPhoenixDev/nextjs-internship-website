import { ReactNode } from "react";



export default function AuthLayout({children}:{children: ReactNode}) {

    return(
        <div className=" h-screen w-full flex justify-center items-center dark bg-background-50">
            <div className=" max-w-xl w-full h-fit flex flex-col items-center justify-center bg-background-100 rounded-2xl">
                {children}
            </div>
            
        </div>
    )
}