import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useAnimation } from 'framer-motion';
import { motion } from 'framer-motion';
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { education } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const EducationCard = ({ index, university, degree, duration, description, logo }) => {
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.3 } },
    };

    return (
        <motion.div
            variants={cardVariants}
            initial='hidden'
            animate='visible'
            className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>
            <div className='flex items-center'>
                <img src={logo} alt='university logo' className='w-16 h-16 object-contain mr-5' />
                <div>
                    <h3 className='text-white font-bold text-[24px]'>{university}</h3>
                </div>
            </div>
            <div className='mt-5 flex items-center'>
                <p className='text-secondary text-[18px] font-bold'>{degree}</p>
            </div>
            <p className='text-secondary text-[16px]'>{duration}</p>
            <p className='mt-5 text-secondary text-[14px]'>{description}</p>
        </motion.div>
    );
};


const Education = () => {
    const ref = useRef();
    const controls = useAnimation();

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                controls.start('show');
            }
        }, { threshold: 0.1 });

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [controls]);

    return (
        <motion.div ref={ref} initial="hidden" animate={controls} variants={fadeIn('up', 'spring', 0, 1)}>
            <div className='mt-0'>
                <motion.h2 className={`${styles.sectionHeadText}`} variants={textVariant(0)}>Education.</motion.h2>
            </div>
            <div className='mt-7 flex flex-wrap gap-7'>
                {education.map((education, index) => (
                    <EducationCard key={`education-${index}`} index={index} {...education} />
                ))}
            </div>
        </motion.div>
    );
};

export default SectionWrapper(Education);
