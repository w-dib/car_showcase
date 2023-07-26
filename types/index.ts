import { MouseEventHandler } from "react";
import { StringLiteral } from "typescript";

export interface CustomButtonProps {
  title: string;
  containerStyles?: String;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}

export interface CustomFilterProps {
  title: string;
}
