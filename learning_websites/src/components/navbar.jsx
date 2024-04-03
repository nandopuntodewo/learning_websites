import React from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  return (
    <div>
      <div className="navbar fixed top-0 bg-base-100 ps-10 md:ps-24 md:pe-24 lg:pe-28">
        <div className="flex-1">
          <ScrollLink to="home" spy={true} smooth={true} duration={500}>
            <a className="md:text-2xl sm:text-sm font-bold">Logo</a>
          </ScrollLink>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 md:text-xl">
            <li>
              <details>
                <summary>Materi</summary>
                <ul className="p-2 bg-base-100 rounded-t-none w-40">
                  <li>
                    <ScrollLink
                      to="section1"
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-100}
                    >
                      <a>Content 1</a>
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      to="section2"
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-100}
                    >
                      <a>Content 2</a>
                    </ScrollLink>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <ScrollLink to="video" spy={true} smooth={true} duration={500}>
                <a>Video</a>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="quiz" spy={true} smooth={true} duration={500}>
                <a>Quiz</a>
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
