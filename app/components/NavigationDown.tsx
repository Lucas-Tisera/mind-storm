"use client";
import Image from "next/image";
import Chevron from "../svg/chevronDown.svg";
import Link from "next/link";
import { motion } from "framer-motion";

const NavigationDown = () => {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.3,
      }}
      whileTap={{
        scale: 0.7,
      }}
      className="chevron-container"
    >
      <Link href={"#latests"} scroll>
        <Image src={Chevron} alt="navigate-down" className="chevron" />
      </Link>
    </motion.div>
  );
};

export { NavigationDown };
