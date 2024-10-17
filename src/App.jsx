import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skill";
import Work from "./components/Work";
import { ThemeProvider } from "@/components/theme-provider";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="dark:bg-slate-800 bg-white">
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
