export const SelectLetter = ({ selectedLineLetter, setSelectedLineLetter }) => {
  return (
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
      <option className="bg-slate-900" value={"H"}>
        H
      </option>
    </select>
  );
};
