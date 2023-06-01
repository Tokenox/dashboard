import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import DevicesChart from "./components/DevicesChart";
import AudienceChart from "./components/AudienceChart";

function App() {
  return (
    <div className="m-4 min-h-screen">
      <Card sx={{ borderRadius: "24px" }}>
        <CardContent sx={{ padding: "64px!important" }}>
          {/* sales funnel */}
          <div className="relative">
            <h2 className="text-[28px] font-semibold leading-[36.4px] tracking-[-0.01em]">
              Sales Funnel
            </h2>
            <div className="grid grid-cols-5 mt-16">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  className="border-[#E2E2E2] border-l h-[256px] text-black px-8 py-4 flex flex-col space-y-2"
                  key={i}
                >
                  <span className="text-[#6F6F6F] text-[22px] font-semibold tracking-[-0.01em] leading-[28.6px]">
                    Sessions
                  </span>
                  <span className="text-[#171717] text-[35px] font-semibold tracking-[-0.01em] leading-[38.5px]">
                    9.3K
                  </span>
                </div>
              ))}
            </div>
          </div>
          <hr className="border-t-0 h-[1px] bg-[#E2E2E2] opacity-[100] mb-16 mt-52" />
          <div className="grid grid-cols-12">
            {/* devices */}
            <div className="flex flex-col col-span-4 border-[#E2E2E2] border-r pr-4">
              <h2 className="text-[28px] font-semibold leading-[36.4px] tracking-[-0.01em]">
                Devices
              </h2>

              <DevicesChart />
            </div>
            {/* audience */}
            <div className="col-span-8 flex flex-col pl-16">
              <h2 className="text-[28px] font-semibold leading-[36.4px] tracking-[-0.01em]">
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
