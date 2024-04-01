import Image from "next/image";
import Link from "next/link";

import NYC from "@/components/NYC";

export default function Home() {
  return (
    <>
      {/* page */}
      <div className="mx-auto flex w-full max-w-screen-sm flex-col space-y-4 py-12 px-4 text-primary dark:text-secondary-focus-dark font-sans">
        <h1 className="pb-3 text-4xl font-semibold text-primary dark:text-primary-dark">
          What is this?
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <div className="w-[32rem] ">
          <NYC
            colors={{
              "otherLand": "rgb(39 39 42)",
              "water": "none",
              "bronx": "rgb(244 244 245)",
              "brooklyn": "rgb(82 82 91)",
              "manhattan": "rgb(212 212 216)",
              "queens": "rgb(113 113 122)",
              "statenIsland": "rgb(161 161 170)",
            }}
          />
        </div>
      </div>
    </>
  );
}
