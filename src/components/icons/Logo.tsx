import { FC } from "react";

interface Logo {
  textColor?: string;
  bgColor?: string;
  width?: string;
  height?: string;
  fontSize?: string;
}
const Logo: FC<Logo> = ({ textColor, bgColor, width, height, fontSize }) => {
  return (
    <svg
      width={width ? width : "100"}
      height={height ? height : "100"}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={width ? width : "100"} height="40" fill={bgColor ? bgColor : "white"} />
      <text
        x="50"
        y="50"
        text-anchor="middle"
        font-size={fontSize ? fontSize : "20"}
        font-weight="bold"
        fill={textColor ? textColor : ""}
      >
        nG-News
      </text>
    </svg>
  );
};

export default Logo;
