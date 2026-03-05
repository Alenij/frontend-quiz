import { useTheme } from "../context/useTheme";

const Logo = ({
  icon,
  topic,
  color,
}: {
  topic?: string;
  icon?: string;
  color?: string;
}) => {
  const { isDark } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <div style={{ backgroundColor: color }} className="rounded-md">
        <img src={icon} alt={topic} className="w-10 h-10 p-1" />
      </div>
      <p
        className={`text-[clamp(1.2rem,3vw,1.25rem)] ${isDark ? "text-white" : "text-[#313E51]"} font-medium`}
      >
        {topic}
      </p>
    </div>
  );
};

export default Logo;
