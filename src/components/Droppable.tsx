import { useDroppable } from "@dnd-kit/core";
import { useEffect } from "react";

interface Props {
  id: string;
  children: React.ReactNode;
  getIsOver: (isOver: boolean) => void;
  style?: React.CSSProperties;
}

const Droppable: React.FC<Props> = ({ id, children, getIsOver, style }) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  useEffect(() => {
    getIsOver(isOver);
  }, [isOver]);

  return (
    <div ref={setNodeRef} className="h-[120%] w-full " style={style}>
      {children}
    </div>
  );
};

export default Droppable;
