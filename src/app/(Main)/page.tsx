"use client";
import { Form, Input, Button, Spacer, Image } from "@heroui/react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] dark items-center">
      <div className="flex flex-col w-full max-w-screen-xl ">
        <div className="w-full h-[85svh] flex flex-col justify-center items-center">
          <div className="flex justify-center xl:justify-start">
            <div className="flex flex-col w-full xl:w-1/2">
              <h1>
                <span className="font-bold text-5xl xl:text-6xl">
                  Innovative
                </span>
                <span className="font-bold text-5xl xl:text-6xl text-secondary-500">
                  {" "}
                  Software Solutions{" "}
                </span>
                <span className="font-bold text-5xl xl:text-6xl">
                  for a Smarter Future.
                </span>
              </h1>
              <h2 className="my-6 text-neutral-400 text-lg">
                Specializing in scalable software engineering for businesses of
                all sizes.
              </h2>
              <Form className="w-full max-w-xs " validationBehavior="native">
                <div className="flex">
                  <Input
                    isRequired
                    variant="bordered"
                    color="primary"
                    radius="sm"
                    size="lg"
                    errorMessage={({ validationDetails, validationErrors }) => {
                      if (validationDetails.typeMismatch) {
                        return "Please enter a valid email address";
                      }

                      return validationErrors;
                    }}
                    name="email"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Spacer x={2} />
                  <Button
                    color="secondary"
                    type="submit"
                    radius="sm"
                    size="lg"
                    className="px-4"
                  >
                    Contact Us
                  </Button>
                </div>
              </Form>
            </div>
          </div>
          <div className="absolute -top-20 lg:top-10 w-full h-full bg-center bg-no-repeat bg-[url('/looper-pattern.svg')] pointer-events-none "></div>
        </div>
        <div className="grid grid-cols-4 w-full gap-4">
          <div className="flex flex-col relative overflow-hidden h-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10  shadow-medium rounded-large transition-transform-background border-transparent bg-white/6 dark:bg-default-300/10 backdrop-blur-lg backdrop-saturate-[1.8] ">
            <h3 className="mt-6 px-4 font-bold">Expertise You Can Trust</h3>
            <p className="m-4 text-default-500">
              With years of experience in software engineering, we deliver
              reliable, scalable, and innovative solutions tailored to your
              business needs.
            </p>
          </div>
          <div className="flex flex-col relative overflow-hidden h-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10  shadow-medium rounded-large transition-transform-background border-transparent bg-white/6 dark:bg-default-300/10 backdrop-blur-lg backdrop-saturate-[1.8] ">
            <h3 className="mt-6 px-4 font-bold">Cutting-Edge Technology</h3>
            <p className="m-4 text-default-500">
              We leverage the latest technologies, including AI, cloud
              computing, and automation, to keep your business ahead of the
              competition.
            </p>
          </div>
          <div className="flex flex-col relative overflow-hidden h-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10  shadow-medium rounded-large transition-transform-background border-transparent bg-white/6 dark:bg-default-300/10 backdrop-blur-lg backdrop-saturate-[1.8] ">
            <h3 className="mt-6 px-4 font-bold">Client-Centered Approach</h3>
            <p className="m-4 text-default-500">
              Your success is our priority. We work closely with you to
              understand your goals and create solutions that drive real
              results.
            </p>
          </div>
          <div className="flex flex-col relative overflow-hidden h-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10  shadow-medium rounded-large transition-transform-background border-transparent bg-white/6 dark:bg-default-300/10 backdrop-blur-lg backdrop-saturate-[1.8] ">
            <h3 className="mt-6 px-4 font-bold">Proven Track Record</h3>
            <p className="m-4 text-default-500">
              From startups to enterprises, we&apos;ve built software that
              powers businesses worldwide. Let us turn your vision into reality.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col items-center my-24">
          <h2 className="text-xl text-default-500">Supported by</h2>
          <div className="flex gap-8">
            <Image src="/heroui.svg" alt="Company image" className=""></Image>
            <Image src="/next.svg" alt="Company image" className=""></Image>
            <Image
              src="/code-rabbit.svg"
              alt="Company image"
              className=""
            ></Image>
          </div>
        </div>
        <h1 className="text-5xl my-12">Our Sevices</h1>
        <div className="grid grid-cols-3 gap-8 w-[90%]">
          <div className=" justify-center h-full p-8 col-span-2 flex flex-col relative overflow-hidden text-foreground box-border outline-none  shadow-medium rounded-large transition-transform-background border-transparent bg-white/6 dark:bg-default-300/10 backdrop-blur-lg backdrop-saturate-[1.8]">
            <h1 className="text-2xl my-6">Custom Software Development</h1>
            <p>
              From concept to deployment, we build tailor-made software that
              fits your unique business requirements. Whether it&apos;s
              enterprise applications, automation tools, or custom integrations,
              we ensure seamless performance and scalability.
            </p>
          </div>
          <div className="">
            <Image
              src="https://libeo.com/wp-content/uploads/2021/07/developpement-logiciel-sur-mesure.png"
              alt="Image Here"
              className="object-contain brightness-[0.85] h-64 hue-rotate-60"
            />
          </div>
          <div className="">
            <Image
              src="https://cdni.iconscout.com/illustration/premium/thumb/cloud-computing-illustration-download-in-svg-png-gif-file-formats--data-center-web-business-and-communication-pack-illustrations-2477424.png?f=webp"
              alt="Image Here"
              className="object-contain brightness-[0.85] h-64 hue-rotate-90"
            />
          </div>
          <div className=" justify-center h-full p-8 col-span-2 flex flex-col relative overflow-hidden text-foreground box-border outline-none  shadow-medium rounded-large transition-transform-background border-transparent bg-white/6 dark:bg-default-300/10 backdrop-blur-lg backdrop-saturate-[1.8]">
            <h1 className="text-2xl my-6">Cloud Solutions</h1>
            <p>
              Leverage the power of the cloud with our secure and scalable cloud
              architecture. We specialize in AWS, Azure, and Google Cloud to
              optimize infrastructure, enhance security, and reduce operational
              costs.
            </p>
          </div>
          <div className=" justify-center h-full p-8 col-span-2 flex flex-col relative overflow-hidden text-foreground box-border outline-none  shadow-medium rounded-large transition-transform-background border-transparent bg-white/6 dark:bg-default-300/10 backdrop-blur-lg backdrop-saturate-[1.8]">
            <h1 className="text-2xl my-6">Web & Mobile App Development</h1>
            <p>
              We design and develop intuitive, high-performance applications for
              web and mobile platforms. Our expertise spans React, Angular,
              Flutter, Swift, and more, ensuring seamless user experiences
              across devices.
            </p>
          </div>
          <div className="">
            <Image
              src="https://www.infocratsweb.com/wp-content/uploads/2022/08/4428860.png"
              alt="Image Here"
              className="object-contain brightness-[0.85] h-64 hue-rotate-30"
            />
          </div>
          <div className="">
            <Image
              src="https://cdni.iconscout.com/illustration/premium/thumb/devops-illustration-download-in-svg-png-gif-file-formats--infinity-development-administration-application-testing-pack-design-illustrations-4829106.png?f=webp"
              alt="Image Here"
              className="object-contain brightness-[0.85] h-64 -hue-rotate-[2.2rad]"
            />
          </div>
          <div className=" justify-center h-full p-8 col-span-2 flex flex-col relative overflow-hidden text-foreground box-border outline-none  shadow-medium rounded-large transition-transform-background border-transparent bg-white/6 dark:bg-default-300/10 backdrop-blur-lg backdrop-saturate-[1.8]">
            <h1 className="text-2xl my-6">DevOps & Automation</h1>
            <p>
              Accelerate your development cycle with our DevOps and CI/CD
              automation expertise. We streamline deployment, optimize
              workflows, and enhance system reliability using cutting-edge tools
              like Docker, Kubernetes, and Terraform.
            </p>
          </div>
        </div>
        <div className="my-16">
          <h1 className="text-4xl my-8">Why Choose Us?</h1>
          <div className="grid grid-cols-3 w-full gap-6">
            <div className="p-2 flex flex-col relative overflow-hidden h-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10  shadow-medium rounded-large transition-transform-background border-transparent bg-white/6 dark:bg-default-300/10 backdrop-blur-lg backdrop-saturate-[1.8] ">
              <h3 className="mt-4 px-4 font-bold text-xl flex items-center gap-2">
                <div className="flex justify-center p-2 rounded-full items-center bg-secondary-100/80 text-pink-500">
                  <svg
                    aria-hidden="true"
                    fill="none"
                    focusable="false"
                    height="24"
                    role="presentation"
                    viewBox="0 0 24 24"
                    width="24"
                    className="text-pink-500"
                  >
                    <path
                      d="M18 18.86h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69c-.56-.56-1.33-.87-2.12-.87H6c-1.66 0-3-1.33-3-2.97V4.98c0-1.64 1.34-2.97 3-2.97h12c1.66 0 3 1.33 3 2.97v10.91c0 1.63-1.34 2.97-3 2.97Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeWidth="1.5"
                    ></path>
                    <path
                      d="M12 10a2.33 2.33 0 1 0 0-4.66A2.33 2.33 0 0 0 12 10ZM16 15.66c0-1.8-1.79-3.26-4-3.26s-4 1.46-4 3.26"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    ></path>
                  </svg>
                </div>
                Expert Team
              </h3>
              <p className="m-4 mt-2 text-default-500">
                Our developers, designers, and engineers bring years of industry
                experience to every project.
              </p>
            </div>
            <div className="p-2 flex flex-col relative overflow-hidden h-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10  shadow-medium rounded-large transition-transform-background border-transparent bg-white/6 dark:bg-default-300/10 backdrop-blur-lg backdrop-saturate-[1.8] ">
              <h3 className="mt-4 px-4 font-bold text-xl flex items-center gap-2">
                <div className="flex justify-center p-2 rounded-full items-center bg-secondary-100/80 text-pink-500">
                  <svg
                    aria-hidden="true"
                    fill="none"
                    focusable="false"
                    height="24"
                    role="presentation"
                    viewBox="0 0 24 24"
                    width="24"
                    className="text-pink-500"
                  >
                    <path
                      d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    ></path>
                    <path
                      d="M2 9C2 5.13 5.13 2 9 2L7.95 3.75"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    ></path>
                    <path
                      d="M13.7 4.44995L17.6799 6.74994L21.6199 4.45996"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    ></path>
                    <path
                      d="M17.6799 10.82V6.73999"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    ></path>
                    <path
                      d="M16.74 2.21L14.34 3.53996C13.8 3.83996 13.35 4.59995 13.35 5.21995V7.75999C13.35 8.37999 13.79 9.13998 14.34 9.43998L16.74 10.77C17.25 11.06 18.09 11.06 18.61 10.77L21.01 9.43998C21.55 9.13998 22 8.37999 22 7.75999V5.21995C22 4.59995 21.56 3.83996 21.01 3.53996L18.61 2.21C18.1 1.93 17.26 1.93 16.74 2.21Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    ></path>
                    <path
                      d="M2.34998 15.45L6.31998 17.7499L10.27 15.46"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    ></path>
                    <path
                      d="M6.31995 21.82V17.74"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    ></path>
                    <path
                      d="M5.39 13.21L2.99001 14.54C2.45001 14.84 2 15.5999 2 16.2199V18.76C2 19.38 2.44001 20.14 2.99001 20.44L5.39 21.77C5.9 22.06 6.73999 22.06 7.25999 21.77L9.66 20.44C10.2 20.14 10.65 19.38 10.65 18.76V16.2199C10.65 15.5999 10.21 14.84 9.66 14.54L7.25999 13.21C6.73999 12.93 5.9 12.93 5.39 13.21Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    ></path>
                  </svg>
                </div>
                Custom Solutions
              </h3>
              <p className="m-4 mt-2 text-default-500">
                We don&apos;t do one-size-fits-all. Every product is built to
                align with your goals and vision.
              </p>
            </div>
            <div className="p-2 flex flex-col relative overflow-hidden h-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10  shadow-medium rounded-large transition-transform-background border-transparent bg-white/6 dark:bg-default-300/10 backdrop-blur-lg backdrop-saturate-[1.8] ">
              <h3 className="mt-4 px-4 font-bold text-xl flex items-center gap-2">
                <div className="flex justify-center p-2 rounded-full items-center bg-secondary-100/80 text-pink-500">
                  <svg
                    aria-hidden="true"
                    fill="none"
                    focusable="false"
                    height="24"
                    role="presentation"
                    viewBox="0 0 24 24"
                    width="24"
                    className="text-pink-500"
                  >
                    <path
                      d="M3.5 20.5c.83.83 2.17.83 3 0l13-13c.83-.83.83-2.17 0-3-.83-.83-2.17-.83-3 0l-13 13c-.83.83-.83 2.17 0 3ZM18.01 8.99l-3-3"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    ></path>
                    <path
                      d="M8.5 2.44 10 2l-.44 1.5L10 5l-1.5-.44L7 5l.44-1.5L7 2l1.5.44ZM4.5 8.44 6 8l-.44 1.5L6 11l-1.5-.44L3 11l.44-1.5L3 8l1.5.44ZM19.5 13.44 21 13l-.44 1.5L21 16l-1.5-.44L18 16l.44-1.5L18 13l1.5.44Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                Cutting-Edge Technologies
              </h3>
              <p className="m-4 mt-2 text-default-500">
                From AI and blockchain to cloud computing and IoT, we stay ahead
                of the curve.
              </p>
            </div>
            <div className="p-2 flex flex-col relative overflow-hidden h-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10  shadow-medium rounded-large transition-transform-background border-transparent bg-white/6 dark:bg-default-300/10 backdrop-blur-lg backdrop-saturate-[1.8] ">
              <h3 className="mt-4 px-4 font-bold text-xl flex items-center gap-2">
                <div className="flex justify-center p-2 rounded-full items-center bg-secondary-100/80 text-pink-500">
                  <svg
                    aria-hidden="true"
                    fill="none"
                    focusable="false"
                    height="24"
                    role="presentation"
                    viewBox="0 0 24 24"
                    width="24"
                    className="text-pink-500"
                  >
                    <path
                      d="M6.09 13.28h3.09v7.2c0 1.68.91 2.02 2.02.76l7.57-8.6c.93-1.05.54-1.92-.87-1.92h-3.09v-7.2c0-1.68-.91-2.02-2.02-.76l-7.57 8.6c-.92 1.06-.53 1.92.87 1.92Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeWidth="1.5"
                    ></path>
                  </svg>
                </div>
                Agile & Efficient
              </h3>
              <p className="m-4 mt-2 text-default-500">
                We follow an agile approach, ensuring faster delivery without
                compromising on quality.
              </p>
            </div>
            <div className="p-2 flex flex-col relative overflow-hidden h-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10  shadow-medium rounded-large transition-transform-background border-transparent bg-white/6 dark:bg-default-300/10 backdrop-blur-lg backdrop-saturate-[1.8] ">
              <h3 className="mt-4 px-4 font-bold text-xl flex items-center gap-2">
                <div className="flex justify-center p-2 rounded-full items-center bg-secondary-100/80 text-pink-500">
                  <svg
                    aria-hidden="true"
                    fill="none"
                    focusable="false"
                    height="24"
                    role="presentation"
                    viewBox="0 0 24 24"
                    width="24"
                    className="text-pink-500"
                  >
                    <path
                      d="m20.96 17.84-1.63.55c-.45.15-.81.5-.96.96l-.55 1.63c-.47 1.41-2.45 1.38-2.89-.03L13.08 15c-.36-1.18.73-2.28 1.9-1.91l5.96 1.85c1.4.44 1.42 2.43.02 2.9Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    ></path>
                    <path
                      d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    ></path>
                  </svg>
                </div>
                Proven Track Record
              </h3>
              <p className="m-4 mt-2 text-default-500">
                Startups, enterprises, and Fortune 500 companies rely on us to
                bring their ideas to life.
              </p>
            </div>
            <div className="p-2 flex flex-col relative overflow-hidden h-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10  shadow-medium rounded-large transition-transform-background border-transparent bg-white/6 dark:bg-default-300/10 backdrop-blur-lg backdrop-saturate-[1.8] ">
              <h3 className="mt-4 px-4 font-bold text-xl flex items-center gap-2">
                <div className="flex justify-center p-2 rounded-full items-center bg-secondary-100/80 text-pink-500">
                  <svg
                    aria-hidden="true"
                    fill="none"
                    focusable="false"
                    height="24"
                    role="presentation"
                    viewBox="0 0 24 24"
                    width="24"
                    className="text-pink-500"
                  >
                    <path
                      d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeWidth="1.5"
                    ></path>
                    <path
                      d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeWidth="1.5"
                    ></path>
                    <path
                      d="M10 13L8 15L10 17"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeWidth="1.5"
                    ></path>
                    <path
                      d="M14 13L16 15L14 17"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeWidth="1.5"
                    ></path>
                  </svg>
                </div>
                End-to-End Support
              </h3>
              <p className="m-4 mt-2 text-default-500">
                From ideation to launch (and beyond), we stand by you at every
                step.
              </p>
            </div>
          </div>
        </div>

        <div className="h-screen"></div>
      </div>
    </div>
  );
}
