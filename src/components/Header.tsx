"use client";
import { modeChanged } from "@/app/page";
import Navbar from "./Navbar";
import { useContext } from "react";
import data from "@/constants/data";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const {
    modeStyle: { bg_color, text_color, opposite_color, card_gray_content },
    mode,
    setMode,
  }: any = useContext(modeChanged);
  const social = data.social_media;
  // console.log(social.map());

  return (
    <div
      className={` section-components  ${mode ? bg_color : "bg-white"} `}
      style={{
        color: text_color,
        fontFamily: "Jost",
      }}
    >
      <Navbar mode={mode} setMode={setMode} />

      {/* HEADER */}
      <header className="flex md:py-20 py-10  justify-center w-full  items-center overflow-hidden  ">
        <div className="flex lg:flex-row  flex-col-reverse lg:gap-4 gap-y-14 items-center justify-between w-full">
          <div className="flex flex-col flex-1 gap-4 w-full">
            <p className="font-semibold small-text">
              HELLO,<span className="text-text-green"> MY NAME IS</span>
            </p>
            <h1 className="large-text font-bold flex flex-col sm:gap-4 gap-2 lg:mt-4 mt-2">
              <span className=" text-text-green md:w-[460px] ">
                {data.NAME.map((item, index) => {
                  if (index < 3) return item + " ";
                })}
              </span>

              {data.NAME[3]}
            </h1>
            <p className="small-text font-semibold ">
              I AM{" "}
              <span className="medium-text font-caveat font-bold">
                {data.occupation}
              </span>
            </p>
            <p
              className="max-w-[450px] small-text"
              style={{ color: `${card_gray_content}` }}
            >
              {data.description}
            </p>
            <div className="flex gap-4 mt-4">
              {social.map((icon, index) => {
                return (
                  <Link href={icon.url} scroll={false} key={index}>
                    <Image
                      src={icon.path}
                      width={27}
                      height={27}
                      alt={icon.title}
                      style={{
                        filter: `${
                          mode ? "brightness(100)" : "brightness(0)"
                        } `,
                      }}
                    />
                  </Link>
                );
              })}
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <Button
                  className={` font-semibold hover:bg-transparent rounded-full shadow-md   bg-transparent text-[${opposite_color}]`}
                  style={{ border: `1px ${opposite_color} solid` }}
                >
                  Download CV
                </Button>
                <div
                  className={`border-t-2 w-10 h-0 `}
                  style={{ border: `1px ${opposite_color} solid` }}
                />
              </div>
              <a href="#skills" className="font-semibold">
                MY SKILLS
              </a>
            </div>
          </div>
          {/* SECOND SECTION */}
          <div className=" relative z-10  flex flex-col  flex-1  lg:items-center  justify-center items-stretch  h-fit ">
            <div className="dots  sm:w-[500px] sm:h-[500px] w-[400px] h-[400px] " />
            <Image
              src="/newdp.jpg"
              width={350}
              height={350}
              alt="dp"
              className="rounded-full"
            />
            {/* CARDS */}
            <div className=" relative xs:top-6 flex justify-between h-0 xs:flex-col xs:justify-center xs:items-center xs:gap-2">
              <div
                className={` py-2 flex justify-center  relative sm:top-[-120px]  sm:left-[-50px] top-[-70px] font-semibold rounded-full border w-[150px] h-[50px] bg-dark-green text-white `}
              >
                <div className="flex justify-center items-center gap-2">
                  <p className="flex font-bold text-base">
                    {data.Experience}{" "}
                    <span className="text-text-green ml-1">+</span>
                  </p>

                  <div className="flex flex-col text-xs">
                    YEARS OF{" "}
                    <span className="text-text-green ">EXPERIENCE</span>
                  </div>
                </div>
              </div>
              <div
                className={`py-2 flex justify-center relative  sm:top-[-80px] top-[-70px] font-semibold rounded-full border w-[150px] h-[50px] bg-dark-green text-white `}
              >
                <div className="flex justify-center items-center gap-2">
                  <p className="flex font-bold text-base">
                    {data.no_of_projects}{" "}
                    <span className="text-text-green ml-1">+</span>
                  </p>

                  <div className="flex flex-col text-xs">
                    COMPLETED <span className="text-text-green ">PROJECTS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
