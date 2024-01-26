import React from "react";

const RightImage = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div className="h-60 mt-10 flex  items-center justify-center cursor-pointer">
      {/* Content Section */}
      <div
        id="textBox"
        className="w-full text-white space-y-1 h-full p-8 flex flex-col mx-4 overflow-visible whitespace-pre-wrap"
      >
        Add Texts
      </div>
      {/* Image Section (Taking half of the height) */}
      <div className="w-full h-full mx-5  flex  overflow-hidden  items-center justify-center">
        <img
          src={imageUrl}
          alt="Image"
          className="w-full h-full rounded-md shadow-md"
        />
      </div>
    </div>
  );
};

export default RightImage;
