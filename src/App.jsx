import "./App.css";
import BlogPage from "./competent/BlogPage";
import Navbar from "./competent/Navbar";
import { Route, Routes } from "react-router-dom";
import BlogDetails from "./competent/BlogDetails";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" exact element={<BlogPage />} />

        <Route path="/post/:id" element={<BlogDetails />} />
      </Routes>
    </>
  );
}

export default App;
