import React from "react";
import ProfilePic from "../assets/nmeso3.jpg";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
const Overview = () => {
  return (
    <div className="w-full  px-4 py-1 ">
      
      <div className="flex flex-col-reverse md:flex-row justify-end m-4 md:m-12 gap-x-4  ">
        
        <div className="md:w-1/2   md:space-y-8  md:text-left flex  flex-col  bottom-5">
          <h1 className="text-4xl font-sans font-extrabold text-gray-900 mb-4   mt-2">
            About Me{" "}
          </h1>
          <p className="text-lg text-gray-700  mt-2">
            I’m a Frontend Developer and freelancer with over a year of hands-on
            experience building responsive and engaging user interfaces. My
            journey into tech began with a strong curiosity and a desire to
            create meaningful digital experiences. Along the way, I’ve earned
            certifications from Coursera and the Female Media Network, which
            have helped shape my skills in crafting clean, user-friendly web
            applications. ,<br /> <br />
            Beyond certifications, I’ve worked and collaborated on several
            projects that challenged and expanded my creativity. I enjoy working
            in team settings, learning from others, and constantly exploring new
            tools and technologies to stay relevant in the tech space. Whether
            it’s solving problems with code or bringing a UI design to reality,
            I’m always up for the challenge. <br />
             Let’s build something amazing,
            shall we?
          </p>
          <div className="flex  space-x-4 ">
          <a href="https://instagram.com/nme_somaa" className="hover:text-gray-400 transition"><FaInstagram size={24} /></a>
          <a href="https://linkedin.com/in/nmesomannopu" className="hover:text-gray-400 transition"><FaLinkedin size={24} /></a>
          <a href="https://github.com/nmesomajane" className="hover:text-gray-400 transition"><FaGithub size={24} /></a>
        </div>
        </div> 

        <div className="relative w-[250px] h-[350px] rounded-full mx-auto md:w-1/2 flex gap-y-0 justify-end ">
          <div className=" inset-0 rounded-full   ">
            <img
              src={ProfilePic}
              alt="profile pics"
              className="relative bg-black w-full h-full object-cover rounded-full border-4 border-black"
            />
          </div>
        </div>
       
      </div>

      <div>
        <h1>Project</h1>
      </div>
    </div>
  );
};

export default Overview;
