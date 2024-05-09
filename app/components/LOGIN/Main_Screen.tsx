"use client";

import React, { useState } from "react";
import Banner_left from "./Banner_left";
import Banner_right from "./Banner_right";
import { AnimatePresence, motion } from "framer-motion";
import Banner_form_login from "./Banner_form_login";
import Banner_form_register from "./Banner_form_register";

export type STATUSES = "default" | "login" | "register";
export type LOGIN_REGISTER = "login" | "register";

function Main_Screen() {
  const [status, setStatus] = useState<STATUSES>("default");

  function handleClick(newStatus: STATUSES) {
    setStatus(newStatus);
  }

  return (
    <div className="grid grid-cols-2 gap-3 m-auto w-full  max-w-[1400px]">
      <AnimatePresence mode="wait">
        {status === "default" && (
          <motion.div
            key="default"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -100 }}
          >
            <Banner_left onClick={handleClick} />
          </motion.div>
        )}
        {status === "login" && (
          <motion.div
            key="login"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -100 }}
          >
            <Banner_form_login onClick={handleClick} />
          </motion.div>
        )}
        {status === "register" && (
          <motion.div
            key="register"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -100 }}
          >
            <Banner_form_register onClick={handleClick} />
          </motion.div>
        )}
      </AnimatePresence>

      <Banner_right />
    </div>
  );
}

export default Main_Screen;
