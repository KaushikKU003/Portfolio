import React, { useState, useEffect } from "react";
import Down from "../Images/downArrow.svg"; // Adjust the path if necessary
import Profile from "../Images/profile.png";
import "boxicons";
import SQL from "../Images/mysql-svgrepo-com.svg";
import PostMan from "../Images/postman-icon-svgrepo-com.svg";
import VSCode from "../Images/vscode-fill-svgrepo-com.svg";
import NextJS from "../Images/nextjs-fill-svgrepo-com.svg";
import DBMS from "../Images/dbms.png";
import UpSKill from "../Images/upSkill.png";
import LMS from "../Images/LMS.jpg"
import pdf from "../Docs/Kaushik_Resume.pdf"

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [hideArrow, setHideArrow] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = document.querySelector("header").offsetHeight;
      const aboutMeSection = document.getElementById("about-me");
      if (aboutMeSection) {
        const rect = aboutMeSection.getBoundingClientRect();
        // Show the navbar when any part of the About Me section is visible
        setShowNav(rect.top <= headerHeight);
        setHideArrow(window.scrollY > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //resume button
  const [iconColor, setIconColor] = useState("#000");

  return (
    <div>
      {/* Header Section */}
      <header
        className="bg-[#efefef] relative h-screen flex flex-col justify-center"
        id="header"
      >
        <div className="text-left flex flex-col justify-center items-start p-4 sm:p-6 w-[90%] max-w-[1280px] mx-auto h-full">
          <span
            className="text-4xl sm:text-5xl md:text-6xl font-fontScript text-zinc-600"
            role="heading"
            aria-level="1"
          >
            Kaushik K U
          </span>
          <h1
            aria-level="2"
            className="text-3xl sm:text-5xl md:text-6xl font-Roboto mt-4"
          >
            Innovative Full Stack Developer
          </h1>
          <h2
            aria-level="3"
            className="font-Anek text-gray-700 mt-4 text-xl sm:text-2xl max-w-prose"
          >
            Crafting seamless web experiences with a full stack approach
          </h2>
        </div>
        <img
          src={Down}
          alt="Down Arrow"
          className={`absolute md:bottom-4 bottom-14 left-1/2 transform -translate-x-1/2 w-8 h-8 transition-opacity animate-bounceSlow duration-300 ease-in-out ${
            hideArrow ? "opacity-0 invisible" : "opacity-100 visible"
          }`}
        />
      </header>

      {/* <nav
        className={`w-full bg-gray-100 text-black z-50 ${
          showNav ? "sticky top-0" : ""
        }`}
      >
        <div className="container mx-auto px-4 md:py-5 py-2 md:px-10  flex items-center justify-between">
          <a href="/" className="text-2xl  font-Anek">
            KAUSHIK K U
          </a>
          <button
            className="block lg:hidden text-2xl"
            onClick={() => setShowMobileNav(!showMobileNav)}
            aria-label="Toggle Navigation"
          >
            ☰
          </button>
          <div
            className={`lg:flex lg:space-x-4 ${
              showMobileNav ? "block" : "hidden"
            }`}
          >
            <div className="nav-links flex flex-col lg:flex-row lg:space-x-4 font-Anek font-normal">
              <a
                href="#about-me"
                className="text-xl font-medium hover:text-gray-400 hover:decoration-wavy hover:underline"
              >
                ABOUT
              </a>
              <a
                href="#tech-section"
                className="text-xl font-medium hover:text-gray-400 hover:decoration-wavy hover:underline"
              >
                TECH STACKS
              </a>
              <a
                href="#projects"
                className="text-xl font-medium hover:text-gray-400 hover:decoration-wavy hover:underline"
              >
                PROJECTS
              </a>
            </div>
          </div>
        </div>
      </nav> */}
      <nav className={`w-full bg-gray-100 text-black z-50 ${showNav ? "sticky top-0" : ""}`}>
  <div className="container mx-auto px-4 md:py-5 py-2 md:px-10 flex items-center justify-between">
    <a href="/" className="text-2xl font-Anek">
      KAUSHIK K U
    </a>
    <button
      className="block lg:hidden text-2xl"
      onClick={() => setShowMobileNav(!showMobileNav)}
      aria-label="Toggle Navigation"
    >
      {showMobileNav ? "✕" : "☰"}
    </button>
    <div
      className={`lg:flex lg:space-x-4 lg:items-center lg:static absolute top-full left-0 w-full lg:w-auto lg:bg-transparent ${
        showMobileNav ? "block" : "hidden"
      }`}
    >
      <div className="nav-links flex flex-col lg:flex-row lg:space-x-4 font-Anek font-normal bg-gray-100 lg:bg-transparent border-4 border-t-slate-300 lg:border-none">
        <a
          href="#about-me"
          className="lg:text-xl  font-medium hover:text-gray-400 hover:decoration-wavy hover:underline py-2 px-4 text-center"
        >
          ABOUT
        </a>
        <a
          href="#tech-section"
          className="lg:text-xl font-medium hover:text-gray-400 hover:decoration-wavy hover:underline py-2 px-4 text-center"
        >
          TECH STACKS
        </a>
        <a
          href="#projects"
          className="lg:text-xl font-medium hover:text-gray-400 hover:decoration-wavy hover:underline py-2 px-4 text-center"
        >
          PROJECTS
        </a>
      </div>
    </div>
  </div>
</nav>


      <section id="about-me" className="bg-gray-100 ">
        <div className="relative min-h-screen flex items-center justify-center">
          <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col justify-center lg:pl-20">
                <h2 className="text-4xl md:text-5xl font-Roboto mb-4">
                  About Me
                </h2>
                <p className="text-lg md:text-xl text-gray-700 mb-4 font-Anek md:leading-loose tracking-wide">
                  <span className="font-bold">Hi! I’m Kaushik</span>, a
                  developer with a passion for learning and exploring new
                  technologies. Currently, I’m in my Final year of Computer
                  Science Engineering at Sahyadri College of Engineering and
                  Management, Mangaluru. My curiosity drives me to continuously
                  expand my skills, not just in development but also in the
                  creative arts, where rhythm and harmony play a significant
                  role in my life.
                </p>
                <p className="text-lg md:text-xl text-gray-700 font-Anek md:leading-loose tracking-wide">
                  I’m focused on honing my abilities in these areas, blending
                  creativity with technical expertise. I believe that innovation
                  happens when diverse interests intersect, and I’m always eager
                  to take on new challenges that push the boundaries of what’s
                  possible.
                </p>
                <div className="flex justify-center mt-3">
                  <div
                    className="border border-slate-500 text-black hover:bg-gray-500 hover:text-slate-50 flex justify-center items-center md:px-4 md:py-1 px-2 py-0.5 md:text-xs transition-colors duration-200"
                    onMouseEnter={() => setIconColor("#f8fafc")} // Change color on hover
                    onMouseLeave={() => setIconColor("#000")} // Revert to default color on leave
                  >
                    <box-icon
                      type="solid"
                      name="download"
                      color={iconColor} // Apply dynamic color
                      className="transition-colors duration-200" // Smooth transition for color change
                    ></box-icon>
                    <a href={pdf} download="MyExampleDoc" rel="noreferrer" target='_blank'>
                    <button 
                    className={'classes.navLink bg-transparent pl-2 font-Anek text-2xl mt-1.5'}>
                      Resume
                    </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center mt-8 md:mt-0">
                <img
                  src={Profile}
                  alt="About Me"
                  className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg bg-slate-200"
                />
              </div>
            </div>
          </div>
        </div>
        <span id="tech-section"></span>
      </section>
      {/* wavey svg */}
      <div class="wave-border bottom bg-[#efefef] md:h-52">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
          role="presentation"
        >
          <path
            d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
            style={{ stroke: "none", fill: "#f3f4f6" }}
          ></path>
          <path
            className="block"
            d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98"
            style={{ stroke: "#E8E8E8", fill: "none" }}
          ></path>
        </svg>
      </div>

      {/* techstack */}
      <section
        id="tech-stacks"
        className="bg-[#efefef] pt-5 pb-16 md:pt-0  mb-0"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-Roboto mb-5 md:-mt-20 text-center">
            Tech Stacks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-Anek mb-4">Programming Languages</h3>
              <ul className="list-none list-inside text-center flex flex-wrap justify-center gap-4">
                <li className="flex items-center justify-center transition-transform duration-300 transform hover:scale-125">
                  <box-icon type="logo" name="javascript" size="lg"></box-icon>
                </li>
                <li className="flex items-center justify-center transition-transform duration-300 transform hover:scale-125">
                  <box-icon type="logo" name="java" size="lg"></box-icon>
                </li>
                <li className="flex items-center justify-center transition-transform duration-300 transform hover:scale-125">
                  <box-icon name="python" type="logo" size="lg"></box-icon>
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-Anek mb-4">Frameworks</h3>
              <ul className="list-none list-inside text-center flex flex-wrap justify-center gap-4">
                <li className="flex items-center justify-center transition-transform duration-300 transform hover:scale-125">
                  <box-icon type="logo" name="react" size="lg"></box-icon>
                </li>
                <li className="flex items-center justify-center h-10 w-10 transition-transform duration-300 transform hover:scale-125">
                  <img
                    src={NextJS}
                    alt="Postman"
                    className="h-full w-full object-contain mt-3 hover:scale-105 transition-transform duration-300"
                  />
                </li>
                <li className="flex items-center justify-center transition-transform duration-300 transform hover:scale-125">
                  <box-icon
                    name="tailwind-css"
                    type="logo"
                    size="lg"
                  ></box-icon>
                </li>
                <li className="flex items-center justify-center transition-transform duration-300 transform hover:scale-125">
                  <box-icon name="bootstrap" type="logo" size="lg"></box-icon>
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-Anek mb-4">Databases</h3>
              <ul className="list-none list-inside text-center flex flex-wrap justify-center gap-4">
                <li className="flex items-center justify-center transition-transform duration-300 transform hover:scale-125">
                  <box-icon type="logo" name="mongodb" size="lg"></box-icon>
                </li>
                <li className="flex items-center justify-center h-9 w-9 transition-transform duration-300 transform hover:scale-125">
                  <img
                    src={SQL}
                    alt="SQL Database"
                    className="h-full w-full object-contain mt-4"
                  />
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-Anek mb-4">Tools</h3>
              <ul className="list-none list-inside text-center flex flex-wrap justify-center gap-4">
                <li className="flex items-center justify-center transition-transform duration-300 transform hover:scale-125">
                  <box-icon type="logo" name="github" size="lg"></box-icon>
                </li>
                <li className="flex items-center justify-center h-10 w-10 transition-transform duration-300 transform hover:scale-125">
                  <img
                    src={PostMan}
                    alt="Postman"
                    className="h-full w-full object-contain mt-3 hover:scale-105 transition-transform duration-300"
                  />
                </li>
                <li className="flex items-center justify-center h-9 w-9 transition-transform duration-300 transform hover:scale-125">
                  <img
                    src={VSCode}
                    alt="VS Code"
                    className="h-full w-full object-contain mt-4"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* wavey image */}
      <div class="wave-border bottom bg-[#fafafa] md:h-28">
        <svg
          viewBox="0 0 500 80"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
          role="presentation"
        >
          <path
            d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
            style={{ stroke: "none", fill: "#efefef" }}
          ></path>
          <path
            className="block"
            d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98"
            style={{ stroke: "#E8E8E8", fill: "none" }}
          ></path>
        </svg>
      </div>

      {/* Projects Section */}

      <section
  id="projects"
  className="bg-[#fafafa] py-16 flex flex-col items-center justify-center -mt-4"
>
  <h2 className="text-4xl font-Roboto mb-8 text-gray-900 dark:text-white">
    My Projects
  </h2>
  <div className="flex flex-wrap justify-center gap-8 px-4 sm:px-6 md:px-8">
    {/* project1 */}
    <div className="w-full sm:w-[350px] bg-[#fafafa] hover:shadow-xl hover:shadow-zinc-400 dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transition-transform duration-300 grayscale  hover:grayscale-0">
      <div>
        <img src={DBMS} alt="" className="w-full h-auto" />
      </div>
      <div className="p-5">
        <div>
          <h5 className="mb-2 text-2xl font-Roboto tracking-tight text-gray-900 dark:text-white">
            Renewable Energy Project Management
          </h5>
        </div>
        <p className="mb-3 font-Anek md:tracking-wide text-gray-700 dark:text-gray-400">
          Created a renewable energy management system using MySQL and ReactJS enabling efficient management of renewable energy projects.
        </p>
        <div className="flex gap-4 mt-4">
          <div className="text-gray-900 dark:text-white transition-transform duration-300 transform hover:scale-125">
            <a href="https://github.com/KaushikKU003/RENEWABLE_ENERGY_PROJECT.git">
              <box-icon type="logo" name="github" size="sm"></box-icon>
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* project2 */}
    <div className="w-full sm:w-[350px] bg-[#fafafa] hover:shadow-xl hover:shadow-zinc-400 dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transition-transform duration-300 grayscale  hover:grayscale-0">
      <div>
        <img src={LMS} alt="" className="w-full h-auto" />
      </div>
      <div className="p-5">
        <div>
          <h5 className="mb-2 text-2xl font-Roboto tracking-tight text-gray-900 dark:text-white">
            Library Management System
          </h5>
        </div>
        <p className="mb-3 font-Anek md:tracking-wide text-gray-700 dark:text-gray-400">
          Designed and implemented a Library Management System that allows users to add, delete, and search for books, enhancing library management efficiency.
        </p>
        <div className="flex gap-4 mt-4">
          <div className="text-gray-900 dark:text-white transition-transform duration-300 transform hover:scale-125">
            <a href="https://github.com/KaushikKU003/SkillLab_Library.git">
              <box-icon type="logo" name="github" size="sm"></box-icon>
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* project3 */}
    <div className="w-full sm:w-[350px] bg-[#fafafa] hover:shadow-xl hover:shadow-zinc-400 dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transition-transform duration-300 grayscale hover:grayscale-0">
      <div>
        <img src={UpSKill} alt="" className="w-full h-auto " />
      </div>
      <div className="p-5">
        <div>
          <h5 className="mb-2 text-2xl font-Roboto tracking-tight text-gray-900 dark:text-white">
            UpSkills
          </h5>
        </div>
        <p className="mb-3 font-Anek md:tracking-wide text-gray-700 dark:text-gray-400">
          Upskills is a web portal that ensures college curricula stay updated with industry trends by gathering alumni feedback and using web scraping to provide the latest syllabus updates.
        </p>
        <div className="flex gap-4 mt-4">
          <div className="text-gray-900 dark:text-white transition-transform duration-300 transform hover:scale-125">
            <a href="https://github.com/KaushikKU003/UpSkill_Frontend.git">
              <box-icon type="logo" name="github" size="sm"></box-icon>
            </a>
          </div>
          <div className="text-gray-900 dark:text-white transition-transform duration-300 transform hover:scale-125">
            <a href="https://upskill-frontend-bjvfkxl7l-anudeepkks-projects.vercel.app/">
              <box-icon name="server" type="solid" size="sm"></box-icon>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      <div class="wave-border bottom bg-[#E8E8E8] md:h-32">
        <svg
          viewBox="0 20 500 70"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
          role="presentation"
        >
          <path
            d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
            style={{ stroke: "none", fill: "#fafafa" }}
          ></path>
          <path
            className="block"
            d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98"
            style={{ stroke: "#E8E8E8", fill: "none" }}
          ></path>
        </svg>
      </div>
      <div class="wave-border bottom bg-[#fafafa] md:h-32">
        <svg
          viewBox="0 20 500 80"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
          role="presentation"
        >
          <path
            d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
            style={{ stroke: "none", fill: "#E8E8E8" }}
          ></path>
          <path
            className="block"
            d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98"
            style={{ stroke: "#E8E8E8", fill: "none" }}
          ></path>
        </svg>
      </div>


      <footer className="bg-[#fafafa] text-white py-4">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between px-6 py-4 md:px-28">
    <div className="text-black mb-4 text-center font-Anek ">
      Built by <a href="/" className="text-black">Kaushik 🖤</a>
    </div>
    <div className="flex space-x-4 mb-4">
      <a
        href="https://github.com/KaushikKU003"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-gray-400 transition-colors duration-300"
      >
        <box-icon type="logo" name="github" size="sm"></box-icon>
      </a>
      <a
        href="https://www.linkedin.com/in/kaushik-k-u-acharya-68a3b2229/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-gray-400 transition-colors duration-300"
      >
        <box-icon name="linkedin-square" type="logo" size="sm"></box-icon>
      </a>
      <a
        href="https://www.instagram.com/kaushik_k_u_acharya/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-gray-400 transition-colors duration-300"
      >
        <box-icon name="instagram-alt" type="logo" size="sm"></box-icon>
      </a>
    </div>
  </div>
</footer>

    </div>
  );
};

export default Header;
