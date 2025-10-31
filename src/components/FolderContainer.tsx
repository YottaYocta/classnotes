import { useState, type FC } from "react";
import type { FileData } from "../types";
import FolderComponent from "./FolderComponent";

export interface FolderContainerProps {
  folders: [string, FileData[]][];
}
const FolderContainer: FC<FolderContainerProps> = ({ folders }) => {
  const [openFolder, setOpenFolder] = useState<
    [string | null, FileData[]] | null
  >(null);

  return (
    <div className={`grid w-min h-full flex flex-col gap-4 transition-all`}>
      {folders.map(([folder, notes], idx) => (
        <div
          key={idx}
          className={`w-min flex sm:flex-row flex-col transition-all ${
            openFolder && openFolder[0] !== null ? "gap-4" : "gap-0"
          }`}
        >
          <span
            className={`
            ${
              openFolder && openFolder[0] !== null
                ? openFolder[0] === folder
                  ? "opacity-100"
                  : "opacity-40 sm:-translate-x-2"
                : ""
            } transition`}
          >
            <FolderComponent
              name={folder}
              showFiles={openFolder !== null && openFolder[0] === folder}
              handleShowFiles={(show) => {
                if (show) {
                  setOpenFolder([folder, notes]);
                } else {
                  setOpenFolder([null, notes]);
                }
              }}
            ></FolderComponent>
          </span>
          <ul
            className={`flex flex-col ${
              openFolder !== null && openFolder[0] !== null
                ? openFolder[0] === folder
                  ? "w-96 opacity-100"
                  : "w-96 opacity-0 h-0"
                : "w-0 opacity-0 h-0"
            } text-nowrap transition-all duration-500`}
          >
            {openFolder !== null && openFolder[0] === folder ? (
              <>
                {openFolder[1].map((file, idx) => (
                  <a href={file.url} className="cursor-pointer">
                    <li
                      key={idx}
                      className="w-96 hover:bg-neutral-50 transition-colors px-2 py-1 flex border-b border-dashed"
                    >
                      {file.title ?? "Untitled File"}
                    </li>
                  </a>
                ))}
              </>
            ) : (
              <></>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FolderContainer;
