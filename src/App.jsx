// src/App.js

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Skills from "./components/Skill";
import { ThemeProvider } from "@/components/theme-provider";

const App = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="dark:bg-slate-800 bg-white text-gray-400 dark:text-white">
        <Navbar />
        <Home />
        <About />
        <Work />
        <Skills />
      </div>
    </ThemeProvider>
  );
};

export default App;