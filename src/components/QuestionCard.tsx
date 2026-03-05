import { useTheme } from "../context/useTheme";
import ProgressBar from "./ProgressBar";
const QuestionCard = ({
  question,
  count,
  currentQuestion,
}: {
  question: string;
  count: number;
  currentQuestion: number;
}) => {
  const { isDark } = useTheme();
  return (
    <>
      <div>
        <p
          className={`${isDark ? "text-[#F4F6FA]" : "text-[#626C7F]"} text-[clamp(0.5rem,2vw,1rem)] italic`}
        >
          Question {currentQuestion + 1} of {count}
        </p>
        <p
          className={` ${isDark ? "text-[#FFFFFF]" : "text-[#313E51]"} text-[clamp(0.7rem,5vw,2.5rem)] font-medium mt-2`}
        >
          {question}
        </p>
      </div>
      <ProgressBar value={currentQuestion + 1} max={count} />
    </>
  );
};

export default QuestionCard;
