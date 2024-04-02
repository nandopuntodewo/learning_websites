import React from "react";
import Pict from "../assets/pict.svg";
import YoutubeEmbed from "./youtubeEmbeded";

export default function Learning() {
  return (
    <div>
      <div className="ps-44 pe-44">
        <div>
          <p className="font-bold text-[#9AA5F7] text-5xl">
            Uniform Rectilinear Motion (Title)
          </p>
        </div>
        <div className="mt-11">
          <p className="font-semibold text-3xl">Section #1</p>
          <p className="mt-6 text-2xl text-justify">
            Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem.
          </p>
          <div className="mt-5">
            <img src={Pict} alt="picture" />
          </div>
        </div>
        <div className="mt-11">
          <p className="font-semibold text-3xl">Section #2</p>
          <p className="mt-6 text-2xl text-justify">
            Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem.
          </p>
          <ul className="menu mt-5 w-fit">
            <li>
              <h2 className="text-black text-xl">Content</h2>
              <ul>
                <li>
                  <p>Lorem ipsum dolor sit amet.</p>
                </li>
                <li>
                  <p>Lorem ipsum dolor sit amet.</p>
                </li>
                <li>
                  <p>Lorem ipsum dolor sit amet.</p>
                </li>
              </ul>
            </li>
          </ul>
          <div className="mt-5">
            <img src={Pict} alt="pict" />
          </div>
        </div>

        <div className="mt-11">
          <p className="font-semibold text-3xl">Video</p>
          <div className="mt-5">
            <YoutubeEmbed embedId="z0D4bN00myo" />
          </div>
          <p className="mt-6 text-2xl text-justify">
            Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem.
          </p>
        </div>

        <div className="mt-5 mb-5">
          <button className="btn bg-[#8ba7fa] px-10 text-white font-bold">
            Quiz{" "}
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 17L17 7M17 7H8M17 7V16"
                stroke="#ffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
