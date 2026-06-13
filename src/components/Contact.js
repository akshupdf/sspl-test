import React, { useState } from 'react'
import { GiRotaryPhone } from "react-icons/gi";
import { MdOutlineAttachEmail } from "react-icons/md";
import { HiBuildingOffice } from "react-icons/hi2";
import { FaClock } from "react-icons/fa";

function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
});

const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
};

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('https://feedback-backend-3ocf.onrender.com/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();
        if (data.success) {
            alert('Feedback sent successfully');

            setFormData({
                name: '',
                email: '',
                message: ''
            });
        } else {
            alert('Error sending feedback');
        }
    } catch (err) {
        console.error('Error:', err);
        alert('Error sending feedback');
    }
};

const email = 'info@sspl.co';
  const subject = 'I want to inquire about ';
  const body = 'Hello, I would like to...';

  return (
    <div className=' h-auto w-[100%]  '>
       <h1 className='w-[100%] text-center  2xl:text-6xl backdrop-blur-sm pt-2 sm:text-4xl '> CONTACT US</h1>
       <div className='flex xl:flex-row  sm:flex-col'>

      
    <div className='xl:w-[50%] 2xl:w-[50%] sm:w-[100%] justify-center items-center sm:flex-none  flex'>
       
    <div className='  rounded-xl  border border-black xl:p-10   shadow-xl'>
    <form className="2xl:w-[60vh] xl:w-[80vh] mx-auto sm:w-[50vh] p-4" onSubmit={handleSubmit}> 
  <label className="block mb-2 text-xl font-medium ">Your Name</label>
  <input value={formData.name}
  onChange={handleChange} name="name" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="Enter your name" />
  <label for="email" className="block mb-2 text-xl font-medium ">Your email</label>
  <input value={formData.email}
  onChange={handleChange} name="email" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="Enter your Email Id" />
  <label for="message" className="block mb-2 text-xl font-medium ">Your message</label>
  <textarea value={formData.message}
  onChange={handleChange} name="message" rows="4" className="block p-2.5 w-full text-xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Leave a comment..."></textarea>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 mt-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

   </form>
   
    </div>
    
    </div>
    <div className='xl:w-[50%] 2xl:w-[50%] sm:w-[100%]  m-auto text-xl p-4'>
    <div className='flex mt-7 mb-2'>
    <span className='mr-2 mt-1'>  <HiBuildingOffice /></span>
    <p className='text-2xl font-bold '>SATYANARAYAN SEKHSARIA PVT. LTD</p>
    </div>
     
   <p>94A, Maker Chambers 3</p>
   <p>Jamnalal Bajaj Road </p>
   <p> Nariman Point, Mumbai 400021 India</p>
   <div className='flex mt-2'>
   <span className='mr-2 mt-1'><GiRotaryPhone /></span> <p> +91 22 4057 0360 </p>
   </div>
   <div className='flex'>
   <span className='mr-2 mt-1'><MdOutlineAttachEmail /> </span>   <a href={`mailto:${email}?subject=${subject}&body=${body}`} >{email}</a>
   </div>
  
   <div className='flex mt-2'>
   <span className='mr-2 ml-0 mt-1'><FaClock /> </span>   <p>Monday To Friday :- 9am-6pm</p>
   </div>
  
    <p className='mt-4'>CIN NO – U51219MH1974PTC017916</p>
    <p>IEC NO – 0388053186</p>
    <div className='xl:w-[80vh] 2xl:w-[100vh] sm:w-auto  mt-10 flex mb-10'>
                <iframe title="myFrame" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d483090.85185613966!2d72.823173!3d18.924874!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1e944dac3d7%3A0x61c1f7b11b32e334!2sMaker%20Chambers%203!5e0!3m2!1sen!2sus!4v1716837749064!5m2!1sen!2sus" width="700" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>
</div>
 </div>
  </div>
  )
}

export default Contact
