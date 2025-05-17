import Banner_User_Icon from "../assets/images/logo.png"

const Banner = () => {
  return (
    <>
      <section class="w-full mb-36" id="hero">
        <div class="flex flex-col my-18 sm:my-20 lg:my-30 place-items-center">
          <img src={Banner_User_Icon} class="w-40 my-5" alt="" id="logo" />

          <div class="text-3xl mb-3 sm:text-5xl sm:mb-5 lg:text-3xl text-gray-700" id="line1">
            Peace Be Upon You!
          </div>

          <div class="text-xl sm:text-3xl lg:text-6xl text-gray-700 drop-shadow-md" id="line2">
            I'M SHUBHAV KUMAR
          </div>

          <div class="text-sm mt-32 mb-3 sm:text-lg sm:mt-6 sm:mb-4 lg:text-xl lg:mt-10 lg:tracking-tight text-gray-600"
            id="line3">
            Frontend Developer | MERN Stack Enthusiast
          </div>

          <div class="flex" id="cta">
            <button
              onClick={() => {
                const section = document.getElementById('projects');
                section?.scrollIntoView({ behavior: 'smooth' });
              }}
              type="button"
              class="w-max text-base py-2 px-7 mx-5 sm:text:xl sm:py-3 lg:py-3 lg:px-7 lg:mt-2 rounded focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium">
              See my work
            </button>

            <button
              onClick={() => window.open('https://drive.google.com/file/d/1Wq-OGBqWJwEVrKgNlVMSnbclAksHYwdZ/view?usp=drive_link', '_blank')}
              type="button"
              class="w-max text-base py-2 px-7 sm:text:xl sm:py-3 lg:py-3 lg:px-7 lg:mt-2 rounded focus:outline-none text-purple-800 border-2 border-purple-800 hover:bg-purple-800 hover:text-white focus:ring-4 focus:ring-purple-300 font-medium">
              <i class="fa-solid fa-download me-1"></i> Hire Me
            </button>
          </div>


        </div>
      </section>

    </>
  );
};

export default Banner;
