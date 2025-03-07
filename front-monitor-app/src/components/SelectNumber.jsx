export const SelectNumber = ({ selectedLineNumber, setSelectedLineNumber }) => {
  return (
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
  );
};
