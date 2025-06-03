import ProfilePic from "../assets/nmeso3.jpg";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
const Overview = () => {
  return (
    <div className="w-full px-4 md:px-8 py-1 font-sans bg-gray-50">
      <div className="flex flex-col-reverse md:flex-row justify-end m-4 md:m-12 gap-x-4 md:gap-x-12  ">
        <motion.div
          className="md:w-1/2  space-y-6 md:space-y-8 text-left flex flex-col bottom-5"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-3xl md:text-4xl font-sans font-extrabold text-indigo-800 mb-4 pt-12  mt-2 ">
            About Me
          </h1>
          <p className="text-base md:text-lg text-gray-700  mt-2">
            I’m a Freelance web developer with over a year of hands-on
            experience building responsive and engaging user interfaces. My
            journey into tech began with a strong curiosity and a desire to
            create meaningful digital experiences. Along the way, I’ve earned
            certifications from Coursera and the Female Media Network, which
            have helped shape my skills in crafting clean, user-friendly web
            applications. <br /> <br />
            Beyond certifications, I’ve worked and collaborated on several
            projects that challenged and expanded my creativity. I enjoy working
            in team settings, learning from others, and constantly exploring new
            tools and technologies to stay relevant in the tech space. Whether
            it’s solving problems with code or bringing a UI design to reality,
            I’m always up for the challenge. <br />
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
              alt="profile pics"
              className="relative bg-black w-full h-full object-cover rounded-full border-4 border-black"
            />
          </div>
        </div>
      </div>

      <div className="px-4 md:px-8 py-10">
        <div className="mb-8 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-indigo-800">
            Testimonials
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Testimonial 1 */}
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
                className="w-14 h-14 rounded-full border-4 border-white hover:border-purple-600 object-cover transition duration-300"
              />
              <p className="text-base font-bold text-black">
                Bright Lazarus <br />
                <span className="text-sm text-gray-600 font-medium">
                  Fullstack Developer
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
                className="w-14 h-14 rounded-full border-4 border-white hover:border-indigo-400 object-cover transition duration-300"
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
    </div>
  );
};

export default Overview;
