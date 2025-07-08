import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import ProfilePic from "../assets/nmeso3.jpg";
import pics from "../assets/pm.jpg"


const Experience = () => {
  return (
    <>
    <Helmet>
        <title>Nmesoma Nnopu | Frontend Developer</title>
        <meta name="description" content="Portfolio of Nmesoma, a frontend developer passionate about clean design and performant web apps." />
        <meta name="keywords" content="Nmesoma, frontend developer, React, portfolio, web developer,web developer in Nigeria" />
        <meta name="author" content="Nmesoma Nnopu" />
        <meta name="robots" content="index, follow" />
      </Helmet>
    <div className="min-h-screen bg-black text-gray-200 pt-20 md:px-10 md:mt-12
    px-6 py-12 font-sans">
      <motion.div
        className="w-full space-y-12"
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
              Frontend Developer (Intern)
              <br />
              <span className="font-semibold text-indigo-300">
                Duration:
              </span>{" "}
              April 2025 – Present
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
          <h1 className="text-2xl md:text-3xl font-bold text-indigo-800">
           Testimonials
          </h1>
        </div>

        <div className="flex mt-8 mb-10  flex-col md:flex-row gap-6">
          {/* Testimonial 1 */}
          <div className="bg-black border-4 border-black shadow-md p-6 flex-1 transition-transform duration-300 hover:-translate-y-2   rounded-[20px] hover:rounded-[32px]">
            <p className="text-white-700 text-base md:text-lg mb-4 leading-relaxed">
              Working with Nmesoma Nnopu on Kadan Kadan, our import/export shipping platform, has been an absolute pleasure. As the project manager, I’ve had the chance to closely observe her dedication, creativity, and problem-solving skills. <br /><br /> Nmesoma brings not only strong technical expertise but also a thoughtful, human-centered approach to her work. She listens actively, communicates clearly, and consistently meets deadlines with professionalism and grace. Her attention to detail and ability to take initiative have made a real impact. I’d gladly recommend her to anyone in need of a dependable and gifted web developer.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <img
                src={pics}
                alt="Profile"
                className="w-14 h-14 rounded-full border-4 border-white  object-cover transition duration-300"
              />
              <p className="text-base font-bold text-black">
                Jennifer Oro-Oghene <br />
                <span className="text-sm text-gray-600 font-medium">
                  Project Manager
                </span>
              </p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white border-4 border-white shadow-md p-6 flex-1 transition-transform duration-300 hover:-translate-y-2   rounded-[20px] hover:rounded-[32px]">
            <p className="text-gray-700 text-base md:text-lg mb-4 leading-relaxed">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus deleniti numquam repellendus facilis cupiditate
              laudantium dolorem iusto eos molestiae!
            </p>
            <div className="flex items-center gap-3 mt-4">
              <img
                src={ProfilePic}
                alt="Profile"
                className="w-14 h-14 rounded-full border-4 border-white  object-cover transition duration-300"
              />
              <p className="text-base font-bold text-black">
                Bright Lazarus <br />
                <span className="text-sm text-gray-600 font-medium">
                  Fullstack Developer
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      </motion.div>
    </div>
    </>
  );
};

export default Experience;
