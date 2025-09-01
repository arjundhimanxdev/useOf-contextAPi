import { useContext } from "react";
import { ColorContext } from "../../context/ColorContext";

const NameAction = () => {
  const { setColor } = useContext(ColorContext);

  return (
    <div className=" gap-3 mb-6 grid grid-cols-3">
      <button onClick={() => setColor("green")} className="bg-gray-400 rounded-md py-1 px-2 text-white">Green</button>
      <button onClick={() => setColor("blue")} className="bg-gray-400 rounded-md py-1 px-2 text-white">Blue</button>
      <button onClick={() => setColor("red")} className="bg-gray-400 rounded-md py-1 px-2 text-white">Red</button>
      <button onClick={() => setColor("aqua")} className="bg-gray-400 rounded-md py-1 px-2 text-white">Aqua</button>
      <button onClick={() => setColor("yellow")} className="bg-gray-400 rounded-md py-1 px-2 text-white">Yellow</button>
      <button onClick={() => setColor("orange")} className="bg-gray-400 rounded-md py-1 px-2 text-white">Orange</button>
    </div>
  );
};

export default NameAction;
