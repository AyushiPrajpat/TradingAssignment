import CalculatorCard from "@/app/components/CalculatorCard";
import Features from "./components/ui/Features";

export default function Home() {
  return (
    <main className="flex flex-col w-full ">
      {/* Top Section: Heading + Calculator */}
      <div className="px-4 md:px-20 py-16 h-[550px] bg-gray-50 ">
      <section className="flex flex-col md:flex-row justify-between items-center  gap-12 ">
        {/* Left Content */}
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Dynamic Returns <br /> Calculator
          </h1>
          <p className="mt-4 text-gray-600 text-md">
            Calculate your potential returns with our advanced trading analytics platform. Make informed decisions with real-time data and comprehensive analysis tools.
          </p>
        </div>

        {/* Right Content - Calculator */}
        <CalculatorCard />
      </section>
      </div>
      <Features/>
     
    </main>
  );
}
