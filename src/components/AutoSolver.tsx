interface Props {
  autoSolve: () => void;
  discStore: number[];
}

const AutoSolver = ({ autoSolve, discStore }: Props) => {
  const time = parseFloat(
    (((Math.pow(2, discStore.length) - 1) * 500) / 1000).toFixed(2)
  );
  return (
    <button
      className="my-2 rounded-md bg-sky-700 px-3 py-1 text-white"
      onClick={autoSolve}
    >
      Solve ({time > 60 ? (time / 60).toFixed(2) + " min" : time + " s"})
    </button>
  );
};

export default AutoSolver;
