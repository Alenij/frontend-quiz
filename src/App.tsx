import QuizPage from "./pages/QuizPage";
import ResultPage from "./pages/ResultPage";
import StartPage from "./pages/StartPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  );
}

export default App;
