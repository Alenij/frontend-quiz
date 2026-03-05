import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import confetti from "../assets/images/confetti.svg";
import { useTheme } from "../context/useTheme";

const ScoreCard = ({
  topic,
  icon,
  color,
  count,
  score,
}: {
  topic?: string;
  icon?: string;
  color?: string;
  score: number;
  count: number;
}) => {
  const { isDark } = useTheme();
  const navigate = useNavigate();

  const handlePlay = () => {
    navigate("/");
  };

  return (
    <>
      <div
        className={`w-full flex flex-col items-center justify-center ${isDark ? "bg-[#3B4D66]" : "bg-white"} gap-3 mb-5 p-3 lg:p-4 rounded-2xl `}
      >
        <div className="p-5 text-center flex flex-col items-center">
          <Logo topic={topic} icon={icon} color={color} />
          {score === count ? (
            <div>
              <img
                src={confetti}
                alt="confetti-icon.svg"
                className="w-32 h-32 my-6"
              />
              <p
                className={`${isDark ? "text-[#F4F6FA]" : "text-[#626C7F]"} text-xl`}
              >
                Perfect score!!
              </p>
            </div>
          ) : (
            <div>
              <p
                className={`text-9xl font-bold ${isDark ? "text-white" : "text-[#313E51]"}  my-6`}
              >
                {score}
              </p>
              <p
                className={`${isDark ? "text-[#F4F6FA]" : "text-[#626C7F]"} text-md`}
              >
                out of {count}
              </p>
            </div>
          )}
        </div>
      </div>
      <button
        onClick={handlePlay}
        className="outline-none cursor-pointer w-full bg-[#A729F5] p-3 lg:p-4 rounded-2xl text-xl text-white font-medium"
      >
        Play Again
      </button>
    </>
  );
};

export default ScoreCard;
