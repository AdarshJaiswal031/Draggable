import React from "react";

const Divs = () => {
  const handleOnDrag = (e: React.DragEvent, item: any) => {
    const targetElement = e.target as HTMLElement;
    const tag = targetElement.tagName.toLowerCase();
    if (tag == "div") {
      e.dataTransfer.setData("textCode", `${targetElement.outerHTML}`);
    }
  };
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col w-full px-5">
        <span className="text-xs text-gray-500 ml-1 flex">Navbar</span>
        <div className="flex flex-col bg-gray-900 w-full rounded-md my-2 ">
          <div draggable className="w-full h-10 flex justify-between "></div>
        </div>
      </div>
      <div className="flex flex-col w-full px-5">
        <span className="text-xs text-gray-500 ml-1 flex">Horizontal</span>
        <div className="flex flex-col h-20 bg-gray-900 w-full rounded-md my-2 ">
          <div
            draggable
            className="w-full h-10 flex items-center justify-center my-5 px-2 "
          ></div>
        </div>
      </div>
      <div className="flex flex-col w-full px-5 pr-36">
        <span className="text-xs text-gray-500 ml-1 flex">Veticle</span>
        <div className="flex flex-col h-20 bg-gray-900 w-full rounded-md my-2">
          <div
            draggable
            onDragStart={(e) => handleOnDrag(e, "item")}
            className="w-full h-10 flex flex-col bg-white items-center justify-center my-5 px-2 "
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Divs;
