import { useEffect, useState, type FC } from "react";
import type { FileData } from "../types";

export interface FolderProps {
  name: string;
  showFiles: boolean;
  handleShowFiles: (show: boolean) => void;
}

const FolderComponent: FC<FolderProps> = ({
  name,
  showFiles,
  handleShowFiles,
}) => {
  return (
    <div className="bg-neutral-700 w-96 h-48 rounded-sm flex flex-col items-start justify-between p-4 text-white">
      <span className="w-full border-b">
        <p>{name}</p>
      </span>
      <button
        className="text-white px-2 py-1 rounded-full border-white border focus-visible:outline focus-visible:outline-white cursor-pointer"
        onClick={() => {
          handleShowFiles(!showFiles);
        }}
      >
        {showFiles ? "Less" : "More"}
      </button>
    </div>
  );
};

export default FolderComponent;
