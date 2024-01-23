import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "./Context/SidebarContext";
function App() {
  return (
    <>
      <SidebarProvider>
        <Navbar />
        <Sidebar />
        <BrowserRouter>
          <Routes>
            <Route element={<Hero />} path="/" />
          </Routes>
        </BrowserRouter>
      </SidebarProvider>
    </>
  );
}

export default App;
