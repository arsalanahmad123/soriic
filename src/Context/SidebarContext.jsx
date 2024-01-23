import { createContext, useState, useContext } from "react";

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <SidebarContext.Provider value={{ isSideBarOpen, handleSidebarToggle }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarContext = () => {
  return useContext(SidebarContext);
};
