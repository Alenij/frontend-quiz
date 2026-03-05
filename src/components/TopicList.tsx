import TopicCard from "./TopicCard";
import data from "../../data.json";

const TopicList = () => {
  const quizzes = data.quizzes;

  const colors = ["#FFF5ED", "#E0FDEF", "#EBF0FF", "#F6E7FF"];

  return (
    <div className="w-full lg:w-1/2">
      {quizzes.map((quiz, index) => (
        <TopicCard
          key={quiz.title}
          topic={quiz.title}
          icon={quiz.icon}
          color={colors[index]}
        />
      ))}
    </div>
  );
};

export default TopicList;
