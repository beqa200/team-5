import { Route, Routes, useLocation } from "react-router-dom";
import PersonalInfo from "./pages/PersonalInfo";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Home from "./pages/Home";
import { createContext, useState, Dispatch, SetStateAction } from "react";
import CVcomponent from "./components/CVcomponent";

export type CvData = {
  position?: string;
  employer?: string;
  startingDate?: string;
  finishingDate?: string;
  description?: string;
}[];

interface CvContextType {
  experienceCv: CvData;
  setExperienceCv: Dispatch<SetStateAction<CvData>>;
}

export const CvContext = createContext<CvContextType>({
  experienceCv: [],
  setExperienceCv: () => {},
});

function App() {
  const location = useLocation();
  const [experienceCv, setExperienceCv] = useState<CvData>([
    {
      position: "",
      employer: "",
      startingDate: "",
      finishingDate: "",
      description: "",
    },
  ]);

  return (
    <CvContext.Provider value={{ experienceCv, setExperienceCv }}>
      <div
        style={{
          display: location.pathname == "/" ? "block" : "flex",
          minHeight: "100vh",
        }}
      >
        <div style={{ minHeight: "100vh" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/PersonalInfo" element={<PersonalInfo />} />
            <Route path="/Experience" element={<Experience />} />
            <Route path="/Education" element={<Education />} />
          </Routes>
        </div>
        <div> {location.pathname == "/" ? null : <CVcomponent />}</div>
      </div>
    </CvContext.Provider>
  );
}

export default App;
