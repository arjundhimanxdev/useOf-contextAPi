
import { useState } from "react";
import { ColorContext } from "./ColorContext.js";

// Provider banaya
export default function ColorProvider({ children }) {
  const [color, setColor] = useState("black");
  return (
    <ColorContext.Provider value={{ color, setColor }}>
      {children}
    </ColorContext.Provider>
  );
}
