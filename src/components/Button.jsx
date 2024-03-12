import React from "react";

const Button = ({ label }) => {
  return (
    <div>
      <button className="bg-gray-200 m-2 p-2 rounded-lg">{label}</button>
    </div>
  );
};

export default Button;
