import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ModeToggle } from "@/components/mode-toggle";

import HomePage from "@/components/main-pages/HomePage";
import TrendingPost from "@/components/main-pages/TrendingPost";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/trending-product/:id" element={<TrendingPost />} />
      </Routes>
      <div className="fixed right-5 bottom-5">
        <ModeToggle />
      </div>
    </Router>
  );
}

export default App;
