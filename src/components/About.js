import React, { useEffect } from 'react'
import bg from "../images/gd2.jpg"
// import ps from "../images/ps.jpg"
import at from "../images/at.jpg"
import isotank from "../images/iso.jpg"
import bulk from "../images/bulk.jpg"
// import flexi from "../images/flexi.jpg"
import flexi1 from "../images/flexi1.jpg"
import History from './History';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToTop } from './ToTop'

function About() {

  useEffect(() => {
    AOS.init();
  }, [])



  return (
    <div className='w-[100%] font-serif h-[100%] flex flex-col justify-center  m-auto   ' >
    <div >
 
    <div className=' 2xl:h-screen xl:h-[112vh] bg-cover w-[100%] bg-no-repeat p-4 pt-0  h-screen sm:overflow-auto'   data-aos="fade-in" data-aos-duration="3000"   >

    <h1 className='w-[100%] text-center  2xl:text-6xl backdrop-blur-sm pt-2 sm:text-4xl '> ABOUT US</h1>
    <div className='flex 2xl:flex-row xl:flex-row sm:flex-col'>
    <div className='w-[50%] sm:w-[100%] text-center '>
    <img src={bg} alt="none" className='p-8'/> 
    </div>
    <div className='w-[50%] sm:w-[100%] sm:text-sm xl:text-xl 2xl:text-xl p-4 backdrop-blur-sm text-justify'>
   
    <p className=''> <span className='font-bold'>SSPL</span> is focused on Exporting and supplying of a wide range of agricultural commodities like Castor Seed, Guar Seed,Castor Oil(FSG Grade),Cashew Kernels, Pulses , Chickpeas and Pigeon Peas.
Capitalizing on Indias diverse geography, SSPL delivers superior agro products worldwide.
</p> <p className=''> As a specialized trading organization,
we build long-term customer relationships and manage all aspects of bulk agro-commodity trade, from storage to direct market
purchases and sales. </p> <p className=''>
With decades of experience, we have strong connections with farmers, brokers, manufacturers, exporters, and importers, enabling
direct deliveries from Private and NCDEX accredited warehouses. We aim for exponential growth by expanding our agro-commodities
portfolio, leveraging our trading expertise and strategic alliances.</p>

      <div className='p-2 border border-black shadow-2xl mt-8 rounded-lg 2xl:w-[80%] xl:w-[100%] sm:w-full'>
      <p>SSPL holds memberships with premier institutions that promote Indias domestic and international trade, including:</p>
        <ul className='list-disc m-4'>
        <li className='ml-8'>Indian Merchants Chamber (IMC)</li>
        <li className='ml-8'>Confederation of Indian Industry (CII)</li>
        <li className='ml-8'>Federation of Indian Export Organisations (FIEO)</li>
        <li className='ml-8'>Solvent Extractors Association (SEA)</li>
        <li className='ml-8'>International Castor Oil Association (ICOA)</li>
        <li className='ml-8'>World Castor Sustainability Forum (WCSF)</li>
        </ul>
      </div>
    </div>
    </div>
    </div>
    </div>
    
    <h1 className=' border-black border mx-auto rounded-xl text-center  text-4xl p-4 bg-[#003662] text-white mb-10'> HISTORY</h1>
    <div className="  flex items-center justify-center ">
      <History />
    </div>
    <div className="min-h-screen w-full flex flex-col items-center justify-center ">
    <h1 className=' border-black border mx-auto rounded-xl text-center mt-10 text-4xl p-4 bg-[#003662] text-white '> OUR TEAM</h1>
    <div className='w-[95%] flex flex-shrink 2xl:flex-row xl:flex-row 2xl:flex-shrink justify-center items-stretch sm:flex-col'>
  <div className='m-4 w-[100%] border border-black rounded-lg shadow-xl p-6 pt-4 flex flex-col'>
    <img src="https://drive.google.com/thumbnail?id=1Yy7q-pl2ISAOva8yejKY7SOUkDFXoOcm&sz=w1000" alt="none" className='object-contain border-8 border-[#3b576e] flex-grow-0' />
    <h1 className='text-xl font-bold mt-4'>Mr. Pulkit Sekhsaria</h1>
    <p className='mt-6 text-justify flex-grow'>Pulkit Sekhsaria is the Managing Director of Satyanarayan Sekhsaria Pvt. Ltd. (SSPL). Pulkit has been actively involved in investments and wealth management across various fields. Under his astute leadership and dynamic vision SSPL has grown by leaps and bounds and is today renowned as one of the leading and most reputed trading organizations dealing in agro-commodities.</p>
  </div>
  <div className='m-4 w-[100%] border border-black rounded-lg shadow-xl p-4 flex flex-col'>
    <img src="https://drive.google.com/thumbnail?id=1KAcwx60sIYo42F2U_99TrCcDrk7zy5gS&sz=w1000" alt="none" className='object-contain flex-grow-0' />
    <h1 className='text-xl font-bold mt-4'>Mr. Janardhan Sekhsaria</h1>
    <p className='mt-4 text-justify flex-grow'>A seasoned financial executive with extensive experience in finance, accounting, taxation and law Mr. Janardhan Sekhsaria graduated with a B.Com from Sydenham College. His shrewd financial acumen has been instrumental in providing SSPL with strategic financial guidance and developing all the necessary policies and procedures to ensure sound financial management and control of the businesses.</p>
  </div>
  <div className='m-4 w-[100%] border border-black rounded-lg shadow-xl p-4 flex flex-col'>
    <img src="https://drive.google.com/thumbnail?id=1HO5sIpWWB3k3KcZnfOGQimfeiU6VxsQ0&sz=w1000" alt="none" className='object-contain flex-grow-0' />
    <h1 className='text-xl font-bold mt-4'>Mr. Bankatlal Gaggar</h1>
    <p className='mt-4 text-justify flex-grow mb-6'>Mr. Bankatlal Gaggar is the Director and Advisor at SSPL. He has had an illustrious and prolifically successful career of over four decades of professional excellence in various capacities and roles, both as an independent consultant as well in corporate management. He was also elected as Chairman of the Institute of Company Secretaries of India (ICSI) of its Western India Regional Council.</p>
  </div>
</div>

    </div>
    <hr className='border-2 w-[90%] mx-auto'></hr>
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
    <h1 className=' border-black border mx-auto rounded-xl text-center mt-10  text-4xl p-4 bg-[#003662] text-white  items-stretch'> MILESTONES</h1>
    <div className='w-[95%] flex flex-shrink 2xl:flex-row xl:flex-row 2xl:flex-shrink items-stretch sm:flex-col pt-4'>
  <div className='m-4 w-[100%] border border-black rounded-lg shadow-xl p-4 flex flex-col'>
    <img src="https://drive.google.com/thumbnail?id=18wcTVtvoC_kc7dMYfk5iUaJZjdGcjfxZ&sz=w1000" alt="none" className='object-contain p-4 pt-0' />
    <h1 className='text-xl font-bold mt-2'>Cotton</h1>
    <p className='text-justify mt-2 flex-grow'>Since 1970s have been working as established brokers to reputed textile corporations and dealers in domestic as well as overseas markets. Exporter of raw cotton for the past 40 years.</p>
  </div>
  <div className='m-4 w-[100%] border border-black rounded-lg shadow-xl p-4 flex flex-col'>
    <img src="https://drive.google.com/thumbnail?id=1FegIRdBkBElGHTVpX9WW1FDI3Zo9cCiW&sz=w1000" alt="none" className='object-contain xl:pl-8 xl:pr-8' />
    <h1 className='text-xl font-bold lg:mt-4 sm:mt-0'>Pharmaceutical</h1>
    <p className='lg:mt-2 sm:mt-2 xl:mb-2 2xl:mb-0 text-justify flex-grow'>1979 Set up Sekhsaria Chemicals Pvt. Ltd. wholly owned subsidiary to provide process research and undertake manufacturing USFDA approved of active contract pharmaceutical ingredients (API) and related intermediaries.</p>
  </div>
  <div className='m-4 w-[100%] border border-black rounded-lg shadow-xl p-4 flex flex-col'>
    <img src="https://drive.google.com/thumbnail?id=1ZChzsOE3HCztYMeWDniK9iouml2vb7dH&sz=w1000" alt="none" className='object-contain p-4 pt-0' />
    <h1 className='text-xl font-bold'>Cement</h1>
    <p className='text-justify lg:mt-0 sm:mt-0 flex-grow'>1986: Gujarat Ambuja Cement Ltd.starts with a 0.7-million-ton plant capacity, using jute bags for cement. 1993: GACL sets up India’s first private port in Muldwarka, Gujarat, and a cement-receiving terminal in Ulve, Mumbai, for export and import.</p>
  </div>
  <div className='m-4 w-[100%] border border-black rounded-lg shadow-xl p-4 flex flex-col'>
    <img src={at} alt="none" className='object-contain mx-auto p-4' />
    <h1 className='text-xl font-bold mt-2'>Agri-trading</h1>
    <p className='text-justify mt-4 flex-grow'>SSPL has successfully established itself as a global exporter of high-quality agricultural products, including castor seeds, castor seed oil, cashew kernels, guar seeds, and various legumes. Through a robust supply chain and a focus on sustainability.</p>
  </div>
</div>

    </div>
    <hr className='border-2 w-[90%] mx-auto'></hr>
    <div className="min-h-screen w-full p-10">
    <h1 className=' border-black border w-[60%] mx-auto rounded-xl text-center  text-4xl p-4 bg-[#003662] text-white mt-10'> GLIMPSE OF OUR DELIVERY METHODS</h1> 
    <div className='flex sm:flex-col lg:flex-row p-10'>
  
      <img src={isotank} alt="flexi" className='lg:w-[40%] lg:h-[40%] lg:p-10'/>
      <div   className='lg:w-[50%] m-auto lg:p-10 lg:text-2xl sm:mt-4'> 
      <p> <span className='font-bold'> ISO Tank</span> containers are dedicated on the transport of bulk liquid products and are built under ISO (International Organization for Standardization) standards and designed on a type-of-substance basis, made of stainless steel alloy and surrounded by protective layers</p>
      </div>
    </div>
    <hr></hr>
    <div className='flex sm:flex-col lg:flex-row p-10'>
      <div   className='lg:w-[50%] m-auto lg:p-10 lg:text-2xl sm:mb-4'>
        <p><span className='font-bold'>  Flexible tanks </span> (also flexi-bags, flexibags and flexi-tanks) are a kind of storage equipment for liquids such as water or oil. Compared to steel tanks, flexible tanks have many advantages, including lighter weight and being rustproof, foldable, and quicker and easier to set up.</p>
         </div>
         <div className='flex sm:flex-col lg:flex-row lg:w-[50%] '>
         {/* <img src={flexi} alt="flexi" className='lg:w-[40%]  '/> */}
      <img src={flexi1} alt="flexi" className='w-[70vh] h-[50vh] mx-auto lg:p-10'/>
         </div>
      
    </div>
    <hr></hr>
    <div className='flex sm:flex-col lg:flex-row p-10'>
    <div className='flex sm:flex-col lg:flex-row lg:w-[50%] lg:p-12'>
       
       <img src={bulk} alt="flexi" className='w-[60vh] h-[40vh] m-auto  '/>
          </div>
      <div   className='lg:w-[50%] m-auto lg:p-10 lg:text-2xl sm:mt-4'>
        <p><span className='font-bold'>  Bulk Cargo </span> Common types of liquid bulk cargo include crude oil, petroleum products (such as gasoline and diesel), chemicals (industrial chemicals, solvents, acids), liquefied gases (LNG), and food-grade liquids (vegetable oils, juices )</p>
         </div>
        
      
    </div>
    </div>
    <ToTop />
    </div>
  )
}

export default About
