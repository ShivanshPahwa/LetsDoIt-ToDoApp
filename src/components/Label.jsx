import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";

import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addLabel } from "../utils/labelSlice";
const Label = () => {
  const label = useRef(null);
  const color = useRef(null);
  const [hexColor, setHexColor] = useState("#fff");
  const dispatch = useDispatch();
  const labelData = useSelector((state) => state.labelData.savedLabels);
  const [showError, setShowError] = useState(false)
  const [publishEnable, setPublishEnable] = useState(true)
  const getNewLabelData = () => {
    console.log(label.current.value, hexColor);
    const notUnique = labelData.find(
      (labelElem) => labelElem.labelName === label.current.value
    );
    console.log("notUnoique",notUnique)
    if (notUnique ==undefined) {
      setShowError(false)
      setPublishEnable(true)
      dispatch(
        addLabel({ labelName: label.current.value, labelColor: hexColor })
      );
    } else {
      console.log("inside else")
      setShowError(true)
      setPublishEnable(false)
    }
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
            <div className="flex items-center justify-center my-1.5">
              <input
                className="p-1.5 text-center border-teal-700 border-2 rounded-xl w-7/12"
                type="text"
                name="label"
                ref={label}
                placeholder="Label Name"
              />
            </div>

            <div className="flex justify-center items-center gap-4 border-2 border-teal-700 rounded-xl p-0.75 w-7/12 mx-auto">
              <div>
                <label htmlFor="color">Select a color</label>
              </div>
              <div
                className="w-8 h-8 rounded-full border-2 border-gray-300"
                style={{ backgroundColor: hexColor }}
                ref={color}
              ></div>
            </div>
            <HexColorPicker
              color={hexColor}
              onChange={setHexColor}
              ref={color}
              className="!w-[150px] !h-[150px] top-[30px] mx-auto"
            />
            <div className="text-center">
              <button
                type="submit"
                onClick={getNewLabelData}
                className="relative top-[60px] bg-teal-700 text-white py-2 px-3.5 rounded-md font-semibold"
              >
                Publish Label
              </button>
            </div>
            
            <div>
            {showError && (
              <div className="text-red-500 text-xs relative top-16 w-[100%] text-center"> Label Already Exists</div>
            )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Label;
