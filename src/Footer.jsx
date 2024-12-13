import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-950 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo and Description */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <img className="w-[12vw] h-[12vw]" src="./matrix.png" alt="" />
            <p className="text-sm mt-2">Building a better future with technology.</p>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h2 className="text-xl font-semibold">Follow Us</h2>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-blue-500 hover:text-blue-400">
                <img className="w-[4vw]" src="./insta.png" alt="" />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-300">
              <img className="w-[7vw] h-[8vh] text-2xl" src="./linked.svg" alt="" />
              </a>
             
            </div>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h2 className="text-xl font-semibold">Follow Developer</h2>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-blue-500 hover:text-blue-400">
                <img className="w-[4vw]" src="./insta.png" alt="" />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-300">
              <img className="w-[7vw] h-[8vh] text-2xl" src="./linked.svg" alt="" />
              </a>
              
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
