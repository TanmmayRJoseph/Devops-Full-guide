import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import MainCommands from "./pages/MainCommands"
function App() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main-commands" element={<MainCommands />} />
      </Routes>
    </div>
  )
}

export default App
