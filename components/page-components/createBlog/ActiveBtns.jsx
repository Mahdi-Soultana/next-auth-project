import React, { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
function ActiveBtns({ selectedState }) {
  const [selected, setSelected] = selectedState;
  function handelClick() {}
  return (
    <AnimateSharedLayout>
      <div className="actions">
        <div className="btn-container">
          <motion.a className="btn" onClick={() => setSelected("edit")}>
            Edit
          </motion.a>
          {selected === "edit" && (
            <motion.div layoutId="inderLine" className="underLine"></motion.div>
          )}
        </div>
        <div className="btn-container">
          <motion.a className="btn" onClick={() => setSelected("preview")}>
            Preview
          </motion.a>
          {selected === "preview" && (
            <motion.div layoutId="inderLine" className="underLine"></motion.div>
          )}
        </div>
      </div>
    </AnimateSharedLayout>
  );
}

export default ActiveBtns;
