import React from "react";
import { BsCartDashFill } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo1.png"

export default function Header() {
  return (
    <div>
      <header className="flex justify-between px-40 py-6 bg-white fixed top-0 min-w-full shadow-xl">
        {/* <img className="bg-green-700" src="../public/vite.svg" alt="" /> */}
        <img className="w-[50px]" src={logo} alt="" />
        {/* <img src="./assets/images/logo1.png" alt="" />
        <h1>Google</h1> */}
        <ul className="flex  ">
          <li className="px-6 py-1 hover:bg-green-400 hover:text-white"><Link to={"/"}>Home </Link> </li>
          <li className="px-6 py-1 hover:bg-green-400 hover:text-white"><Link to={'/about-us'}>About</Link> </li>
          <li className="px-6 py-1 hover:bg-green-400 hover:text-white"><Link  to={'/product'}>Product</Link> </li>
          <li className="px-6 py-1 hover:bg-green-400 hover:text-white"><Link  to={'/blog'}>Blog</Link> </li>
          <li className="px-6 py-1 hover:bg-green-400 hover:text-white"><Link to={'/services'}>Services</Link> </li>
          <li className="px-6 py-1 hover:bg-green-400 hover:text-white"><Link  to={'/contact-us'}>Contact Us</Link> </li>
        </ul>
        <div className="flex  items-center gap-6">
            <div className="w-[32px] h-[32px] bg-green-300 flex items-center justify-center rounded-full hover:bg-red-500 cursor-pointer hover:text-white"><FaUserTie className="" /></div>
            <div className="w-[32px] h-[32px] bg-green-300 flex items-center justify-center rounded-full hover:bg-red-500 cursor-pointer hover:text-white"> <BsCartDashFill/></div>
       
        </div>
      
      </header>

      

{/* <nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link to={"/"} class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</Link>
        </li>
        <li>
          <Link to={'/about-us'} class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
        </li>
        <li>
          <Link to={'/blog'} class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Blog</Link>
        </li>
        <li>
          <Link to={'/services'} class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</Link>
        </li>
        <li>
          <Link to={'/contact-us'} class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav> */}

    </div>
  );
}
