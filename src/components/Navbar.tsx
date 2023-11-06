import React from "react";
import Image from "next/image";

const Navbar = ({ mode, setMode }: any) => {
  return (
    <nav className=" w-full flex  justify-center py-6">
      <div className=" max-w-[1440px] w-full  flex justify-between  items-center ">
        <h2 className=" medium-text font-jost font-semibold">DA</h2>
        <div>
          <button
            type="button"
            className={`${
              mode
                ? "bg-[#212832]  border-white"
                : "bg-[#ffff] border-[#212832]"
            } border rounded-full  w-7 h-7 flex justify-center m-auto items-center`}
            onClick={() => setMode(!mode)}
          >
            <Image
              src={`${mode ? "/bright.svg" : "/night.svg"}`}
              height={15}
              width={15}
              alt="night-mode"
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
