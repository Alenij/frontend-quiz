import correctIcon from "../assets/images/icon-correct.svg";
import incorrectIcon from "../assets/images/icon-incorrect.svg";
import { useTheme } from "../context/useTheme";

type OptionProps = {
  label: string;
  text: string;
  index: number;
  answer: string;
  option: string;
  selectedOption: null | number;
  isSubmitted: boolean;
  setSelectedOption: React.Dispatch<React.SetStateAction<null | number>>;
};

const Option = ({
  label,
  text,
  index,
  answer,
  selectedOption,
  isSubmitted,
  setSelectedOption,
}: OptionProps) => {
  const { isDark } = useTheme();
  const handleClick = () => {
    setSelectedOption(index);
  };

  let border = "";
  let bg = "bg-[#F4F6FA]";

  if (isSubmitted) {
    if (selectedOption === index && text === answer) {
      border = "border-4 border-[#2FD887]";
      bg = "bg-[#2FD887]";
    } else if (selectedOption === index && text !== answer) {
      border = "border-4 border-[#EE5454]";
      bg = "bg-[#EE5454]";
    } else {
      border = "";
      bg = "bg-[#F4F6FA]";
    }
  }

  return (
    <>
      <button
        disabled={isSubmitted}
        onClick={handleClick}
        className={`outline-none cursor-pointer group flex w-full items-center ${isDark ? "bg-[#3B4D66]" : "bg-white"} gap-3 mb-5 p-3 lg:p-4 rounded-2xl hover:border-4 focus:border-4  hover:border-[#A729F5] focus:border-[#A729F5]
          ${border}`}
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-5">
            <div
              className={`rounded-md w-10 h-10 p-1 text-center group-hover:bg-[#A729F5] group-focus:bg-[#A729F5] ${bg}`}
            >
              <p className="text-xl font-medium m-1 text-[#313E51]">{label}</p>
            </div>
            <p
              className={`text-xl ${isDark ? "text-white" : "text-[#313E51]"} font-medium`}
            >
              {text}
            </p>
          </div>
          <div>
            {isSubmitted && text === answer ? (
              <img src={correctIcon} alt="correct-Icon.svg" />
            ) : (
              selectedOption === null && undefined
            )}
            {isSubmitted && selectedOption === index && text !== answer ? (
              <img src={incorrectIcon} alt="incorrect-Icon.svg" />
            ) : undefined}
          </div>
        </div>
      </button>
    </>
  );
};

export default Option;
