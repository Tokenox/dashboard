import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const CustomCard = ({ title, value }) => {
  return (
    <div
      className={`cursor-pointer shadow md:rounded-md border-[#E2E2E2] border-[0.1px] h-[170px] md:h-[190px] lg:h-[210px] text-black px-8 py-4 flex flex-col  space-y-2 group hover:bg-[#006ADC]`}
    >
      <div className="flex flex-col space-y-4">
        <span className="text-[#6F6F6F] group-hover:text-white mdtext-[22px] text-[16px] font-semibold tracking-[-0.01em] leading-[28.6px]">
          {title}
        </span>
        <span className="text-[#171717] group-hover:text-white md:text-[35px] text-[22px] md:font-semibold font-bold tracking-[-0.01em] leading-[38.5px]">
        {value}
        </span>
      </div>
      <div className="items-center hidden group-hover:flex">
        <span className="text-[#EDF6FF] md:text-[22px] text-[16px] font-semibold tracking-[-0.01em] leading-[130%]">
          Insights
        </span>
        <div className="border-white border rounded-md ml-2 h-6 items-center flex justify-center">
          <KeyboardArrowRightIcon sx={{ color: "#EDF6FF" }} />
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
