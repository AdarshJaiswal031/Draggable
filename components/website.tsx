"use client";
import React, { useRef } from "react";
import Navbar from "./sections/navbar";
import LeftImage from "./sections/leftImage";
import RightImage from "./sections/rightImage";
import Footer from "./sections/Footer";
import { useModal } from "./hooks/use-modal-store";
import { BoilerPlate } from "@/lib/BoilerPlate";

const Website = () => {
  const { isOpen, onOpen, onClose, type, data, startDownload, setDownload } =
    useModal();
  const elementRef = useRef<HTMLElement | HTMLImageElement | null>(null);

  if (startDownload) {
    const element = document.getElementById("websiteCode");
    if (element) {
      const htmlCode = BoilerPlate[0] + element.outerHTML + BoilerPlate[1];
      console.log(htmlCode);
      navigator.clipboard
        .writeText(htmlCode)
        .then(() => {
          console.log("HTML code copied to clipboard");
          setDownload(false);
        })
        .catch((error) => {
          console.error("Failed to copy HTML code to clipboard", error);
        });
      setTimeout(() => {
        const newWindow = window.open();
        newWindow?.document.write(htmlCode);
        newWindow?.document.close();
      }, 100);
      setDownload(false);
    } else {
      console.error("Element not found");
    }
  }

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
      id="websiteCode"
    >
      <div className="h-screen">
        <Navbar />
        <LeftImage imageUrl="https://shorturl.at/pyTZ3" />
        <RightImage imageUrl="https://shorturl.at/pyTZ3" />
      </div>
      <Footer />
    </div>
  );
};

export default Website;
