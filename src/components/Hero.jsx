import { motion } from "framer-motion"

import { styles } from "../styles"
import { HamburgerCanvas } from "./canvas"

const Hero = () => {
  //Handle animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const Animate_from_left = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeInOut" } },
  };

  const Animate_from_right = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeInOut" } },
  };

  return (
    <section className={`${styles.paddingX} md:py-0 py-5 h-full min-h-screen w-full mx-auto flex flex-col items-center justify-center`}>
        <div className={`mt-[120px] max-w-screen-xl mx-auto flex flex-wrap items-center justify-between w-full`}>
            {/*Left-text*/}
            <motion.div 
              className="h-auto max-w-prose"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.h1 
                className={`${styles.heroHeadText}`}
                variants={Animate_from_left}
              >
                Your <span className='text-secondary'>Gateaway <br className='sm:block hidden'/> to </span> gourmet <br className='sm:block hidden'/> burger
              </motion.h1>

              <motion.p 
                className={`${styles.heroSubText} mt-2`}
                variants={Animate_from_left}  
              >
                In, we’re dedicated to crafting the most <br className='sm:block hidden'/> our burgers are just best in town and its nice to know were best 
              </motion.p>
              <motion.button 
                className="text-bold bg-primary rounded-3xl w-44 h-16 mt-6 text-xl"
                variants={Animate_from_left}
              >
                Order now
              </motion.button>
            </motion.div>
            {/*Hamburger*/}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={Animate_from_right}
              className="Canvascss aspect-square"
            >
              <HamburgerCanvas />
            </motion.div>
        </div>

        {/*Certifications*/}
        <motion.div
          className={`${styles.paddingX} mt-20 flex flex-row flex-wrap sm:justify-end justify-center w-full gap-5 max-w-screen-xl`}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        > 
          <motion.div 
            className="flex bg-white rounded-3xl p-3 justify-center items-center gap-5"
            variants={Animate_from_right}
          >
            <img src="http://localhost:5173/src/assets/Guarantee_icon.svg" alt=""/>
            <h2 className="font-bold text-primary text-xl">Guarantee <br className='sm:block hidden'/> of quality</h2>
          </motion.div>
          <motion.div 
            className="flex bg-white rounded-3xl p-3 justify-center items-center gap-5"
            variants={Animate_from_right}
          >
            <img src="http://localhost:5173/src/assets/Burger_icon.svg" alt=""/>
            <h2 className="font-bold text-primary text-xl">Tradition of <br className='sm:block hidden'/> 10 years</h2>
          </motion.div>
        </motion.div>
    </section>
  )
}

export default Hero