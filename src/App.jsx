import React from "react";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import DevicesChart from "./components/DevicesChart";
import AudienceChart from "./components/AudienceChart";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function App() {
  const theme = useTheme();
  return (
    <div className="xl:m-16 lg:m-12 sm:x-6 m-0 min-h-screen">
      <Card
        sx={{
          borderRadius: "24px",
          [theme.breakpoints.down("md")]: {
            borderRadius: "0!important",
          },
        }}
      >
        <CardContent
          sx={{
            padding: {
              sm: "24px !important",
              md: "48px !important",
              lg: "64px !important",
              xs: "24px 0px 12px 0px !important",
            },
          }}
        >
          {/* sales funnel */}
          <div className="relative">
            <h2 className="md:text-[28px] text-[22px] pl-4 md:pl-0 md:font-semibold font-bold leading-[36.4px] tracking-[-0.01em]">
              Sales Funnel
            </h2>
            <div className="grid md:grid-cols-5 md:mt-16 mt-8">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  className={`border-[#E2E2E2] md:border-l ${
                    i === 4 ? "md:border-r md:border-b-0 border-b" : ""
                  } md:border-t-0 border-t md:h-[256px] text-black px-8 py-4 flex md:flex-col justify-between items-center md:items-start md:justify-start md:space-y-2 group hover:bg-[#006ADC]`}
                  key={i}
                >
                  <div className="flex flex-col space-y-2">
                    <span className="text-[#6F6F6F] group-hover:text-white mdtext-[22px] text-[16px] font-semibold tracking-[-0.01em] leading-[28.6px]">
                      Sessions
                    </span>
                    <span className="text-[#171717] group-hover:text-white md:text-[35px] text-[22px] md:font-semibold font-bold tracking-[-0.01em] leading-[38.5px]">
                      9.3K
                    </span>
                  </div>
                  <div className="items-center hidden group-hover:flex">
                    <span className="text-[#EDF6FF] text-[22px] font-semibold tracking-[-0.01em] leading-[130%]">
                      Insights
                    </span>
                    <div className="border-white border rounded-md ml-2 h-6 items-center flex justify-center">
                      <KeyboardArrowRightIcon sx={{ color: "#EDF6FF" }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <hr className="hidden md:block border-t-0 h-[1px] bg-[#E2E2E2] opacity-[100] xl:my-16 lg:my-12 my-6" />
          <div className="grid grid-cols-12 mt-8 md:mt-0">
            {/* devices */}
            <div className="flex flex-col col-span-12 md:col-span-4 border-[#E2E2E2] md:border-r border-b md:border-b-0 md:pr-4 pb-4 md:pb-0">
              <h2 className="md:text-[28px] text-[22px] mb-3 md:mb-0 pl-4 md:pl-0 md:font-semibold font-bold leading-[36.4px] tracking-[-0.01em]">
                Devices
              </h2>

              <DevicesChart />
            </div>
            {/* audience */}
            <div className="md:col-span-8 col-span-12 flex flex-col md:pl-16">
              <h2 className="md:text-[28px] text-[22px] pl-4 md:pl-0 md:font-semibold font-bold leading-[36.4px] tracking-[-0.01em] mt-8 md:mt-0">
                Audience
              </h2>
              <div className="">
                <AudienceChart />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
