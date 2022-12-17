export const ItemCount = ({ count, handleCount }) => {
  return (
    <div className="flex justify-around mt-10 w-full bg-gray-200 rounded">
      <button
        onClick={() => handleCount("minus")}
        className="flex justify-center items-center p-2 w-2/5 h-full bg-gray-800 text-white"
      >
        -
      </button>
      <span
        id="counter"
        className="flex flex-1 justify-center items-center mx-4 font-bold"
      >
        {count}
      </span>
      <button
        onClick={() => handleCount("plus")}
        className="flex justify-center items-center p-2 w-2/5 h-full bg-gray-800 text-white"
      >
        +
      </button>
    </div>
  );
};
