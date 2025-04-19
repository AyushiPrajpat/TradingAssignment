export default function TradingSimulatorPage() {
    return (
      <main className="min-h-screen bg-[#0d1117] text-white p-8 space-y-10">
        {/* Title and subtitle */}
        <div>
          <h1 className="text-2xl font-semibold">Trading Simulator</h1>
          <p className="text-sm text-gray-400">
            Test your trading strategies with our advanced simulation engine
          </p>
        </div>
  
        {/* Trigger cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#161b22] rounded-md p-4">
            <div className="flex justify-between items-center text-base font-medium mb-2">
              Buy Trigger <span className="text-green-400 text-xl">→</span>
            </div>
            <p className="text-sm text-gray-400">Enter buy trigger conditions…</p>
          </div>
  
          <div className="bg-[#161b22] rounded-md p-4">
            <div className="flex justify-between items-center text-base font-medium mb-2">
              Sell Trigger <span className="text-red-400 text-xl">→</span>
            </div>
            <p className="text-sm text-gray-400">Enter sell trigger conditions…</p>
          </div>
  
          <div className="bg-[#161b22] rounded-md p-4">
            <div className="flex justify-between items-center text-base font-medium mb-2">
              Portfolio Management <span className="text-blue-400 text-xl">→</span>
            </div>
            <p className="text-sm text-gray-400">Enter portfolio management rules…</p>
          </div>
        </div>
  
        {/* Simulation Settings */}
        <div className="bg-[#161b22] rounded-md p-4">
          <div className="mb-4">
            <h2 className="text-base font-medium">Simulation Settings</h2>
            <p className="text-sm text-gray-400">Configure your simulation parameters</p>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <label htmlFor="tokens" className="text-sm">Tokens:</label>
              <input
                id="tokens"
                type="number"
                placeholder="100"
                className="bg-white text-black rounded-md px-3 py-1 w-24"
              />
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm">
              ▶ Simulate
            </button>
          </div>
        </div>
  
        {/* Simulation Summary */}
        <div className="bg-[#161b22] rounded-md p-4 space-y-4">
          <div className="flex items-center gap-2 text-purple-400 font-medium text-base">
            ⏱ <span className="text-white">Simulation Summary</span>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#0d1117] border border-[#30363d] rounded-md p-4">
              <h3 className="text-sm font-medium mb-2">Performance Metrics</h3>
              <p className="text-sm h-[150px] text-gray-500">
                Stats and graphs will appear here after simulation
              </p>
            </div>
            <div className="bg-[#0d1117] border border-[#30363d] rounded-md p-4">
              <h3 className="text-sm font-medium mb-2">Simulation Orders</h3>
              <p className="text-sm h-[150px] text-gray-500">
                Trading orders will appear here after simulation
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  }
  