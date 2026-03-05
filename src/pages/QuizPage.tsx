import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import QuestionCard from "../components/QuestionCard";
import OptionsList from "../components/OptionsList";
import data from "../../data.json";
import { useState } from "react";
import Buttons from "../components/Buttons";
import { useTheme } from "../context/useTheme";

const QuizPage = () => {
  const { isDark } = useTheme();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<null | number>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const { state } = useLocation();
  const quiz = data.quizzes.find((q) => q.title === state.topic);
  const count = quiz?.questions?.length ?? 0;
  const question = quiz?.questions[currentQuestion];
  if (!quiz || !question) return null;
  const answer = question?.answer;

  return (
    <div
      className={`${isDark ? "bg-pattern-dark" : "bg-pattern"} ${isDark ? "bg-[#313E51]" : "bg-[#f4f6fa]"} min-h-screen`}
    >
      <Header topic={state.topic} icon={state.icon} color={state.color} />
      <div className="flex flex-col items-center lg:flex-row lg:items-start lg:justify-center gap-9 lg:gap-12 mx-auto max-w-6xl p-[clamp(1.75rem,5vw,2.5rem)]">
        <div className="w-full lg:w-1/2">
          <QuestionCard
            question={question?.question}
            count={count}
            currentQuestion={currentQuestion}
          />
        </div>
        <div className="w-full lg:w-1/2">
          <OptionsList
            option={question.options}
            selectedOption={selectedOption}
            isSubmitted={isSubmitted}
            setSelectedOption={setSelectedOption}
            answer={answer}
          />

          <Buttons
            option={question.options}
            score={score}
            setScore={setScore}
            answer={answer}
            topic={state.topic}
            icon={state.icon}
            color={state.color}
            selectedOption={selectedOption}
            count={count}
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            isSubmitted={isSubmitted}
            setSelectedOption={setSelectedOption}
            setIsSubmitted={setIsSubmitted}
          />
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
