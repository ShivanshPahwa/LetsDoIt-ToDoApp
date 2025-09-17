import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";

import { useRef } from "react";
const Label = () => {
  const label = useRef(null);
  const color = useRef(null);
  const [hexColor,setHexColor] = useState('#fff')

  const getNewLabelData = () => {
    console.log({ label }, { color });
  };
  return (
    <>
      <div className="border-8 border-double border-teal-700 rounded-2xl w-5/12 h-[25rem] my-15">
        <div className="form">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <label htmlFor="label">Label</label>
            <input type="text" name="label" ref={label} />

            <label htmlFor="color">Select a color</label>
            <input
              type="color"
              className="w-6 h-6 rounded-full border-2 border-gray-300 cursor-pointer"
            />
            <div className="flex flex-col items-center gap-4">
              <div
                className="w-12 h-12 rounded-full border-2 border-gray-300"
                style={{ backgroundColor: hexColor }}
              ></div>
              <HexColorPicker color={hexColor} onChange={setHexColor} />
              <p>Selected color: {hexColor}</p>
            </div>
            <button type="submit" onClick={getNewLabelData}>
              Publish Label
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Label;
