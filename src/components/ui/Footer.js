import React from 'react';
import FooterLogo from '../../../public/assets/images/Glenrich-New-Logo-White.webp'
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-blue-500">

      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-5">
          <div className='flex justify-center items-center'>
            <Image src={FooterLogo} alt="" width={350}/>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-blue-300 uppercase dark:text-white">About Company</h2>
            <ul className="text-white dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:text-blue-500">Mission</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-blue-500">Vision & Philosophy</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-blue-500">Company Values</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-blue-500">Blog</a>
              </li>
            </ul>
            <h2 className="mb-6 text-sm font-semibold text-blue-300 uppercase dark:text-white">Academics</h2>
            <ul className="text-white dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className=" hover:text-blue-500">Curriculum</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-blue-500">Overview</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-blue-300 uppercase dark:text-white">Satarkul Branch</h2>
            <ul className="text-white dark:text-gray-400 font-medium">
              <li className="mb-4">
                Plot No: E-2 & E-3
                Sunvalley Sharoni, Block: A
                Sunvalley Abashan Swadesh Properties Ltd Satarkul, Badda Dhaka-1212
              </li>
            </ul>
            <h2 className="mb-6 text-sm font-semibold text-blue-300 uppercase dark:text-white">Contact Number:</h2>
            <ul className="text-white dark:text-gray-400 font-medium">
              <li className="mb-4">+8809677444777</li>
            </ul>
            <h2 className="mb-6 text-sm font-semibold text-blue-300 uppercase dark:text-white">Email Address:</h2>
            <ul className="text-white dark:text-gray-400 font-medium">
              <li className="mb-4">info@glenrich.edu.bd</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-blue-300 uppercase dark:text-white">Uttara Branch (Junior Campus)</h2>
            <ul className="text-white dark:text-gray-400 font-medium">
              <li className="mb-4">
                Plot 4, Road 13, Sector 6, Uttara Model Town, Dhaka-1230
              </li>
            </ul>
            <h2 className="mb-6 text-sm font-semibold text-blue-300 uppercase dark:text-white">Contact Number:</h2>
            <ul className="text-white dark:text-gray-400 font-medium">
              <li className="mb-4">(+88) 0248961087</li>
            </ul>
            <h2 className="mb-6 text-sm font-semibold text-blue-300 uppercase dark:text-white">Email Address:</h2>
            <ul className="text-white dark:text-gray-400 font-medium">
              <li className="mb-4">info@uttara.glenrich.edu.bd</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-blue-300 uppercase dark:text-white">Uttara Branch (Senior Campus)</h2>
            <ul className="text-white dark:text-gray-400 font-medium">
              <li className="mb-4">
                Plot ED-01, Road 1, Sector 15, Uttara Model Town, Dhaka-1230
              </li>
            </ul>
            <h2 className="mb-6 text-sm font-semibold text-blue-300 uppercase dark:text-white">Contact Number:</h2>
            <ul className="text-white dark:text-gray-400 font-medium">
              <li className="mb-4">(+88) 09614087141</li>
            </ul>
            <h2 className="mb-6 text-sm font-semibold text-blue-300 uppercase dark:text-white">Email Address:</h2>
            <ul className="text-white dark:text-gray-400 font-medium">
              <li className="mb-4">info@uttara.glenrich.edu.bd</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='bg-gray-100 py-3'>
        <div className='mx-auto max-w-screen-xl flex justify-between items-center'>
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© {new Date().getFullYear()} Glenrich International School. All Rights Reserved.
          </span>
          <ul className="text-gray-500 dark:text-gray-400 font-medium flex gap-8 items-center">
            <li><a href="#" className="hover:underline hover:text-blue-500">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline hover:text-blue-500">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;