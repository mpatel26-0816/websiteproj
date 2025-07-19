import Image from "next/image";

// export default function Home() {
//   return (
//     <main>
//       <section className="h-screen w-full relative">

//         <Image src="/landing2.jpg" alt="background image" layout="fill" objectFit="cover" className="-z-10" quality={100} priority sizes="100vw"/>
//         <div className="absolute top-1/5 left-1/2 -translate-x-1/2 w-full max-w-lg px-4 text-center text-black md:top-63 md:left-92 md:-translate-x-5/12 md:text-left md:w-auto md:max-w-none md:px-0">
//           <h1 className="hidden md:block text-6xl md:text-9xl font-extrabold leading-none">
//           Mudra
//           Patel
//           </h1>
//           <h1 className="block md:hidden text-3xl font-extrabold leading-none">
//           Mudra Patel  
//           </h1> 
//         </div>

//         <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-11/12 text-center text-black md:top-auto md:left-19 md:bottom-125 md:right-20 md:w-auto md:translate-x-0 md:text-left">
//           <p className="hidden md:block text-2xl font-semibold">
//             Personal Statement Undecided
//             something tech
//           </p>
//           <p className="block md:hidden text-base font-semibold">
//             Personal Statement Undecided something tech
//           </p>
//         </div>

//         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex justify-center text-white"> {/*for the pointer arrow (now sure if keeping) */}
//           <p className="font-semibold text-white animate-bounce absolute bottom-6 left-1/2 -translate-x-1/2 flex justify-center whitespace-nowrap">
//             scroll below
//           </p>
//               <svg className="w-8 h-8 animate-bounce" fill="none" stroke="currentColor"
//                              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                              <path strokeLinecap="round" strokeLinejoin="round" 
//                              strokeWidth={2} d="M19 9l-7 7-7-7" />
//                              </svg>
//         </div>
//       </section>
//     </main>
//   );
// }

export default function Home() {
  return (
    <main>
      <section className="h-screen w-full relative">

        <Image src="/landingpage.jpg" alt="background image" layout="fill" objectFit="cover" className="-z-10" quality={100} priority sizes="100vw"/>
        <div className="absolute top-1/5 left-1/2 -translate-x-1/2 w-full max-w-lg px-4 text-center text-white md:top-1/4 md:left-90 md:-translate-x-5/12 md:text-left md:w-auto md:max-w-none md:px-0">
          <h1 className="hidden md:block text-6xl md:text-9xl font-extrabold leading-none">
          Mudra<br />
          Patel
          </h1>
          <h1 className="block md:hidden text-3xl font-extrabold leading-none">
          Mudra Patel  
          </h1> 
        </div>

        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-11/12 text-center text-white md:top-auto md:left-189 md:bottom-73 md:right-20 md:w-auto md:translate-x-0 md:text-left">
          <p className="hidden md:block text-2xl font-semibold">
            Personal Statement Undecided <br />
            something tech
          </p>
          <p className="block md:hidden text-base font-semibold">
            Personal Statement Undecided something tech
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex justify-center text-white"> {/*for the pointer arrow (now sure if keeping) */}
          <p className="font-semibold text-white animate-bounce absolute bottom-6 left-1/2 -translate-x-1/2 flex justify-center whitespace-nowrap">
            scroll below
          </p>
              <svg className="w-8 h-8 animate-bounce" fill="none" stroke="currentColor"
                             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                             <path strokeLinecap="round" strokeLinejoin="round" 
                             strokeWidth={2} d="M19 9l-7 7-7-7" />
                             </svg>
        </div>
      </section>
    </main>
  );
}
