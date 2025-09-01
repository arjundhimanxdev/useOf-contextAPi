import { useContext } from "react";
import { ColorContext } from "../../context/ColorContext";

const ShowName = () => {
  const { color } = useContext(ColorContext);

  return (
    <h1 style={{ color: color }} className="text-2xl font-semibold font-mono pt-4">
      My Name is Arjun...
    </h1>
  );
};

export default ShowName;
