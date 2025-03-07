export const Rack = ({ rack, index }) => {
  return (
    <div key={index} className="p-2 bg-slate-700/30 rounded-lg shadow h-auto">
      <h3 className="lg:text-lg md:text-md sm:text-sm font-semibold mb-2 rounded-md text-center px-2 text-nowrap">
        Rack {index + 1}
      </h3>
      <ul>
        {rack.map((tester, idx) => (
          <li key={idx} className="flex items-center justify-center">
            <span
              className={`lg:text-xl md:text-md sm:text-sm w-full text-center mb-2 rounded py-1
                        ${
                          tester?.status === "run"
                            ? "bg-blue-500/60"
                            : tester?.status === "rsp"
                            ? "bg-purple-500/60"
                            : tester?.status === "alert"
                            ? "bg-amber-400/80"
                            : tester?.status === "diferent"
                            ? "bg-red-500/80"
                            : "bg-slate-400/20"
                        }`}
            >
              {tester?.tester}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
