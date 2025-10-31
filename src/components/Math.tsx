import type { FC, ReactNode } from "react";

interface MathProps {
  children: ReactNode;
}

export const M: FC<MathProps> = ({ children }) => {
  return <>\({children}\)</>;
};

export const MB: FC<MathProps> = ({ children }) => {
  return <>\[{children}\]</>;
};
