import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, url }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      
      <a href={url} target="_blank" rel="noopener noreferrer">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
      </div>
        <img src={`${projectTitle}.png`} alt={projectTitle} className="w-full h-full object-cover" />
      </a>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Here are some of my most interesting projects that showcase my skills and demonstrate
          my ability to create professional and impactful content. Each project reflects my commitment to quality,
          innovation, and my unique blend of technical and artistic expertise.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[700px] max-h-[400px] text-2xl font-playfair font-semibold w-full h-full"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project title="portfolio" url="https://portforyou-oum.vercel.app/"/>
          <Project title="recipeapp" url = "https://rentapp-tau.vercel.app/" />

          {/* ROW 2 */}
          <Project title="rentapp" url="https://rentapp-tau.vercel.app/" />
          <Project title="shopapp" url="https://recipeppy.vercel.app/"/>
          <Project title="aiapp" url="https://oum-ai.vercel.app/" />

          {/* ROW 3 */}

        </motion.div>
      </div>
    </section>
  );
};

export default Projects;