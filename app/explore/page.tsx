import Image from "next/image";
import Link from "next/link";

import NYC from "@/components/NYC";

const nycOpenData2017DOEHighSchoolDirectoryURL =
  "https://data.cityofnewyork.us/resource/s3k6-pzi2.json";

async function getData() {
  const res = await fetch(nycOpenData2017DOEHighSchoolDirectoryURL);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <>
      {/* page */}
      <div className="mx-auto flex w-full max-w-screen-sm flex-col space-y-4 py-12 px-4 text-primary dark:text-secondary-focus-dark font-sans">
        <h1 className="pb-3 text-4xl font-semibold text-primary dark:text-primary-dark">
          Data
        </h1>
        <pre>
          {/* {JSON.stringify(data, null, 2)} */}
        </pre>
      </div>
    </>
  );
}
