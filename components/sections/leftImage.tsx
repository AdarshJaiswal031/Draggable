import React from "react";
const LeftImage = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div className="h-60 mt-10 flex items-center justify-center cursor-pointer">
      {/* Image Section (Taking half of the height) */}
      <div className="w-full h-full mx-5  flex  overflow-hidden  items-center justify-center">
        <img
          src={imageUrl}
          alt="Image"
          className="w-full h-full rounded-md shadow-md"
        />
      </div>

      {/* Content Section */}
      <div
        id="textBox"
        className="w-full h-full p-8 flex space-y-1 text-white flex-col mx-4 overflow-visible whitespace-pre-wrap"
      >
        Add Texts
      </div>
    </div>
  );
};

export default LeftImage;
