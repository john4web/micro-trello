import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { Button } from "./Button";

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  clearable?: boolean;
  onClear?: () => void;
};

export const Input = ({ clearable, onClear, ...props }: InputProps) => {
  return (
    <div>
      <input {...props} />
    </div>
  );
};
