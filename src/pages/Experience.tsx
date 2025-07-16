import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

import ProfilePics from "../assets/Bright.jpg";
import pics from "../assets/pm.jpg"
// import {useNavigate  } from "react-router-dom";

// import {FaArrowLeft } from "react-icons/fa";

const Experience = () => {
  // const navigate = useNavigate();
  return (
    <>
    <Helmet>
        <title>Nmesoma Nnopu | Frontend Developer</title>
        <meta name="description" content="Portfolio of Nmesoma, a frontend developer passionate about clean design and performant web apps." />
        <meta name="keywords" content="Nmesoma Nnopu, frontend developer, React, portfolio, web developer, Genz, web developer in Nigeria" />
        <meta name="author" content="Nmesoma Nnopu" />
        <meta name="robots" content="index, follow" />
      </Helmet>
     
    <div className="min-h-screen bg-black text-gray-200 pt-20 md:px-10 md:mt-12 
    px-6 py-12 leading-relaxed font-sans">
       {/* <div>
         <button
          type="button"
          onClick={() => {
           
              navigate("/overview");
           
          }}
          className="absolute left-2  cursor-pointer lg:hidden"
        >
          <FaArrowLeft/>
        </button>
      </div> */}
      <motion.div
        className="w-full  space-y-12"
        initial={{ x: -100, opacity: 0}}
       
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Skills */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-indigo-400 mb-2 tracking-wide md:p-4px">
            Skills
          </h1>
          <p className="text-lg md:text-xl font-medium text-gray-300 mb-1">
            <span className="text-indigo-300">Frameworks:</span> NEXTJS
          </p>
          <p className="text-lg md:text-xl font-medium text-gray-300">
            <span className="text-indigo-300">Proficient:</span> React.js ,
            Typescript, Javascript, Tailwind css, Node.js(Beginner)
          </p>
        </div>

        {/* Tools */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-400 mb-2 tracking-wide">
            Tools
          </h2>
          <p className="text-lg md:text-xl font-medium text-gray-300">
            Wordpress, Webflow, Git, Github, Firebase, Canva, Figma
          </p>
        </div>

        {/* Experience */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-indigo-400 mb-2 tracking-wide">
          Professional  Experience
          </h1>
          <p className="text-lg font-semibold text-white">
            Productsio, Rivers State, Nigeria
          </p>
          <p className="text-lg font-medium text-indigo-200 mb-2">
            Kadankadan – Website Management & Feature Implementation
          </p>
          <div className="text-gray-300 text-base md:text-lg space-y-2">
            <p>
              <span className="font-semibold text-indigo-300">Role:</span>{" "}
              Frontend Developer
              <br />
              <span className="font-semibold text-indigo-300">
                Duration:
              </span>{" "}
              April 2025 – June 2025
            </p>
            <ul className="list-disc list-inside ml-2 gap-10">
              <li>
                Developing and integrating new UI components based on design
                requirements
              </li>
              <li>
                Enhancing existing features to improve user experience and site
                performance
              </li>
              <li>
                Debugging and resolving frontend issues to maintain site
                stability
              </li>
              <li>
                Collaborating with the team to suggest and implement innovative
                solutions that support global shipping operations
              </li>
              <li>
                Performing routine updates and optimizations to keep the site
                current and efficient
              </li>
            </ul>
            <p>
              Check it out:{" "}
              <a
                href="https://kadankadan.com/"
                className="text-indigo-400 underline hover:text-indigo-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                kadankadan.com
              </a>
            </p>
          </div>
        </div>

        {/* Demo Projects */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-indigo-400 mb-2 tracking-wide">
             Projects
          </h1>
          <ul className="list-disc list-inside text-lg md:text-xl text-gray-300 space-y-2 ml-2">
            <li>
              Developed a real-time{" "}
              <a
                href="https://github.com/nmesomajane/Quick-chat.git"
                className="text-indigo-400 underline hover:text-indigo-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                chat application
              </a>{" "}
              using React.js, Firebase, and Tailwind CSS.Enables seamless messaging with features like user authentication and search functionality.
            </li>
            <li>
              Developed a user-friendly{" "}
              <a
                href="https://github.com/nmesomajane/expense-tracker.git"
                className="text-indigo-400 underline hover:text-indigo-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Expense tracker
              </a>{" "}
              using React.js, TypeScript, and Tailwind CSS. Enabled real-time
              expense logging and categorization for better financial tracking.
            </li>
            <li>
              Developed a feature-rich{" "}
              <a
                href="https://github.com/nmesomajane/expense-tracker.git"
                className="text-indigo-400 underline hover:text-indigo-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                movie application
              </a>{" "}
              using React.js, TypeScript, Redux, and Tailwind CSS. Integrated
              search and favorites functionality for personalized content
              discovery.
            </li>
            <li>
              Product Card{" "}
              <a
                href="https://tefem-hazel.vercel.app/"
                className="text-indigo-400 underline hover:text-indigo-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Perfume
              </a>
            </li>
          </ul>
        </div>

       <div className="px-4 md:px-8 py-10">
  <div className="mb-8 text-center">
    <h1 className="text-2xl md:text-3xl font-bold text-indigo-400 tracking-wide">
      Testimonials
    </h1>
    <p className="text-gray-400 text-base md:text-lg mt-2">
      What people say about working with me
    </p>
  </div>
  <div className="flex flex-col md:flex-row gap-8 md:gap-10 justify-center items-stretch">
    {/* Testimonial 1 */}
    <motion.div
      className="bg-gradient-to-br from-black via-gray-900 to-indigo-950 border-0 shadow-xl p-8 flex-1 rounded-3xl flex flex-col justify-between hover:scale-105 transition-transform duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.1 }}
    >
      <p className="text-gray-200 text-base md:text-lg mb-6 leading-relaxed italic">
      Working with Nmesoma Nnopu on Kadan Kadan, our import/export shipping platform, has been an absolute pleasure. As the project manager, I’ve had the chance to closely observe her dedication, creativity, and problem-solving skills.
        <br /><br />
        Nmesoma brings not only strong technical expertise but also a thoughtful, human-centered approach to her work. She listens actively, communicates clearly, and consistently meets deadlines with professionalism and grace. Her attention to detail and ability to take initiative have made a real impact. I’d gladly recommend her to anyone in need of a dependable and gifted web developer.
      </p>
      <div className="flex items-center gap-4 mt-4">
        <img
          src={pics}
          alt="Profile"
          className="w-16 h-16 rounded-full border-4 border-indigo-400 object-cover shadow"
        />
        <div>
          <p className="text-lg font-bold text-indigo-200">Jennifer Oro-Oghene</p>
          <span className="text-sm text-gray-400 font-medium">Project Manager</span>
        </div>
      </div>
    </motion.div>

    {/* Testimonial 2 */}
    <motion.div
      className="bg-gradient-to-br from-black via-gray-900 to-indigo-950 border-0 shadow-xl p-8 flex-1 rounded-3xl flex flex-col justify-between hover:scale-105 transition-transform duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      <p className="text-gray-200 text-base md:text-lg mb-6 leading-relaxed italic">
       Collaborating with Nmesoma has been an absolute pleasure. As a frontend developer, she brings creativity, attention to detail, and a strong sense of design to every project. Her ability to translate ideas into clean, responsive, and user-friendly interfaces is impressive. <br /> <br /> Working with her was seamless,she communicates clearly, meets deadlines, and is always open to feedback. Her passion for creating intuitive digital experiences really stands out. I’d gladly work with her again on future projects.
      </p>
      <div className="flex items-center gap-4 mt-4">
        <img
          src={ProfilePics}
          alt="Profile"
          className="w-16 h-16 rounded-full border-4 border-indigo-400 object-cover shadow"
        />
        <div>
          <p className="text-lg font-bold text-indigo-200">Bright Lazarus</p>
          <span className="text-sm text-gray-400 font-medium">Fullstack Developer</span>
        </div>
      </div>
    </motion.div>
  </div>
</div>
      </motion.div>
    </div>
    </>
  );
};

export default Experience;
