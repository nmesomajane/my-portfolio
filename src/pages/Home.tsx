
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import ProfilePic from "../assets/nmeso2.png";
import { FaChevronDown } from "react-icons/fa";
import { Helmet } from "react-helmet";


const Home = () => {
 
  return (
    <>
    <Helmet>
        <title>Nmesoma Nnopu - Frontend Developer</title>
        <meta name="description" content="Portfolio of Nmesoma, a frontend developer passionate about clean design and performant web apps." />
        <meta name="keywords" content="Nmesoma, frontend developer, React, portfolio, web developer in Nigeria" />
        <meta name="author" content="Nmesoma Nnopu" />
        <meta name="robots" content="index, follow" />
      </Helmet>
    <div className="  bg-black w-full   px-2 md:px-16 flex flex-col-reverse md:flex-row items-center justify-end   h-screen text-white fixed  ">
      {/* Left Side - Typewriter Text */}
      <div className="md:w-1/2   md:space-y-6 text-center md:text-left flex  flex-col  bottom-5">
        <h1 className="text-4xl gap-2 py-4 md:gap-4 md:text-5xl  ">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  '<span class="text-indigo-400 text-2xl md:text-3xl font-mono tracking-widest">HI THERE !</span>'
                )
                .pauseFor(1000)
                .typeString(
                  '<br><span class="text-white text-4xl md:text-5xl font-extrabold font-sans">I\'M NMESOMA NNOPU</span>'
                )
                .pauseFor(1000)
                .typeString(
                  '<br><span class="text-indigo-300 text-xl md:text-2xl font-semibold font-mono">A FRONT-END WEB DEVELOPER. </span>'
                )
                .start();
            }}
            options={{
              delay: 75,
              cursor: "|",
            }}
          />
        </h1>

        <motion.div
          className="absolute md:bottom-10 bottom-20 text-center w-full"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        >
          <Link
            to="/overview"
            className="text-white  hover:underline text-xl flex items-center justify-center gap-2 "
          >
            Click to Know More <br />{" "}
            <FaChevronDown className="mt-1  justify-center items-center " />
          </Link>
        </motion.div>
      </div>

      {/* Right Side - Profile Image */}
      <motion.div
        className="md:w-1/2 flex gap-y-0 justify-end  rounded-full "
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
      >
        <img
          src={ProfilePic}
          alt="Nmesoma"
          className="w-[250px]  md:w-[70%] h-auto object-cover rounded-full shadow-lg mix-blend-lighten"
        />
      </motion.div>
    </div>
    </>
  );
};

export default Home;
