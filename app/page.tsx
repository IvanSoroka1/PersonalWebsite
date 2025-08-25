import { FaGithub, FaReact, FaDocker, FaLinkedin, FaAndroid, FaJava, FaFigma } from 'react-icons/fa';
import { SiSqlite, SiFlask, SiFirebase, SiTypescript, SiAmazonec2 } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiPostgresql } from "react-icons/di";
import ProjectCard from './ProjectCard';
import Contact from './Contact'

export default function Home() {
  return (
    <div>
      <div className="flex gap-16 ml-12 mt-12 text-2xl">
        <a href="#about" className="transition-transform duration-300 hover:scale-110 hover:text-blue-600">About</a>
        <a href="#projects" className="transition-transform duration-300 hover:scale-110 hover:text-blue-600">Projects</a>
        <a href="#contact" className="transition-transform duration-300 hover:scale-110 hover:text-blue-600">Contact</a>
      </div>
      <section id="Name"
        className="min-h-screen flex items-center justify-center px-8 max-w-screen-xl mx-auto">
        <div className="flex flex-col items-start max-w-md mr-12">
          <h1 className="text-4xl text-center font-bold mt-8">Ivan Soroka</h1>
          <p className="text-center">Aspiring Software Developer</p>
          <div className="flex space-x-6 text-2xl mt-4">
            <a href="https://github.com/IvanSoroka1" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/ivan-soroka1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <img
          src="/Profile_Pic.JPG"
          alt="Profile picture"
          className="w-64 h-64 rounded-full mb-6 object-cover ml-12"
        />

      </section>

      <div className="bg-white text-black">
        <div id="about"
          className="relative min-h-screen flex flex-col justify-center px-8 max-w-screen-xl mx-auto">
          <h2 className="absolute top-6 left-0 text-3xl font-semibold tracking-widest">ABOUT</h2>
          <p>I am recent Bachelor of Science in computing science graduate from the University of Alberta. I have taken courses related to software development, databases, algorithms and data structures, computer architecture, machine learning and more.
          </p>
        </div>
      </div>

      <section id="experience"
        className="relative min-h-screen flex flex-col justify-center px-8 max-w-screen-xl mx-auto">
        <h2 className="absolute top-6 left-0 text-3xl font-semibold tracking-widest">EXPERIENCE</h2>
        Summer Student Intern
      </section>


      <div className="bg-white text-black">
        <section id="projects"
          className="relative flex flex-col max-w-screen-xl mx-auto ">
          <h2 className="absolute top-6 left-0 text-3xl font-semibold tracking-widest">PROJECTS</h2>
          <ul className="mt-24">
            <ProjectCard
              title="Task Manager Web App"
              description="This is a web app that allows you organize any tasks that you are facing in work or life into lists and boards. It is inspired by the popular tool Trello. It has been deployed on an AWS EC2 server instance and uses a AWS RDS instance for the Postgres database. The app is fully authenticated. The frontend was programmed in Typescript and React, whereas the backend was made with C# and ASP.NET Core."
              imageUrl="https://picsum.photos/512"
              githubUrl="https://github.com/IvanSoroka1/trello-clone"
              extraLinks={[
                { label: 'Live demo', url: 'http://18.219.52.3/' },
              ]}
              techIcons={[RiTailwindCssFill, FaReact, DiPostgresql, SiTypescript, FaDocker, SiAmazonec2]} /*Add C#, ASP.NET, Typescript, tailwind css, AWS EC2, AWS RDS, Postgres */
            />
            <ProjectCard
              title="Student Learning Companion Tool"
              description="I made this project for CMPUT 401 - Software Process and Product Management at the University of Alberta. This project is a chatbot web application to be used by students of the Faculty of Medicine and Dentistry at the University of Alberta. It allows..."
              imageUrl="/screenshot.png"
              githubUrl="https://github.com/UAlberta-CMPUT401/w24project-fomd_chat"
              extraLinks={[
                { label: 'More Info', url: 'https://cmput401.ca/projects/ae52f15e-adae-44ef-aca1-dccb0086d794' },
                { label: 'Documentation', url: 'https://ualberta-cmput401.github.io/w24project-fomd_chat/' }
              ]}
              techIcons={[FaReact, SiSqlite, FaDocker, SiFlask, FaFigma]}
            />
            <ProjectCard
              title="Household Inventory Manager"
              description="I made this project for CMPUT 301 - Introduction to Software Engineering at the University of Alberta. This is an Android app that allows you to keep track of items and valuables that are laying around in your house or that belong to you."
              imageUrl="https://picsum.photos/512"
              githubUrl="https://github.com/CMPUT301F23T31/LetsGoGolfing"
              techIcons={[FaAndroid, FaJava, SiFirebase, FaFigma]}
            />
            <ProjectCard
              title="Artificial Intelligence Capstone Project"
              description="I made this project for CMPUT 469 - Artificial Intelligence Capstone at the University of Alberta."
              imageUrl="https://picsum.photos/512"
              githubUrl="https://github.com/UAlberta-CMPUT401/w24project-fomd_chat"
            />

            <ProjectCard
              title="Team Fortress 2: Independent Project"
              description="This tool allows you to perform certain in-game movement mechanics automatically."
              imageUrl="/rocketjump.png"
              githubUrl="https://github.com/UAlberta-CMPUT401/w24project-fomd_chat"
            />

          </ul>
        </section>
      </div>

      {/* <section id="contact" className="relative min-h-screen flex flex-col justify-center px-8 max-w-screen-xl mx-auto"> */}
         <Contact />
      {/* </section> */}
    </div>
  );
}
