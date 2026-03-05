import Option from "./Option";

type OptionsListProps = {
  option: string[];
  answer: string;
  selectedOption: null | number;
  isSubmitted: boolean;
  setSelectedOption: React.Dispatch<React.SetStateAction<null | number>>;
};

const OptionsList = ({
  option,
  selectedOption,
  answer,
  isSubmitted,
  setSelectedOption,
}: OptionsListProps) => {
  const label = ["A", "B", "C", "D"];

  return (
    <>
      {option.map((option, index) => (
        <Option
          key={option}
          index={index}
          label={label[index]}
          answer={answer}
          text={option}
          option={option}
          selectedOption={selectedOption}
          isSubmitted={isSubmitted}
          setSelectedOption={setSelectedOption}
        />
      ))}
    </>
  );
};

export default OptionsList;
