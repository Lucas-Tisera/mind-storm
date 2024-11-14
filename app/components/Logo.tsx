"use client";
import Link from "next/link";
import React from "react";
import { MountainIcon } from "../svg/MountainIcon";
import { motion } from "motion/react";

export default function Logo() {
  return (
    <motion.div
      whileHover={{ scale: 1.3 }}
      whileTap={{ scale: 0.7 }}
      className="logo"
    >
      <Link className="flex items-center justify-center" href="/">
        <MountainIcon className="h-6 w-6" />
      </Link>
    </motion.div>
  );
}
