import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import './App.css'
import icon from './img/Frame 4.svg'
import heroImg from './img/Group.svg'
import brand1 from './img/XMLID_24_.svg'
import brand2 from './img/XMLID_1_.svg'
import brand3 from './img/XMLID_1_ (2).svg'
import brand4 from './img/XMLID_1_ (1).svg'
import brand5 from './img/Vector.svg'
import cardImg from './img/Group (2).svg'
import cardImg2 from './img/Group (3).svg'
import footerPack from './img/Frame 30.svg'
import card1 from './img/Group 29.png'
import card2 from './img/Group 30.png'
import card3 from './img/Group 31.png'
import card4 from './img/Group 32.png'

import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
const navigation = [
  { name: 'Home', href: '#'},
  { name: 'Portfolio', href: '#' },
  { name: 'Services', href: '#' },
  { name: 'Contact', href: '#' },
]
const features = [
  {
    name: 'Push to deploy',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: LockClosedIcon,
  },
  {
    name: 'Simple queues',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Advanced security',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: FingerPrintIcon,
  },
]



export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white hero">
     
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8 navbar" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src={icon}
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-normal leading-6 text-white text-[20px] navLi">
                {item.name}
              </a>
            ))}
          </div>
         
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
   
      <div className="relative isolate px-6 pt-14 lg:px-8">
      
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 heroChild">
          <div className="hidden sm:mb-8 sm:flex sm:justify-start">
           <h1 className='welcome'>Welcome</h1>
          </div>
          <div className="">
            <h1 className="text-4xl tracking-tight text-gray-900 sm:text-6xl hero__text">
            Lorem ipsum dolor sit <br /> amet consectetur 
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 heroP">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Suscipit nemo hic quos, ab, dolor aperiam nobis cum est <br /> eos error ipsum, voluptate culpa nesciunt delectus iste?
            </p>
            <div className="mt-10 flex  gap-x-6">
              <a
                href="#"
                className="rounded bg-white p-2.5 px-10 text-xl font-semibold text-black shadow-sm hover:bg-yellow-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
>
              Explore
              </a>
             
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 heroBackground">
         <img src={heroImg} alt="" className='cursor-pointer' />
        </div>
      </div>










      <div className="bg-white py-24 sm:py-32 dad">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 partners">partners</h2>
          <p className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Lorem Ipsum Dolor
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 font-semibold">
          Lorem ipsum, dolor sit amet consectetur   <br />
            adipisicing elit.
          </p>
        </div>
        <div className='brendBox '>
          <img className='brendItem cursor-pointer' src={brand1} alt="" />
          <img className='brendItem cursor-pointer' src={brand2} alt="" />
          <img className='brendItem cursor-pointer' src={brand4} alt="" />
          <img className='brendItem cursor-pointer' src={brand5} alt="" />
          <img className='brendItem cursor-pointer' src={brand3} alt="" />
        </div>




        <div className="mt-10 flex  gap-x-6">
              <a
                href="#"
                className="rounded mx-auto bg-black p-2.5 px-10 my-8 text-xl font-semibold text-white shadow-sm hover:bg-yellow-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
>
              Explore
              </a>
             
            </div>
            <div className='card-box mx-auto '>
     <img src={cardImg} alt="" className='cursor-pointer' />
     <div className="mx-auto max-w-2xl  sm:py-48  heroChild">
          <div className="">
            <h1 className="text-4xl tracking-tight text-gray-900 sm:text-6xl heros__text">
            Lorem ipsum dolor sit <br /> amet consectetur 
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 heros__p">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Suscipit nemo hic quos, ab, dolor aperiam nobis cum est <br /> eos error ipsum, voluptate culpa nesciunt delectus iste?
            </p>
            <div className="mt-10 flex  gap-x-6">
              <a
                href="#"
                className="rounded bg-black p-2.5 px-10 text-xl font-semibold text-white shadow-sm hover:bg-yellow-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
>
             Learn More
              </a>
             
            </div>
          </div>
        </div>
      
      </div> 
      
         

      <div className='card-box mx-auto '>
    
     <div className="mx-auto max-w-2xl  sm:py-48  heroChild">
          <div className="">
            <h1 className="text-4xl tracking-tight text-gray-900 sm:text-6xl heros__text">
            Lorem ipsum dolor sit <br /> amet consectetur 
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 heros__p">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Suscipit nemo hic quos, ab, dolor aperiam nobis cum est <br /> eos error ipsum, voluptate culpa nesciunt delectus iste?
            </p>
            <div className="mt-10 flex  gap-x-6">
              <a
                href="#"
                className="rounded bg-black p-2.5 px-10 text-xl font-semibold text-white shadow-sm hover:bg-yellow-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
>
             Learn More
              </a>
             
            </div>
          </div>
        </div>
        <img src={cardImg2} alt="" className='cursor-pointer' />
      </div> 


      <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 partners">Team</h2>
          <p className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Our Talents
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 font-semibold">
          Lorem ipsum, dolor sit amet consectetur <br />
Suscipit nemo hic quos, ab,
          </p>
        </div>
        <div className='brendBox '>
        <img className='brendItem cursor-pointer' src={card4} alt="" />
          <img className='brendItem cursor-pointer' src={card1} alt="" />
          <img className='brendItem cursor-pointer' src={card2} alt="" />
          <img className='brendItem cursor-pointer' src={card3} alt="" />
  
        </div>
        <div className="mt-10 flex  gap-x-6">
              <a
                href="#"
                className="rounded mx-auto bg-black p-2.5 px-10 my-8 text-xl font-semibold text-white shadow-sm hover:bg-yellow-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
>
             View Team
              </a>
             
            </div>

      </div>
    
    </div>

<footer>

  <img src={footerPack} alt="" />
  <h2 className='footer__text'>© Start, 2022. All rights reserved.</h2>


</footer>
    </div>




    
  )
}
