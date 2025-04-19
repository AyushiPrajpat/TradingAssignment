"use client";
import Image from "next/image";
import { useState } from "react";

export default function First() {
  const [check, setCheck] = useState(0);

  const handleClick = (num: number) => {
    if (check != num) {
      setCheck(num);
    } else {
      setCheck(0);
    }
  };

  return (
    <div className="flex flex-row justify-center gap-[30px]  ">
      <div className="flex flex-col justify-start p-[20px] w-[600px] h-[350px] gap-[10px] rounded-2xl bg-white">
        <div className="flex flex-row">
          {/* <Image src="yourLogo.jpg" width={10} height={10} alt="" /> */}
          <div className="text-black text-[15px] font-bold ">
            {" "}
            Build Your Strategy
          </div>
        </div>
        <div className="flex flex-row gap-[10px]">
          <div className="flex flex-col p-[10px] h-[150px] gap-[10px] w-full border-2 border-b-gray-200 rounded-2xl">
            <div className="text-black text-[13px] font-bold ">
              Buy Criteria
            </div>
            <div className="flex flex-row gap-[5px]">
              <Image
                onClick={() => {
                  handleClick(1);
                }}
                src={
                  check === 1
                    ? "/svgs/SELECTED_CHECKBOX.svg"
                    : "/svgs/CHECKBOX.svg"
                }
                className="cursor-pointer"
                width={12}
                height={8}
                alt=""
              />

              <div className="mt-[1px] text-[12px] text-black font-semibold">
                N-Day Moving Avg. `&gt;` Last Open{" "}
              </div>
            </div>
            <div className="flex flex-row gap-[5px]">
              <Image
                onClick={() => {
                  handleClick(2);
                }}
                src={
                  check === 2
                    ? "/svgs/SELECTED_CHECKBOX.svg"
                    : "/svgs/CHECKBOX.svg"
                }
                className="cursor-pointer"
                width={12}
                height={8}
                alt=""
              />

              <div className="mt-[1px] text-[12px] text-black font-semibold">
                Top X, N Day Top Gainers 
              </div>
            </div>
            <div className="flex flex-row gap-[5px]">
              <Image
                onClick={() => {
                  handleClick(3);
                }}
                src={
                  check === 3
                    ? "/svgs/SELECTED_CHECKBOX.svg"
                    : "/svgs/CHECKBOX.svg"
                }
                className="cursor-pointer"
                width={12}
                height={8}
                alt=""
              />

              <div className="mt-[1px] text-[12px] text-black font-semibold">
                Last-Close `&gt;` N-Day High{" "}
              </div>
            </div>
          </div>
          <div className="flex flex-col p-[10px] h-[150px] gap-[10px] w-full border-2 border-b-gray-200 rounded-2xl">
            <div className="text-black text-[13px] font-bold ">
              Sell Criteria
            </div>
            <div className="flex flex-row gap-[5px]">
              <Image
                onClick={() => {
                  handleClick(4);
                }}
                src={
                  check === 4
                    ? "/svgs/SELECTED_CHECKBOX.svg"
                    : "/svgs/CHECKBOX.svg"
                }
                className="cursor-pointer"
                width={12}
                height={8}
                alt=""
              />

              <div className="mt-[1px] text-[12px] text-black font-semibold">
                Traget Profit: X%{" "}
              </div>
            </div>
            <div className="flex flex-row gap-[5px]">
              <Image
                onClick={() => {
                  handleClick(5);
                }}
                src={
                  check === 5
                    ? "/svgs/SELECTED_CHECKBOX.svg"
                    : "/svgs/CHECKBOX.svg"
                }
                className="cursor-pointer"
                width={12}
                height={8}
                alt=""
              />

              <div className="mt-[1px] text-[12px] text-black font-semibold">
                Stop Loss: Y%
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start p-[20px] w-[600px] h-[350px] gap-[10px] rounded-2xl bg-white">
        <div className="flex flex-row">
          {/* <Image src="yourLogo.jpg" width={10} height={10} alt="" /> */}
          <div className="text-black text-[15px] font-bold ">
            {" "}
            Backtest Results
          </div>
        </div>
        <div className="flex flex-row justify-center items-center rounded-2xl w-full h-[180px] bg-gray-100 text-[14px] text-center text-gray-400">
          Performance Chart
        </div>
        <div className="flex flex-row justify-between w-full">
          <div className="text-[13px] text-black font-semibold">
            Overall Returns:
          </div>
          <div className="text-[13px] text-green-400 font-semibold">+24.5%</div>
        </div>
        <div className="flex flex-row justify-between w-full">
          <div className="text-[13px] text-black font-semibold">
            Weekly win rate:
          </div>
          <div className="text-[13px] text-black font-semibold">68%</div>
        </div>
        <div className="flex flex-row justify-between w-full">
          <div className="text-[13px] text-black font-semibold">
            Max Drawdown:
          </div>
          <div className="text-[13px] text-red-500 font-semibold">-12.3%</div>
        </div>
      </div>
    </div>
  );
}
