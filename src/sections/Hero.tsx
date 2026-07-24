import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-x-hidden
        flex
        items-center
        pt-20
        pb-16
        md:pt-24
        md:pb-20
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
          max-w-[92rem]
          mx-auto
          section-padding
          relative
          z-10
          grid
          md:grid-cols-[1fr_0.78fr]
          gap-8
          lg:gap-10
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
            Software Developer - Data Engineer
          </p>

          <h1
            className="
              text-[clamp(2rem,7vw,3.25rem)]
              md:text-[clamp(2.5rem,3.7vw,3.45rem)]
              font-black
              leading-[1.05]
            "
          >
            Where
            <span className="gradient-text">
              {" "}
              Data
            </span>
            <br />
            Meets Engineering
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
            Building scalable data pipelines,
            incremental ETL workflows, and validated
            data integrations across SFTP, APIs,
            PostgreSQL, MongoDB, and orchestration tools.
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
              target="_blank"
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
            md:justify-center
            items-center
            md:-translate-x-[5%]
          "
        >
          <div
            className="
              data-orbit
              hidden
              lg:block
              absolute
              right-[-0.5rem]
              top-[52%]
              h-[17rem]
              w-[17rem]
              -translate-y-1/2
              opacity-70
              z-0
            "
            aria-hidden="true"
          >
            <div className="data-ring" />
            <div className="data-node data-node-one">Python</div>
            <div className="data-node data-node-two">SQL</div>
            <div className="data-node data-node-three">ETL</div>
            <div className="data-node data-node-four">Airflow</div>
            <div className="data-node data-node-five">DLT</div>
            <div className="data-node data-node-six">Kafka</div>
          </div>

          <div
            className="
              w-[clamp(13rem,25vw,18rem)]
              aspect-square
              md:w-[clamp(15rem,23vw,20rem)]
              rounded-full
              bg-gradient-to-br
              from-blue-500
              via-purple-500
              to-pink-500
              opacity-30
              blur-3xl
              absolute
              z-0
            "
          />

          <div
            className="
              relative
              z-10
              w-[min(70vw,16rem)]
              aspect-square
              md:w-[min(23vw,18rem)]
              rounded-full
              border
              border-white/15
              bg-white/[0.04]
              backdrop-blur-md
              overflow-hidden
              shadow-[0_0_70px_rgba(96,165,250,0.18)]
              transition
              duration-500
              hover:-translate-y-1
              hover:scale-[1.02]
              hover:border-blue-300/30
            "
          >
            <img
              src="/images/Manoj_Profile_image.png"
              alt="Manoj Sai"
              className="
                h-full
                w-full
                object-cover
                object-center
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#050816]/25
                via-transparent
                to-transparent
                pointer-events-none
              "
            />
          </div>
        </motion.div>
      </div>

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-10
          z-0
          hidden
          h-10
          md:block
        "
        aria-hidden="true"
      >
        <div className="hero-data-stream">
          <span />
          <span />
          <span />
        </div>
      </div>

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-32
          bg-gradient-to-b
          from-transparent
          via-[#050816]/70
          to-[#050816]
        "
        aria-hidden="true"
      />
    </section>
  );
};

export default Hero;
