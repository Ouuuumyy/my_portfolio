import React from 'react'
import LineGradient from './LineGradient'
import UseMediaQuery from '../hooks/UseMediaQuery'
import { motion } from 'framer-motion'

function MySkills() {
    const isAboveMediumScreens = UseMediaQuery("(min-width: 1060px)")
  return (
    <section id="skills"  className='pt-2 pb-3 '>
        <div className=' md:flex md:justify-between md:gap-16 mt-32'>
            <motion.div
            className='md:w-1/3'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },}}
            >
                <p className='font-playfair font-semibold text-4xl mb-5'>
                    My <span className='text-red'>Skills</span>
                    <LineGradient width='w-1/3'/>
                    <p className='mt-10 mb-7 text-[20px] '>
                    My diverse skill set makes me a unique and dynamic professional. 
                    Not only do I excel in web development,
                     creating functional and visually appealing websites,
                      but I also bring a creative, artistic flair to my work.
                    </p>
                </p>
            </motion.div>

            <div className='mt-16 md:mt-0'>
                    {isAboveMediumScreens?(
                        <div
                            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20  mt-11
                            before:w-full before:max-w-[300px] md:before:max-w-[900px] before:h-[260px] before:border-2 before:mt-11 before:border-blue before:z-[-1]"
                        >
                            <img
                            alt="profile"
                            className="z-10 "
                            src="skills2.jpg"
                            />
                        </div>
                    ):(
                        <img alt='skills' className='z-10' src='skills-image.png'/>
                    )}
            </div>
        </div>
        <div className='md:flex md:justify-between mt-10 gap-32'>
           
        
            <motion.div 
                className='md:w-1/3 mt-10 '
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, x: 0 },}}
            >
                <div className='relative h-20'>
                    <div className='z-10'> 
                        <p className='font-playfair font-semibold text-3xl' >Back-end</p>
                    </div>
                    <div className='w-3/4  h-16 bg-gradient-rainblue absolute right-0 top-0 z-[-1]'/>
                </div>
                <p >
                Proficient in Node.js, Express, and MongoDB,
                 I specialize in crafting scalable and efficient backend solutions.
                </p>
                
            </motion.div>

            <motion.div 
                className='md:w-1/3 mt-10 '
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, x: 0 },}}
            >
                <div className='relative h-20'>
                    <div className='z-10'> 
                        <p className='font-playfair font-semibold text-3xl' >Front-end</p>
                    </div>
                    <div className='w-3/4  h-16 bg-gradient-rainblue absolute right-0 top-0 z-[-1]'/>
                </div>
                <p >
                Proficient in React,
                I excel in creating visually stunning and user-friendly interfaces that captivate and engage users.
                </p>
                
            </motion.div>

            <motion.div 
                className='md:w-1/3 mt-10 '
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, x: 0 },}}
            >
                <div className='relative h-20'>
                    <div className='z-10'> 
                        <p className='font-playfair font-semibold text-3xl' >3d modeling</p>
                    </div>
                    <div className='w-3/4  h-16 bg-gradient-rainblue absolute right-0 top-0 z-[-1]'/>
                </div>
                <p >
                With advanced 3D modeling skills using Blender,
                I bring ideas to life through intricate designs and lifelike renderings.
                </p>
                
            </motion.div>

            <motion.div 
                className='md:w-1/3 mt-10 '
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, x: 0 },}}
            >
                <div className='relative h-20'>
                    <div className='z-10'> 
                        <p className='font-playfair font-semibold text-3xl' >VR-Dev</p>
                    </div>
                    <div className='w-3/4  h-16 bg-gradient-rainblue absolute right-0 top-0 z-[-1]'/>
                </div>
                <p >
                    my VR development skills are finely honed, 
                    allowing me to craft immersive virtual experiences using Unity
                </p>
                
            </motion.div>

            
        </div>

        

    </section>
  )
}

export default MySkills
