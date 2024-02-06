import { Input } from "antd";
import { ComponentPropsWithoutRef, forwardRef } from "react";
import { PatternFormat } from "react-number-format";

const PhoneInput = (props: ComponentPropsWithoutRef<"input">, ref: any) => {
  return (
    <PatternFormat
      {...props as any}
      format="(##) #####-####"
      customInput={Input}
      placeholder="(11) 98765-4321"
      autoComplete="tel-national"
    />
  );
};

export default forwardRef(PhoneInput);
