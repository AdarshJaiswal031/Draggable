import { AudioLines, Ruler, Text } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useModal } from "../hooks/use-modal-store";
import { Button } from "../ui/button";

const ImgEditing = () => {
  const { isOpen, onClose, type, data } = useModal();
  const [width, setWidth] = useState("0");
  const [height, setHeight] = useState("0");

  useEffect(() => {
    if (isOpen && data.element?.current && width !== "0" && width !== "") {
      data.element.current.style.width = `${width}px`;
    }
  }, [isOpen, width, data.element]);
  useEffect(() => {
    if (isOpen && data.element?.current && height !== "0" && height !== "") {
      data.element.current.style.height = `${height}px`;
    }
  }, [isOpen, height, data.element]);
  const handleDelete = () => {
    data.element.current.parentElement.remove();
    onClose();
  };
  return (
    <div className="flex flex-col space-y-3">
      <div className="flex px-4 space-x-5 items-center">
        <div className="w-1/2">
          <span className="text-xs text-gray-500">Width</span>
          <input
            className="bg-transparent text-sm border rounded-md text-gray-400 px-2 py-1 w-full border-4-gray-600"
            type="number"
            value={width}
            placeholder="0px"
            onChange={(e) => setWidth(e.target.value)}
          />
        </div>
        <div className="w-1/2">
          <span className="text-xs text-gray-500">Height</span>
          <input
            className="bg-transparent text-sm border rounded-md text-gray-400 px-2 py-1 w-full border-4-gray-600"
            type="number"
            value={height}
            placeholder="0px"
            onChange={(e) => setHeight(e.target.value)}
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

export default ImgEditing;
