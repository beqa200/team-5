import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import PersonalInfo from "./pages/PersonalInfo";
import Experience from "./pages/Experience";
import Education from "./pages/Education";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/PersonalInfo" element={<PersonalInfo />} />
      <Route path="/Experience" element={<Experience />} />
      <Route path="/Education" element={<Education />} />
    </Routes>
  );
}

export default App;
