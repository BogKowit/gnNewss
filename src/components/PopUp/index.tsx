import React from "react";
import { UseUI } from "../context/ContextUI";

const PopUp = () => {
  const { closeSidebar } = UseUI();
  return (
    <div className="text white flex w-8/12 h-8/12 bg-red-50">
      <h2>Co sprawiło mi trudność?</h2>
      <h3>W praktyce to nic, tylko i wyłącznie przejście z Next.js na react</h3>
    </div>
  );
};

export default PopUp;
