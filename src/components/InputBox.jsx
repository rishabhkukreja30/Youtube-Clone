import React from "react";

const InputBox = () => {
  return (
    <div className="col-span-10 flex justify-center">
      <input
        type="text"
        placeholder=" Search"
        className="border border-slate-400 rounded-l-full w-1/2 p-2"
      />
      <button className="border border-slate-400 p-2 rounded-r-full bg-gray-100">
        Search
      </button>
    </div>
  );
};

export default InputBox;
