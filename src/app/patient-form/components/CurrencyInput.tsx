import { Input } from "antd";
import { NumericFormat, NumericFormatProps } from "react-number-format";

const CurrencyInput = (props: NumericFormatProps) => {
  return (
    <NumericFormat
      {...(props as any)}
      thousandSeparator="."
      decimalSeparator=","
      prefix="R$ "
      decimalScale={2}
      allowNegative={false}
      customInput={Input}
      placeholder="R$ 0,00"
    />
  );
};

export default CurrencyInput;
