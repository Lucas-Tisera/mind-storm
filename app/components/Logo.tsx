"use client";
import Link from "next/link";
import React from "react";
import { MountainIcon } from "../svg/MountainIcon";
import { motion } from "motion/react";

export default function Logo() {
  return (
    <Link className="logo" href="/">
      <motion.div
        className="motion"
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.7 }}
      >
        <MountainIcon className="h-6 w-6" />
      </motion.div>
    </Link>
  );
}
