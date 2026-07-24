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
        py-24
        section-padding
      "
    >
      {/* GLOW */}

      <div
        className="
          absolute
          bottom-0
          right-0
          w-[280px]
          h-[280px]
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
            rounded-[28px]
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-8
            md:p-12
            text-center
          "
        >
          {/* TITLE */}

          <p
            className="
              uppercase
              tracking-[4px]
              text-blue-400
              mb-3
              text-sm
            "
          >
            Contact
          </p>

          <h2
            className="
              text-3xl
              md:text-4xl
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
              mt-5
              text-gray-400
              text-base
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
              gap-4
              mt-8
            "
          >
            {/* EMAIL */}

            <a
              href={`mailto:${socials.email}`}
              className="
                flex
                items-center
                gap-3
                px-5
                py-3
                rounded-xl
                bg-blue-500
                hover:bg-blue-600
                transition
                font-semibold
              "
            >
              <MdEmail className="text-xl" />

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
                px-5
                py-3
                rounded-xl
                border
                border-white/10
                bg-white/5
                hover:bg-white/10
                transition
                font-semibold
              "
            >
              <FaGithub className="text-xl" />

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
                px-5
                py-3
                rounded-xl
                border
                border-white/10
                bg-white/5
                hover:bg-white/10
                transition
                font-semibold
              "
            >
              <FaLinkedin className="text-xl" />

              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
