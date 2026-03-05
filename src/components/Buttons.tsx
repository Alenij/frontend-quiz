import { useState } from "react";
import errorIcon from "../assets/images/icon-error.svg";
import { useNavigate } from "react-router-dom";

type ButtonProps = {
  topic?: string;
  icon?: string;
  option: string[];
  color?: string;
  answer: string;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedOption: React.Dispatch<React.SetStateAction<null | number>>;
  selectedOption: null | number;
  isSubmitted: boolean;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  count: number;
  currentQuestion: number;
};

const Buttons = ({
  topic,
  icon,
  color,
  answer,
  option,
  setScore,
  setCurrentQuestion,
  setIsSubmitted,
  setSelectedOption,
  selectedOption,
  isSubmitted,
  score,
  count,
  currentQuestion,
}: ButtonProps) => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const handleNext = () => {
    setCurrentQuestion((prev) => prev + 1);
    setIsSubmitted(false);
    setSelectedOption(null);
  };

  const updateScore = () => {
    if (selectedOption !== null && option[selectedOption] === answer) {
      setScore(score + 1);
    }
  };

  const handleSubmit = () => {
    if (selectedOption === null) {
      setIsSubmitted(false);
      setError(true);
    } else {
      setIsSubmitted(true);
      setError(false);
      updateScore();
    }
  };

  const handleFinish = () => {
    navigate("/result", { state: { topic, icon, color, count, score } });
  };
  return (
    <>
      {isSubmitted && currentQuestion === count - 1 ? (
        // Next Button
        <button
          onClick={handleFinish}
          className="outline-none cursor-pointer w-full bg-[#A729F5] p-3 lg:p-4 rounded-2xl text-xl text-white font-medium"
        >
          Finish
        </button>
      ) : isSubmitted ? (
        <button
          onClick={() => handleNext()}
          className="outline-none cursor-pointer w-full bg-[#A729F5] p-3 lg:p-4 rounded-2xl text-xl text-white font-medium"
        >
          Next Question
        </button>
      ) : (
        // Submit Button
        <button
          onClick={handleSubmit}
          className="outline-none cursor-pointer w-full bg-[#A729F5] p-3 lg:p-4 rounded-2xl text-xl text-white font-medium"
        >
          Submit Answer
        </button>
      )}
      {/* Error Msg */}
      {error && (
        <div className="flex gap-1 mt-2 w-full items-center justify-center text-[13px]">
          <img src={errorIcon} alt="error-icon.svg" className="w-5 h-5" />
          <p className="text-[#EE5454] mt-1">Please select an answer</p>
        </div>
      )}
    </>
  );
};

export default Buttons;
