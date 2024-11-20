"use client";
import Link from "next/link";
import React from "react";
import { MountainIcon } from "../svg/MountainIcon";
import { motion } from "motion/react";

export default function Logo() {
  return (
    <div className="logo">
      <Link className="logo-link" href="/">
        <motion.div
          className="motion"
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.7 }}
        >
          <MountainIcon />
        </motion.div>
      </Link>
    </div>
  );
}
