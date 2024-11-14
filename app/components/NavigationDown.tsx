"use client";
import Image from "next/image";
import Chevron from "../svg/chevronDown.svg";
import Link from "next/link";
import { motion } from "motion/react";

const NavigationDown = () => {
  return (
    <motion.div
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
