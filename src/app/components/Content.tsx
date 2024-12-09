import React from "react";
import {Plus_Jakarta_Sans} from 'next/font/google';
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiRadioCircleMarked } from "react-icons/bi";
import { FaGasPump } from "react-icons/fa6";
import { GrEmptyCircle } from "react-icons/gr";
import { IoPeople } from "react-icons/io5";
import { FcLike } from "react-icons/fc";
import { GoHeart } from "react-icons/go";

const plusJakartaSans = Plus_Jakarta_Sans ({subsets:["latin"]})

const ContentSection = () => {
  return (
    <div className={`${plusJakartaSans.className} w-[1440px] bg-gray-100 py-10 `}>
      <div className="container mx-auto flex flex-col items-center">
        {/* Hero Section */}
        <div className="flex grid-cols-1 md:grid-cols-2 gap-7 mb-10">
          <div className="bg-[#54A6FF] text-white rounded-lg w-[640px] h-[360px]  flex-col justify-center">
            <div>
              <h2 className="text-2xl font-semibold w-[240px] mb-4 mt-8 ml-6">The Best Platform for Car Rental</h2>
              <p className="mb-6 w-[270px] ml-6 py-2">Ease of doing a car rental safely and reliably. Of course at a low price.</p>
            </div>
            <button className="bg-[#3563E9] ml-6 text-white px-6 py-2 rounded-md font-medium self-start">Rental Car</button>
          <img src="/car1.png"
           alt="ads car1" 
           className="ml-40"/>
           </div>
           <div className="bg-[#3563E9] text-white rounded-lg w-[640px] h-[360px]  relative justify-center">
  <div className="flex flex-col justify-center ml-6">
    <h2 className="text-2xl font-semibold w-[240px] mb-4 mt-8 ml-6">Easy way to rent a car at a low price</h2>
    <p className="mb-6 w-[270px] ml-6 py-2">Providing cheap car rental services and safe and comfortable facilities.</p>
    <button className="bg-[#54A6FF] text-white ml-6 px-6 py-2 rounded-md font-medium self-start">
      Rental Car
    </button>
  </div>
  <img
    src="/car2.png"
    alt="ads car2"
    className="ml-52  w-[320px] h-auto object-contain"
  />
</div>
    </div>
    <div className="container mx-auto flex flex-col items-center">
        {/* Hero Section */}
        <div className="flex grid-cols-1 md:grid-cols-2 gap-7 mb-10">
          <div className="bg-white text-black rounded-lg w-[582px] h-[132px]  flex-col justify-center">
            <div>
                 <p className="text-[20px] font-semibold  mb-5 mt-8 ml-10"> 
                    <BiRadioCircleMarked className="text-green-700 -ml-5 mt-8 -mb-6"/>Pick Up</p>          
             
            </div >

            
           <div className=" flex grid-cols-3 ">
            
            <div><p className="text-black font-semibold ml-6 mb-1 -mt-2 ">Location</p>
            <p className="text-grey mb-1 ml-6 ">Select your city<RiArrowDropDownLine className="-mb-48 -mt-5 ml-32 border-r " /></p>
           </div>
          

          <div className=" flex grid-cols-3 ">
            <p className="text-black font-semibold ml-16 mb-1 -mt-2 text-start">Date</p>
            <p className="text-grey mb-1 -ml-10 mt-5">Select your date<RiArrowDropDownLine className="-mb-48 -mt-5 ml-32 border-r " /></p>
           
          </div>
          <div className=" flex grid-cols-3 ">
            <p className="text-black font-semibold ml-16 mb-1 -mt-2 text-start">Time</p>
            <p className="text-grey mb-1 -ml-10 mt-5">Select your time<RiArrowDropDownLine className="-mb-48 -mt-5 ml-32 " /></p>
           
          </div>
          
           </div>
</div>
    <div className="flex items-center justify-center  bg-gray-100">
      {/* Square Button */}
      <button className="bg-[#3563E9] text-white font-bold w-20 h-20 rounded-lg hover:bg-blue-600 active:bg-blue-700 shadow-md">
      <HiMiniArrowsUpDown className="ml-4 size-9 w-12 "/>
      </button>


           </div>
           <div className="bg-white text-black rounded-lg w-[582px] h-[132px]  relative justify-center">
  <div className="flex flex-col justify-center ml-6">
  <p className="text-[20px] font-semibold  mb-5 mt-8 ml-4"> 
  <BiRadioCircleMarked className="text-green-700 -ml-5 mt-0 -mb-6"/>Drop-Off</p>
  </div>
  <div className=" flex grid-cols-3 ">
            
            <div><p className="text-black font-semibold ml-6 mb-1 -mt-2 ">Location</p>
            <p className="text-grey mb-1 ml-6 ">Select your city<RiArrowDropDownLine className="-mb-48 -mt-5 ml-32 border-r " /></p>
           </div>
          

          <div className=" flex grid-cols-3 ">
            <p className="text-black font-semibold ml-16 mb-1 -mt-2 text-start">Date</p>
            <p className="text-grey mb-1 -ml-10 mt-5">Select your date<RiArrowDropDownLine className="-mb-48 -mt-5 ml-32 border-r " /></p>
           
          </div>
          <div className=" flex grid-cols-3 ">
            <p className="text-black font-semibold ml-16 mb-1 -mt-2 text-start">Time</p>
            <p className="text-grey mb-1 -ml-10 mt-5">Select your time<RiArrowDropDownLine className="-mb-48 -mt-5 ml-32 " /></p>
           
          </div>
          
           </div>
</div>

    </div>

    <section className="text-gray-600 body-font">
    <div className="w-[1440px] font-normal mx-auto  py-2  pl-16 flex flex-col sm:flex-row justify-between text-[#1A202C] text-sm">
            <p>Popular</p>
            <div className="flex space-x-11  font-semibold">
            <a href="View All" className=" pr-16 font-normal text-blue-700 hover:text-blue-600">
                View All
              </a>
             
             
            </div>
          </div>
  <br />
    <div className="flex flex-wrap mb-20">
      <div className=" flex  flex-wrap w-[60px] mb-6 lg:mb-0 ">
       
        
      
    </div>
    <div className="flex  -m-4 space-x-1">
      <div className=" flex flex-wrap  w-[304px] h-[388px] md:w-1/2 p-4">
        <div className="bg-white  p-6 ">
            <h3 className="text-black font-semibold">Koenigsegg </h3>
            <p className="text-gray-500 text-[10px]">Sport</p>
            
              <a href="like" className=" font-normal">
              <FcLike className="text-[20px] ml-52 -mt-8"/>
              </a>
            
          <br />
          <img
            className="h-20 rounded  object-center mb-6 mt-8"
            src="/pro1.png"
            alt="content"
          />
         <br />
         <br />
         <br />
          <h2 className="text-[10px] px-[5px] flex flex-wrap text-gray-500 font-sm   mb-4">
          <FaGasPump className="text-zinc-600"/>90L<GrEmptyCircle  className="ml-4"/> Manual <IoPeople className="ml-4"/>2people
          </h2>
          <h3 className="text-black flex flex-wrap">$99.00/ <p className="mt-2 text-gray-500 text-[10px]">day</p>
           <button className="bg-blue-500 text-[12px] text-white font-normal w-28 h-8 ml-8 hover:bg-[#3563E9] active:bg-[#3563E9] shadow-md">
        Rent Now
      </button> </h3>
         
        </div>
      </div>
      <div className=" flex flex-wrap w-[304px] h-[388px] md:w-1/2 p-4">
      <div className="bg-white p-6 ">
            <h3 className="text-black font-semibold">Nissan GT - R</h3>
            <p className="text-gray-500 text-[10px]">Sport</p>

            <a href="like" className=" font-normal">
              <GoHeart className="text-[20px] ml-52 -mt-8"/>
              </a>

          <br />
          <img
            className="h-20 rounded  object-center mb-6 mt-8"
            src="/pro2.png"
            alt="content"
          />
         <br />
         <br />
         <br />
          <h2 className="text-[10px] px-[5px] flex flex-wrap text-gray-500 font-sm   mb-4">
          <FaGasPump className="text-zinc-600"/>80L<GrEmptyCircle  className="ml-4"/> Manual <IoPeople className="ml-4"/>2people
          </h2>
          <h3 className="text-black flex flex-wrap">$96.00/ <p className="mt-2 text-gray-500 text-[10px]">day</p>
           <button className="bg-blue-500 text-[12px] text-white font-normal w-28 h-8 ml-8 hover:bg-[#3563E9] active:bg-[#3563E9] shadow-md">
        Rent Now
      </button> </h3>
          
        </div>
      </div>
      <div className=" flex flex-wrap w-[304px] h-[388px] md:w-1/2 p-4">
      <div className="bg-white p-6 ">
            <h3 className="text-black font-semibold">Rolls - Royce</h3>
            <p className="text-gray-500 text-[10px]">Sedan</p>
            <a href="like" className=" font-normal">
              <FcLike className="text-[20px] ml-52 -mt-8"/>
              </a>
          
          <br />
          <img
            className="h-20 rounded  object-center mb-6 mt-8"
            src="/pro3.png"
            alt="content"
          />
         <br />
         <br />
         <br />
          <h2 className="text-[10px] px-[5px] flex flex-wrap text-gray-500 font-sm   mb-4">
          <FaGasPump className="text-zinc-600"/>80L<GrEmptyCircle  className="ml-4"/> Manual <IoPeople className="ml-4"/>2people
          </h2>
          <h3 className="text-black flex flex-wrap">$96.00/ <p className="mt-2 text-gray-500 text-[10px]">day</p>
           <button className="bg-blue-500 text-[12px] text-white font-normal w-28 h-8 ml-8 hover:bg-[#3563E9] active:bg-[#3563E9] shadow-md">
        Rent Now
      </button> </h3>
          
        </div>
      </div>
      <div className=" flex flex-wrap w-[304px] h-[388px] md:w-1/2 p-4">
      <div className="bg-white p-6 ">
            <h3 className="text-black font-semibold">Nissan GT - R</h3>
            <p className="text-gray-500 text-[10px]">Sport</p>

            <a href="like" className=" font-normal">
              <GoHeart className="text-[20px] ml-52 -mt-8"/>
              </a>

          <br />
          <img
            className="h-20 rounded  object-center mb-6 mt-8"
            src="/pro4.png"
            alt="content"
          />
         <br />
         <br />
         <br />
          <h2 className="text-[10px] px-[5px] flex flex-wrap text-gray-500 font-sm   mb-4">
          <FaGasPump className="text-zinc-600"/>80L<GrEmptyCircle  className="ml-4"/> Manual <IoPeople className="ml-4"/>2people
          </h2>
          <h3 className="text-black flex flex-wrap">$96.00/ <p className="mt-2 text-gray-500 text-[10px]">day</p>
           <button className="bg-blue-500 text-[12px] text-white font-normal w-28 h-8 ml-8 hover:bg-[#3563E9] active:bg-[#3563E9] shadow-md">
        Rent Now
      </button> </h3>
          
        </div>
      </div>
  
    </div>
  </div>
</section>


<section className="text-gray-600 body-font">
    <div className="w-[1440px] font-normal mx-auto  py-2  pl-16 flex flex-col sm:flex-row justify-between text-[#1A202C] text-sm">
            <p>Recomendation Car</p>
            
          </div>
  <br />
    <div className="flex flex-wrap mb-20">
      <div className=" flex  flex-wrap w-[60px] mb-6 lg:mb-0">
       
        
      
    </div>
    <div className="flex  -m-4">
      <div className=" flex flex-wrap w-[304px] h-[388px] md:w-1/2 p-4">
        <div className="bg-white  p-10 ">
            <h3 className="text-black font-semibold">All New Rush </h3>
            <p className="text-gray-500 text-[10px]">Suv</p>
            
              <a href="like" className=" font-normal">
              <GoHeart className="text-[20px] ml-52 -mt-8"/>
              </a>
            
          <br />
          <img
            className="h-20 rounded  object-center mb-6 mt-8"
            src="/pro5.png"
            alt="content"
          />
         <br />
         <br />
         <br />
          <h2 className="text-[10px] px-[5px] flex flex-wrap text-gray-500 font-sm   mb-4">
          <FaGasPump className="text-zinc-600"/>70L<GrEmptyCircle  className="ml-4"/> Manual <IoPeople className="ml-4"/>6people
          </h2>
          <h3 className="text-black flex flex-wrap">$72.00/ <p className="mt-2 text-gray-500 text-[10px]">day</p>
           <button className="bg-blue-500 text-[12px] text-white font-normal w-28 h-8 ml-8 hover:bg-[#3563E9] active:bg-[#3563E9] shadow-md">
        Rent Now
      </button> </h3>
         
        </div>
      </div>
      <div className=" flex flex-wrap w-[304px] h-[388px] md:w-1/2 p-4">
      <div className="bg-white p-10 ">
            <h3 className="text-black font-semibold">CR  - V</h3>
            <p className="text-gray-500 text-[10px]">Suv</p>

            <a href="like" className=" font-normal">
              <FcLike className="text-[20px] ml-52 -mt-8"/>
              </a>

          <br />
          <img
            className="h-20 rounded  object-center mb-6 mt-8"
            src="/pro6.png"
            alt="content"
          />
         <br />
         <br />
         <br />
          <h2 className="text-[10px] px-[5px] flex flex-wrap text-gray-500 font-sm   mb-4">
          <FaGasPump className="text-zinc-600"/>80L<GrEmptyCircle  className="ml-4"/> Manual <IoPeople className="ml-4"/>6people
          </h2>
          <h3 className="text-black flex flex-wrap">$80.00/ <p className="mt-2 text-gray-500 text-[10px]">day</p>
           <button className="bg-blue-500 text-[12px] text-white font-normal w-28 h-8 ml-7 hover:bg-[#3563E9] active:bg-[#3563E9] shadow-md">
        Rent Now
      </button> </h3>
          
        </div>
      </div>
      <div className=" flex flex-wrap w-[304px] h-[388px] md:w-1/2 p-4">
      <div className="bg-white p-10 ">
            <h3 className="text-black font-semibold">All New Terios</h3>
            <p className="text-gray-500 text-[10px]">Suv</p>
            <a href="like" className=" font-normal">
              <GoHeart className="text-[20px] ml-52 -mt-8"/>
              </a>
          
          <br />
          <img
            className="h-20 rounded  object-center mb-6 mt-8"
            src="/pro7.png"
            alt="content"
          />
         <br />
         <br />
         <br />
          <h2 className="text-[10px] px-[5px] flex flex-wrap text-gray-500 font-sm   mb-4">
          <FaGasPump className="text-zinc-600"/>90L<GrEmptyCircle  className="ml-4"/> Manual <IoPeople className="ml-4"/>6people
          </h2>
          <h3 className="text-black flex flex-wrap">$74.00/ <p className="mt-2 text-gray-500 text-[10px]">day</p>
           <button className="bg-blue-500 text-[12px] text-white font-normal w-28 h-8 ml-8 hover:bg-[#3563E9] active:bg-[#3563E9] shadow-md">
        Rent Now
      </button> </h3>
          
        </div>
      </div>
      <div className=" flex flex-wrap w-[304px] h-[388px] md:w-1/2 p-4">
      <div className="bg-white p-10">
            <h3 className="text-black font-semibold">CR  - V</h3>
            <p className="text-gray-500 text-[10px]">Suv</p>

            <a href="like" className=" font-normal">
              <FcLike className="text-[20px] ml-52 -mt-8"/>
              </a>

          <br />
          <img
            className="h-20 rounded  object-center mb-6 mt-8"
            src="/pro8.png"
            alt="content"
          />
         <br />
         <br />
         <br />
          <h2 className="text-[10px] px-[5px] flex flex-wrap text-gray-500 font-sm   mb-4">
          <FaGasPump className="text-zinc-600"/>80L<GrEmptyCircle  className="ml-4"/> Manual <IoPeople className="ml-4"/>6people
          </h2>
          <h3 className="text-black flex flex-wrap">$80.00/ <p className="mt-2 text-gray-500 text-[10px]">day</p>
           <button className="bg-blue-500 text-[12px] text-white font-normal w-28 h-8 ml-7 hover:bg-[#3563E9] active:bg-[#3563E9] shadow-md">
        Rent Now
      </button> </h3>
          
        </div>
      </div>
  
    </div>
  </div>
</section>


<section className="text-gray-600 body-font">
   
  <br />
    <div className="flex flex-wrap mb-20">
      <div className=" flex  flex-wrap w-[60px] mb-6 lg:mb-0">
       
        
      
    </div>
    <div className="flex  -m-4 mr-6 space-x-1">
      <div className=" flex flex-wrap w-[304px] h-[388px] md:w-1/2 p-4">
        <div className="bg-white  p-10 ">
            <h3 className="text-black font-semibold">MG ZX Exclusice </h3>
            <p className="text-gray-500 text-[10px]">Hatchback</p>
            
              <a href="like" className=" font-normal">
              <FcLike className="text-[20px] ml-52 -mt-8"/>
              </a>
            
          <br />
          <img
            className="h-20 rounded  object-center mb-6 mt-8"
            src="/pro9.png"
            alt="content"
          />
         <br />
         <br />
         <br />
          <h2 className="text-[10px] px-[5px] flex flex-wrap text-gray-500 font-sm   mb-4">
          <FaGasPump className="text-zinc-600"/>70L<GrEmptyCircle  className="ml-4"/> Manual <IoPeople className="ml-4"/>4people
          </h2>
          <h3 className="text-black flex flex-wrap">$76.00/ <p className="mt-2 text-gray-500 text-[10px]">day</p>
           <button className="bg-blue-500 text-[12px] text-white font-normal w-28 h-8 ml-8 hover:bg-[#3563E9] active:bg-[#3563E9] shadow-md">
        Rent Now
      </button> </h3>
         
        </div>
      </div>
      <div className=" flex flex-wrap w-[304px] h-[388px] md:w-1/2 p-4">
      <div className="bg-white p-10 ">
            <h3 className="text-black font-semibold">New MG ZS</h3>
            <p className="text-gray-500 text-[10px]">Suv</p>

            <a href="like" className=" font-normal">
              < GoHeart className="text-[20px] ml-52 -mt-8"/>
              </a>

          <br />
          <img
            className="h-20 rounded  object-center mb-6 mt-8"
            src="/pro10.png"
            alt="content"
          />
         <br />
         <br />
         <br />
          <h2 className="text-[10px] px-[5px] flex flex-wrap text-gray-500 font-sm   mb-4">
          <FaGasPump className="text-zinc-600"/>80L<GrEmptyCircle  className="ml-4"/> Manual <IoPeople className="ml-4"/>6people
          </h2>
          <h3 className="text-black flex flex-wrap">$80.00/ <p className="mt-2 text-gray-500 text-[10px]">day</p>
           <button className="bg-blue-500 text-[12px] text-white font-normal w-28 h-8 ml-7 hover:bg-[#3563E9] active:bg-[#3563E9] shadow-md">
        Rent Now
      </button> </h3>
          
        </div>
      </div>
      <div className=" flex flex-wrap w-[304px] h-[388px] md:w-1/2 p-4">
      <div className="bg-white p-10 ">
            <h3 className="text-black font-semibold">MG ZX Excite</h3>
            <p className="text-gray-500 text-[10px]">Hatchback</p>
            <a href="like" className=" font-normal">
              <FcLike className="text-[20px] ml-52 -mt-8"/>
              </a>
          
          <br />
          <img
            className="h-20 rounded  object-center mb-6 mt-8"
            src="/pro11.png"
            alt="content"
          />
         <br />
         <br />
         <br />
          <h2 className="text-[10px] px-[5px] flex flex-wrap text-gray-500 font-sm   mb-4">
          <FaGasPump className="text-zinc-600"/>90L<GrEmptyCircle  className="ml-4"/> Manual <IoPeople className="ml-4"/>4people
          </h2>
          <h3 className="text-black flex flex-wrap">$74.00/ <p className="mt-2 text-gray-500 text-[10px]">day</p>
           <button className="bg-blue-500 text-[12px] text-white font-normal w-28 h-8 ml-8 hover:bg-[#3563E9] active:bg-[#3563E9] shadow-md">
        Rent Now
      </button> </h3>
          
        </div>
      </div>
      <div className=" flex flex-wrap w-[304px] h-[388px] md:w-1/2 p-4">
      <div className="bg-white p-10 ">
            <h3 className="text-black font-semibold">New MG ZS</h3>
            <p className="text-gray-500 text-[10px]">Suv</p>

            <a href="like" className=" font-normal">
              <GoHeart className="text-[20px] ml-52 -mt-8"/>
              </a>

          <br />
          <img
            className="h-20 rounded  object-center mb-6 mt-8"
            src="/pro12.png"
            alt="content"
          />
         <br />
         <br />
         <br />
          <h2 className="text-[10px] px-[5px] flex flex-wrap text-gray-500 font-sm   mb-4">
          <FaGasPump className="text-zinc-600"/>80L<GrEmptyCircle  className="ml-4"/> Manual <IoPeople className="ml-4"/>6people
          </h2>
          <h3 className="text-black flex flex-wrap">$80.00/ <p className="mt-2 text-gray-500 text-[10px]">day</p>
           <button className="bg-blue-500 text-[12px] text-white font-normal w-28 h-8 ml-7 hover:bg-[#3563E9] active:bg-[#3563E9] shadow-md">
        Rent Now
      </button> </h3>
          
        </div>
      </div>
  
    </div>
  </div>
</section>


<div className="flex justify-center items-center">
      <div className="flex items-center ">
        {/* Button */}
        <button className="px-7 py-2 bg-blue-500 text-white  rounded-sm shadow-md hover:bg-blue-600">
         Show More
        </button>



      </div>
    </div>

    </div>
    </div>
    </div>
          
  );
};

export default ContentSection;