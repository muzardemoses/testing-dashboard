/* eslint-disable @next/next/no-img-element */
import { Inter } from "next/font/google";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function AdminLogin() {
  const router = useRouter();
  return (
    <main
      className={`flex flex-row min-h-screen justify-between items-center w-full ${inter.className}`}
    >
      <div
        className="min-h-screen flex w-full flex-grow relative"
        style={{
          backgroundImage: "url('/Images/Auth/auth-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute h-full w-full z-10 flex justify-center items-center">
          <div className="flex flex-col gap-5 pl-72">
            <img
              src="/foodhutzlogo.png"
              alt="logo"
              className="max-w-[240px] h-[65px] w-[106px]"
            />
            <h2
              className="text-[70px] font-light text-black"
              style={{ lineHeight: "1.3" }}
            >
              Your
              <span className="block"> All Service</span>
              <span className="text-[#039d55] font-bold">
                {" "}
                In one field...{" "}
              </span>
            </h2>
          </div>
        </div>
      </div>
      <div className="max-w-[718px] w-full px-20 flex flex-col gap-12">
        <div className="flex flex-col gap-2.5">
          <h2 className="text-4xl font-bold text-black">Admin Signin</h2>
          <p className="text-[22px] font-light text-[#a0a0a0]">
            Welcome back, login to your panel
          </p>
        </div>
        <form
          className="flex flex-col gap-5"
          onSubmit={(e) => {
            e.preventDefault();
            router.push("/store-panel");
          }}
        >
          <div className="flex flex-col gap-[2rem]">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <label htmlFor="email" className="text-sm">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="email@address.com"
                  className="border border-[#e7eaf3] rounded-[5px] h-[45px] px-[1.09375rem] text-[#1e2022] text-base font-normal focus:outline-none transition duration-300 ease-in-out hover:border-[rgba(55,125,255,0.4)] input-shadow"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="password" className="text-sm">
                  Your Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  placeholder="6+ characters required"
                  className="border border-[#e7eaf3] rounded-[5px] h-[45px] px-[1.09375rem] text-[#1e2022] text-base font-normal focus:outline-none transition duration-300 ease-in-out hover:border-[rgba(55,125,255,0.4)] input-shadow"
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  className="rounded-[5px] h-[16px] w-[16px] border border-[#e7eaf3] cursor-pointer focus:outline-none transition duration-300 ease-in-out hover:border-[rgba(55,125,255,0.4)]"
                />
                <label
                  htmlFor="remember"
                  className="text-sm font-normal text-[#8c98a4]"
                >
                  Remember me
                </label>
              </div>
              <a
                href="#"
                className="text-sm text-[#006161] font-medium hover:underline"
              >
                Forgot Password?
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-[1rem]">
            <div></div>
            <button
              type="submit"
              className="font-medium text-xl text-center w-full bg-[#039d55] px-[24px] h-[45px] text-[#fff] rounded-[5px] transition duration-300 ease-in-out hover:bg-[rgb(3,147,75)]"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

AdminLogin.getLayout = function getLayout(page) {
  return <>{page}</>;
};
