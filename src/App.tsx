import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./contexts/UserContext";
import { Home } from "./pages/Home";
import { IssueDetail } from "./pages/IssueDetail";

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<IssueDetail />} />
        </Routes>
      </Router>
    </UserContextProvider>
  );
}

export default App;
