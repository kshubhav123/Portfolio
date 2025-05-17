import User_Img from "../assets/images/about.jpg";


export const About = () => {
    return (
        <section class="w-full lg:h-full bg-gray-100 relative flex font-winky">

            <div class="size-50 lg:size-80 bg-purple-200 opacity-90 rounded-br-full absolute">
            </div>

            <div class="size-50 lg:size-80 bg-purple-200 opacity-90 rounded-tl-full absolute right-0 bottom-0">
            </div>


            <div class="w-full grid grid-cols-1 lg:grid-cols-2 items-center p-10">
                <div class="flex justify-center z-10">
                    <img src={User_Img} alt="About Image" class="rounded-3xl shadow-2xl w-1/2" />
                </div>

                <div class="mt-8 space-y-3 z-10">
                    <div class="text-4xl lg:text-4xl sm:text-5xl font-bold text-gray-800">
                        Hi, I'm Shubhav,
                    </div>
                    <div class="tracking-wider text-xl">
                        Reach Out To Me
                    </div>
                    <div class="lg:text-sm sm:text-3xl text-gray-600">
                        Discuss A Project Or Just want to Say Hi ? My Inbox Is open For All.
                    </div>

                    <p class="text-sm text-justify text-gray-600 lg:pr-30">
                        Front-end developer passionate about crafting beautiful and functional web experiences. With
                        expertise in React.js and related frameworks, I focus on building responsive, user-friendly websites
                        and applications.
                    </p>
                    <p className="text-sm text-justify text-gray-600 lg:pr-30">
                        With over 2+ years of experience, I’ve worked on diverse projects and completed certifications in
                        Responsive Web Design, Data Integration, React, and Redux. I continue to deepen my understanding of
                        modern frontend practices and performance optimization.
                    </p>
                    <p className="text-sm text-justify text-gray-600 lg:pr-30">
                        I’m currently expanding my skills in backend development with Node.js and Express, while also
                        exploring Framer Motion to create smooth, interactive UI animations.
                    </p>
                    {/* <p className="text-sm text-justify text-gray-600 lg:pr-30">
                        My journey into web development began with a curiosity about how things work on the internet—quickly
                        turning into a passion for building digital experiences of my own. I actively learn and adapt to
                        stay up to date with the latest technologies, tools, and industry best practices.
                    </p> */}
                    <p className="text-sm text-justify text-gray-600 lg:pr-30">
                        When I'm not coding, you might find me exploring new design trends, contributing to open-source
                        projects, or experimenting with new technologies to enhance my skill set.
                    </p>



                    <div class="flex space-x-4 items-center">
                        <a href="https://www.linkedin.com/in/shubhav-kumar-936b4a1a4/" target="_blank" title="LinkedIn">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                                class="size-5 hover:scale-110 transition duration-300" alt="LinkedIn" />
                        </a>

                        <a href="https://github.com/kshubhav123" target="_blank" title="GitHub">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                                class="size-5 hover:scale-110 transition duration-300" alt="GitHub" />
                        </a>

                        <a href="https://x.com/SHUBHAVKUMAR4" target="_blank" title="Twitter">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg"
                                class="size-5 hover:scale-110 transition duration-300" alt="Twitter" />
                        </a>

                        <a href="https://www.instagram.com/its_shubhav/" target="_blank" title="Instagram">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                                class="size-5 hover:scale-110 transition duration-300" alt="Instagram" />
                        </a>

                        <a href="https://wa.me/6395320368" target="_blank" title="WhatsApp">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                                class="size-5 hover:scale-110 transition duration-300" alt="WhatsApp" />
                        </a>

                    </div>

                    <button
                        class="mt-5 px-3 py-2 border-purple-600 text-purple-600 border-1   rounded hover:bg-indigo-700 hover:text-white  transition">
                        Contact Me
                    </button>
                </div>
            </div>
        </section>
    )
}
