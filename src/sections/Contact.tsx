import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

import { socials } from "../data/socials";

const Contact = () => {
  return (
    <section
      id="contact"
      className="
        relative
        py-32
        section-padding
      "
    >
      {/* GLOW */}

      <div
        className="
          absolute
          bottom-0
          right-0
          w-[350px]
          h-[350px]
          bg-blue-500/20
          blur-3xl
          rounded-full
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
          className="
            rounded-[40px]
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-10
            md:p-16
            text-center
          "
        >
          {/* TITLE */}

          <p
            className="
              uppercase
              tracking-[4px]
              text-blue-400
              mb-4
            "
          >
            Contact
          </p>

          <h2
            className="
              text-4xl
              md:text-6xl
              font-black
              leading-tight
            "
          >
            Let’s Build
            <span className="gradient-text">
              {" "}
              Something Amazing
            </span>
          </h2>

          <p
            className="
              mt-8
              text-gray-400
              text-lg
              max-w-2xl
              mx-auto
              leading-relaxed
            "
          >
            Interested in collaborating,
            building AI systems,
            scalable data platforms,
            or analytics solutions?
            Let’s connect.
          </p>

          {/* BUTTONS */}

          <div
            className="
              flex
              flex-wrap
              justify-center
              gap-5
              mt-12
            "
          >
            {/* EMAIL */}

            <a
              href={`mailto:${socials.email}`}
              className="
                flex
                items-center
                gap-3
                px-7
                py-4
                rounded-2xl
                bg-blue-500
                hover:bg-blue-600
                transition
                font-semibold
              "
            >
              <MdEmail className="text-2xl" />

              Email Me
            </a>

            {/* GITHUB */}

            <a
              href={socials.github}
              target="_blank"
              className="
                flex
                items-center
                gap-3
                px-7
                py-4
                rounded-2xl
                border
                border-white/10
                bg-white/5
                hover:bg-white/10
                transition
                font-semibold
              "
            >
              <FaGithub className="text-2xl" />

              GitHub
            </a>

            {/* LINKEDIN */}

            <a
              href={socials.linkedin}
              target="_blank"
              className="
                flex
                items-center
                gap-3
                px-7
                py-4
                rounded-2xl
                border
                border-white/10
                bg-white/5
                hover:bg-white/10
                transition
                font-semibold
              "
            >
              <FaLinkedin className="text-2xl" />

              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;