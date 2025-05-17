import LMS_Img from "../assets/images/project2.png"
import ECart_Img from "../assets/images/project1.png"

const Projects = () => {
    return (
        <><section class="font-winky text-center" id="projects">
            <div class="text-center pb-5 pt-16 text-2xl lg:text-4xl font-bold tracking-wider text-purple-800">
                Projects
            </div>

            <div class="d-flex justify-center">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-20 my-10 p-10 sm:px-10 lg:p-40 lg:pt-10">

                    <div
                        class="w-full sm:w-full bg-white p-2 rounded-2xl overflow-hidden mb-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition duration-500 ease-in-out">
                        <div class="overflow-hidden">
                            <img src={LMS_Img}
                                class="w-full object-cover rounded-2xl hover:scale-105 transition-transform duration-500 ease-in-out"
                                alt="E-Cart Preview" />
                        </div>

                        <div class="p-6">
                            <h2 class="text-2xl text-start font-bold text-purple-700 mb-3 tracking-wide">
                                Library-Management-System
                            </h2>

                            <p class="text-justify text-gray-600 text-sm leading-relaxed mb-6">
                                A user-friendly and powerful library management dashboard that enables librarians to manage
                                books, users, and borrowing records efficiently. Built for clarity and ease of use, it
                                simplifies everyday library tasks through modern web technologies.
                            </p>

                            <div class="flex gap-4">
                                <a href="https://library-management-system-flax-seven.vercel.app" target="_blank"
                                    class="px-5 py-2 text-purple-700 font-semibold border-b-2  border-transparent hover:border-purple-700 hover:text-purple-800 transition duration-300">
                                    Live Project
                                </a>

                                <a href="https://github.com/kshubhav123/Library-Management-System" target="_blank"
                                    class="flex items-center gap-2 px-5 py-2 border-black border text-black rounded-full hover:bg-gray-800 hover:scale-105 shadow-lg hover:shadow-2xl hover:text-white transition duration-300">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                        alt="GitHub" class="w-5 h-5" />
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>





                    <div
                        class="w-full sm:w-full bg-white p-2 rounded-2xl overflow-hidden mb-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition duration-500 ease-in-out">
                        <div class="overflow-hidden">
                            <img src={ECart_Img}
                                class="w-full object-cover rounded-2xl hover:scale-105 transition-transform duration-500 ease-in-out"
                                alt="E-Cart Preview" />
                        </div>

                        <div class="p-6">
                            <h2 class="text-2xl text-start font-bold text-purple-700 mb-3 tracking-wide">
                                E-Cart System
                            </h2>

                            <p class="text-justify text-gray-600 text-sm leading-relaxed mb-6">
                                A modern, responsive e-commerce platform built with React, Bootstrap, and JSON Server. It
                                features dynamic product listings, a real-time cart system, and a clean, intuitive interface
                                designed for a smooth shopping experience.
                            </p>

                            <div class="flex gap-4">
                                <a href="https://e-cart-systam.vercel.app/" target="_blank"
                                    class="px-5 py-2 text-purple-700 font-semibold border-b-2 border-transparent hover:border-purple-700 hover:text-purple-800 transition duration-300">
                                    Live Project
                                </a>

                                <a href="https://github.com/kshubhav123/E-Cart" target="_blank"
                                    class="flex items-center gap-2 px-5 py-2 border-black border text-black rounded-full hover:bg-gray-800 hover:scale-105 shadow-lg hover:shadow-2xl hover:text-white transition duration-300">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                        alt="GitHub" class="w-5 h-5" />
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section></>
    )
}

export default Projects