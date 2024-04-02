import React from "react";

export default function Navbar() {
  return (
    <div>
      <div className="navbar bg-base-100 ps-10 md:ps-24 md:pe-24 lg:pe-28">
        <div className="flex-1">
          <a className="md:text-2xl sm:text-sm font-bold">Logo</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 md:text-xl">
            <li>
              <details>
                <summary>Materi</summary>
                <ul className="p-2 bg-base-100 rounded-t-none w-40">
                  <li>
                    <a>Content 1</a>
                  </li>
                  <li>
                    <a>Content 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Video</a>
            </li>
            <li>
              <a>Quiz</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
