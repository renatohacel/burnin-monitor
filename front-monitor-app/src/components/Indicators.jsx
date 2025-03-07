export const Indicators = () => {
  return (
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
  );
};
