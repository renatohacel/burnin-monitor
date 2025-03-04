import { useEffect, useState } from "react";

const testersData = {
  "1A": [
    { tester: "1A-01", status: "run" },
    { tester: "1A-02", status: "run" },
    { tester: "1A-03", status: "run" },
    { tester: "1A-04", status: "run" },
    { tester: "1A-05", status: "run" },
    { tester: "1A-06", status: "run" },
    { tester: "1A-07", status: "run" },
    { tester: "1A-08", status: "run" },
    { tester: "1A-09", status: "run" },
    { tester: "1A-10", status: "poweroff" },
    { tester: "1A-11", status: "run" },
    { tester: "1A-12", status: "run" },
    { tester: "1A-13", status: "run" },
    { tester: "1A-14", status: "run" },
    { tester: "1A-15", status: "rsp" },
    { tester: "1A-16", status: "poweroff" },
    { tester: "1A-17", status: "rsp" },
    { tester: "1A-18", status: "poweroff" },
    { tester: "1A-19", status: "run" },
    { tester: "1A-20", status: "run" },
    { tester: "1A-21", status: "alert" },
    { tester: "1A-22", status: "poweroff" },
    { tester: "1A-23", status: "run" },
    { tester: "1A-24", status: "run" },
    { tester: "1A-25", status: "run" },
    { tester: "1A-26", status: "poweroff" },
    { tester: "1A-27", status: "run" },
    { tester: "1A-28", status: "run" },
    { tester: "1A-29", status: "alert" },
    { tester: "1A-30", status: "alert" },
    { tester: "1A-31", status: "alert" },
    { tester: "1A-32", status: "run" },
    { tester: "1A-33", status: "alert" },
    { tester: "1A-34", status: "run" },
    { tester: "1A-35", status: "run" },
    { tester: "1A-36", status: "diferent" },
    { tester: "1A-37", status: "run" },
    { tester: "1A-38", status: "run" },
    { tester: "1A-39", status: "run" },
    { tester: "1A-40", status: "alert" },
  ],
  "2A": [
    { tester: "2A-01", status: "run" },
    { tester: "2A-02", status: "run" },
    { tester: "2A-03", status: "alert" },
    { tester: "2A-04", status: "alert" },
  ],
  "3A": [
    { tester: "3A-01", status: "run" },
    { tester: "3A-02", status: "run" },
    { tester: "3A-03", status: "alert" },
    { tester: "3A-04", status: "alert" },
  ],
  "4A": [
    { tester: "4A-01", status: "run" },
    { tester: "4A-02", status: "run" },
    { tester: "4A-03", status: "alert" },
    { tester: "4A-04", status: "alert" },
  ],
  "5A": [
    { tester: "5A-01", status: "run" },
    { tester: "5A-02", status: "run" },
    { tester: "5A-03", status: "alert" },
    { tester: "5A-04", status: "alert" },
  ],
  "6A": [
    { tester: "6A-01", status: "run" },
    { tester: "6A-02", status: "run" },
    { tester: "6A-03", status: "alert" },
    { tester: "6A-04", status: "alert" },
  ],
  "1B": [
    { tester: "1B-01", status: "run" },
    { tester: "1B-02", status: "run" },
    { tester: "1B-03", status: "run" },
    { tester: "1B-04", status: "run" },
    { tester: "1B-05", status: "run" },
    { tester: "1B-06", status: "run" },
    { tester: "1B-07", status: "run" },
    { tester: "1B-08", status: "run" },
    { tester: "1B-09", status: "run" },
    { tester: "1B-10", status: "poweroff" },
    { tester: "1B-11", status: "run" },
    { tester: "1B-12", status: "run" },
    { tester: "1B-13", status: "run" },
    { tester: "1B-14", status: "run" },
    { tester: "1B-15", status: "rsp" },
    { tester: "1B-16", status: "poweroff" },
    { tester: "1B-17", status: "rsp" },
    { tester: "1B-18", status: "poweroff" },
    { tester: "1B-19", status: "run" },
    { tester: "1B-20", status: "run" },
    { tester: "1B-21", status: "alert" },
    { tester: "1B-22", status: "poweroff" },
    { tester: "1B-23", status: "run" },
    { tester: "1B-24", status: "run" },
    { tester: "1B-25", status: "run" },
    { tester: "1B-26", status: "poweroff" },
    { tester: "1B-27", status: "run" },
    { tester: "1B-28", status: "run" },
    { tester: "1B-29", status: "alert" },
    { tester: "1B-30", status: "alert" },
    { tester: "1B-31", status: "alert" },
    { tester: "1B-32", status: "run" },
  ],
  "2B": [],
  "3B": [],
  "4B": [],
  "5B": [],
  "6B": [],

  "1C": [],
  "2C": [],
  "3C": [],
  "4C": [],
  "5C": [],
  "6C": [],

  "1D": [],
  "2D": [],
  "3D": [],
  "4D": [],
  "5D": [],
  "6D": [],

  "1E": [],
  "2E": [],
  "3E": [],
  "4E": [],
  "5E": [],
  "6E": [],

  "1F": [],
  "2F": [],
  "3F": [],
  "4F": [],
  "5F": [],
  "6F": [],

  "1G": [],
  "2G": [],
  "3G": [],
  "4G": [],
  "5G": [],
  "6G": [],

  "1H": [],
  "2H": [],
  "3H": [],
  "4H": [],
  "5H": [],
  "6H": [],
};

