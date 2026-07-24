import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import { projects } from "../data/projects";

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const visibleProjects = showAllProjects
    ? projects
    : projects.slice(0, 6);

  return (
    <section
      id="projects"
      className="
        py-24
        section-padding
        relative
      "
    >
      {/* BACKGROUND GLOW */}

      <div
        className="
          absolute
          top-20
          right-0
          w-[300px]
          h-[300px]
          bg-purple-500/20
          blur-3xl
          rounded-full
        "
      />

      <div
        className="
          max-w-7xl
          mx-auto
          relative
          z-10
        "
      >
        {/* HEADER */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{ once: true }}
          className="text-center"
        >

          <h2
            className="
              text-3xl
              md:text-4xl
              font-black
            "
          >
            Featured
            <span className="gradient-text">
              {" "}
              Projects
            </span>
          </h2>

          <p
            className="
              mt-4
              text-gray-400
              max-w-2xl
              mx-auto
              text-base
            "
          >
            A collection of Data Engineering
            projects, production-inspired ETL
            workflows, scalable backend and
            full-stack applications, and
            AI-powered solutions.
          </p>
        </motion.div>

        {/* PROJECTS GRID */}

        <div
          className="
            mt-14
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
              "
            >
              {/* IMAGE */}

              <div
                className="
                  h-[180px]
                  overflow-hidden
                "
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-110
                    transition
                    duration-700
                  "
                />
              </div>

              {/* CONTENT */}

              <div className="p-6">
                <h3
                  className="
                    text-xl
                    font-bold
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-gray-400
                    text-sm
                    leading-relaxed
                  "
                >
                  {project.description}
                </p>

                {/* TECH TAGS */}

                <div
                  className="
                    flex
                    flex-wrap
                    gap-2
                    mt-5
                  "
                >
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="
                        px-3
                        py-1.5
                        rounded-full
                        text-xs
                        bg-blue-500/10
                        border
                        border-blue-400/20
                        text-blue-300
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* LINKS */}

                {(project.github || project.live) && (
                  <div
                    className="
                      flex
                      items-center
                      gap-5
                      mt-6
                      text-sm
                    "
                  >
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        className="
                          flex
                          items-center
                          gap-2
                          hover:text-blue-400
                          transition
                        "
                      >
                        <FaGithub />

                        GitHub
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        className="
                          flex
                          items-center
                          gap-2
                          hover:text-blue-400
                          transition
                        "
                      >
                        <FiExternalLink />

                        Live Demo
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* HOVER GRADIENT */}

              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-500
                  pointer-events-none
                  bg-gradient-to-br
                  from-blue-500/5
                  to-purple-500/5
                "
              />
            </motion.div>
          ))}
        </div>

        {projects.length > 6 && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAllProjects((current) => !current)}
              className="
                rounded-xl
                border
                border-blue-400/30
                bg-blue-500/10
                px-7
                py-3
                text-sm
                font-semibold
                text-blue-200
                transition
                hover:-translate-y-1
                hover:border-blue-300/60
                hover:bg-blue-500/20
              "
            >
              {showAllProjects ? "Show Less" : "More Projects"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
