import React, { Children } from "react";
import ChangeAddress from "./ChangeAddress";

const Model = ({ isModelOpen, setIsModelOpen, Children }) => {
  if (!isModelOpen) return null;
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center jjustify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <button
          className="absolute top-4 right-4 text-gray-300 text-3xl"
          onClick={() => setIsModelOpen(false)}
        >
          &times;
        </button>
        {Children}
        
      </div>
    </div>
  );
};

export default Model;
