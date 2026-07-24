import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="
        relative
        py-32
        section-padding
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          grid
          md:grid-cols-2
          gap-16
          items-center
        "
      >
        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p
            className="
              text-blue-400
              uppercase
              tracking-[4px]
              mb-4
            "
          >
            About Me
          </p>

          <h2
            className="
              text-4xl
              md:text-5xl
              font-black
              leading-tight
            "
          >
            Building Modern
            <span className="gradient-text">
              {" "}
              Data & AI
            </span>
            Systems
          </h2>

          <p
            className="
              mt-8
              text-gray-400
              text-lg
              leading-relaxed
            "
          >
            I’m a Data Engineer focused on
            scalable pipelines, backend
            systems, AI-powered analytics,
            and intelligent workflows.
          </p>

          <p
            className="
              mt-6
              text-gray-400
              text-lg
              leading-relaxed
            "
          >
            I work with modern technologies
            like PySpark, DLT Hub, MageAI,
            PostgreSQL, ClickHouse, and LLMs
            to build high-performance data
            platforms and analytics systems.
          </p>

          <div
            className="
              mt-10
              grid
              grid-cols-2
              gap-6
            "
          >
            <div
              className="
                p-6
                rounded-3xl
                bg-white/5
                border
                border-white/10
              "
            >
              <h3
                className="
                  text-4xl
                  font-bold
                  gradient-text
                "
              >
                2+
              </h3>

              <p className="mt-2 text-gray-400">
                Years Experience
              </p>
            </div>

            <div
              className="
                p-6
                rounded-3xl
                bg-white/5
                border
                border-white/10
              "
            >
              <h3
                className="
                  text-4xl
                  font-bold
                  gradient-text
                "
              >
                25+
              </h3>

              <p className="mt-2 text-gray-400">
                Projects Built
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            relative
          "
        >
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-br
              from-blue-500/20
              to-purple-500/20
              blur-3xl
            "
          />

          <div
            className="
              relative
              p-10
              rounded-[40px]
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
            "
          >
            <h3
              className="
                text-3xl
                font-bold
                mb-8
              "
            >
              What I Focus On
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-xl">
                  Data Engineering
                </h4>

                <p className="text-gray-400 mt-2">
                  ETL pipelines, orchestration,
                  incremental loading, and
                  scalable architectures.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-xl">
                  AI Analytics
                </h4>

                <p className="text-gray-400 mt-2">
                  LLM-powered dashboards,
                  NL-to-SQL systems,
                  and intelligent reporting.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-xl">
                  Backend Systems
                </h4>

                <p className="text-gray-400 mt-2">
                  APIs, data services,
                  integrations,
                  and workflow automation.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;