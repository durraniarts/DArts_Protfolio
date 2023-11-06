"use client";
import Header from "@/components/Header";
import { createContext, useState } from "react";
import isDark from "@/styles/index";
import Services from "@/components/Services";

export const modeChanged: any = createContext({});
export default function Home() {
  const [mode, setMode] = useState(true);

  const modeStyle = isDark(mode);

  return (
    <div
      style={{ backgroundColor: modeStyle.bg_color }}
      className=" m-auto flex flex-col items-center min-h-[100vh]  "
    >
      <modeChanged.Provider value={{ modeStyle, setMode, mode }}>
        <Header />
        <hr
          style={{ width: "80%", border: "1px #7f848a solid ", opacity: "0.5" }}
        />
        <Services />
        <hr
          style={{ width: "80%", border: "1px #7f848a solid ", opacity: "0.5" }}
        />
      </modeChanged.Provider>
    </div>
  );
}
