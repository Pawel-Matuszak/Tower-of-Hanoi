import { useState } from "react";
import Disc from "./Disc";
import Draggable from "./Draggable";
import Droppable from "./Droppable";

interface Props {
  stack: number[];
  id: string;
  discStore: number[];
}

const StackComponent: React.FC<Props> = ({ stack, id, discStore }) => {
  const [isOver, setIsOver] = useState(false);
  const height = discStore.length * 30 + 30;

  const getIsOver = (over: boolean) => {
    setIsOver(over);
  };

  return (
    <Droppable
      id={id}
      getIsOver={getIsOver}
      style={{ maxWidth: discStore.length < 7 ? "250px" : "none" }}
    >
      <div
        className="relative m-4 mb-0 flex min-h-[200px] flex-col justify-end"
        style={{
          height: height,
        }}
      >
        <div
          className="absolute bottom-0 left-1/2  h-[120%] w-4 -translate-x-1/2 rounded-t-lg bg-sky-600 shadow-inner shadow-slate-700"
          style={{ background: isOver ? "green" : "" }}
        ></div>
        {stack.map((item, index) => (
          <Draggable key={index} id={item}>
            <Disc item={item} discStore={discStore} />
          </Draggable>
        ))}
      </div>
    </Droppable>
  );
};

export default StackComponent;
