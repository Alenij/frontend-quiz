import Header from "../components/Header";
import TopicList from "../components/TopicList";
import Welcome from "../components/Welcome";
import { useTheme } from "../context/useTheme";

const StartPage = () => {
  const { isDark } = useTheme();
  return (
    <>
      <div
        className={`${isDark ? "bg-pattern-dark" : "bg-pattern"} ${isDark ? "bg-[#313E51]" : "bg-[#f4f6fa]"} min-h-screen`}
      >
        <Header />
        <div className="flex flex-col items-center lg:flex-row lg:items-start lg:justify-center gap-9 lg:gap-12 mx-auto max-w-6xl p-[clamp(1.75rem,5vw,2.5rem)]">
          <Welcome />
          <TopicList />
        </div>
      </div>
    </>
  );
};

export default StartPage;
