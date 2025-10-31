import { useState, type FC } from "react";

export const TestComponent: FC = () => {
  const [counter, setCounter] = useState(0);
  return <button onClick={() => setCounter(counter + 1)}>{counter}</button>;
};
