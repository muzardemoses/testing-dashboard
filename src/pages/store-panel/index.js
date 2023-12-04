/* eslint-disable @next/next/no-img-element */
import React from "react";

const Page = () => {
  return (
    <div className="py-5 px-8 flex flex-col gap-2.5">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <img
            src="/Images/Dashboard/category.png"
            alt="category"
            className="w-[20px] h-[20px]"
          />
          <h1 className="text-xl font-semibold">Dashboard</h1>
        </div>
        <div className="flex gap-2 items-center">
          <p className="text-sm font-normal text-[#677788]">Followup</p>
          <img
            src="/Images/Dashboard/utensils-solid.svg"
            alt="untensils"
            className="w-[20px] h-[20px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
