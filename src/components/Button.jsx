import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-PlayfairDisplay font-medium text-[18px] text-primary z outline-none rounded-[40px] ${styles}`}>
    Source Code
  </button>
);

export default Button;
