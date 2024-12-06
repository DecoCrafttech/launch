
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navi from "./navigation";
import Formsubmitpage from "./components/ThankYouPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navi />} />
        <Route path="/thankyou" element={<Formsubmitpage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
