import { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { navLinks } from "../constants";
import GetData from "../hooks/GetData"

const Navbar = () => {
  //State of icons and mobile version
  const [active, setActive] = useState(false)

  const HandleActive = () => {
    setActive(!active)
    console.log(active)
  }

  //Get data (check null) 
  const library = 'Logo'
  let {data} = GetData(`http://localhost:3000/api/${library}?populate=*`)

  //Handle animation
  const containerVariants = {
    hidden: { maxHeight: 0 },
    visible: {
      maxHeight: 500,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      maxHeight: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
        when: "afterChildren",
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-white backdrop-blur-md bg-opacity-50 md:bg-transparent`}>
      <div className="w-full flex flex-wrap justify-between items-center max-w-screen-xl mx-auto">
          
        {/*Logo*/}
        {data && (
          <div className="flex items-center gap-2">
            <a href="/">
              <img src={`http://localhost:3000${data.data.attributes.coverImg.data.attributes.url}`} alt="Logo" className="w-24 h-24 object-fill"/>
            </a>
          </div>
        )}

        {/*Navlinks*/}
        <ul className="list-none hidden md:flex flex-row gap-10">
          {navLinks.map((Link) => (
            <li key={Link.id}>
              <a className="text-primary font-bold" href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>

        {/*Button contact us*/}
        <div className="hidden md:flex items-center gap-2">
          <button className="outline-none rounded-full w-28 h-12 bg-secondary font-bold">Contact us</button>
        </div>

        {/*For mobile*/}
        <div className="md:hidden">
          <label htmlFor="check">
            <input onClick={HandleActive}  type="checkbox" id="check" className=""/>
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <motion.div
           initial="hidden"
           animate={active ? "visible" : "exit"}
           variants={containerVariants}
           className="flex basis-full flex-col items-center overflow-hidden"
        >
          <ul className="list-none flex-col gap-5 flex items-center">
            {navLinks.map((Link) => (
              <motion.li 
                key={Link.id}
                variants={itemVariants}
              >
                <a className="text-primary font-bold" href={`#${Link.id}`}>{Link.title}</a>
              </motion.li>
            ))}
            <motion.button 
              className="outline-none rounded-full w-28 h-12 bg-secondary font-bold"
              variants={itemVariants}
            >
              Contact us
            </motion.button>
          </ul>
        </motion.div>
      </div>
    </nav>
  )
};

export default Navbar;