import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { openSource } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import ProjectCard from './ProjectCard';

const OpenSource = () => {
    return (
        <>
            <motion.div variants={textVariant()} className="mt-24">
                <p className={`${styles.sectionSubText} `}>Open Source</p>
                <h2 className={`${styles.sectionHeadText}`}>Contributions.</h2>
            </motion.div>

            <div className='w-full flex'>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
                >
                    These are the open source projects that I've contributed to. Each project is briefly described with
                    links to code repositories and live demos in it.
                </motion.p>
            </div>

            <div className='mt-20 flex flex-wrap gap-7'>
                {openSource.map((project, index) => (
                    <ProjectCard key={`open-source-${index}`} index={index} {...project} />
                ))}
            </div>
        </>
    );
};


export default SectionWrapper(OpenSource, "");
