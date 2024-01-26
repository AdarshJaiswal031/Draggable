import React from "react";
import Sidebar from "./sidebar";
import Website from "./website";
import { Button } from "./ui/button";

const Editor = () => {
  return (
    <div className="h-screen w-full flex">
      <Sidebar />
      <Website />
      {/* <Button
        variant={"destructive"}
        className="absolute top-0 right-0 mt-2 mr-2"
      >
        Save
      </Button> */}
    </div>
  );
};

export default Editor;
