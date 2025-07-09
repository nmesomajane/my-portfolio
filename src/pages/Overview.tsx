import ProfilePic from "../assets/nmeso3.jpg";

import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { Helmet } from "react-helmet";
import demo1 from "../assets/chat.png";
import demo2 from "../assets/movie.png";
import demo3 from "../assets/expense.png";
import demo4 from "../assets/food.png";
import { Link } from "react-router-dom";


const Overview = () => {
  return (
    <>
      <Helmet>
        <title>Nmesoma Nnopu | Frontend Developer</title>
        <meta
          name="description"
          content="Portfolio of Nmesoma, a frontend developer passionate about clean design and performant web apps."
        />
        <meta
          name="keywords"
          content="Nmesoma, frontend developer, React, portfolio, web developer in Nigeria"
        />
        <meta name="author" content="Nmesoma Nnopu" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="w-full px-4 md:px-8 py-1 font-sans bg-gray-50">
        <div className="flex flex-col-reverse md:flex-row justify-end m-4 md:m-12 gap-x-4 md:gap-x-12  ">
          <motion.div
            className="md:w-1/2  space-y-6 md:space-y-8 text-left flex flex-col bottom-5"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-2xl md:text-3xl font-sans font-extrabold text-indigo-800 mb-4 pt-12  mt-2 ">
              About Me
            </h1>
            <p className="text-base md:text-md text-gray-700  mt-2 leading-relaxed italic">
              I’m a Freelance web developer with over a year of hands-on
              experience building responsive and engaging user interfaces. My
              journey into tech began with a strong curiosity and a desire to
              create meaningful digital experiences. Along the way, I’ve earned
              certifications from Coursera and the Female Media Network, which
              have helped shape my skills in crafting clean, user-friendly web
              applications. <br /> <br />
              Beyond certifications, I’ve worked and collaborated on several
              projects that challenged and expanded my creativity.What sets me
              apart is my attention to detail, ability to take initiative, and
              being a teachable team player who thrives in collaborative
              environments. I easily adapt to challenges, embrace feedback, and
              continuously strive to grow both personally and professionally.
              Whether it’s bringing a UI design to life or debugging a tough
              issue, I’m always up for the challenge. <br />
              <span className="font-semibold text-indigo-700">
                Let’s build something amazing, shall we?
              </span>
            </p>
            <div className="flex  space-x-4 ">
              <a
                href="https://instagram.com/nme_somaa"
                className="hover:text-gray-400 transition"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/nmesoma-nnopu-39836529a "
                className="hover:text-gray-400 transition"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/nmesomajane"
                className="hover:text-gray-400 transition"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://x.com/NmesomaNnopu?t=G5ZmooDkX8xYMxnPnGYPSQ&s=09"
                className="hover:text-gray-400 transition"
              >
                <FaTwitter size={24} />
              </a>
            </div>
          </motion.div>

          <div className="relative w-[250px] h-[350px] rounded-full mx-auto md:w-[350px] md:h-[400px] flex gap-y-1 pt-15 md:pt-20 center  md:justify-end ">
            <div className=" inset-0 rounded-full   ">
              <img
                src={ProfilePic}
                alt="Nmesoma"
                className="relative bg-black w-full h-full object-cover rounded-full border-4 border-black"
              />
            </div>
          </div>
        </div>
        
        <div className="px-4 md:px-8 py-10 mb-10">
          <div className="mb-8 text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-indigo-800">
              Projects
            </h1>
          </div>
          <div className=" flex flex-col md:flex-row gap-6 leading-relaxed italic">
            {/* Project Card */}
            <div className="pl-5 pr-5 pb-5 hover:border-indigo-400 hover:shadow-2xl hover:rounded-xl active:border-indigo-400 active:shadow-2xl active:rounded-xl flex flex-col items-left">
              <div className="w-full aspect-video overflow-hidden rounded-xl mb-4">
                <img
                  src={demo1}
                  alt="Chat App"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h2 className="text-lg font-bold text-indigo-700 mb-2">
                Chat App
              </h2>
              <p className="text-gray-600 text-base md:text-md mb-4 text-left">
                Built a real-time chat web application designed to streamline
                online conversations. Integrated React.js, Firebase, and
                Tailwind CSS to create a fast, modern user experience with
                features such as user authentication, search functionality, and
                real time message updates. Focused on clean UI components and
                seamless user interactions, while also implementing Firebase 
                Firestore for real-time data storage and retrieval. Optimized
                the app for performance and scalability, ensuring consistent
                functionality across devices. Project source code available on
              </p>
              <a
                href="https://github.com/nmesomajane/Quick-chat.git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 hover:underline active:underline font-semibold "
              >
                View on github
              </a>
            </div>

            <div className="pl-5 pr-5 pb-5 hover:border-indigo-400 hover:shadow-xl hover:rounded-xl active:border-indigo-400 active:shadow-2xl active:rounded-xl  flex flex-col items-left">
              <div className="w-full aspect-video overflow-hidden rounded-xl mb-4">
                <img
                  src={demo2}
                  alt="Movie App"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h2 className="text-lg font-bold text-indigo-700 mb-2">
                Movie App
              </h2>
              <p className="text-gray-600 text-base md:text-md mb-4 text-left">
                Movie Explorer Built a feature-rich movie streaming and
                discovery web application using React.js, TypeScript, Redux, and
                Tailwind CSS to deliver a seamless and engaging user experience.
                Integrated  features such as search functionality for
                quick movie lookups and a favorites system for personalized
                content curation.  Leveraged Redux for efficient state management
                across the app, ensuring smooth navigation and performance.
                 Offers users an
                intuitive way to discover and save their favorite movies.
              </p>
              <a
                href="https://github.com/nmesomajane/Quick-chat.git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 hover:underline active:underline font-semibold"
              >
                View on github
              </a>
            </div>

            {/* Repeat for other projects */}
            {/* ... */}
          </div>

          <div className=" flex flex-col md:flex-row gap-6 leading-relaxed italic">
            {/* Project Card */}
            <div className="pl-5 pr-5 pb-5 hover:border-indigo-400 hover:shadow-2xl hover:rounded-xl active:border-indigo-400 active:shadow-2xl active:rounded-xl flex flex-col items-left ">
              <div className="w-full aspect-video overflow-hidden rounded-xl mb-4">
                <img
                  src={demo3}
                  alt="Expense Tracker"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h2 className="text-lg font-bold text-indigo-700 mb-2">
                Finace App
              </h2>
              <p className="text-gray-600 text-base md:text-md mb-4 text-left">
                Expense Tracker Designed and developed a user-friendly expense
                tracking web application to help users monitor and manage their
                finances effectively. <br /> Built with React.js, TypeScript, and
                Tailwind CSS to ensure a responsive, modern, and efficient user
                interface. <br />  Implemented features such as real-time expense
                logging, expense categorization, and dynamic data updates,
                allowing users to easily track their spending habits and gain
                financial insights. 
              </p>
              <a
                href="https://github.com/nmesomajane/expense-tracker.git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 hover:underline active:underline font-semibold"
              >
                View on github
              </a>
            </div>

            <div className="pl-5 pr-5 pb-5 hover:border-indigo-400 hover:shadow-2xl hover:rounded-xl active:border-indigo-400 active:shadow-2xl active:rounded-xl  flex flex-col items-left">
              <div className="w-full aspect-video overflow-hidden rounded-xl mb-4">
                <img
                  src={demo4}
                  alt="Pefume Card"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h2 className="text-lg font-bold text-indigo-700 mb-2">
                Perfume Card
              </h2>
              <p className="text-gray-600 text-base md:text-md mb-4 text-left">
                Built a clean and elegant product card component for
                showcasing a perfume product on an e-commerce platform. Built
                with HTML, CSS, and Tailwind CSS, focusing on minimalism and
                visual appeal. <br />  The card displays essential product details such
                as the perfume name, description, price, and product imagery,
                arranged within a well-structured and responsive layout. <br /> Crafted
                to enhance the overall aesthetic and usability for product
                displays.
              </p>
              <a
                href="https://tefem-hazel.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 hover:underline font-semibold active:underline"
              >
                View Card
              </a>
            </div>

            {/* Repeat for other projects */}
            {/* ... */}
          </div>
          <div className="flex justify-center md:text-left my-8">
  <Link
    to="/experience"
    className="bg-indigo-600 md:hidden text-white px-6 py-2 rounded-full shadow hover:bg-indigo-700 transition text-lg font-semibold"
  >
    View Experience
  </Link>
</div>
        </div>
        
      </div>
    </>
  );
};

export default Overview;
