import { useEffect, useState } from "react";
import { SelectNumber } from "./components/SelectNumber";
import { SelectLetter } from "./components/SelectLetter";
import { Indicators } from "./components/Indicators";
import { Rack } from "./components/Rack";
import useSocket from "./hooks/useSocket";
import { useMonitor } from "./hooks/useMonitor";
const RackMonitor = () => {
  const { testersData, getAllBurninData } = useMonitor();
  const [selectedLineNumber, setSelectedLineNumber] = useState("1");
  const [selectedLineLetter, setSelectedLineLetter] = useState("A");
  const [testers, setTester] = useState([]);

  useSocket("data_changed", () => {
    console.log("Files changed, refresh");
    getAllBurninData();
  });

  useEffect(() => {
    getAllBurninData();
  }, []);

  useEffect(() => {
    setTester(testersData[`${selectedLineNumber}${selectedLineLetter}`] || []);
  }, [testersData, selectedLineLetter, selectedLineNumber]);

  const racks = [];

  // Dividir los testers en racks de 4
  for (let i = 0; i < testers?.length; i += 4) {
    racks.push(testers.slice(i, i + 4));
  }

  return (
    <div className="p-6 bg-slate-900 min-h-screen text-white font-mono">
      <div className="lg:flex md:flex sm:flex-col justify-center items-center relative mb-4">
        <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold">
          Burnin Fails Monitor
        </h1>
        <button className="absolute right-0 cursor-pointer bg-slate-800/40 hover:bg-slate-500/30 text-white font-bold py-1 px-3 rounded">
          LINES INFO
        </button>
      </div>

      <div className="mt-20 w-full mx-auto p-4 bg-slate-800/30 rounded-lg shadow-lg">
        <div className="lg:flex justify-between">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-center text-xl font-semibold">SELECT LINE:</h2>
            <SelectNumber
              selectedLineNumber={selectedLineNumber}
              setSelectedLineNumber={setSelectedLineNumber}
            />
            <SelectLetter
              selectedLineLetter={selectedLineLetter}
              setSelectedLineLetter={setSelectedLineLetter}
            />
          </div>
          <Indicators />
        </div>
        <h2 className="text-center text-xl font-semibold mb-10">
          LINE {selectedLineNumber}-{selectedLineLetter}
        </h2>
        <div
          className={`grid lg:grid-cols-10 md:grid-cols-6 sm:grid-cols-2 gap-4`}
        >
          {racks.map((rack, index) => (
            <Rack key={index} rack={rack} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RackMonitor;
