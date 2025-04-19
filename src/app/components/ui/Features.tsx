import Image from 'next/image';

export default function Features(){
    return(
      

      <section className="mt-24 mb-10 text-center w-full">
      <h2 className="text-2xl font-semibold text-gray-900">Features</h2>
      <p className="text-gray-500 mt-2">Everything you need to succeed in trading</p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 ">
        <div className=" p-6 rounded-lg shadow-sm bg-gray-50 ">
          <div className="flex flex-col items-center mb-4"> <Image src="/features.png" alt="" width={45} height={45}  /></div>
          <h3 className="font-medium text-gray-900">Advanced Analytics</h3>
          <p className="text-sm text-gray-500 mt-2">Real-time market analysis and predictive modeling</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <div className=" flex flex-col items-center mb-4"> <Image src="/books.png" alt="" width={45} height={45}  /></div>
          <h3 className="font-medium text-gray-900">Educational Resources</h3>
          <p className="text-sm text-gray-500 mt-2">Comprehensive trading guides and tutorials</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <div className="flex flex-col items-center mb-4 "> <Image src="/community.png" alt="" width={45} height={45}  /></div>
          <h3 className="font-medium text-gray-900">Community Support</h3>
          <p className="text-sm text-gray-500 mt-2">Connect with experienced traders</p>
        </div>
      </div>
    </section>
    );
}