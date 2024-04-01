import Image from "next/image";
import Link from "next/link";

import NYC from "@/components/NYC";

export default function Home() {
  return (
    <>
      {/* page */}
      <div className="mx-auto flex w-full max-w-screen-sm flex-col space-y-4 px-4 pt-12 font-sans text-primary dark:text-secondary-focus-dark">
        <h1 className="pb-3 text-4xl font-semibold text-primary dark:text-primary-dark">
          What is this?
        </h1>
        <p>
          This site is a sample project to demonstrate some of my UI/UX skills
          for a job application. It was created over the course of one long
          afternoon on 2024/03/31. It is a simple webapp that calculates the
          average SAT scores for the five boroughs of NYC.
        </p>
        <div className="mx-auto w-[20rem] py-8 sm:w-[24rem]">
          <NYC
            colors={{
              otherLand: "rgb(39 39 42)",
              water: "none",
              bronx: "rgb(244 244 245)",
              brooklyn: "rgb(82 82 91)",
              manhattan: "rgb(212 212 216)",
              queens: "rgb(113 113 122)",
              statenIsland: "rgb(161 161 170)",
            }}
          />
          <p className="text-center text-xs">
            source:{" "}
            <a
              className="underline"
              target="_blank"
              href="https://commons.wikimedia.org/wiki/File:The_5_Boroughs_of_New_York_City.svg"
            >
              Wikimedia Commons
            </a>
          </p>
        </div>
        <p>
          Try the website out in{" "}
          <span className="font-semibold underline decoration-2 underline-offset-2">
            dark mode
          </span>{" "}
          by clicking the sun icon in the navigation bar. And also explore how
          the site responds to different{" "}
          <span className="font-semibold underline decoration-2 underline-offset-2">
            screen sizes
          </span>
          !
        </p>
      </div>
    </>
  );
}
