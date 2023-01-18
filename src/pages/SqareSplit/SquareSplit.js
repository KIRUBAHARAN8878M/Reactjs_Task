import React, { useState } from "react";
import "./SquareSplit.css";

const SquareSplit = () => {
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    setIsClick(true);
  };

  return (
    <div className="SquareSplit_game pt-5 mt-5">
      <h1 className="text-uppercase ">BOX SPLITING</h1>
      <div className="square_board" onClick={handleClick}>
        {isClick ? <CreateSquare /> : ""}
      </div>
    </div>
  );
};

const CreateSquare = () => {
  const [square, setSqaure] = useState([true, true, true, true]);
  console.log(setSqaure);
  return (
    <div className="Create_Square">
      {square.map((val, index) => (
        <Square val={val} index={index} key={index} />
      ))}
    </div>
  );
};

const Square = ({ index }) => {
  const style = {
    0: {
      borderRight: "1px solid rgb(133, 0, 110)",
      height: "calc(50% - 0.5px)",
      width: "calc(50% - 0.5px)",

      margin: "0px",
      padding: "0px",
    },
    1: {
      height: "calc(50% - 0.5px)",
      width: "calc(50% - 0.5px)",
      padding: "0px",
    },
    2: {
      height: "calc(50% - 0.5px)",
      width: "calc(50% - 0.5px)",
      borderTop: "1px solid rgb(133, 0, 110)",
      borderRight: "1px solid rgb(133, 0, 110)",
      margin: "0px",
      padding: "0px",
    },
    3: {
      height: "calc(50% - 0.5px)",
      width: "calc(50% - 0.5px)",
      borderTop: "1px solid rgb(133, 0, 110)",
      margin: "0px",
      padding: "0px",
    },
  };
  console.log(index);
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    setIsClick(true);
  };

  return (
    <div style={style[index]} onClick={handleClick}>
      {isClick ? <CreateSquare /> : ""}
    </div>
  );
};

export default SquareSplit;


