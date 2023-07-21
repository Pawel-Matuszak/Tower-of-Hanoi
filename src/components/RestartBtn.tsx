interface Props {
  onRestart: (discArray: number[]) => void;
  discStore: number[];
}

const RestartBtn = ({ onRestart, discStore }: Props) => {
  return (
    <button
      className="m-2 rounded-md bg-orange-500 px-3 py-1"
      onClick={() => onRestart(discStore)}
    >
      Restart
    </button>
  );
};

export default RestartBtn;
