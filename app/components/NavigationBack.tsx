"use client";

import Link from "next/link";
import React from "react";
import { BackIcon } from "../svg/BackIcon";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";

const NavigationBack = () => {
  const router = useRouter();
  return (
    <motion.div
      whileHover={{
        scale: 1.3,
      }}
      whileTap={{
        scale: 0.7,
      }}
      className="motion-back"
    >
      <Link onClick={() => router.back()} href={"#"} className="go-back">
        <BackIcon />
      </Link>
    </motion.div>
  );
};

export { NavigationBack };
