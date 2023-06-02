import React from "react";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import DevicesChart from "./components/DevicesChart";
import AudienceChart from "./components/AudienceChart";
import CustomCard from "./components/CustomCard";

function App() {
  const theme = useTheme();
  return (
    <div className="xl:m-16 lg:m-12 m-0 min-h-screen">
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
            <div className="grid grid-cols-2 px-4 md:px-0 md:grid-cols-4 lg:grid-cols-5 gap-4 md:mt-16 mt-8">
              {CARDS_DATA?.map((item) => (
                <CustomCard key={item.title} title={item.title} value={item.value} />
              ))}
            </div>
          </div>
          <hr className="hidden md:block border-t-0 h-[1px] bg-[#E2E2E2] opacity-[100] xl:my-16 lg:my-12 my-6" />
          <div className="grid grid-cols-12 mt-8 md:mt-0 h-[425.5px]">
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

const CARDS_DATA = [
  {
    title: "Sesions",
    value: "9.3K",
  },
  {
    title: "Product View",
    value: "4.7K",
  },
  {
    title: "Add to Card",
    value: "914",
  },
  {
    title: "Initite Checkout",
    value: "872",
  },
  {
    title: "Purchase",
    value: "463",
  },
];
