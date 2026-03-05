import { useTheme } from "../context/useTheme";

const ProgressBar = ({ value, max }: { value: number; max: number }) => {
  const { isDark } = useTheme();
  return (
    <div className="my-8">
      <div
        className={`${isDark ? "bg-[#3B4D66]" : "bg-white"} p-0.5 rounded-full`}
      >
        <div
          className="bg-[#A729F5] rounded-full h-1.5 transition-all duration-500"
          style={{ width: `${(value / max) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
