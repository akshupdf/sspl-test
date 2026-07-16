import React, { useEffect, useState } from 'react'
import { MdArrowUpward } from "react-icons/md";

export const ToTop = () => {

    const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);


  return(
    <div>
        {
      isVisible && 
      <div className="fixed bottom-12 right-6 m-4 cursor-pointer animate-bounce z-[9999]">
        <MdArrowUpward  onClick={scrollToTop}  className='w-14 h-14 bg-white rounded-full shadow-xl' /> </div>
      }
    </div>
   )

 }