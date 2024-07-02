"use client";
import Image from 'next/image'
import Button from './button'
import { useState } from 'react';

const Hero = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  }

  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 "></div>
        <Image 
          src="/camp.svg"
          alt="camp"
          width={30}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <div className="space-y-3 text-center">
 <h1 class="font-bold text-4xl lg:text-6xl">
    WELCOME BACK!
  </h1>
  <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px] ">
    Login into your Linktree
  </p>
</div>
<div className=" text-center space-y-3"></div>


        <div className="my-11 flex flex-wrap gap-0"></div>
        
        <div className="flex flex-col items-center w-full max-w-md mx-auto p-4 space-y-3">
          
      <div className="w-full space-y-3">
        <input 
          type="text" 
          placeholder="Email or username" 
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 "
        />
      </div>
      
      <div className="w-full relative">
        <input 
          type="password" 
          placeholder="Password" 
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
        <button 
          
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
        >
              
        </button>
      </div>
      <div className="w-full space-y-3">
        <a href="#" className="text-purple-600 hover:underline">
          Log in with phone number
        </a>
      </div>
      
      <div className="w-full space-y-3 ">
        <button 
          type="button" 
          className="w-full py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 space-y-3"
          
        >
          Log in
        </button>
      </div>
    </div>
    <div className="flex flex-col items-center w-full max-w-md mx-auto p-0 space-y-3">
    <div className="w-full space-y-3">
      
      
      </div>
      <a href="#" className="text-purple-600 hover:underline space-y-3">
          Forgot password? • Forgot username?
        </a>
      <div className="flex items-center w-full space-y-2">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-2 text-gray-500">OR</span>
        <div className="flex-grow border-t border-gray-300"></div>
        
      </div>
      <div className="w-full space-y-3">
        <button 
          type="button" 
          className="w-full py-3 mb-2 border border-gray-300 rounded-md flex items-center justify-center space-x-2 hover:bg-gray-100"
        >
          <img src="/path/to/google-logo.png" alt="Google" className="w-5 h-5" />
          <span>Continue with Google</span>
        </button>
        <button 
          type="button" 
          className="w-full py-3 border border-gray-300 rounded-md flex items-center justify-center space-x-2 hover:bg-gray-100"
        >
          <img src="/path/to/apple-logo.png" alt="Apple" className="w-5 h-5" />
          <span>Continue with Apple</span>
        </button>
      </div>
      <div className="w-full text-center space-y-3">
        <p>Don’t have an account? <a href="#" className="text-purple-600 hover:underline">Sign up.</a></p>
        <p>You can also <a href="#" className="text-purple-600 hover:underline">log in with a phone number</a></p>
      </div>
      <div className="w-full text-center text-xs text-gray-500">
        <p>This site is protected by reCAPTCHA and the Google 
          <a href="https://policies.google.com/privacy" className="text-purple-600 hover:underline"> Privacy Policy</a> and 
          <a href="https://policies.google.com/terms" className="text-purple-600 hover:underline"> Terms of Service</a> apply.
        </p>
      </div>
    </div>


          
    </section>
  )
}

export default Hero