import type { IconProps } from ".";

const DevTo = ({ size }: IconProps) => {
  const svgSrc =
    "https://camo.githubusercontent.com/5db862b15e660451b524382c77f60cbd49f176f9/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f6465765f746f2e737667";
  return <img src={svgSrc} width={size} height={size} alt="Dev.to" />;
};

export default DevTo;
