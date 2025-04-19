"use client";
import { useState } from "react";

export default function Second() {
  const [selected, setSelected] = useState(0);
  const handleClick = (num: number) => {
    if (selected != num) {
      setSelected(num);
    } else {
      setSelected(0);
    }
  };

  return (
    <div className="flex flex-col p-[20px] justify-start w-[1230px] h-[200px] bg-white rounded-2xl gap-[15px]">
      <div className="flex flex-row">
        {/* <Image src="yourLogo.jpg" width={10} height={10} alt="" /> */}
        <div className="text-black text-[15px] font-bold "> Global Market </div>
      </div>
      <div className="flex flex-wrap gap-[10px]">
        <div
          onClick={() => {
            handleClick(1);
          }}
          className={`w-[220px] text-[14px] font-semibold cursor-pointer rounded-xl h-[50px]  flex flex-col justify-center items-center text-center 
            ${
              selected === 1
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-black"
            } `}
        >
          NYSE
        </div>
        <div
          onClick={() => {
            handleClick(2);
          }}
          className={`w-[220px] text-[14px] font-semibold cursor-pointer rounded-xl h-[50px]  flex flex-col justify-center items-center text-center 
            ${
              selected === 2
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-black"
            } `}
        >
          NASDAQ
        </div>
        <div
          onClick={() => {
            handleClick(3);
          }}
          className={`w-[220px] text-[14px] font-semibold cursor-pointer rounded-xl h-[50px]  flex flex-col justify-center items-center text-center 
            ${
              selected === 3
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-black"
            } `}
        >
          MSE
        </div>
        <div
          onClick={() => {
            handleClick(4);
          }}
          className={`w-[220px] text-[14px] font-semibold cursor-pointer rounded-xl h-[50px]  flex flex-col justify-center items-center text-center 
            ${
              selected === 4
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-black"
            } `}
        >
          JPX
        </div>
        <div
          onClick={() => {
            handleClick(5);
          }}
          className={`w-[220px] text-[14px] font-semibold cursor-pointer rounded-xl h-[50px]  flex flex-col justify-center items-center text-center 
            ${
              selected === 5
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-black"
            } `}
        >
          HKSE
        </div>
        <div
          onClick={() => {
            handleClick(6);
          }}
          className={`w-[220px] text-[14px] font-semibold cursor-pointer rounded-xl h-[50px]  flex flex-col justify-center items-center text-center 
            ${
              selected === 6
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-black"
            } `}
        >
          EURONEXT
        </div>
        <div
          onClick={() => {
            handleClick(7);
          }}
          className={`w-[220px] text-[14px] font-semibold cursor-pointer rounded-xl h-[50px]  flex flex-col justify-center items-center text-center 
            ${
              selected === 7
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-black"
            } `}
        >
          SIX
        </div>
        <div
          onClick={() => {
            handleClick(8);
          }}
          className={`w-[220px] text-[14px] font-semibold cursor-pointer rounded-xl h-[50px]  flex flex-col justify-center items-center text-center 
            ${
              selected === 8
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-black"
            } `}
        >
          TSX
        </div>
        <div
          onClick={() => {
            handleClick(9);
          }}
          className={`w-[220px] text-[14px] font-semibold cursor-pointer rounded-xl h-[50px]  flex flex-col justify-center items-center text-center 
            ${
              selected === 9
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-black"
            } `}
        >
          LSE
        </div>
      </div>
    </div>
  );
}