const RackMonitor = () => {
  const [selectedLineNumber, setSelectedLineNumber] = useState("1");
  const [selectedLineLetter, setSelectedLineLetter] = useState("A");
  const testers = testersData[`${selectedLineNumber}${selectedLineLetter}`];
  const racks = [];

  // Dividir los testers en racks de 4
  for (let i = 0; i < testers.length; i += 4) {
    racks.push(testers.slice(i, i + 4));
  }

  return (
    <div className="p-6 bg-slate-900 min-h-screen text-white font-mono">
      <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-center mt-2">
        Burnin Fails Monitor
      </h1>

      <div className="mt-20 w-full mx-auto p-4 bg-slate-800/30 rounded-lg shadow-lg">
        <div className="flex justify-between">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-center text-xl font-semibold">SELECT LINE:</h2>
            <select
              className="text-center text-xl border border-slate-300/30 rounded"
              value={selectedLineNumber}
              onChange={(e) => setSelectedLineNumber(e.target.value)}
            >
              <option className="bg-slate-900" value={"1"}>
                1
              </option>
              <option className="bg-slate-900" value={"2"}>
                2
              </option>
              <option className="bg-slate-900" value={"3"}>
                3
              </option>
              <option className="bg-slate-900" value={"4"}>
                4
              </option>
              <option className="bg-slate-900" value={"5"}>
                5
              </option>
              <option className="bg-slate-900" value={"6"}>
                6
              </option>
            </select>
            <select
              className="text-center text-xl border border-slate-300/30 rounded"
              value={selectedLineLetter}
              onChange={(e) => setSelectedLineLetter(e.target.value)}
            >
              <option className="bg-slate-900" value={"A"}>
                A
              </option>
              <option className="bg-slate-900" value={"B"}>
                B
              </option>
              <option className="bg-slate-900" value={"C"}>
                C
              </option>
              <option className="bg-slate-900" value={"D"}>
                D
              </option>
              <option className="bg-slate-900" value={"E"}>
                E
              </option>
              <option className="bg-slate-900" value={"F"}>
                F
              </option>
              <option className="bg-slate-900" value={"G"}>
                G
              </option>
            </select>
          </div>
          <div className="flex gap-6 items-center mb-4">
            {/* ALERT */}
            <div className="flex gap-1 items-center">
              <h2 className="text-center text-xl font-semibold">ALERT</h2>
              <span className="w-4 h-4 bg-amber-400"></span>
            </div>
            {/* RSP */}
            <div className="flex gap-1 items-center">
              <h2 className="text-center text-xl font-semibold">RSP</h2>
              <span className="w-4 h-4 bg-purple-500"></span>
            </div>
            {/* RUN */}
            <div className="flex gap-1 items-center">
              <h2 className="text-center text-xl font-semibold">RUN</h2>
              <span className="w-4 h-4 bg-blue-500"></span>
            </div>
            {/* DIFERENT */}
            <div className="flex gap-1 items-center">
              <h2 className="text-center text-xl font-semibold">DIFERENT</h2>
              <span className="w-4 h-4 bg-red-500"></span>
            </div>
          </div>
        </div>

        <h2 className="text-center text-xl font-semibold mb-10">
          LINE {selectedLineNumber}-{selectedLineLetter}
        </h2>
        <div
          className={`grid lg:grid-cols-10 md:grid-cols-6 sm:grid-cols-2 gap-4`}
        >
          {racks.map((rack, index) => (
            <div
              key={index}
              className="p-2 bg-slate-700/30 rounded-lg shadow h-auto"
            >
              <h3 className="lg:text-lg md:text-md sm:text-sm font-semibold mb-2 rounded-md text-center px-2 text-nowrap">
                Rack {index + 1}
              </h3>
              <ul>
                {rack.map((tester, idx) => (
                  <li key={idx} className="flex items-center justify-center">
                    <span
                      className={`lg:text-xl md:text-md sm:text-sm w-full text-center mb-2 rounded py-1
                        ${
                          tester.status === "run"
                            ? "bg-blue-500/60"
                            : tester.status === "rsp"
                            ? "bg-purple-500/60"
                            : tester.status === "alert"
                            ? "bg-amber-400/80"
                            : tester.status === "diferent"
                            ? "bg-red-500/80"
                            : "bg-slate-400/20"
                        }`}
                    >
                      {tester.tester}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RackMonitor;
