import Head from "next/head";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import {
  SiFrontendmentor,
  SiAdobeindesign,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNestjs,
  SiMongodb,
  SiFirebase,
  SiTypescript,
  SiCodewars,
} from "react-icons/si";
import { FaReact, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { CgFigma } from "react-icons/cg";
import { useState } from "react";
import deved from "../public/mypicture.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web11 from "../public/web11.png";
import web22 from "../public/web22.png";
import web33 from "../public/web33.png";
import web44 from "../public/web44.png";
import web55 from "../public/web55.png";
import web66 from "../public/web66.png";

const FirstName = "Viktor Alieksieiev";

const links = [
  { id: 1, icon: <FaGithubSquare />, href: "https://github.com/AlexaNem0" },
  {
    id: 2,
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/victor-alekseev-936692129/",
  },
  {
    id: 3,
    icon: <SiFrontendmentor className="w-11 h-11" />,
    href: "https://www.frontendmentor.io/profile/AlexaNem0",
  },

  {
    id: 4,
    icon: <SiCodewars className="w-11 h-11" />,
    href: "https://www.codewars.com/users/AlexaNem0",
  },
];

const services = [
  {
    id: 5,
    title: "Beautiful Designs",
    description:
      "Creating elegant designs suited for your needs following core design theory.",
    variants: "Design Tools I Use",
    tools: [
      {
        id: 6,
        name: "PhotoShop",
        icon: <SiAdobephotoshop className="text-3xl text-orange-300 " />,
      },
      {
        id: 7,
        name: "Illustrator",
        icon: <SiAdobeillustrator className="text-3xl text-orange-300 " />,
      },
      {
        id: 8,
        name: "Indesign",
        icon: <SiAdobeindesign className="text-3xl text-orange-300 " />,
      },
      {
        id: 9,
        name: "Figma",
        icon: <CgFigma className="text-3xl text-orange-300 " />,
      },
    ],
    icon: (
      <Image
        src={design}
        width={100}
        height={100}
        alt="Design"
        className="flex justify-center"
      />
    ),
  },
  {
    id: 10,
    title: "Code your dream project",
    description:
      "Do you have an idea for your next great website? Let's make it a reality.",
    variants: "Frond End Tools I Use",
    tools: [
      {
        id: 11,
        name: "JavaScript",
        icon: <SiJavascript className="text-3xl text-orange-300 " />,
      },
      {
        id: 12,
        name: "TypeScript",
        icon: <SiTypescript className="text-3xl text-orange-300 " />,
      },
      {
        id: 13,
        name: "ReactJS",
        icon: <FaReact className="text-3xl text-orange-300 " />,
      },
      {
        id: 14,
        name: "HTML",
        icon: <SiHtml5 className="text-3xl text-orange-300 " />,
      },
      {
        id: 15,
        name: "CSS",
        icon: <SiCss3 className="text-3xl text-orange-300 " />,
      },
    ],
    icon: <Image src={code} width={100} height={100} alt="Code" />,
  },
  {
    id: 16,
    title: "Back End Support",
    description:
      "Do you require Back End support for your current project? I can give you tips and tricks to level it up.",
    variants: "Back End Tools I Use",
    tools: [
      {
        id: 17,
        name: "Firebase",
        icon: <SiFirebase className="text-3xl text-orange-300" />,
      },
      {
        id: 18,
        name: "MongoDB",
        icon: <SiMongodb className="text-3xl text-orange-300 " />,
      },
      {
        id: 19,
        name: "NextJS",
        icon: <TbBrandNextjs className="text-3xl text-orange-300 " />,
      },
      {
        id: 20,
        name: "NestJS",
        icon: <SiNestjs className="text-3xl text-orange-300 " />,
      },
    ],
    icon: (
      <Image src={consulting} width={100} height={100} alt="Back End Support" />
    ),
  },
];

const projects = [
  {
    id: 21,
    title: " HTML CSS JavaScript",
    description: "Omnifood",
    href: "https://myomnifoodpr.netlify.app/",
    image: (
      <Image src={web11} alt="Omnifood" className="object-fill rounded-lg" />
    ),
  },

  {
    id: 22,
    title: "HTML Tailwind JavaScript",
    description: "Manage",
    href: "https://frontmanagelp.netlify.app/",
    image: (
      <Image src={web22} alt="Manage" className="object-fill rounded-lg" />
    ),
  },

  {
    id: 23,
    title: "ReactJS Tailwind",
    description: "UltraEats",
    href: "https://ultraeats.netlify.app/",
    image: (
      <Image src={web33} alt="UltraEats" className="object-fill rounded-lg" />
    ),
  },

  {
    id: 24,
    title: "HTML Tailwind JavaScript",
    description: "Alex Rockets",
    href: "https://alexrockets.netlify.app",
    image: (
      <Image
        src={web44}
        alt="Alex Rockets"
        className="object-fill rounded-lg"
      />
    ),
  },

  {
    id: 25,
    title: "ReactJS Tailwind",
    description: "Fylo",
    href: "https://fylofem1.netlify.app/",
    image: <Image src={web55} alt="Fylo" className="object-fill rounded-lg" />,
  },

  {
    id: 26,
    title: "ReactJS CSS Modules",
    description: "Not real trading application",
    href: "https://notrealtradeapp.netlify.app/",
    image: <Image src={web66} alt="Trade" className="object-fill rounded-lg" />,
  },
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>{FirstName}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-10 bg-white dark:bg-gray-900 md:px-20 lg:px-40">
        {/* Navigation */}
        <nav className="flex justify-between py-10 mb-12 dark:text-white">
          <h1 className="text-xl lg:text-3xl md:text-2xl lg:font-burtons hover:scale-105">
            @lexaNem0
          </h1>
          <ul className="flex items-center">
            <li className="transition duration-300 ease-in-out delay-300 hover:rotate-180">
              <BsFillMoonStarsFill
                onClick={toggleDarkMode}
                className="text-2xl cursor-pointer"
              />
            </li>
            <li className="transition duration-500 ease-in-out delay-300 hover:scale-125">
              <a
                className="px-4 py-2 ml-8 text-white border-none rounded-md bg-gradient-to-r from-cyan-500 to-teal-500"
                href="https://docs.google.com/document/d/1378qwHlOK7TdVfQGt3xQ1ufRf6qmLFnS/edit?usp=sharing&ouid=116848366544717899951&rtpof=true&sd=true"
                target="blank"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>

        {/* About Section */}
        <section className="min-h-screen">
          <div className="p-10 py-10 text-center">
            <h2 className="py-2 text-4xl font-bold text-teal-600 sm:text-5xl dark:text-teal-400 md:text-7xl">
              Viktor Alieksieiev
            </h2>
            <h3 className="py-2 text-2xl dark:text-white md:text-4xl">
              Front-end Developer.
            </h3>
            {/* Introduction text */}
            <p className="max-w-xl py-5 mx-auto leading-8 text-gray-800 text-md dark:text-gray-200 md:text-xl">
              Greetings! I&apos;m a passionate and innovative web developer with
              a strong penchant for creating immersive digital experiences. My
              journey in the world of web development began with a fascination
              for turning ideas into functional and visually stunning websites.
              I thrive on solving complex problems with elegant solutions and
              staying up-to-date with the latest technologies to deliver
              cutting-edge web solutions. With a keen eye for design aesthetics
              and a commitment to user-centric development, I strive to make the
              internet a more user-friendly and beautiful place, one project at
              a time.Let&apos;s embark on a digital journey together and bring
              your ideas to life on the web.
            </p>

            {/* Social Media Icons */}
            <div className="flex justify-center gap-8 py-3 text-5xl text-gray-600 dark:text-gray-400 sm:gap-16">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target="blank"
                  className="transition duration-300 ease-in-out delay-300 hover:scale-125"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative mx-auto my-10 overflow-hidden border-4 border-gray-600 rounded-full dark:border-slate-100 w-60 h-60 bg-gradient-to-b from-teal-400 md:h-96 md:w-96 hover:scale-105">
            <Image
              src={deved}
              layout="fill"
              objectFit="cover"
              alt="Description of the image"
            />
          </div>
        </section>

        {/* Services Section */}
        <section>
          <div>
            <h3 className="py-1 text-3xl text-center dark:text-white">
              Services I offer
            </h3>
            <p className="py-2 leading-8 text-center text-gray-800 text-md dark:text-gray-200 lg:text-left">
              Over the course of my dynamic career as a designer and developer,
              I have accumulated a wealth of experience that spans a diverse
              spectrum of projects. From collaborating with innovative startups
              to lending my expertise to established agencies, I have honed my
              craft and embraced the challenges of remote work. This journey has
              not only deepened my technical proficiency but also fostered a
              keen understanding of the nuances that distinguish digital
              products crafted for businesses and those tailored to delight
              consumers. My professional voyage has been marked by fruitful
              partnerships with talented individuals, each interaction leaving
              an indelible mark on my approach to crafting digital experiences.
              This multifaceted journey has equipped me with the knowledge and
              versatility to bring creativity and innovation to every project I
              undertake.
            </p>
          </div>

          {/* Service Cards */}
          <div className="gap-10 lg:flex">
            {services.map((service) => (
              <div
                key={service.id}
                className="flex-1 p-10 my-10 text-center transition duration-300 ease-in-out delay-300 shadow-lg rounded-xl dark:bg-white hover:scale-105"
              >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {service.icon}
                </div>
                <h3 className="pt-8 pb-2 text-lg font-bold ">
                  {service.title}
                </h3>
                <p className="py-2">{service.description}</p>
                <h4 className="py-4 text-teal-600">{service.variants}</h4>
                {service.tools.map((tool) => (
                  <p key={tool.id} className="py-1 text-gray-800 ">
                    <span className="inline-flex items-center gap-2 text-xl">
                      {tool.icon}
                      {tool.name}
                    </span>
                  </p>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-10">
          <div>
            <h3 className="py-1 text-3xl text-center dark:text-white">
              Portfolio
            </h3>
            <p className="py-2 leading-8 text-center text-gray-800 text-md dark:text-gray-200 lg:text-left">
              Welcome to my front-end developer portfolio! I'm absolutely
              excited to present my skills and expertise in crafting visually
              captivating and incredibly functional websites. With a deep love
              for design and a natural flair for coding, my focus is on
              providing flawless user experiences that captivate and engage
              audiences.
            </p>
          </div>

          {/* Portfolio Projects */}
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            {projects.map((project) => (
              <div
                key={project.id}
                className="relative flex-1 basis-1/3 hover:scale-105"
              >
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.image}
                  <div className="absolute inset-0 flex items-center justify-center text-white transition-opacity duration-300 bg-black rounded-lg opacity-0 bg-opacity-60 hover:opacity-100 ">
                    <p className="text-lg text-orange-100 md:font-semibold md:text-lg lg:text-2xl ">
                      {project.title}
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Contact Section */}
      <section>
        <div className="flex items-center justify-center p-12 dark:text-teal-400 dark:bg-gray-900">
          <div className="mx-auto w-full max-w-[550px]">
            <h2 className="mb-10 text-xl">Let&apos;s get in touch!</h2>
            <form action="https://formbold.com/s/9BvZw" method="POST">
              {/* Form Inputs */}
              {[
                {
                  label: "Full Name",
                  type: "text",
                  name: "name",
                  placeholder: "Full Name",
                },
                {
                  label: "Email Address",
                  type: "email",
                  name: "email",
                  placeholder: "example@domain.com",
                },
                {
                  label: "Subject",
                  type: "text",
                  name: "subject",
                  placeholder: "Enter your subject",
                },
                {
                  label: "Message",
                  type: "textarea",
                  name: "message",
                  placeholder: "Type your message",
                },
              ].map((input) => (
                <div key={input.id} className="mb-5">
                  <label
                    htmlFor={input.name}
                    className="mb-3 block text-base font-medium text-[#07074D] dark:text-teal-400"
                  >
                    {input.label}
                  </label>
                  {input.type === "textarea" ? (
                    <textarea
                      rows="4"
                      name={input.name}
                      id={input.name}
                      required
                      placeholder={input.placeholder}
                      className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  ) : (
                    <input
                      type={input.type}
                      name={input.name}
                      id={input.name}
                      required
                      placeholder={input.placeholder}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  )}
                </div>
              ))}
              {/* Submit Button */}
              <div>
                <button className="px-8 py-3 text-base font-semibold text-white transition duration-500 ease-in-out delay-300 rounded-md outline-none hover:shadow-form bg-gradient-to-r from-cyan-500 to-teal-500 hover:scale-125">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
