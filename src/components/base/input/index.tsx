import { clsx } from "clsx";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isLabelVertical?: boolean;
  inputClass?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = React.forwardRef(
  (
    { label, inputClass, isLabelVertical, error, ...props },
    ref: React.LegacyRef<HTMLInputElement>
  ) => {
    return (
      <div className={clsx(["inline-block w-full"])}>
        <label className={clsx([""])}>{label}</label>
        <input
          ref={ref}
          className={clsx([
            inputClass,
            isLabelVertical && "block",
            " w-full rounded border border-gray-300 p-1 outline-none",
            error && "border-red-500",
          ])}
          {...props}
        />
        <p className={clsx(["min-h-[16px] text-red-500 mt-0 mb-0"])}>{error}</p>
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
