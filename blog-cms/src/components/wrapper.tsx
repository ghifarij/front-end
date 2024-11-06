import { ReactNode } from "react";

export default function wrapper({ children }: { children: ReactNode }) {
  return (
    <div className="h-16 flex justify-between items-center mx-auto max-w-7xl p-4">
      {children}
    </div>
  );
}
