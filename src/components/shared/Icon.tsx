import { ComponentProps } from "react";
import { IconsName } from "@/types/components";

interface Icon extends ComponentProps<"i"> {
  name: IconsName;
}

export default function Icon(props: Icon) {
  const { name, className = "text-medium", ...restProps } = props;
  return <i className={`ri-${name} ${className}`} {...restProps} />;
}
