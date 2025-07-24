import Image from "next/image";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function Home() {
  return (
    <main className="relative">
      <section id="home" className="h-screen w-full relative">

        <Image src="/landingpage.jpg" alt="background image" layout="fill" objectFit="cover" className="-z-10" quality={100} priority sizes="100vw"/>
        <div className="absolute top-1/5 left-1/2 -translate-x-1/2 w-full max-w-lg px-4 text-center text-white md:top-1/5 md:bottom-auto md:left-19/80 md:-translate-x-5/12 md:text-left md:w-auto md:max-w-none md:px-0">
          <h1 className="hidden md:block text-6xl md:text-9xl font-extrabold leading-none">
          Mudra<br />
          Patel
          </h1>
          <h1 className="block md:hidden text-3xl font-extrabold leading-none">
          Mudra Patel  
          </h1> 
        </div>

        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-11/12 text-center text-white md:top-auto md:left-11/20 md:bottom-15/48 md:right-20 md:w-auto md:translate-x-0 md:text-left">
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

      <section id="about" className="py-24 px-8 bg-[--background] min-h-screen">
       <div className="flex flex-col md:flex-row items-start gap-16 max-w-7xl mx-auto">
        <div className="md:w-1/2">
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
        <div className="md:w-1/2 flex justify-center items-start">
          <img src="/professional-2.jpg" alt="A portrait of Mudra Patel, photographed by Ashley Lau." className="object-contain w-full h-full max-h-[716px]"></img>
        </div>
       </div>
      </section>
    </main>
  );
}