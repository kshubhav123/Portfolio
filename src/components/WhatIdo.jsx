import WhatIDo from "../assets/images/whatido.png"




const WhatIdo = () => {
  return (
    <section id="whatido-section" class="my-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 font-winky sm:p-5">

        <div class="px-10 sm:px-20 my-10 flex flex-col items-start">
          <div class="text-base sm:text-xl lg:text-base text-gray-700 text-justify">
            <img id="whatido-image" src={WhatIDo} alt="What I Do"
              class="hover:scale-105 transition-transform duration-300 ease-in-out" />
          </div>
        </div>

        <div class="px-10 flex flex-col justify-center lg:justify-start  sm:px-20 w-full">
          <div id="frontend-title"
            class="text-2xl text-center lg:text-start w-full font-bold sm:text-4xl my-6 lg:my-8">
            Frontend Development
          </div>

          <div class="flex flex-wrap justify-center lg:justify-start gap-6 w-full mb-10">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML"
              class="w-10 h-10 transition-transform duration-300 hover:scale-110 hover:rotate-6" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS"
              class="w-10 h-10 transition-transform duration-300 hover:scale-110 hover:rotate-6" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="JS" class="w-10 h-10 transition-transform duration-300 hover:scale-110 hover:rotate-6" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React"
              class="w-10 h-10 transition-transform duration-300 hover:scale-110 hover:rotate-6" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              alt="Node.js"
              class="w-10 h-10 transition-transform duration-300 hover:scale-110 hover:rotate-6" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
              alt="MongoDB"
              class="w-10 h-10 transition-transform duration-300 hover:scale-110 hover:rotate-6" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git"
              class="w-10 h-10 transition-transform duration-300 hover:scale-110 hover:rotate-6" />
          </div>


          <div id="frontend-description" class="text-left text-gray-700 text-sm space-y-4 max-w-3xl mx-auto">
            <p class="desc-line">⚡ Develop interactive and accessible user interfaces using HTML5, CSS3,
              JavaScript (ES6+)</p>
            <p class="desc-line">⚡ Design responsive layouts with Bootstrap and Tailwind CSS for modern,
              mobile-first UI</p>
            <p class="desc-line">⚡ Build dynamic single-page applications (SPA) with React and manage state
              using Redux</p>
            <p class="desc-line">⚡ Integrate REST APIs and third-party services for data-driven features and
              automation</p>
            <p class="desc-line">⚡ Visualize data using Chart.js with clean, informative charts and real-time
              updates</p>
          </div>

        </div>
      </div>
    </section>

  );
};

export default WhatIdo;
