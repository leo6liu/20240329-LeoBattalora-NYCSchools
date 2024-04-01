"use client";

import { useEffect, useState } from "react";
import NYC from "../NYC";

const boroughs = [
  { name: "All Boroughs", code: "A" },
  { name: "Manhattan", code: "M" },
  { name: "Bronx", code: "X" },
  { name: "Queens", code: "Q" },
  { name: "Brooklyn", code: "K" },
  { name: "Staten Island", code: "R" }, // R for Richmond County
];

function calculateAverageSAT(
  schoolDirectoryData: any,
  schoolSATData: any,
): any {
  // merge two arrays of objects by dbn field
  // only keep schools with valid SAT scores
  const mergedData = schoolDirectoryData
    .filter((itemA1: any) =>
      schoolSATData.some(
        (itemA2: any) =>
          itemA2.dbn === itemA1.dbn &&
          !Number.isNaN(parseInt(itemA2.sat_critical_reading_avg_score)) &&
          !Number.isNaN(parseInt(itemA2.sat_math_avg_score)) &&
          !Number.isNaN(parseInt(itemA2.sat_writing_avg_score)),
      ),
    )
    .map((itemA1: any) => ({
      ...schoolSATData.find((itemA2: any) => itemA2.dbn === itemA1.dbn),
      ...itemA1,
    }));

  const averageReadingScore = mergedData.reduce(
    (acc: number, school: any) =>
      acc + parseInt(school.sat_critical_reading_avg_score),
    0,
  );
  const averageMathScore = mergedData.reduce(
    (acc: number, school: any) => acc + parseInt(school.sat_math_avg_score),
    0,
  );
  const averageWritingScore = mergedData.reduce(
    (acc: number, school: any) => acc + parseInt(school.sat_writing_avg_score),
    0,
  );
  const totalSchools = mergedData.length;

  return {
    averageReadingScore: Math.round(averageReadingScore / totalSchools),
    averageMathScore: Math.round(averageMathScore / totalSchools),
    averageWritingScore: Math.round(averageWritingScore / totalSchools),
  };
}

function DataRenderer({
  schoolDirectoryData: schoolDirectoryData,
  schoolSATData: schoolSATData,
}: {
  schoolDirectoryData: any;
  schoolSATData: any;
}): JSX.Element {
  const [selectedBorough, setSelectedBorough] = useState(boroughs[0]);
  const [selectedSchools, setSelectedSchools] = useState(schoolDirectoryData);

  const averageSAT = calculateAverageSAT(selectedSchools, schoolSATData);

  // filter selected schools based on selected borough
  useEffect(() => {
    const filteredData = schoolDirectoryData.filter((school: any) => {
      return (
        selectedBorough.code === "A" || school.boro === selectedBorough.code
      );
    });
    setSelectedSchools(filteredData);
  }, [schoolDirectoryData, selectedBorough]);

  return (
    <>
      {/* borough selector */}
      <div className="mx-auto flex w-full flex-col justify-center gap-4 px-20 md:flex-row">
        {boroughs.map((borough) => (
          <div
            key={borough.code}
            className={
              `rounded ` +
              (selectedBorough.code === borough.code
                ? "grow border-secondary bg-secondary text-bg dark:text-primary-dark"
                : "text-primary duration-150 hover:grow hover:bg-secondary hover:text-bg dark:text-secondary-dark hover:dark:text-primary-dark")
            }
          >
            <button
              onClick={() => setSelectedBorough(borough)}
              className="w-full text-nowrap px-4 py-2 font-bold"
            >
              {borough.name}
            </button>
          </div>
        ))}
      </div>

      <div className="grid w-full grid-cols-1 items-center justify-items-center sm:grid-cols-2">
        {/* average SAT scores */}
        <div className="col-span-2  mx-auto flex w-full max-w-screen-lg flex-col space-y-4 px-8 py-8 font-sans text-primary dark:text-secondary-focus-dark md:col-span-1 md:-mt-8">
          <h2 className="pb-3 text-center text-2xl font-semibold text-primary dark:text-primary-dark">
            Average SAT Scores
          </h2>
          <div className="flex flex-col space-y-2 text-center">
            <p>
              <span className="font-semibold">Total Schools:</span>{" "}
              {selectedSchools.length}
            </p>
            <p>
              <span className="font-semibold">Reading:</span>{" "}
              {averageSAT.averageReadingScore}
            </p>
            <p>
              <span className="font-semibold">Math:</span>{" "}
              {averageSAT.averageMathScore}
            </p>
            <p>
              <span className="font-semibold">Writing:</span>{" "}
              {averageSAT.averageWritingScore}
            </p>
            <p>
              <span className="font-semibold">Total:</span>{" "}
              {averageSAT.averageReadingScore +
                averageSAT.averageMathScore +
                averageSAT.averageWritingScore}
            </p>
          </div>
        </div>

        {/* NYC map */}
        <div className="col-span-2 mx-auto w-full px-16 pb-16 pt-8 md:col-span-1 md:-mx-8">
          <NYC
            colors={{
              otherLand: "rgb(39 39 42)",
              water: "none",
              bronx:
                selectedBorough.code === "X" || selectedBorough.code === "A"
                  ? "rgb(244 244 245)"
                  : "rgb(39 39 42)",
              brooklyn:
                selectedBorough.code === "K" || selectedBorough.code === "A"
                  ? "rgb(244 244 245)"
                  : "rgb(39 39 42)",
              manhattan:
                selectedBorough.code === "M" || selectedBorough.code === "A"
                  ? "rgb(244 244 245)"
                  : "rgb(39 39 42)",
              queens:
                selectedBorough.code === "Q" || selectedBorough.code === "A"
                  ? "rgb(244 244 245)"
                  : "rgb(39 39 42)",
              statenIsland:
                selectedBorough.code === "R" || selectedBorough.code === "A"
                  ? "rgb(244 244 245)"
                  : "rgb(39 39 42)",
            }}
          />
        </div>

        {/* school list */}
        <div className="col-span-2 mx-auto h-96 w-full px-8">
          <h2 className="pb-3 text-2xl font-semibold text-primary dark:text-primary-dark">
            School List
          </h2>
          <div className="flex max-h-80 flex-col overflow-y-scroll">
            {selectedSchools.map((school: any) => {
              return (
                <div
                  key={school.dbn}
                  className="flex w-full max-w-screen-lg justify-between border-b border-tertiary py-2"
                >
                  <div className="flex flex-col space-y-2">
                    <p>
                      {school.dbn} | {school.school_name} | {school.borough}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default DataRenderer;
