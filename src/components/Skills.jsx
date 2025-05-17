

const Skills = () => {
  return (
    <>
      <section class="py-22 bg-[#090b14] text-white font-sans">
        <h1 class="text-4xl font-bold text-purple-400 mb-20 text-center">Top Skills</h1>



        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 place-items-center"
          id="frontend-skills">
          <div class="skill-box border-effect relative html-border">
            <div class="border-before"></div>
            <div class="border-after"></div>
            <img class="tech-icon-img w-10 h-10 mb-2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
            <p class="text-sm font-semibold">HTML</p>
          </div>
          <div class="skill-box border-effect css-border">
            <div class="border-before"></div>
            <div class="border-after"></div>
            <img class="tech-icon-img w-10 h-10 mb-2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
            <p class="text-sm font-semibold">CSS</p>
          </div>
          <div class="skill-box border-effect js-border">
            <div class="border-before"></div>
            <div class="border-after"></div>
            <img class="tech-icon-img w-10 h-10 mb-2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="JS" />
            <p class="text-sm font-semibold">JavaScript</p>
          </div>
          <div class="skill-box border-effect bootstrap-border">
            <div class="border-before"></div>
            <div class="border-after"></div>
            <img class="tech-icon-img w-10 h-10 mb-2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
              alt="Bootstrap" />
            <p class="text-sm font-semibold">Bootstrap</p>
          </div>
          <div class="skill-box border-effect react-border">
            <div class="border-before"></div>
            <div class="border-after"></div>
            <img class="tech-icon-img w-10 h-10 mb-2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
            <p class="text-sm font-semibold">React</p>
          </div>
          <div class="skill-box border-effect redux-border">
            <div class="border-before"></div>
            <div class="border-after"></div>
            <img class="tech-icon-img w-10 h-10 mb-2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="Redux" />
            <p class="text-sm font-semibold">Redux</p>
          </div>
          <div class="skill-box border-effect angular-border">
            <div class="border-before"></div>
            <div class="border-after"></div>
            <img class="tech-icon-img w-10 h-10 mb-2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
              alt="AngularJS" />
            <p class="text-sm font-semibold">AngularJS</p>
          </div>
          <div class="skill-box border-effect tailwind-border">
            <div class="border-before"></div>
            <div class="border-after"></div>
            <img class="tech-icon-img w-10 h-10 mb-2"
              src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="Tailwind" />
            <p class="text-sm font-semibold">Tailwind CSS</p>
          </div>
          <div class="skill-box border-effect node-border">
            <img class="tech-icon-img w-10 h-10 mb-2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
            <p class="text-sm font-semibold">Node.js</p>
          </div>
          <div class="skill-box border-effect express-border">
            <img class="tech-icon-img w-10 h-10 mb-2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
              alt="Express.js" />
            <p class="text-sm font-semibold">Express.js</p>
          </div>
          <div class="skill-box border-effect mongodb-border">
            <img class="tech-icon-img w-10 h-10 mb-2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
            <p class="text-sm font-semibold">MongoDB</p>
          </div>

          <div class="skill-box border-effect postman-border">
            <img class="tech-icon-img w-10 h-10 mb-2"
              src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/ffffff/external-postman-is-the-only-complete-api-development-environment-logo-shadow-tal-revivo.png"
              alt="Postman" />
            <p class="text-sm font-semibold">Postman</p>
          </div>
          <div class="skill-box border-effect vscode-border">
            <img class="tech-icon-img w-10 h-10 mb-2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" />
            <p class="text-sm font-semibold">VS Code</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Skills