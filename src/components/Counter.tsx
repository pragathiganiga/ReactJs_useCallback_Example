import React, { useState, useCallback } from "react";
import Button from "./Button";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  // Memoizing the function using useCallback
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div className="w-96 h-[300px] p-6 border rounded-lg shadow-md text-center flex flex-col justify-center items-center bg-white text-black">
      <h1 className="text-2xl font-semibold mb-2">Counter App</h1>
      <h2 className="text-xl font-bold mb-4">Counter: {count}</h2>
      <Button onClick={increment}>Increment</Button>
    </div>
  );
};

export default Counter;
