import { AudioLines, Ruler, Text } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useModal } from "../hooks/use-modal-store";
import { Button } from "../ui/button";

const TextEditing = () => {
  const { isOpen, onClose, type, data } = useModal();
  const [text, setText] = useState(
    data.element.current.innerText.toString() || ""
  );
  const [textSize, setTextSize] = useState("0");
  const [color, setColor] = useState("#000000");
  useEffect(() => {
    if (isOpen && data.element?.current) {
      data.element.current.innerText = text;
    }
  }, [text]);
  useEffect(() => {
    if (isOpen && data.element?.current && textSize != "0") {
      data.element.current.style.fontSize = `${textSize}px`;
    }
  }, [textSize]);
  useEffect(() => {
    if (isOpen && data.element?.current && color != "#000000") {
      data.element.current.style.color = `${color}`;
    }
  }, [color]);

  const handleDelete = () => {
    data.element.current.remove();
    onClose();
  };
  return (
    <div className="flex flex-col space-y-3 w-full items-start justify-center ">
      <div className="flex flex-col px-4 space-y-1">
        <span className="text-xs text-gray-500 ml-1 flex">Text</span>
        <input
          className="bg-transparent text-sm border rounded-md text-gray-500 px-2 py-2 w-full border-white"
          type="text"
          placeholder="Enter your text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="flex px-4 space-x-5 items-center">
        <div className="w-1/2">
          <span className="text-xs text-gray-500">Text Size</span>
          <input
            className="bg-transparent text-sm border rounded-md text-gray-400 px-2 py-1 w-full border-4-gray-600"
            type="number"
            value={textSize}
            placeholder="0px"
            onChange={(e) => setTextSize(e.target.value)}
          />
        </div>
        <div className="w-1/2">
          <span className="text-xs text-gray-500">Color</span>
          <input
            className="bg-transparent text-sm border rounded-md text-gray-400 px-2 py-1 w-full border-4-gray-600"
            type="color"
            value={color}
            placeholder="0px"
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
      </div>
      <div className=" w-full px-4">
        <Button
          onClick={() => handleDelete()}
          variant={"destructive"}
          className=" w-full mt-5"
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default TextEditing;
