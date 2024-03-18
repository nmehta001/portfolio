import "./App.css";

import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-hidden justify-between">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
