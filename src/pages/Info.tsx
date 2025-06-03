import { motion } from "framer-motion";

const Info = () => {
  return (
    <div className="min-h-screen bg-black text-gray-200 pt-20 md:px-10 px-6 py-12 font-sans">
      <motion.div
        className="w-full space-y-12"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Skills */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-400 mb-2 tracking-wide md:p-4px">
            Skills
          </h2>
          <p className="text-lg md:text-xl font-medium text-gray-300 mb-1">
            <span className="text-indigo-300">Frameworks:</span> NEXTJS
          </p>
          <p className="text-lg md:text-xl font-medium text-gray-300">
            <span className="text-indigo-300">Proficient:</span> React.js ,
            Typescript, Javascript, Tailwind css, Node.js
          </p>
        </div>

        {/* Tools */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-400 mb-2 tracking-wide">
            Tools
          </h2>
          <p className="text-lg md:text-xl font-medium text-gray-300">
            Wordpress, Webflow, Figma, Firebase, Github, Canva
          </p>
        </div>

        {/* Experience */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-400 mb-2 tracking-wide">
            Experience
          </h2>
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
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-400 mb-2 tracking-wide">
            Demo Projects
          </h2>
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
              using React.js, Firebase, and Tailwind CSS.
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
      </motion.div>
    </div>
  );
};

export default Info;
