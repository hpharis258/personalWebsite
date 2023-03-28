import React from 'react';
import Tilt from 'react-tilt';
import {motion } from 'framer-motion';
import {styles} from './styles';
import {services} from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index, title, icon}) => {
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div 
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div options={{
          max:45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}> About me</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] ">
      As a skilled software developer with cloud experience, I have a proven track record of designing, developing, and deploying software applications that meet the needs of businesses and their customers. With my expertise in cloud computing, I am able to leverage the power of cloud-based technologies to deliver scalable and reliable solutions that are easily accessible from anywhere in the world.

My extensive knowledge of programming languages, including C#, Python, and JavaScript  allows me to quickly adapt to new development environments and technologies. I am also well-versed in a wide range of cloud-based tools and services, such as AWS (Amazon Web Services), Microsoft Azure, Zoho and Google Cloud, which enables me to select the best options for each project and optimize performance and cost-effectiveness. However I am not just a regular developer, I have experience automating business processes and working with large scale CRM systems for international clients. 


      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ) )}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about"); 