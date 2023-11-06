"use client";
import { Mode } from "@/app/page";
import { useContext } from "react";
import { Card } from "./ui/card";
import data from "@/constants/data";
import Image from "next/image";

const Services = () => {
  const {
    modeStyle: {
      card_color,
      bg_color,
      text_color,
      opposite_color,
      card_gray_content,
    },
    mode,
    setMode,
  }: any = useContext(Mode);
  return (
    <div
      className={` section-components  ${mode ? bg_color : "bg-white"} style={{
        color: text_color,
        fontFamily: "Jost",
      }} `}
      style={{
        color: text_color,
        fontFamily: "Jost",
      }}
    >
      <div className="flex flex-col md:py-20 py-10 items-center">
        <div className="flex flex-col justify-center items-center gap-2">
          <h2 className=" font-semibold section_title-text">WHAT I DO</h2>
          <p className="font-bold small-text">
            MY{" "}
            <span className=" text-text-green font-caveat font-bold medium-text">
              SERVICES
            </span>
          </p>
        </div>
        <div className="flex gap-4 w-full items-center justify-center mt-10 sm:flex-row flex-col">
          {data.my_services.map((service, index) => {
            return (
              <Card
                className="relative flex flex-1 flex-col max-w-[300px]  bg-dark-green shadow-md shadow-black p-8 gap-8"
                style={{ border: `1px solid ${mode ? "gray" : "black"}` }}
                key={index}
              >
                <p className="text-white small-text">{service.title}</p>
                <div className="mt-7">
                  <h3 className="text-white medium-text font-semibold">
                    {service.subtitle}
                  </h3>
                  <p
                    style={{ color: `${card_gray_content}` }}
                    className=" text-sm"
                  >
                    {service.desc}
                  </p>
                </div>
                <div className="flex">
                  <p className="text-white">See Pricing</p>
                  <a className=" text-white ml-2">{"->"}</a>
                </div>
                <Image
                  src="/card_bg_dots.svg"
                  width={70}
                  height={70}
                  alt="bg"
                  className="absolute right-[10px] bottom-[10px] opacity-[0.3]"
                />
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
