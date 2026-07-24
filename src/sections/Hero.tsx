import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        flex
        items-center
        overflow-hidden
      "
    >
      {/* Background Glow */}
      <div
        className="
          glow
          w-[300px]
          h-[300px]
          bg-blue-500
          top-20
          left-10
        "
      />

      <div
        className="
          glow
          w-[250px]
          h-[250px]
          bg-purple-500
          bottom-10
          right-10
        "
      />

      <div
        className="
          max-w-7xl
          mx-auto
          section-padding
          relative
          z-10
          grid
          md:grid-cols-2
          gap-10
          items-center
        "
      >
        {/* LEFT CONTENT */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          <p
            className="
              text-blue-400
              mb-4
              tracking-widest
              uppercase
            "
          >
            Data Engineer • AI Builder
          </p>

          <h1
            className="
              text-5xl
              md:text-7xl
              font-black
              leading-tight
            "
          >
            Building
            <span className="gradient-text">
              {" "}
              AI-Powered
            </span>
            <br />
            Data Systems
          </h1>

          <p
            className="
              mt-6
              text-gray-400
              text-lg
              leading-relaxed
              max-w-xl
            "
          >
            I build scalable data pipelines,
            AI analytics dashboards,
            Agentic AI workflows,
            and modern backend systems.
          </p>

          {/* BUTTONS */}

          <div
            className="
              flex
              flex-wrap
              gap-4
              mt-10
            "
          >
            <a
              href="#projects"
              className="
                px-7
                py-4
                rounded-2xl
                bg-blue-500
                hover:bg-blue-600
                transition
                font-semibold
              "
            >
              View Projects
            </a>

            <a
              href="/resume/resume.pdf"
              target="_blank"
              className="
                px-7
                py-4
                rounded-2xl
                border
                border-white/20
                hover:bg-white/10
                transition
                font-semibold
              "
            >
              Download Resume
            </a>
          </div>

          {/* SOCIALS */}

          <div
            className="
              flex
              items-center
              gap-5
              mt-10
            "
          >
            <a
              href="https://github.com/manoj13196"
              target="_blank"
              className="
                text-3xl
                hover:text-blue-400
                transition
              "
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/manoj13196/"
              className="
                text-3xl
                hover:text-blue-400
                transition
              "
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className="
            relative
            flex
            justify-center
          "
        >
          <div
            className="
              w-[320px]
              h-[320px]
              md:w-[420px]
              md:h-[420px]
              rounded-full
              bg-gradient-to-br
              from-blue-500
              via-purple-500
              to-pink-500
              opacity-30
              blur-3xl
              absolute
            "
          />

          <div
            className="
              relative
              w-[300px]
              h-[300px]
              md:w-[400px]
              md:h-[400px]
              rounded-[40px]
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              flex
              items-center
              justify-center
              text-center
              p-10
            "
          >
            <div>
              <h2
                className="
                  text-4xl
                  font-bold
                  gradient-text
                "
              >
                AI + DE
              </h2>

              <p
                className="
                  mt-4
                  text-gray-300
                  leading-relaxed
                "
              >
                Creating intelligent analytics
                systems, ETL pipelines,
                RAG workflows, and scalable
                engineering solutions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;