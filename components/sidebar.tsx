"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Download, Image as LucideImage, Save, Text } from "lucide-react";
import { cn } from "@/lib/utils";
import TextEditing from "./sections/textEditing";
import { useModal } from "./hooks/use-modal-store";
import ImgEditing from "./sections/imgEditing";
import { imgLinks } from "@/lib/allImages";
const Sidebar = () => {
  const { isOpen, onClose, type, data, startDownload, setDownload } =
    useModal();
  const [isImgTab, setisImgTab] = useState(true);

  const handleOnDrag = (e: React.DragEvent, item: any) => {
    const targetElement = e.target as HTMLElement;
    const tag = targetElement.tagName.toLowerCase();
    if (tag == "img") {
      e.dataTransfer.setData("imgUrl", item.url);
    } else if (tag == "h1" || tag == "h2" || tag == "p") {
      e.dataTransfer.setData("textCode", `${targetElement.outerHTML}`);
    } else if (tag == "div") {
      console.log(targetElement.outerHTML);
    }
  };
  const handleSave = () => {
    if (!startDownload) {
      setDownload(true);
    }
  };
  return (
    <>
      <div className="flex h-full transition-all duration-300 ease-in-out">
        <div className="flex flex-col bg-gray-900 w-14 h-full items-center cursor-pointer pt-8 space-y-5">
          <LucideImage
            onClick={() => {
              setisImgTab(true);
              onClose();
            }}
            className={cn(
              "text-gray-500 hover:text-gray-300 transition-all",
              isImgTab ? "text-gray-300" : "text-gray-500"
            )}
          />
          <Text
            onClick={() => {
              setisImgTab(false);
              onClose();
            }}
            className={cn(
              "text-gray-500 hover:text-gray-300 transition-all",
              !isImgTab ? "text-gray-300" : "text-gray-500"
            )}
          />
          <Download
            onClick={() => {
              handleSave();
            }}
            className={cn(
              "text-gray-500 hover:text-gray-300 transition-all",
              !isImgTab ? "text-gray-300" : "text-gray-500"
            )}
          />
        </div>
        <div className="flex flex-col bg-gray-800 w-72 h-full items-center cursor-pointer space-y-5 py-7">
          {isOpen ? (
            type === "imgEditing" ? (
              <ImgEditing />
            ) : (
              <TextEditing />
            )
          ) : isImgTab ? (
            <div className="custom-scrollbar w-full max-h-full overflow-y-scroll flex overflow-x-hidden flex-wrap gap-2 pl-2">
              {imgLinks.map((item, index) => (
                <Image
                  draggable
                  onDragStart={(e) => handleOnDrag(e, item)}
                  className="rounded-md"
                  src={item.url}
                  key={index}
                  loading="lazy"
                  width={120}
                  height={96}
                  alt={`${item.url}image`}
                />
              ))}
            </div>
          ) : (
            <div className="custom-scrollbar w-full max-h-full flex flex-col justify-center gap-y-2">
              <div className=" bg-gray-700 py-4 pl-4 rounded mx-2 ">
                <h1
                  draggable
                  onDragStart={(e) => handleOnDrag(e, "h1")}
                  className="text-3xl font-bold text-white"
                >
                  Heading
                </h1>
              </div>
              <div className=" bg-gray-700 py-4 pl-4 rounded mx-2 ">
                <h2
                  draggable
                  onDragStart={(e) => handleOnDrag(e, "h2")}
                  className="text-xl text-white font-semibold "
                >
                  Subheading
                </h2>
              </div>
              <div className=" bg-gray-700 py-4 pl-4 rounded mx-2 ">
                <p
                  draggable
                  onDragStart={(e) => handleOnDrag(e, "p")}
                  className="text-white "
                >
                  Paragraphs
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
