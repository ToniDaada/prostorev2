import { cn } from "@/lib/utils";
const ProductPrice = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => {
  //  Ensure two decimal points
  const stringValue = value.toFixed(2);
  // GET THE INT AND THE FLOAT
  const [intValue, floatValue] = stringValue.split(".");
  return (
    <p className={cn("text-2xl", className)}>
      <span className="text-xs align-super">$</span>
      {intValue}
      <span className="text-xs align-super">.{floatValue}</span>
    </p>
  );
};

export default ProductPrice;
