import WeatherDashboard from "./components/WeatherDashboard";
import Navbar from "./components/Navbar";
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <WeatherDashboard />
    </div>
  )
}

export default App;