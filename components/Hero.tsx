import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerationEffect";
import MagicButton from "./ui/MagicButton";
import { IoIosSend } from "react-icons/io";
import Link from "next/link"; // Import Link from next/link instead of react-router-dom

const Hero = () => {
    return (
        <div className="pb-20 pt-10">
            <div>
                <Spotlight
                    className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                    fill="white"
                />
                <Spotlight
                    className="top-10 left-full h-[80vh] w-[50vw]"
                    fill="purple"
                />
                <Spotlight className="top-28 left-80 h-[80vh] w-[50vw] " fill="blue" />
                <div className=" h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.04] bg-grid-black/[0.04] absolute top-0 left-0 flex items-center justify-center">
                    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
                </div>
                <div className="flex items-center justify-center relative my-20 z-10">
                    <div className=" max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center ">
                        <h2 className=" text-blue-100 uppercase tracking-widest text-xs text-center max-w-80">
                            dynamic web site with next js
                        </h2>
                        <TextGenerateEffect
                            className="dynamic-message text-center text-[40px] md:text-5xl lg:text-6xl capitalize"
                            words="Transforming pixels into perfection, one line of code at a time."
                        />
                        <p className="capitalize text-center md:tracking-wider mb-4 text-sm  md:text-lg lg:text-2xl">
                            hi! i&apos;m mohamed elmanily react developer
                        </p>
                        <Link href="#projects"> {/* Use Link from next/link */}
                            <MagicButton title='show my work' position='right' icon={<IoIosSend />} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
