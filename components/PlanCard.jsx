"use client"
import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const PlanCard = ({ bg, type, title, desc, years, rate, status }) => {
  const cardStyle = {
    backgroundColor: bg,
  };

  return (
    <div className={`p-11 rounded-xl w-[100%] m-2 p-10 ${status === "black" ? "text-white" : ""}`} style={cardStyle}
>
      <p>{type}</p>
      <h1 className="mt-3 mb-3 font-bold text-xl">{title}</h1>
      <p className="font-semibold">{desc}</p>
      <div className="mt-5">
        <p>{years}</p>
        <div className="flex items-center justify-between mt-2">
          <h2 className="font-bold text-2xl">{rate}</h2>
          <ArrowRightAltIcon className="text-white bg-[#242424] p-2 text-4xl rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
