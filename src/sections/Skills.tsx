import { motion } from "framer-motion";
import { skills } from "../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="
        py-24
        section-padding
        relative
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
        "
      >
        {/* TITLE */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p
            className="
              uppercase
              tracking-[4px]
              text-blue-400
              mb-3
              text-sm
            "
          >
            Tech Stack
          </p>

          <h2
            className="
              text-3xl
              md:text-4xl
              font-black
            "
          >
            Tools &
            <span className="gradient-text">
              {" "}
              Technologies
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
            Technologies I use to build
            scalable data platforms,
            AI workflows, and modern
            engineering systems.
          </p>
        </motion.div>

        {/* SKILLS GRID */}

        <div
          className="
            mt-14
            grid
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-4
          "
        >
          {skills.map((skill, index) => (
            <div
              key={skill}
              style={{
                transitionDelay: `${Math.min(index * 12, 180)}ms`,
              }}
              className="
                p-4
                rounded-2xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                text-center
                hover:border-blue-400/40
                hover:-translate-y-1
                hover:bg-white/10
                transition
                duration-300
                ease-out
                cursor-pointer
              "
            >
              <h3
                className="
                  text-base
                  font-semibold
                "
              >
                {skill}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
