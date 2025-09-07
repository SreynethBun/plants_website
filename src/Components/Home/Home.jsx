import React from 'react'
import { FaRegCirclePlay } from "react-icons/fa6";
import Logo from '../../assets/images/Logo.png'
import { Navmenu } from '../mockData/Data';
import { FaStar } from "react-icons/fa";
import { IoStarHalf } from "react-icons/io5";
import Hero from '../../assets/images/hero.png'
import Review1 from '../../assets/images/review-4.jpg'
import { SellingData } from '../mockData/Data'
import { CusReview } from '../mockData/Data'
import { best02 } from '../mockData/Data'
import { FaOpencart } from "react-icons/fa";
import Pasted2 from '../../assets/images/fresh.png'
import Pasted from '../../assets/images/Pasted.png'

const Home = () => {
  return (
    <div className="w-full h-screen mt-70 ">
      <div className="grid md:grid-cols-2 grid-cols-1 relative">
                          <div className="flex flex-col text-white space-y-50">
                              <div className="px-6 md:px-10 space-y-10">
                                  <h1 className='md:text-[95px] text-5xl'>Breath Natureal</h1>
                                  <p className='text-lg md:text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                      incididunt ut labore et dolore magna aliqua.
                                  </p>
                                  <div className="flex flex-wrap gap-6 ">
                                      <div className='rounded-xl border p-2 px-7 text-2xl hover:bg-amber-600'>
                                          <span className='hover:cursor-pointer'>Explore</span>
                                      </div>
                                      <span className='flex gap-3 items-center'><FaRegCirclePlay size={20}/>Live Demo</span>
                                  </div>
                              </div>
                             <div className="flex flex-col md:w-[20rem] md:h-52 py-7 px-7 bg-white/5 text-white mx-10  rounded-3xl backdrop-blur-sm border border-stone-600 shadow-lg mt-10">
                                  <div className="relative flex">
                                      <img src={Review1} alt="" className='w-20 h-21 rounded-full'/>
                                      <div className="p-4">
                                          <h1>alena Patel</h1>
                                          <span className='flex text-amber-300'>
                                              <FaStar />
                                              <FaStar />
                                              <FaStar />
                                              <FaStar />
                                              <IoStarHalf />
                                          </span>
                                      </div>
                                  </div>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...</p>
                             </div>
                          </div>
                          <div className="px-10">
                              <div className="flex md:justify-end justify-center md:items-start mt-35 w-full">
                                  <div className="text-white border border-stone-600 rounded-4xl bg-white/5 h-[400px] md:w-[512px] md:h-[600px] p-10 space-y-5">
                                      <div className="flex flex-col space-y-6">
                                          <img src={Hero} alt="review-image" className="md:w-[500px] md:h-[500px] w-78 h-78 object-cover hover:scale-110 -translate-y-30 -translate-x-8"/>
                                          <div className="flex items-start justify-end flex-col py-40 md:py-70">
                                              <div className="space-y-6 -translate-y-85 md:-translate-y-[510px]">
                                              <h1 className="font-thin text-xl md:text-2xl">Trendy House Plant</h1>
                                              <p className="font-semibold text-2xl md:text-3xl">Calathea Plant</p>
                                              <button className="border border-white px-6 py-3 rounded-lg hover:bg-yellow-600 hover:underline transition">
                                              <h3 className="text-xl">Buy Now</h3>
                                              </button>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

              <div className="mt-20 md:mt-40 ">
                
                 <div className="px-10">
                   <div className="flex flex-col items-center justify-center">
                          <h1 className="text-3xl sm:text-5xl md:text-6xl text-white font-medium text-center">Our Trendy Plants</h1>
                      <div className="relative border border-stone-600 bg-white/8 w-full rounded-3xl md:rounded-[10rem] mt-20 md:mt-30 ">
                          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
                   
                              <div className="flex justify-center">
                                  <img src={Pasted} alt="Plant" className="w-74 h-74 md:w-[600px] md:h-[500px] object-cover hover:scale-105 transition md:-translate-y-20 -translate-y-15"/>
                              </div>
                              <div className="flex flex-col md:-translate-y-0 -translate-y-20 justify-center md:py-10 px-6 md:px-12 text-white space-y-5 text-center md:text-left">
                                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">For Small Decs Ai Plat</h1>
                                  <p className="text-base sm:text-lg md:text-xl ">
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                      incididunt ut labore et dolore magna aliqua
                                  </p>
                                  <p className="text-2xl sm:text-3xl md:text-4xl font-bold">Rs. 599/-</p>
                              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center md:justify-start">
                                  <button className="border text-base sm:text-lg md:text-xl py-2 sm:py-3 px-6 sm:px-10 rounded-xl hover:bg-amber-500/80 hover:underline transition">
                                      Explore
                                  </button>
                                  <button className="border p-2 sm:p-3 md:px-4 md:py-3 text-lg md:text-xl rounded-lg hover:bg-amber-500/80 transition">
                                      <FaOpencart size={24} />
                                  </button>
                              </div>
                              </div>
                          </div>
                      </div>
                          <div className="relative border border-stone-600 bg-white/8 w-full rounded-3xl md:rounded-[10rem] mt-35">
                              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
                                  <div className="flex flex-col justify-center py-10 md:pl-20 text-white space-y-5 text-center md:text-left md:translate-y-0 translate-y-10">
                                          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">For Small Decs Ai Plat</h1>
                                          <p className="text-base sm:text-lg md:text-xl">
                                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                              incididunt ut labore et dolore magna aliqua
                                          </p>
                                          <p className="text-2xl sm:text-3xl md:text-4xl font-bold">Rs. 599/-</p>
                                      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center md:justify-start">
                                          <button className="border text-base sm:text-lg md:text-xl py-2 sm:py-3 px-6 sm:px-10 rounded-xl hover:bg-amber-500/80 hover:underline transition">
                                          Explore
                                          </button>
                                          <button className="border p-2 sm:p-3 md:px-4 md:py-3 text-lg md:text-xl rounded-lg hover:bg-amber-500/80 transition">
                                          <FaOpencart size={24} />
                                          </button>
                                      </div>
                                  </div>
                                  <div className="flex justify-center">
                                      <img src={Pasted2} alt="Plant" className="w-74 h-74 md:w-[600px] md:h-[600px] object-contain hover:scale-105 transition md:-translate-y-25"/>
                                  </div>
                              </div>
                          </div>
                      </div>
                 </div>
                <div className="bg-darkgreen-001 w-full ">
                  <div className="px-10">
                    <div className="flex justify-center text-white mt-20 md:mt-40">
                        <h1 id='Service' className='text-3xl md:text-6xl'>Our Best Selling</h1>
                    </div>
                        <div className="flex justify-center items-center md:mt-20 py-10">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
                                {SellingData.map(({ title, img, desciption, icon, price }, index) => (
                                <div key={index} className="border border-stone-600 mt-15 bg-white/5 rounded-2xl md:h-[500px] h-96 text-white flex flex-col items-center p-6">
                                    <img src={img} alt={title} className="absolute md:w-[430px] md:h-[430px] w-52 h-52 hover:scale-110 object-contain md:-translate-y-30 -translate-y-15"/>
                                    <div className="flex flex-col justify-center md:py-65 py-30 space-y-3">
                                        <h1 className="text-2xl sm:text-3xl font-semibold">{title}</h1>
                                        <p className="text-white/50">{desciption}</p>
                    
                                        <div className="flex justify-between items-center text-xl sm:text-2xl px-4">
                                            <p className="font-bold">{price}</p>
                                            <button className="border border-white p-3 rounded-xl hover:bg-amber-600 transition">
                                            {icon}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                            </div>
                    <div className='mt-10 md:mt-40 w-full '>
                        <div className="flex justify-center text-white ">
                            <h1 className='text-3xl md:text-6xl'>Customers Review</h1>
                        </div>
                        <div className="flex justify-center items-center mt-20 md:mt-35 w-full px-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
                                {CusReview.map((item, index) => (
                                    <div key={index} className="text-white border border-stone-600 rounded-3xl bg-white/5 p-6 sm:p-8 space-y-4 h-auto flex flex-col">
                                        <div className="flex items-center">
                                            <img src={item.img} alt="review-image" className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover"/>
                                            <div className="px-4">
                                                <h1 className="text-xl sm:text-2xl font-semibold">{item.title}</h1>
                                                <span className="text-amber-400">{item.rating}</span>
                                            </div>
                                        </div>
                                            <p className="text-base sm:text-lg">{item.desciption}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="mt-20 md:mt-40 w-full ">
                        <div className="flex justify-center text-white ">
                            <h1 className='text-3xl md:text-6xl'>Our Best o2</h1>
                        </div>
                        <div className="flex justify-center items-center text-white mt-25">
                            {best02.map((item, index) => (
                                <div key={index} className="flex justify-center items-center border border-stone-600 rounded-[5rem] bg-white/5 h-[540px]">
                                    <div className="grid md:grid-cols-2 grid-cols-1">
                                        <div className="flex items-center justify-center">
                                            <img src={item.img} alt="best02 image" className="w-78 h-78 md:w-[700px] md:h-[700px] hover:scale-105 -translate-y-1 duration-300"/>
                                        </div>
                                        <div className="md:py-25 -translate-y-25 md:translate-y-25 p-5 space-y-5">
                                            <h1 className="text-xl md:text-3xl font-semibold">{item.title}</h1>
                                            <p className="text-[15px] md:text-xl">{item.decription1}</p>
                                            <p className="text-[15px] md:text-xl">{item.decription2}</p>
                                            <button className="border py-1 px-6 md:py-3 rounded-2xl text-lg md:text-xl hover:bg-amber-600 hover:cursor-pointer transition">
                                                {item.butt}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                  </div>
                </div> 
            </div>

            <footer className=''>
                <div className=" max-w-full mt-20 bg-black/50 backdrop-blur-3xl px-10 pt-10">
                    <div className='container w-full lg:px-1 grid grid-cols-1 gap-x-3 gap-y-8 md:grid-cols-1 lg:grid-cols-3' >
                        <div className="flex flex-col gap-y-7 text-white">
                            <div className="flex">
                                <img src={Logo} alt="Footer_Logo" className='-translate-x-15'/>
                                <div className="font-semibold text-4xl -translate-x-35">plants.</div>
                            </div>
                        <p className='-translate-y-40'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                                    
                        </div>

                        <div className="-translate-y-30 md:-translate-y-0 flex flex-col gap-y-3 px-16 text-white">
                        <h1>Quick Link</h1>
                            <ul className='text-xl flex flex-col items-start gap-5'>
                                {
                                    Navmenu.map((item, index) =>(
                                        <div className="text-xl" key={index}>{item.title}</div>
                                    ))
                                }
                            </ul> 
                                    
                        </div>
                        
                        <div className="space-y-8 text-white -translate-y-25 md:-translate-y-0">
                                    <h1>For Every Update</h1>
                                    <div class="flex items-center border border-gray-600 rounded-lg overflow-hidden w-full max-w-md">
                                    <input type="email" placeholder="Enter Email..." class="flex-1 px-4 py-2 bg-gray-900 text-white placeholder-gray-400 focus:outline-none"/>
                                    <button class="bg-white text-black px-4 py-2 font-semibold">SUBSCRIBE</button>
                                </div>
            
                        </div>
                    </div>
                
                    <div className="flex justify-between -translate-y-10">
                        <div className="flex gap-5 font-bold text-xl text-white">
                            <h>FB</h>
                            <h>TW</h>
                            <h>LI</h>
                        </div>
                        <div className="flex flex-col items-end justify-center -mt-8 text-white">
                             <p>planto © all right reserve</p>
                        </div>
                    </div>
                
                </div>
            </footer>
    </div>
  )
}

export default Home