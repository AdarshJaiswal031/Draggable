"use client";
import React, { useRef } from "react";
import Navbar from "./sections/navbar";
import LeftImage from "./sections/leftImage";
import RightImage from "./sections/rightImage";
import Footer from "./sections/Footer";
import { useModal } from "./hooks/use-modal-store";
type WebCodeType = [compName: string];
const Website = () => {
  const { isOpen, onOpen, onClose, type, data } = useModal();
  const elementRef = useRef<HTMLElement | HTMLImageElement | null>(null);
  const handleOnDrop = (e: React.DragEvent) => {
    const targetElement = e.target as HTMLElement;
    if (targetElement.tagName == "IMG") {
      const imgUrl = e.dataTransfer.getData("imgUrl");
      if (!imgUrl) {
        return;
      }
      const imgElement = targetElement as HTMLImageElement;
      imgElement.src = imgUrl;
    } else {
      const textCode = e.dataTransfer.getData("textCode");
      if (!textCode) {
        return;
      }
      var newHtml = targetElement.innerHTML;
      if (newHtml == "Add Texts") {
        newHtml = textCode;
      } else {
        newHtml = newHtml + textCode;
      }

      targetElement.innerHTML = newHtml;
    }
  };
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleClick = (e: any) => {
    const tag = e.target.tagName.toLowerCase();
    if (tag === "img") {
      elementRef.current = e.target;
      onOpen("imgEditing", { element: elementRef });
    } else if (tag === "h1" || tag === "h2" || tag === "p") {
      elementRef.current = e.target;
      onOpen("textEditing", { element: elementRef });
    } else {
      onClose();
    }
  };

  return (
    <div
      onDrop={handleOnDrop}
      onDragOver={handleDragOver}
      className="custom-scrollbar w-full overflow-x-hidden bg-gray-950 overflow-y-scroll"
      onClick={handleClick}
    >
      <div className="h-screen">
        <Navbar />
        <LeftImage imageUrl="https://shorturl.at/eUV02" />
        <RightImage imageUrl="https://shorturl.at/eUV02" />
      </div>
      <Footer />
    </div>
  );
};

export default Website;
