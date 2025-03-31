import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import Pics from "../assets/nmeso.jpg";
 // Assuming you have a Pics object with image paths  

const Home = () => {
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowProfile(true), 500); // Delay profile slide-in
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-black relative overflow-hidden">
      
      {/* Profile Image - Sliding from the Side */}
      <motion.img
        src="Pics" // Replace with your actual profile image
        alt="Profile"
        className="w-40 h-40 rounded-full absolute left-[-100px] sm:left-[-200px]"
        animate={{ x: showProfile ? 150 : 0 }} // Slide in effect
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {/* Typewriter Effect */}
      <h1 className="text-3xl sm:text-5xl font-bold text-center mt-20">
        <Typewriter
          options={{
            strings: ["Hi, I'm Nmesoma.", "I am a Frontend Web Developer."],
            autoStart: true,
            loop: true,
            delay: 75,
          }}
        />
      </h1>

      {/* Bouncing "Click to Know More" Button */}
      <motion.div
        className="mt-10"
        animate={{ y: [0, -10, 0] }} // Bounce animation
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
  );
};

export default Home;
