import Logo from "./Logo";
import sunLight from "../assets/images/icon-sun-dark.svg";
import moonLight from "../assets/images/icon-moon-dark.svg";
import sunDark from "../assets/images/icon-sun-light.svg";
import moonDark from "../assets/images/icon-moon-light.svg";
import type { SwitchProps } from "antd";
import { Switch } from "antd";
import { useTheme } from "../context/useTheme";

const Header = ({
  topic,
  icon,
  color,
}: {
  topic?: string;
  icon?: string;
  color?: string;
}) => {
  const { isDark, toggleTheme } = useTheme();

  const stylesFn: SwitchProps["styles"] = {
    root: {
      backgroundColor: "#A729F5",
    },
  };

  return (
    <div className="flex items-center justify-between p-9 lg:p-13">
      <div>{topic && <Logo topic={topic} icon={icon} color={color} />}</div>

      <div className="flex gap-1 cursor-pointer">
        <img src={isDark ? moonDark : moonLight} alt="icon-moon-light.svg" />
        <Switch onChange={toggleTheme} size="default" styles={stylesFn} />
        <img src={isDark ? sunDark : sunLight} alt="icon-sun-Light.svg" />
      </div>
    </div>
  );
};

export default Header;
