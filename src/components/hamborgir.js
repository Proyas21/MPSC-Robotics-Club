import { useState } from "react";

const Hamborgir = ({ Activate }) => {
  var [active, setActive] = useState(true);

  return (
    <div
      className="hambogir"
      onClick={() => {
        setActive(!active);
        Activate(active);
      }}
    >
      <div className="bun"></div>
      <div className="bun"></div>
      <div className="bun"></div>
    </div>
  );
};

export default Hamborgir;
