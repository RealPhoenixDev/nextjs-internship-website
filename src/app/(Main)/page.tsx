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
              From startups to enterprises, we've built software that powers
              businesses worldwide. Let us turn your vision into reality.
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
              fits your unique business requirements. Whether it's enterprise
              applications, automation tools, or custom integrations, we ensure
              seamless performance and scalability.
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
        <div className="h-screen"></div>
      </div>
    </div>
  );
}
