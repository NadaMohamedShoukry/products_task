import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";

import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
