import React from "react";
import Button from "./Button";

export const ButtonList = () => {
  const buttonList = [
    "All",
    "Gaming",
    "Songs",
    "Live",
    "Soccer",
    "Cooking",
    "Cricket",
    "US Open",
    "Basketball",
    "Formaula 1",
    "Boxing",
    "WWE",
    "Comedy",
    "Bollywood",
    "IPL",
    "News",
  ];

  return (
    <div className="flex">
      {buttonList.map((item) => (
        <Button label={item} />
      ))}
    </div>
  );
};
