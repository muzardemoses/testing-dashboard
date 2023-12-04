import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <div
      className="h-16 flex justify-end items-center gap-6 px-7"
      style={{
        boxShadow:
          "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
      }}
    >
      <div>
        <select
          className="border border-[#E5E5E5] rounded-lg py-2 px-4 text-sm font-medium text-[#677788] w-60 h-[45px] focus:outline-none transition duration-300 ease-in-out hover:border-[rgba(55,125,255,0.4)] input-shadow"
          name="cars"
          id="cars"
        >
          <option disabled value="------select Resturant-----">
            ------select Resturant------
          </option>
          <option value="volvo">All</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <div className="flex justify-end items-center gap-4">
        <button className="flex text-[#00868f] items-center">
          <Image
            src="/Images/Dashboard/globe-alt.svg"
            alt="globe-alt-svg"
            className="h-5 w-5"
            height={20}
            width={20}
          />
          <p className="text-sm">En</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4 ml-0.5"
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
        <Link href="/store-panel">
          <div className="relative w-max h-max">
            <div className="h-9 w-9 p-2 bg-gray-100 rounded-full">
              <Image
                alt="messages svg"
                src="/Images/Dashboard/messages-dots.svg"
                className="h-7 w-7"
                // height={28}
                // width={28}
              />
            </div>
            <p className="h-3 w-3 absolute bg-[#ED4C78] rounded-full border-white border-2 top-0 right-0"></p>
          </div>
        </Link>

        <button className="flex gap-2">
          <div className="flex flex-col text-right">
            <h4 className="text-[#00868f] font-bold text-sm">Amala Joint</h4>
            <p className="text-[#677788] text-xs">amala@gmail.com</p>
          </div>
          <div className="relative w-max h-max">
            <Image
              alt="avatar"
              src="/Images/Dashboard/avatar.jpg"
              className="h-9 w-9 rounded-full"
              height={36}
              width={36}
            />
            <p className="h-3 w-3 absolute bg-green-500 rounded-full border-white border-2 bottom-0 right-0"></p>
          </div>
        </button>
      </div>
    </div>
  );
};
