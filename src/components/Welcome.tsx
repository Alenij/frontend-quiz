import { useTheme } from "../context/useTheme";

const Welcome = () => {
  const { isDark } = useTheme();
  return (
    <div className="w-full lg:w-1/2">
      <p
        className={`${isDark ? "text-[#FFFFFF]" : "text-[#313E51]"} text-[clamp(2.2rem,5vw,3.75rem)] font-thin leading-8`}
      >
        Welcome to the
      </p>
      <p
        className={` ${isDark ? "text-[#FFFFFF]" : "text-[#313E51]"} text-[clamp(2.2rem,5vw,3.75rem)] font-medium`}
      >
        Frontend Quiz!
      </p>
      <p
        className={`${isDark ? "text-[#F4F6FA]" : "text-[#626C7F]"} text-[clamp(0.5rem,2vw,1rem)] italic`}
      >
        Pick a subject to get started.
      </p>
    </div>
  );
};

export default Welcome;
