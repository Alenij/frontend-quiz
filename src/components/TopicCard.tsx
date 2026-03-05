import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/useTheme";

const TopicCard = ({
  topic,
  icon,
  color,
}: {
  topic: string;
  icon: string;
  color: string;
}) => {
  const { isDark } = useTheme();
  const navigate = useNavigate();

  return (
    <div>
      <div
        onClick={() =>
          navigate("/quiz", { state: { topic: topic, icon, color } })
        }
        className={`flex items-center ${isDark ? "bg-[#3B4D66]" : "bg-white"} gap-3 mb-5 p-3 lg:p-4 rounded-2xl hover:-translate-1 transition-all duration-400 ease-in-out`}
      >
        <div style={{ backgroundColor: color }} className="rounded-md">
          <img src={icon} alt={topic} className="w-10 h-10 p-1" />
        </div>
        <p
          className={`text-xl ${isDark ? "text-white" : "text-[#3B4D66]"} font-medium`}
        >
          {topic}
        </p>
      </div>
    </div>
  );
};

export default TopicCard;
