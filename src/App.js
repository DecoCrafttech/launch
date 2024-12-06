
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navi from "./navigation";
import Formsubmitpage from "./components/ThankYouPage";
import YourComponent from "./components/modal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navi />} />
        <Route path="/thankyou" element={<Formsubmitpage />} />
        <Route path="/modal" element={<YourComponent />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
