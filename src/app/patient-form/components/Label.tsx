import { ReactNode } from "react";

const InputLabel = ({ children }: { children: ReactNode }) => {
  return <label className="font-medium text-sm">{children}</label>;
};

export default InputLabel;
