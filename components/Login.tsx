"use client";
import Image from 'next/image';
import { useState } from 'react';
import Button from './button';

const Hero = () => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch('http://localhost:8000/users/login/', { // Change this to your Django backend URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: emailOrUsername, password }),
    });

    if (response.ok) {
      // Redirect or perform any action upon successful login
      console.log('Login successful');
    } else {
      const data = await response.json();
      // Set an error message if login fails
      setErrorMessage(data.error || 'Invalid email/username or password');
    }
  };

  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        
        <div className="space-y-3 text-center">
          <div className="flex flex-col items-center w-full max-w-md mx-auto p-4 space-y-3">
            <h1 className="font-bold text-4xl lg:text-6xl">
              WELCOME BACK!
            </h1>
            <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
              Login into your Linktree
            </p>
          </div>
          <form className="space-y-3" onSubmit={handleLogin}>
            <div className="w-full space-y-3">
              <input 
                type="text" 
                placeholder="Email or username" 
                value={emailOrUsername}
                onChange={(e) => setEmailOrUsername(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>
            <div className="w-full relative">
              <input 
                type={passwordVisible ? "text" : "password"} 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
              <button 
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {passwordVisible ? 'Hide' : 'Show'}
              </button>
            </div>
            {errorMessage && (
              <div className="w-full text-red-500 text-sm">
                {errorMessage}
              </div>
            )}
            <div className="w-full space-y-3">
              <a href="#" className="text-purple-600 hover:underline">
                Log in with phone number
              </a>
            </div>
            <div className="w-full space-y-3">
              <button 
                type="submit" 
                className="w-full py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                Log In
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-col items-center w-full max-w-md mx-auto p-0">
          <a href="#" className="text-purple-600 hover:underline">
            Forgot password? • Forgot username?
          </a>
          <div className="flex items-center w-full my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-2 text-gray-500">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <div className="w-full space-y-3">
            <button 
              type="button" 
              className="w-full py-3 mb-2 border border-gray-300 rounded-full flex items-center justify-center space-x-2 hover:bg-gray-100"
            >
               <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAABBVBMVEX9/f07zP9I/0j/MzP/1AD///2O3f7//f84yv//0QBH/0L/1gD/LDH/MTBM0vlQ/0w3/0j/0x5N0/VR/1Izzv//LSs1/zVM0fr/SEL/FhYo0P//Jib99PRe/1606P5N1PQ8/zzU/tT+7rX+5Yj/JRmDuN55uuJjwu796ur/Hh7/Pj7+h4f6P0HY8f+y/bXc/dxs1v5D1O5r/2vm9v2B/oHr/euV/pSp/qm6/rrM/sz2/fbY/dh3/3eL/oug/qDE/sS18m3/9NiZ9Ez+32j9+uz+6Z3+8sv/3FGRt9L+4G/+xMD+pqb+eHj/X1/93d3+ubn/U1P+mpr+g4P/a2v+ra3/CgDvvcIe4jT4AAAEVElEQVR4nO3ciXaTQBiG4UCCTWJjrYVoElvj1hitdan7vu/7dv+X4pD1B2aGoYc4Mv/3XgE8Z8pX0NNaDSGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhFCZBWtra7av4T8ruLq/fw0qtOB680a7u30fKosEidc8s9Hu3sRZmRUcND3Pa57YaLe7t25DJS7YiU0mJ8Vvd+88gIowOTIxmZwU3x927wJFmHgeQfGH7XvsVRYm0x8fUXeL+wQtTeYnxWc/QcRkgeIznyBqskQRKo/5TlDChKAIlbs1pihJE4oiJmif51FJmSRQ/OHWU44qaROveYygiHfDh/xUMibJkyJUHrGboKxJCoXhBElM0ihC5UnACUVmkkFhNkFSE/Gg3Uqi+MMNPhMkN0muz7Tu9lkmKgoTyUnhM0EqExlKPEEcVJQmUpTpBLmuojaRo/jDofOfJzUmChT3J0hnokJxfYK0JkoUtz9P6k2UKE5PUI6JGiX+FzJHJyjPRIPi7ATlmuhQHJ2gfBMtymSCbN9D2RmYeN5JDUq7++y5Yx/4jUw8zUk5/qLVevnK9m2UmpmJ+qQIkkaj0Tof2L6REjM0UaFMSQRK47XtOykvUxM5ypxkonLO9r2UlbGJDIWQxCqbb2zfTTmZm2RRkiSxylsnJqiASRolQxKruDBBRUySKDISNyaokAlFUZC4MEHFTJYoShIHJqigyRxFR1L5CSpqMkXJIZk8bG3f2eErbBKj5JPEu2z71g5dcROBYkAiUCr743MIk/671lETk8o+aIub9C/2Tm0aoLQq+3tKYZP+xQuddQOU6h6TwiYxSb2ei9JqVPZpUthkSpKHUvFfZYuZzEn0KFV/5SlksiTRoLTeV/3VuIgJJVGhuPAJpYBJkkSKUu33nHnmJv3dJEkWpervw/OMTbIkKZSKjw3J1ERGkkCp+tiQDE3kJEuU6o8NycykvzuWksxQXBgbkpGJmiRGcWNsSCYm/d2BkqQ+Xv9g+x7KzsBERzIYf7R9B+WXb6IhiXpXbF//Kso1CUcqkqj36ZLty19JeSbhKJKTdHqfv9i++BWVY6Ii6Yz3nHu0LtKbqEjGna+2L3yFaU0UJE6ODUlnIicRY3Pa9lWvNo1JOOpkSZwdG5LaREbi8NiQlCYSEqfHhqQyCUf1NInbY0NSmAiSKD02321f679KbpIhiX67PjYkqUmahMPYkGQmKZJO7xuDsSFJTJIknfFlFmNDypqEo8uEZBD9sn2J/7yMSeiRU8JobEhpE3pK3H+zkZcyCb0FSaf3k9PYkJImSxJ2Y0NKmCxIGI4NiZqE3l7EdmxIxGROMuhxHBvS0mRGEvV+sBwb0sJkSsJ3bEjzv1s+IeE8NqTZ37cPvW8R77EhBVebs1MyGLAeG1pwcnJKxtzHhhYceM3mHqfPaAYFtZ0/HyCSypn/sIgQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIO9xestHWoPV6wnwAAAABJRU5ErkJggg==" alt="logo" width={44} height={5} />
               <span className="font-bold">Continue with Google</span>
            </button>
            <button 
              type="button" 
              className="w-full py-3 border border-gray-300 rounded-full flex items-center justify-center space-x-2 hover:bg-gray-100"
            >
                        <img src="\public\apple.svg" alt="Apple" className="w-5 h-5" />
                        <span className="font-bold">Continue with Apple</span>
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
      </div>
    </section>
  );
};

export default Hero;
3vv