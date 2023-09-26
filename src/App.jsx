import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Allstate from "./pages/Allstate";
import Calendar from "./pages/Calendar";
import Council from "./pages/Council";
import Syllabus from "./pages/Syllabus";
import Resources from "./pages/Resources";
import Parents from "./pages/Parents";
import Careers from "./pages/Careers";
import PageNotFound from "./pages/PageNotFound";


function App() {
  return (
    <>
      <main className="mx-auto max-w-7xl">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allstate" element={<Allstate />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/council" element={<Council />} />
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/parents" element={<Parents />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;
