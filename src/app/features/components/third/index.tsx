import Link from "next/link";

export default function Third() {
  return (
    <div className="flex flex-col w-[1230px] h-max gap-[20px]">
      <div className="flex flex-row gap-[10px]  ">
        <div className="w-[500px] h-[70px] bg-white rounded-xl flex items-center flex-row gap-[15px] justify-start p-[10px]">
          <div className="h-8 w-8 rounded-full text-[15px] text-blue-500 font-semibold text-center bg-blue-200 flex justify-center items-center">
            1
          </div>
          <div className="text-[15px] text-black font-semibold">
            Screening Rules
          </div>
        </div>
        <div className="w-[500px] h-[70px] bg-white rounded-xl flex items-center flex-row gap-[15px] justify-start p-[10px]">
          <div className="h-8 w-8 rounded-full text-[15px] text-blue-500 font-semibold text-center bg-blue-200 flex justify-center items-center">
            2
          </div>
          
          <Link href="/portfolio" className="text-[15px] text-black font-semibold">Portfolio Management</Link>
            
        
        </div>
        <div className="w-[500px] h-[70px] bg-white rounded-xl flex items-center flex-row gap-[15px] justify-start p-[10px]">
          <div className="h-8 w-8 rounded-full text-[15px] text-blue-500 font-semibold text-center bg-blue-200 flex justify-center items-center">
            3
          </div>
          <div className="text-[15px] text-black font-semibold">
          Buy Trigger Rules
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-[10px]  ">
        <div className="w-[500px] h-[70px] bg-white rounded-xl flex items-center flex-row gap-[15px] justify-start p-[10px]">
          <div className="h-8 w-8 rounded-full text-[15px] text-blue-500 font-semibold text-center bg-blue-200 flex justify-center items-center">
            4
          </div>
          <div className="text-[15px] text-black font-semibold">
            Sell Trigger Rules
          </div>
        </div>
        <div className="w-[500px] h-[70px] bg-white rounded-xl flex items-center flex-row gap-[15px] justify-start p-[10px]">
          <div className="h-8 w-8 rounded-full text-[15px] text-blue-500 font-semibold text-center bg-blue-200 flex justify-center items-center">
            5
          </div>
          <div className="text-[15px] text-black font-semibold">
            Simulate
          </div>
        </div>
        <div className="w-[500px] h-[70px] bg-white rounded-xl flex items-center flex-row gap-[15px] justify-start p-[10px]">
          <div className="h-8 w-8 rounded-full text-[15px] text-blue-500 font-semibold text-center bg-blue-200 flex justify-center items-center">
            6
          </div>
          <div className="text-[15px] text-black font-semibold">
            Subscribe for Future Triggers
          </div>
        </div>
      </div>
    </div>
  );
}
