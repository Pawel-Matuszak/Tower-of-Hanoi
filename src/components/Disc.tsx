const Disc: React.FC<{ item: number; discStore: number[] }> = ({
  item,
  discStore,
}) => {
  return (
    <div
      className={`m-auto flex h-8 items-center justify-center rounded-xl  bg-white`}
      style={{
        width: `${item * (100 / discStore.length)}%`,
        boxShadow: "rgba(0, 0, 0, 0.35) 0px -20px 36px -28px inset",
      }}
    ></div>
  );
};
export default Disc;
