import Image from "next/image";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function Home() {
  return (
    <main className="relative">
      <section id="home" className="h-screen w-full relative snap-start">

        <Image src="/landingpage.jpg" alt="background image" layout="fill" objectFit="cover" className="opacity-0 fade-in-image -z-10" quality={100} priority sizes="100vw "/>
        <div className="opacity-0 animate-[fadeInRight_1s_ease-out_0.33s_forwards] absolute top-1/5 left-1/2 -translate-x-1/2 w-full max-w-lg px-4 text-center text-white md:top-1/5 md:bottom-auto md:left-[calc(23.75%+20px)] md:-translate-x-5/12 md:text-left md:w-auto md:max-w-none md:px-0">
          <h1 className="hidden md:block text-6xl md:text-9xl font-extrabold leading-none">
          Mudra<br />
          Patel
          </h1>
          <h1 className="block md:hidden text-3xl font-extrabold leading-none">
          Mudra Patel  
          </h1> 
        </div>

        <div className="opacity-0 animate-[fadeInLeft_1s_ease-out_0.46s_forwards] absolute top-1/4 left-1/2 -translate-x-1/2 w-11/12 text-center text-white md:top-auto md:left-11/20 md:bottom-15/48 md:right-20 md:w-auto md:translate-x-0 md:text-left">
          <p className="hidden md:block text-2xl font-semibold">
            Personal Statement Undecided <br />
            something tech
          </p>
          <p className="block md:hidden text-base font-semibold">
            Personal Statement Undecided something tech
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex justify-center text-white opacity-0.5 fade-in-image"> {/*for the pointer arrow (now sure if keeping) */}
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

      <section id="about" className="py-24 px-8 bg-[--background] min-h-screen snap-start">
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

      <section id="projects" className="py-24 px-8 font-dmsans bg-[--background]">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center md:text-left mb-16 ${dmSans.className}`}>
            Projects
          </h2>
          {/* Single grid container for all project cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="bg-gradient-to-br from-zinc-100 to-zinc-200 p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 cursor-pointer [background-attachment:fixed]">
                <div className="bg-gray-300 h-80 w-full mb-4"></div>
                <div>
                  <h3 className="font-bold text-lg uppercase text-[--foreground]">
                    Name and title of project
                  </h3>
                  <p className="text-base text-[--muted-foreground]">
                    This will be the description of the project, could be few sentences
                  </p>
                </div>
              </div>

            {/* Project 2 */}
            <div className="bg-gradient-to-br from-zinc-100 to-zinc-200 p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 cursor-pointer [background-attachment:fixed]">
              {/* Image Placeholder */}
              <div className="bg-gray-300 h-80 w-full mb-4 rounded-md"></div>

              {/* Text Content */}
              <div>
                <h3 className="font-bold text-lg uppercase text-[--foreground]">
                  Name and title of project
                </h3>
                <p className="text-base text-[--muted-foreground]">
                  This will be the description of the project, could be few sentences
                </p>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-gradient-to-br from-zinc-100 to-zinc-200 p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 cursor-pointer [background-attachment:fixed]">
              <div className="bg-gray-300 h-80 w-full mb-4"></div>
              <div>
                <h3 className="font-bold text-lg uppercase text-[--foreground]">
                  Name and title of project
                </h3>
                <p className="text-base text-[--muted-foreground]">
                  This will be the description of the project, could be few sentences
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">

      </section>

      <section id="footer">
        
      </section>


      {/* <section id="skills" className="py-24 px-8 font-dmsans bg-[--background]">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          My Toolkit
        </h2>
        <div className="[prespective:1000px]">
          <div className="flex flex-col gap-4 animate-[scroll-vertical_40s_linear_infinite] [transform-style:preserve-3d] [transform:rotateY(-15deg)]">
            <div className="flex flex-col items-center gap-4 text-2xl text-[--muted-foreground]">
              <div>Python</div>
              <div>Adobe CC</div>
              <div>Next.js</div>
              <div>Three.js</div>
              <div>HTML</div>
              <div>CSS</div>
              <div>Pandas</div>
              <div>NumPy</div>
              <div>C++</div>
              <div>MongoDB</div>
              <div>Azure</div>
              <div>Git</div>
              <div>JavaScript</div>
              <div>Plotly Dash</div>
              <div>Matplotlib</div>
              <div>Figma</div>
              <div>Rust</div>
              <div>MS 365</div>
            </div>

            <div className="flex flex-col items-center gap-4 text-2xl text-[--muted-foreground]">
              <div>Python</div>
              <div>Adobe CC</div>
              <div>Next.js</div>
              <div>Three.js</div>
              <div>HTML</div>
              <div>CSS</div>
              <div>Pandas</div>
              <div>NumPy</div>
              <div>C++</div>
              <div>MongoDB</div>
              <div>Azure</div>
              <div>Git</div>
              <div>JavaScript</div>
              <div>Plotly Dash</div>
              <div>Matplotlib</div>
              <div>Figma</div>
              <div>Rust</div>
              <div>MS 365</div>
            </div>
          </div>

          <div className="flex flex-col gap-4 animate-[scroll-vertical_30s_linear_infinite] [transform-style:preserve-3d] [transform:rotateY(-5deg)]">
            <div className="flex flex-col items-center gap-4 text-2xl text-[--muted-foreground]">
              <div>Python</div>
              <div>Adobe CC</div>
              <div>Next.js</div>
              <div>Three.js</div>
              <div>HTML</div>
              <div>CSS</div>
              <div>Pandas</div>
              <div>NumPy</div>
              <div>C++</div>
              <div>MongoDB</div>
              <div>Azure</div>
              <div>Git</div>
              <div>JavaScript</div>
              <div>Plotly Dash</div>
              <div>Matplotlib</div>
              <div>Figma</div>
              <div>Rust</div>
              <div>MS 365</div>
            </div>

            <div className="flex flex-col items-center gap-4 text-2xl text-[--muted-foreground]">
              <div>Python</div>
              <div>Adobe CC</div>
              <div>Next.js</div>
              <div>Three.js</div>
              <div>HTML</div>
              <div>CSS</div>
              <div>Pandas</div>
              <div>NumPy</div>
              <div>C++</div>
              <div>MongoDB</div>
              <div>Azure</div>
              <div>Git</div>
              <div>JavaScript</div>
              <div>Plotly Dash</div>
              <div>Matplotlib</div>
              <div>Figma</div>
              <div>Rust</div>
              <div>MS 365</div>
            </div>
          </div>

          <div className="flex flex-col gap-4 animate-[scroll-vertical_18s_linear_infinite] [transform-style:preserve-3d] [transform:rotateY(5deg)]">
            <div className="flex flex-col items-center gap-4 text-2xl text-[--muted-foreground]">
              <div>Python</div>
              <div>Adobe CC</div>
              <div>Next.js</div>
              <div>Three.js</div>
              <div>HTML</div>
              <div>CSS</div>
              <div>Pandas</div>
              <div>NumPy</div>
              <div>C++</div>
              <div>MongoDB</div>
              <div>Azure</div>
              <div>Git</div>
              <div>JavaScript</div>
              <div>Plotly Dash</div>
              <div>Matplotlib</div>
              <div>Figma</div>
              <div>Rust</div>
              <div>MS 365</div>
            </div>

            <div className="flex flex-col items-center gap-4 text-2xl text-[--muted-foreground]">
              <div>Python</div>
              <div>Adobe CC</div>
              <div>Next.js</div>
              <div>Three.js</div>
              <div>HTML</div>
              <div>CSS</div>
              <div>Pandas</div>
              <div>NumPy</div>
              <div>C++</div>
              <div>MongoDB</div>
              <div>Azure</div>
              <div>Git</div>
              <div>JavaScript</div>
              <div>Plotly Dash</div>
              <div>Matplotlib</div>
              <div>Figma</div>
              <div>Rust</div>
              <div>MS 365</div>
            </div>
          </div>

          <div className="flex flex-col gap-4 animate-[scroll-vertical_17s_linear_infinite] [transform-style:preserve-3d] [transform:rotateY(15deg)]">
            <div className="flex flex-col items-center gap-4 text-2xl text-[--muted-foreground]">
              <div>Python</div>
              <div>Adobe CC</div>
              <div>Next.js</div>
              <div>Three.js</div>
              <div>HTML</div>
              <div>CSS</div>
              <div>Pandas</div>
              <div>NumPy</div>
              <div>C++</div>
              <div>MongoDB</div>
              <div>Azure</div>
              <div>Git</div>
              <div>JavaScript</div>
              <div>Plotly Dash</div>
              <div>Matplotlib</div>
              <div>Figma</div>
              <div>Rust</div>
              <div>MS 365</div>
            </div>

            <div className="flex flex-col items-center gap-4 text-2xl text-[--muted-foreground]">
              <div>Python</div>
              <div>Adobe CC</div>
              <div>Next.js</div>
              <div>Three.js</div>
              <div>HTML</div>
              <div>CSS</div>
              <div>Pandas</div>
              <div>NumPy</div>
              <div>C++</div>
              <div>MongoDB</div>
              <div>Azure</div>
              <div>Git</div>
              <div>JavaScript</div>
              <div>Plotly Dash</div>
              <div>Matplotlib</div>
              <div>Figma</div>
              <div>Rust</div>
              <div>MS 365</div>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
}