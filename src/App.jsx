import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";

import CustomButton from "./components/CustomButton.jsx";
import AddStudent from "./pages/AddStudent.jsx";
import ViewStudent from "./pages/ViewStudent.jsx";
import ViewAllStudent from "./pages/ViewAllStudent.jsx";


export default function App() {
  return (
    <div>
      {/* Separate navigation */}
      <NavBar />

      {/* Page content area */}
      <Routes>
        <Route path="/" element={<AddStudent/>} />
        <Route path="/view" element={<ViewStudent />} />
        <Route path="/viewall" element={<ViewAllStudent />} />

        {/* Optional 404 */}
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </div>
  );
}
