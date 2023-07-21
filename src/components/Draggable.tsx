import { useDraggable } from "@dnd-kit/core";

interface Props {
  id: number;
  children: React.ReactNode;
}

const Draggable: React.FC<Props> = ({ children, id }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="z-10 w-full"
    >
      {children}
    </div>
  );
};

export default Draggable;
