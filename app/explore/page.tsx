import Image from "next/image";
import Link from "next/link";

import NYC from "@/components/NYC";
import DataRenderer from "@/components/explore/DataRenderer";

const nycOpenData2017DOEHighSchoolDirectoryURL =
  "https://data.cityofnewyork.us/resource/s3k6-pzi2.json";
const nycOpenData2012SATResultsURL =
  "https://data.cityofnewyork.us/resource/f9bf-2cp4.json";

async function getData(url: string) {
  const res = await fetch(url);

  if (!res.ok || !res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const directoryData = await getData(nycOpenData2017DOEHighSchoolDirectoryURL);
  const satData = await getData(nycOpenData2012SATResultsURL);

  return (
    <>
      {/* page */}
      <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center space-y-4 px-8 py-12 font-sans text-primary dark:text-secondary-focus-dark">
        <h1 className="max-w-screen-sm pb-5 text-4xl font-semibold text-primary dark:text-primary-dark">
          Explore
        </h1>

        <DataRenderer
          schoolDirectoryData={directoryData}
          schoolSATData={satData}
        />
      </div>
    </>
  );
}
