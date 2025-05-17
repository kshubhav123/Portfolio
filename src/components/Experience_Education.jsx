import React from 'react'

const Experience_Education = () => {
  return (
    <section class="bg-gray-50 py-22 px-4">
        <div class="px-4">
            <div class="max-w-6xl mx-auto">

                <h2 class="text-4xl font-bold text-center text-purple-700 mb-16">Experience & Education</h2>

                <div
                    class="bg-white p-10 rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition duration-500 hover:transform hover:scale-105">
                    <h3 class="text-2xl font-semibold text-gray-800 mb-4">Frontend Developer | RTS Manpower Solution Pvt
                        Ltd</h3>
                    <p class="text-xs text-purple-600 bg-purple-100 px-3 py-1 rounded-full w-max mb-4">May 2022 – Jan
                        2025</p>

                    <ul class="list-disc list-inside text-gray-600 text-sm space-y-2">
                        <li>Developed user-friendly web applications with React.js and Redux.</li>
                        <li>Collaborated with UI/UX designers to create modern, responsive interfaces.</li>
                        <li>Integrated third-party APIs and RESTful services for dynamic content.</li>
                        <li>Ensured code maintainability and performance optimization for large-scale applications.</li>
                        <li>Worked in an Agile environment, participating in sprint planning and code reviews.</li>
                        <li>Created comprehensive technical documentation for team members.</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="py-18 bg-gray-50 flex items-center justify-center px-4">
            <div class="max-w-6xl w-full ">


                <div class="space-y-10">

                    <div
                        class="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-2xl hover:transform hover:scale-105 transition duration-500">
                        <h3 class="text-2xl font-semibold text-gray-800 mb-1">Bachelor of Computer Applications (BCA)
                        </h3>
                        <p class="text-sm text-gray-500 mb-2">CSJMU, Kanpur, UP</p>
                        <p class="text-xs text-purple-600 bg-purple-100 px-3 py-1 rounded-full w-max mb-4">2017 – 2020
                        </p>
                        <p>Specialized in Web Development and Programming</p>
                    </div>

                </div>
            </div>
        </div>

    </section>

  )
}

export default Experience_Education