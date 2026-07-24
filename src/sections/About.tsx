import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="
        relative
        py-24
        section-padding
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          grid
          md:grid-cols-2
          gap-12
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
              mb-3
              text-sm
            "
          >
            About Me
          </p>

          <h2
            className="
              text-3xl
              md:text-4xl
              font-black
              leading-tight
            "
          >
            Building Modern
            <span className="gradient-text">
              {" "}
              Data & Backend
            </span>
            Systems
          </h2>

          <p
            className="
              mt-6
              text-gray-400
              text-base
              leading-relaxed
            "
          >
            I'm a Software Developer with hands-on
            experience in backend development and
            production-grade ETL pipelines using
            Python, SQL, PostgreSQL, MageAI, and DLT Hub.
          </p>

          <p
            className="
              mt-6
              text-gray-400
              text-base
              leading-relaxed
            "
          >
            I design scalable data integration
            solutions, API workflows, CDC-based
            incremental processing, SCD Type 2
            versioning, validation systems, and
            AI-powered automation.
          </p>

          <div
            className="
              mt-8
              grid
              grid-cols-2
              gap-6
            "
          >
            <div
              className="
                p-5
                rounded-2xl
                bg-white/5
                border
                border-white/10
              "
            >
              <h3
                className="
                  text-3xl
                  font-bold
                  gradient-text
                "
              >
                50K+
              </h3>

              <p className="mt-2 text-gray-400">
                Records Weekly
              </p>
            </div>

            <div
              className="
                p-5
                rounded-2xl
                bg-white/5
                border
                border-white/10
              "
            >
              <h3
                className="
                  text-3xl
                  font-bold
                  gradient-text
                "
              >
                10+
              </h3>

              <p className="mt-2 text-gray-400">
                ETL Pipelines
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
              p-8
              rounded-[28px]
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
            "
          >
            <h3
              className="
                text-2xl
                font-bold
                mb-6
              "
            >
              What I Focus On
            </h3>

            <div className="space-y-5">
              <div>
                <h4 className="font-semibold text-lg">
                  Data Engineering
                </h4>

                <p className="text-gray-400 mt-2">
                  ETL/ELT pipelines, CDC, SCD Type 2,
                  incremental loading, schema evolution,
                  and data validation.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg">
                  Backend Systems
                </h4>

                <p className="text-gray-400 mt-2">
                  REST APIs, authentication, platform
                  integrations, TypeORM workflows, and
                  service automation.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg">
                  AI & Automation
                </h4>

                <p className="text-gray-400 mt-2">
                  LLM workflows, prompt engineering,
                  RAG, vector embeddings, and
                  agentic AI systems.
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
