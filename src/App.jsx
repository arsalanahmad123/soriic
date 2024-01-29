import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "./Context/SidebarContext";
import Contact from "./Screens/Contact";

function App() {
  return (
    <>
      <SidebarProvider>
        <BrowserRouter>
          <Sidebar />
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Contact />} path="/contact" />
          </Routes>
        </BrowserRouter>
      </SidebarProvider>
    </>
  );
}

export default App;
