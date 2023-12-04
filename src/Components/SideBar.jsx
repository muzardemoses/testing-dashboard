/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";

export const SideBar = () => {
  const [showOrderDropDown, setShowOrderDropDown] = useState(false);

  return (
    <div className="">
      <div
        className="h-screen w-[268px] flex flex-col justify-between 2xl:w-[240px] xl:w-max sm:absolute sm:bg-white sm:w-[200px]"
        style={{
          boxShadow:
            "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
        }}
      >
        <div
          className="flex justify-between items-center py-2 px-7"
          style={{
            boxShadow:
              "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
          }}
        >
          <Link href="/store-panel">
            <img
              src="/Images/Dashboard/sidebar-img.png"
              alt="logo"
              className="h-12"
            />
          </Link>
          <button>
            <img
              src="/Images/Dashboard/first-page.png"
              alt="first-page-icon"
              className="w-3.5 h-3.5"
            />
          </button>
        </div>
        <div className="h-full py-5">
          {/* <div className="flex justify-center py-5 px-4">
            <input
              type="text"
              placeholder="Search Menu..."
              className="border border-[#E5E5E5] rounded-lg py-2 px-4 text-sm font-medium text-[#677788] w-full h-[45px] focus:outline-none transition duration-300 ease-in-out hover:border-[rgba(55,125,255,0.4)] input-shadow"
            />
          </div> */}
          <div className="flex gap-2 flex-col h-full px-4">
            <Link href="/store-panel">
              <div className="h-9 px-4 bg-gray-200 flex items-center gap-2 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                  height={16}
                  width={16}
                >
                  <path
                    fillRule="evenodd"
                    d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-sm text-black font-bold">Dashboard</p>
              </div>
            </Link>
            <div className="flex flex-col gap-2">
              <h4 className="text-[#677788] text-xs font-bold py-2 px-4 uppercase">
                Order Section
              </h4>
              <button
                onClick={() => setShowOrderDropDown(!showOrderDropDown)}
                className="flex items-center w-full justify-between h-9 px-4 rounded"
              >
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4"
                    height={16}
                    width={16}
                  >
                    <path d="M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  <p className="text-sm text-black font-bold">Orders</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className={`w-4 h-4 transform transition-transform duration-300 ${
                    showOrderDropDown && "rotate-180"
                  }`}
                  height={16}
                  width={16}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <ul
                className={`pl-4 list-disc flex flex-col gap-2 transition-all duration-300 ${
                  showOrderDropDown ? "block" : "hidden"
                }`}
              >
                <li className="flex items-center gap-2 px-4 w-full justify-between cursor-pointer">
                  <div className="flex items-center gap-1.5">
                    <p className="w-1.5 h-1.5 rounded-full bg-[#00868f]"></p>
                    <Link href="/store-panel/orders">
                      <p className="text-sm text-black font-bold">All</p>
                    </Link>
                  </div>
                  <div className="bg-[rgba(0,201,219,0.1)] rounded-full p-1  w-[25px] flex items-center justify-center">
                    <p className="text-xs text-[#00868f] font-bold">10</p>
                  </div>
                </li>
                <li className="flex items-center gap-2 px-4 w-full justify-between cursor-pointer">
                  <div className="flex items-center gap-1.5">
                    <p className="w-1.5 h-1.5 rounded-full bg-[#00868f]"></p>
                    <Link href="/store-panel/orders">
                      <p className="text-sm text-black font-bold">Pending</p>
                    </Link>
                  </div>
                  <div className="bg-[rgba(0,201,219,0.1)] rounded-full p-1  w-[25px] flex items-center justify-center">
                    <p className="text-xs text-[#00868f] font-bold">0</p>
                  </div>
                </li>
                <li className="flex items-center gap-2 px-4 w-full justify-between cursor-pointer">
                  <div className="flex items-center gap-1.5">
                    <p className="w-1.5 h-1.5 rounded-full bg-[#00868f]"></p>
                    <Link href="/store-panel/orders">
                      <p className="text-sm text-black font-bold">Confirmed</p>
                    </Link>
                  </div>
                  <div className="bg-[rgba(0,201,219,0.1)] rounded-full p-1  w-[25px] flex items-center justify-center">
                    <p className="text-xs text-[#00868f] font-bold">0</p>
                  </div>
                </li>
                <li className="flex items-center gap-2 px-4 w-full justify-between cursor-pointer">
                  <div className="flex items-center gap-1.5">
                    <p className="w-1.5 h-1.5 rounded-full bg-[#00868f]"></p>
                    <Link href="/store-panel/orders">
                      <p className="text-sm text-black font-bold">Cooking</p>
                    </Link>
                  </div>
                  <div className="bg-[rgba(0,201,219,0.1)] rounded-full p-1  w-[25px] flex items-center justify-center">
                    <p className="text-xs text-[#00868f] font-bold">0</p>
                  </div>
                </li>
                <li className="flex items-center gap-2 px-4 w-full justify-between cursor-pointer">
                  <div className="flex items-center gap-1.5">
                    <p className="w-1.5 h-1.5 rounded-full bg-[#00868f]"></p>
                    <Link href="/store-panel/orders">
                      <p className="text-sm text-black font-bold">
                        Ready For Delivery
                      </p>
                    </Link>
                  </div>
                  <div className="bg-[rgba(0,201,219,0.1)] rounded-full p-1  w-[25px] flex items-center justify-center">
                    <p className="text-xs text-[#00868f] font-bold">0</p>
                  </div>
                </li>
                <li className="flex items-center gap-2 px-4 w-full justify-between cursor-pointer">
                  <div className="flex items-center gap-1.5">
                    <p className="w-1.5 h-1.5 rounded-full bg-[#00868f]"></p>
                    <Link href="/store-panel/orders">
                      <p className="text-sm text-black font-bold">
                        Item On The Way
                      </p>
                    </Link>
                  </div>
                  <div className="bg-[rgba(0,201,219,0.1)] rounded-full p-1  w-[25px] flex items-center justify-center">
                    <p className="text-xs text-[#00868f] font-bold">0</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
