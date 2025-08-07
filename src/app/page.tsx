"use client";
import Image from "next/image";
import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import giaza from "next/font/local";
import { useState } from 'react';

const giazafont = giaza({
  src: [
    {
      path: '/fonts/Giza.otf',
      weight:"400",
    },
  ],
});

const avegas = localFont({
  src: [
    {
      path: './fonts/AvegasRoyale-Italic.ttf',
      weight:"400",
    },
    {path: "./fonts/AvegasRoyale-Regular.ttf",
     weight: "700",
    },
    {path: "./fonts/AvegasRoyale-BoldItalic.ttf",
     weight: "700",
    },
  ],
});

const monst = Montserrat({
  variable: "--font-mon",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function Home() {
  const [isHovering, setIsHovering] = useState(false);
  const [copySuccess, setCopySuccess] = useState('');
  const handleCopyEmail = () => {
    const email = 'patelmudra2004@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      setCopySuccess('copied to clipboard!');
      setTimeout(() => setCopySuccess(''), 2000);
    })
  }
  return (
    <main className="relative">
      <section id="home" className="h-screen w-full relative snap-start">

        <Image src="/landingpage.JPG" alt="background image" layout="fill" objectFit="cover" className="opacity-0 fade-in-image -z-10" quality={100} priority sizes="100vw "/>
        <div className={`opacity-0 animate-[fadeInRight_1s_ease-out_0.33s_forwards] absolute top-1/5 left-1/2 -translate-x-1/2 w-full max-w-lg px-4 text-center text-white md:top-1/5 md:bottom-auto md:left-[calc(23.75%+20px)] md:-translate-x-5/12 md:text-left md:w-auto md:max-w-none md:px-0 ${monst.className}`}>
          <h1 className={`${giazafont.className} hidden md:block text-6xl md:text-9xl font-extrabold leading-none`}>
          Mudra<br />
          Patel
          </h1>
          <h1 className={`${giazafont.className} block md:hidden text-3xl font-extrabold leading-none`}> Mudra Patel </h1> 
        </div>

        <div className={`opacity-0 animate-[fadeInLeft_1s_ease-out_0.46s_forwards] absolute top-1/4 left-1/2 -translate-x-1/2 w-11/12 text-center text-white md:top-auto md:left-11/20 md:bottom-15/48 md:right-20 md:w-auto md:translate-x-0 md:text-left ${giazafont.className}`}>
        <p className={` ${giazafont.className} hidden md:block text-2xl font-extrabold`}>
            The world is full of data, <br />
            Let's make it speak.
          </p>
          <p className="block md:hidden text-base font-bold">
            The world if full of data, let's make it speak. 
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex justify-center text-white opacity-0.5 fade-in-image"> 
          <p className={`font-semibold text-white animate-bounce absolute bottom-6 left-1/2 -translate-x-1/2 flex justify-center whitespace-nowrap `}>
            scroll below
          </p>
          <svg className="w-8 h-8 animate-bounce" fill="none" stroke="currentColor"
                             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                             <path strokeLinecap="round" strokeLinejoin="round" 
                             strokeWidth={2} d="M19 9l-7 7-7-7" />
                             </svg>
        </div>
      </section>

      <section id="about" className="py-24 px-8 bg-[--background] min-h-screen snap-start">
       <div className="flex flex-col md:flex-row items-start gap-16 max-w-7xl mx-auto">
        <div className="md:w-1/2 md:px-0 px-8">
          <h2 className={`text-4xl md:text-5xl font-bold leading-tight mb-8 text-center md:text-left text-[#181717] ${dmSans.className}`}>
             Hello, I'm Mudra. <br/>
             Nice to meet you!
          </h2>
          <h2 className={`text-4xl md:text-4xl font-bold leading-tight mb-8 text-center md:text-left text-[#181717] ${dmSans.className}`}>
            Welcome to my portfolio.
          </h2>
          <div className={`space-y-8 text-lg text-[#606060] leading-relaxed text-left ${dmSans.className}`}>
            <p className="text-lg mb-10 text-sans">"What unites people? Armies? Gold? Flags? Stories." -Tyrion Lannister <br/>
            As much as it pains me to say, Tryion got one thing right in Season 8 of Game of Thrones. People are fascinated by stories. They're captivating, and everyone -- irrespective of age, language, or otherwise --
            is fascinated by them; whether it is through traditional arts, novels, or video games. When I decided to pursue Data Science at Boston University, I came in with a goal in mind, to 
            learn the world of data and computing in order to tell stories through passion projects on a small scale, and when I enter the industry, through datasets on a global scale. 
            </p>
            <p className="text-lg">My journey into the tech space started at the age of nine, when my family moved from Gujarat, India, to the Bay Area.
              At that young age, I had no idea how special a place the silicon valley was, nor could I comprehend how lucky I was to grow up in such a culturally diverse place.
              As I grew up, my interests naturally gravitated towards STEM topics, and computers in particular -- which led me to pursue Computer Science into college, and finally, Data Science 
              as I transfered into Boston University.  
            </p>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center items-start px-14 md:px-0">
          <img src="/professional-2.jpg" alt="A portrait of Mudra Patel, photographed by Ashley Lau." className="object-contain w-full h-full max-h-[716px]"></img>
        </div>
       </div>
      </section>

      <section id="projects" className="py-24 px-8 font-dmsans bg-[--background]">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center md:text-left mb-16 ${dmSans.className}`}>
            Projects
          </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="bg-gradient-to-br from-#A3B1C6 to-#A3B1C6 p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 cursor-pointer [background-attachment:fixed] ${dmSans.className}">
                <div className="bg-stone-600 h-80 w-full mb-4"></div>
                <div>
                  <h3 className="font-bold text-lg uppercase text-[--foreground]">
                    Near-Earth Object 3D Visualizer
                  </h3>
                  <p className="text-base text-[--muted-foreground]">
                    Interactable web-app coming soon!
                  </p>
                </div>
              </div>
            {/* Project 2 */}
            <div className="bg-gradient-to-br from-E3D5C7 to-E3D5C7 p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 cursor-pointer [background-attachment:fixed] ${dmSans.className}">
              {/* Image Placeholder */}
              <div className="bg-stone-500 h-80 w-full mb-4 rounded-md"></div>
              <div>
                <h3 className="font-bold text-lg uppercase text-[--foreground]">
                  Project 2
                </h3>
                <p className="text-base text-[--muted-foreground]">
                Coming soon, check back at the end of summer!
                </p>
              </div>
            </div>
            {/* Project 3 */}
            <div className="bg-gradient-to-br from-#D1C7BD to-#D1C7BD p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 cursor-pointer [background-attachment:fixed] ${dmSans.className}">
              <div className="bg-stone-400 h-80 w-full mb-4"></div>
              <div>
                <h3 className="font-bold text-lg uppercase text-[--foreground] ${dmSans.className}">
                  Project 3
                </h3>
                <p className="text-base text-[--muted-foreground]">
                  Coming soon, check back at the end of summer!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[--background] px-8 py-12 snap-start min-h-screen flex flex-col justify-between">
          <div className="flex justify-between items-center">
          <div className={`${giazafont.className} text-5xl lowercase tracking-tighter`}>
              mudrapatel
            </div>
              <a href="#home" className={`${giazafont.className} group flex items-center gap-2 text-lg font-extrabold tracking-wider text-[--muted-foreground] transition-colors hover:text-[--foreground]`}>
                  <span>BACK TO TOP</span>
                  <span className="bg-[#181717] text-white rounded-full p-2 transition-transform group-hover:-translate-y-3">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l7-7 7 7" />
                      </svg>
                  </span>
              </a>
          </div>
          <div className="text-center">
              <p className="mb-4 text-2xl font-semibold tracking-wider text-[--muted-foreground] -translate-x-px">HAVE A STORY IN MIND?</p>
              <h2 className={`font-bold text-8xl md:text-[10rem] lg:text-[14rem] text-shadow-green-400 tracking-tighter leading-none ${giazafont.className}`}>
                  Let's Talk
              </h2>
              <div className="mt-12 flex justify-center items-center gap-5 relative">
                <a href="tel:408-747-7179" className="border border-gray-400 rounded-full px-6 py-3 text-sm font-semibold text-[--muted-foreground] transition-all duration-300 ease-in-out hover:bg-[--foreground] hover:text-[--background] hover:border-[--foreground] hover:-translate-y-1 hover:shadow-lg">
                  (408) 747-7179
                </a>
                <button 
                  onClick={handleCopyEmail} 
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className="min-w-[264px] border border-gray-400 rounded-full px-6 py-3 text-sm font-semibold text-[--muted-foreground] transition-all duration-300 ease-in-out hover:bg-[--foreground] hover:text-[--background] hover:border-[--foreground] hover:-translate-y-1 hover:shadow-lg">
                    {copySuccess || (isHovering ? 'click to copy email!' : ' patelmudra2004@gmail.com ')}
                </button>
              </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
              <div className="flex flex-wrap justify-center md:justify-start gap-6">
                  <a href="https://github.com/mpatel26-0816" target="_blank" rel="noopener noreferrer" className="border border-gray-400 rounded-full px-6 py-2 text-sm font-semibold text-[--muted-foreground] transition-all duration-300 ease-in-out hover:bg-[--foreground] hover:text-[--background] hover:border-[--foreground] hover:-translate-y-1 hover:shadow-lg">
                      GITHUB
                  </a>
                  <a href="https://www.linkedin.com/in/mudra2004/" target="_blank" rel="noopener noreferrer" className="border border-gray-400 rounded-full px-6 py-2 text-sm font-semibold text-[--muted-foreground] transition-all duration-300 ease-in-out hover:bg-[--foreground] hover:text-[--background] hover:border-[--foreground] hover:-translate-y-1 hover:shadow-lg">
                      LINKEDIN
                  </a>
                  <a href="./Resume.pdf" target="_blank" rel="noopener noreferrer" className="border border-gray-400 rounded-full px-6 py-2 text-sm font-semibold text-[--muted-foreground] transition-all duration-300 ease-in-out hover:bg-[--foreground] hover:text-[--background] hover:border-[--foreground] hover:-translate-y-1 hover:shadow-lg">
                      RESUME
                  </a>
              </div>
              <div className="text-center md:text-right text-xs text-[--muted-foreground] ${dmSans.className}">
                  <p>Designed and developed by Mudra Patel <br/> </p>
                  <p>in Santa Clara, California</p>
              </div>
          </div>
      </section>
    </main>
  );
}