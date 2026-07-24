import { motion } from "framer-motion";

import { experience } from "../data/experience";

const Experience = () => {
  return (
    <section
      id="experience"
      className="
        relative
        py-32
        section-padding
      "
    >
      {/* BACKGROUND GLOW */}

      <div
        className="
          absolute
          left-0
          top-40
          w-[300px]
          h-[300px]
          rounded-full
          bg-blue-500/10
          blur-3xl
        "
      />

      <div
        className="
          max-w-5xl
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
          <p
            className="
              uppercase
              tracking-[4px]
              text-blue-400
              mb-4
            "
          >
            Career Journey
          </p>

          <h2
            className="
              text-4xl
              md:text-5xl
              font-black
            "
          >
            Work
            <span className="gradient-text">
              {" "}
              Experience
            </span>
          </h2>

          <p
            className="
              mt-6
              text-gray-400
              max-w-2xl
              mx-auto
              text-lg
            "
          >
            My experience building scalable
            data systems, AI workflows,
            backend architectures,
            and analytics platforms.
          </p>
        </motion.div>

        {/* TIMELINE */}

        <div
          className="
            mt-24
            relative
          "
        >
          {/* CENTER LINE */}

          <div
            className="
              absolute
              left-4
              top-0
              w-[2px]
              h-full
              bg-white/10
            "
          />

          {/* ITEMS */}

          <div className="space-y-16">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: -60,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className="
                  relative
                  pl-16
                "
              >
                {/* DOT */}

                <div
                  className="
                    absolute
                    left-0
                    top-2
                    w-8
                    h-8
                    rounded-full
                    bg-gradient-to-br
                    from-blue-500
                    to-purple-500
                    border-4
                    border-[#050816]
                  "
                />

                {/* CARD */}

                <div
                  className="
                    p-8
                    rounded-[32px]
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    hover:border-blue-400/30
                    transition
                  "
                >
                  {/* TOP */}

                  <div
                    className="
                      flex
                      flex-col
                      md:flex-row
                      md:items-center
                      md:justify-between
                      gap-4
                    "
                  >
                    <div>
                      <h3
                        className="
                          text-2xl
                          font-bold
                        "
                      >
                        {item.role}
                      </h3>

                      <p
                        className="
                          mt-2
                          text-blue-400
                          font-medium
                        "
                      >
                        {item.company}
                      </p>
                    </div>

                    <div
                      className="
                        px-5
                        py-2
                        rounded-full
                        border
                        border-white/10
                        bg-white/5
                        text-sm
                        text-gray-300
                        w-fit
                      "
                    >
                      {item.duration}
                    </div>
                  </div>

                  {/* DESCRIPTION */}

                  <p
                    className="
                      mt-6
                      text-gray-400
                      leading-relaxed
                      text-lg
                    "
                  >
                    {item.description}
                  </p>

                  {/* TECH */}

                  <div
                    className="
                      flex
                      flex-wrap
                      gap-3
                      mt-8
                    "
                  >
                    {item.tech.map((tech) => (
                      <span
                        key={tech}
                        className="
                          px-4
                          py-2
                          rounded-full
                          bg-purple-500/10
                          border
                          border-purple-400/20
                          text-purple-300
                          text-sm
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;