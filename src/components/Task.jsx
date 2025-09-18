import React from "react";
import { useSelector } from "react-redux";

const Task = () => {
  const savedLabels = useSelector((state) => state.labelData.savedLabels);
  return (
    <div className="border-8 border-double border-teal-700 rounded-2xl w-5/12 h-[25rem] my-15">
      <ul className="grid grid-cols-1  gap-2 py-2 border-b-2 border-b-teal-700 
      ">
        {savedLabels && savedLabels.length > 0 ? (
          savedLabels.map((label) => (
            
            
              <li key={label.labelColor} style={{ color: label.labelColor }} className="text-xs font-semibold flex items-center justify-center">
                <span className="w-4 h-4 border-2 mr-2 rounded-3xl " style={{background: label.labelColor}}></span> {label.labelName}
              </li>
              
          ))
        ) : (
          <p>No labels yet</p>
        )}
      </ul>
    </div>
  );
};

export default Task;
