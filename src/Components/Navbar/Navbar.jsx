import React, {useState} from 'react'
import Logo from '../../assets/images/Logo.png'
import { Navmenu } from '../mockData/Data'
import { CiSearch } from "react-icons/ci";
import { FaOpencart } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { RiMenuAddFill } from "react-icons/ri";
import { MdCloseFullscreen } from "react-icons/md";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = ()=>{
        setIsOpen(!isOpen);
    }; 

  return (
        
        <div className=" py-10 flex justify-between mx-10 z-50">
            <div className="">
                   <div className="flex justify-start items-start text-white">
                        <img src={Logo} alt="" className='fixed  w-48 left-[-20px] top-5'/>
                         <h1 className='fixed pl-12 text-2xl'>Plants.</h1>
                   </div>
                  <div className=" justify-center gap-5 hidden md:flex text-white fixed w-full">
                      {
                           Navmenu.map((item, index) => (
                                <div className="text-white text-2xl" key={index}>
                
                
                                       <h1 className='flex'>{item.title}</h1>
                
                               </div>
                           ))
                        }
                     </div>
                     {
                         isOpen ?(
                            <div className="fixed w-54 p-5 text-white rounded-2xl space-y-7 text-[20px] right-5  pl-10 h-64 mt-[-15px] bg-green-950/70 z-50">
                               {
                                 Navmenu.map((item, index) =>(
                                    <div className="cursor-pointer hover:underline" key={index}>
                                        {item.title}
                                    </div>
                                            ))
                               }
                            </div>
                         ):(
                        <div className=" flex justify-start ">
                             <div className="hidden md:flex justify-end fixed right-10 w-auto gap-5 text-white text-2xl ">
                                <CiSearch />
                                 <FaOpencart />
                                <CgMenuRight />
                            </div>
                       </div>
                        )}
                
                
                        {!isOpen && (
                             <div onClick={toggleNavbar} className="fixed cursor-pointer md:hidden text-2xl text-white right-10 top-10 text-blue-001 z-50">
                                 <RiMenuAddFill />
                            </div>
                         )}
                         {isOpen && (
                             <div onClick={toggleNavbar} className="fixed cursor-pointer md:hidden text-2xl text-white right-10 top-10 text-blue-001 z-50">
                                 <MdCloseFullscreen />
                            </div>
                
                )}
                </div>
    </div>
  )
}

export default Navbar;