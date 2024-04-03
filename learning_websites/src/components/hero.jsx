import React from "react";

export default function Hero() {
  return (
    <div>
      <div className="ps-16 pe-16 pt-40 pb-40 md:ps-44 md:pt-52 md:pb-44 md:pe-44 flex justify-center md:justify-start" id="home">
        <div>
          <p className="font-bold text-5xl text-center md:text-start md:text-7xl">
            Learning physics can be easy <br /> and fun
          </p>
          <div className="mt-24 md:mt-9 flex justify-center md:justify-start">
            <button className="btn bg-[#5D83F2] px-10 text-white font-bold">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
