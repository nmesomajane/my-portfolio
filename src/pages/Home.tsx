import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import ProfilePic from "../assets/nmeso2.png";
 // Assuming you have a Pics object with image paths  

const Home = () => {
  const [showLine2, setShowLine2] = useState(false);
  const [showLine3, setShowLine3] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowLine2(true), 1500); // Show Line 2 after 1.5s
    setTimeout(() => setShowLine3(true), 3000); // Show Line 3 after 3s
  }, []);

  useEffect(() => {
    setTimeout(() => setShowProfile(true), 500); // Delay profile slide-in
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-black h-screen text-white px-8 md:px-16">
      {/* Left Side - Typewriter Text */}
      <div className="md:w-1/2 space-y-6 text-left">
        <h1 className="text-4xl md:text-5xl font-bold ">
          <Typewriter
            options={{
              strings: ["Hi there!"],
              autoStart: true,
              delay: 75,
              loop: true, // Prevent looping for line 1
              cursor: ''// remove the cursor
            }}
          />
          <br />
          <span className="font-extrabold">
            {showLine2 && (
              <Typewriter
                options={{
                  strings: ["I am Nmesoma"],
                  autoStart: true,
                  delay: 85,
                  loop: true, // Prevent looping for line 2
                  cursor: '' // remove the cursor
                }}
              />
            )}
          </span>
          <br />
          {showLine3 && (
            <Typewriter
              options={{
                strings: ["I am a Frontend Web Developer"],
                autoStart: true,
                delay: 95,
                loop: true, // Prevent looping for line 3
                cursor: '' // remove the cursor
              }}
            />
          )}
        </h1>


        <motion.div
          className="mt-6 "
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        >
          <Link
            to="/overview"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg shadow-lg" 
          >
            
            Click to Know More
          </Link>
        </motion.div>
      </div>

      {/* Right Side - Profile Image */}
      <motion.div
        className="md:w-1/2 flex justify-end relative"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
      >
        <img
          src={ProfilePic}
          alt="Profile"
          className="w-[800px] md:w-[60%] h-auto object-cover rounded-lg shadow-lg mix-blend-lighten"
        />
      </motion.div>
    </div>
  );
};

export default Home;
