import { createContext, ReactNode, useContext, useState } from "react";

interface ICounterContext {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const counterContext = createContext<ICounterContext | undefined>(undefined);

interface ICounterProvider {
  children: ReactNode;
}
export const CounterProvider: React.FC<ICounterProvider> = ({ children }) => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <counterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </counterContext.Provider>
  );
};

export const useCounter = (): ICounterContext => {
  const context = useContext(counterContext);
  if (!context) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
};
