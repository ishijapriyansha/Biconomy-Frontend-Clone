import React from 'react'
import './index.css'
export default function Biconomy() {
  return (
    <div>
       <div className="p-3 h-18 w-full bg-white text-black justify-center flex">
        <p className="text-left font-semibold text-lg">
            Biconomy releases Delegated Authorisation Network (DAN) to enable secure delegation to AI agents &nbsp; &nbsp;
            <button className="bg-black rounded-lg text-white p-2 w-36"> Read More</button></p>
     </div>
     <div className=" orangediv lmaoded bg-orange-600 text-black overflow-y-auto">
        <div className=" doosranavbar p-3 h-18 w-full bg-transparent text-white  flex  ">
            <p className="text-left text-xl font-bold p-2"> Biconomy</p>
                 <nav className="flex cursor-pointer space-x-6  list-none text-lg ml-52 mt-3">
                 <li>  </li>
                 <li>Products</li>
                 <li> Learn</li>
                 <li> We're hiring</li>
                </nav>
                <nav className="ml-80 space-x-10 mt-3">
                    <button className=" bg-white rounded-lg text-black w-32 text-md font-semibold h-8 "> Dashboard</button>
                    <button className=" bg-white rounded-lg text-black w-32 text-md font-semibold h-8"> View Docs</button>
                </nav>
                 
         </div>
         <div className="w-5/6 mx-32 text-center mt-14">
            <p className="text-8xl p-5 text-white font-semibold font-sans"> Powering the best on-chain experiences</p>
            <div className="w-3/4 mx-44 text-center mt-10">
            <p className="text-2xl px-16 text-white font-semibold"> Leverage our highly customisable transaction infra to build seamless dApps for every user</p>
            </div>
            <div className=" flex justify-between mx-96 mt-5 text-lg "> 
                <button className="bg-black text-white p-2 rounded-lg w-32"> Get Started</button>
                <button className="bg-white text-black p-2 rounded-lg w-32"> Talk to Us</button>
            </div>
        </div>
     </div>
    </div>
  )
}
