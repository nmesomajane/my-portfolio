
const Footer = () => {
  return (
    <footer className="bg-black text-white py-5  sm:px-2 w-full bottom-0 left-0">
      <div className=" mx-auto text-center space-y-4">
        <h2 className="text-2xl font-semibold">Let’s Connect! 💬</h2>
        <p className="text-gray-300 max-w-lg mx-auto">
          I’m always open to new opportunities, collaborations, and great conversations! Whether you have a project in mind,or need help with web development feel free to reach out.
        </p>

        <div className="flex justify-center space-x-6">
          <a href="mailto:nnopujane@gmail.com" className="text-gray-400 hover:text-white transition">
            📧 nnopujane@gmail.com
          </a>
          <span>|</span>
          <a href="tel:+2347082423044" className="text-gray-400 hover:text-white transition">
            📞 +234 708 242 3044
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://instagram.com/nme_somaa" className="hover:text-gray-400 transition">🐦 Instagram</a>
          <a href="https://linkedin.com/in/nmesomannopu" className="hover:text-gray-400 transition">💼 LinkedIn</a>
          <a href="https://github.com/nmesomajane" className="hover:text-gray-400 transition">👨‍💻 GitHub</a>
        </div>

        <p className="text-gray-500 text-sm mt-6">© {new Date().getFullYear()} NmesomaNnopu. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer
