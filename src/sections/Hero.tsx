import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative
        overflow-x-hidden
        pt-24
        pb-20
        md:pt-28
        md:pb-24
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
          max-w-6xl
          mx-auto
          section-padding
          relative
          z-10
          grid
          md:grid-cols-2
          gap-10
          lg:gap-14
          items-center
          w-full
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
              mb-3
              tracking-widest
              uppercase
              text-sm
            "
          >
            Data Engineer • AI Builder
          </p>

          <h1
            className="
              text-[clamp(2.25rem,8vw,3.75rem)]
              md:text-[clamp(3rem,4.8vw,4.5rem)]
              font-black
              leading-[1.05]
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
              mt-5
              text-gray-400
              text-base
              md:text-base
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
              mt-7
            "
          >
            <a
              href="#projects"
              className="
                px-6
                py-3
                rounded-xl
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
                px-6
                py-3
                rounded-xl
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
              mt-7
            "
          >
            <a
              href="https://github.com/manoj13196"
              target="_blank"
              className="
                text-2xl
                hover:text-blue-400
                transition
              "
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/manoj13196/"
              className="
                text-2xl
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
              w-[clamp(15rem,34vw,18rem)]
              aspect-square
              md:w-[clamp(16rem,26vw,20rem)]
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
              w-[clamp(14rem,70vw,16rem)]
              aspect-square
              md:w-[clamp(15rem,24vw,19rem)]
              rounded-[28px]
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              flex
              items-center
              justify-center
              text-center
              p-8
            "
          >
            <div>
              <h2
                className="
                  text-3xl
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
                  text-sm
                  md:text-base
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
