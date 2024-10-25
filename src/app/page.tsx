import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#1D1E2C] min-h-screen flex flex-col items-center">
      <nav className="w-full py-6 flex justify-between items-center px-12">
        <h3 className="text-white font-bold text-xl"> BrandName</h3>
        <div className="flex space-x-8 text-white">
          <Link href= "/" className="hover:text-gray-400"> Home </Link>
          <Link href= "/" className="hover:text-gray-400"> Product </Link>
          <Link href= "/" className="hover:text-gray-400"> Pricing </Link>
          <Link href= "/" className="hover:text-gray-400"> Contact </Link>
        </div>
        <div className="flex space-x-6">
          <Link href ="/" className="text-white pt-2"> Login </Link>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"> JOIN US </button>
        </div>
      </nav>

      <div className="text-center mt-16">
        <p className="text-blue-400 text-sm mb-4"> Welcome </p>
        <h1 className="text-white text-5xl font-bold mb-6"> Selling on the <br/> internet like a pro</h1>
        <p className="text-gray-300 text-lg mb-10">
          We know how large objects will act, but things on a <br/>small scale just do not act that way.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-[#23A6F0]  border-[#23A6F0] text-white py-3 px-8 rounded-lg w-193"> Get Quote Now</button>
          <button className= " border border-[#23A6F0] text-[#23A6F0] py-3 px-8 rounded-lg w-162"> Learn More </button>
        </div>
      </div>

      
      
      
      
      <section className=" flex flex-row justify-items-center gap-10 mt-20 mb-20">
      
        <div className="bg-white p-6 w-80">
          <div className="w-12 h-12 bg-red-200 mb-4 rounded"></div>
          <h2 className="text-gray-800 font-bold text-xl mb-2"> training Courses </h2>
          <div className="bg-[#E74040] w-14 h-1 rounded"></div>
          <br/>
          <p className=" text-gray-600"> The gradual accumulation of information about atomic and small-scale behaviour...</p>
        </div>
        
         
        <div className="bg-white p-6 w-80">
          <div className="w-12 h-12 bg-green-200 mb-4 rounded"></div>
          <h2 className="text-gray-800 font-bold text-xl mb-2">2,769 online courses </h2>
          <div className="bg-[#E74040] w-14 h-1 rounded"></div>
          <br/>
          <p className=" text-gray-600"> The gradual accumulation of information about atomic and small-scale behaviour...</p>
        </div>

        <div className="bg-blue-500 p-6 w-80 text-white ">
          <div className="w-12 h-12 bg-white mb-4 rounded"></div>
          <h2 className="font=bold text-xl mb-2"> training courses </h2>
          <div className="bg-[#E74040] w-14 h-1 rounded"></div>
          <br/>
          <p> The gradual accumulation of information about atomic and small-scale behaviour...</p>
        </div>
      </section>
      
      


    </div>
  );
}
