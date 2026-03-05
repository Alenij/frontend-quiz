import { useLocation } from "react-router-dom";
import ScoreCard from "../components/ScoreCard";
import Header from "../components/Header";
import { useTheme } from "../context/useTheme";

const ResultPage = () => {
  const { isDark } = useTheme();
  const { state } = useLocation();

  return (
    <div
      className={`${isDark ? "bg-pattern-dark" : "bg-pattern"} ${isDark ? "bg-[#313E51]" : "bg-[#f4f6fa]"} min-h-screen`}
    >
      <Header topic={state.topic} icon={state.icon} color={state.color} />
      <div className="flex flex-col items-center lg:flex-row lg:items-start lg:justify-center gap-9 lg:gap-12 mx-auto max-w-6xl p-[clamp(1.75rem,5vw,2.5rem)]">
        <div className="w-full lg:w-1/2">
          <p
            className={`${isDark ? "text-[#FFFFFF]" : "text-[#313E51]"} text-[clamp(2.2rem,5vw,3.75rem)] font-thin leading-8`}
          >
            Quiz completed
          </p>
          <p
            className={` ${isDark ? "text-[#FFFFFF]" : "text-[#313E51]"} text-[clamp(2.2rem,5vw,3.75rem)] font-medium`}
          >
            You scored...
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <ScoreCard
            topic={state.topic}
            icon={state.icon}
            color={state.color}
            score={state.score}
            count={state.count}
          />
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
