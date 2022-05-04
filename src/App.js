import "./App.css";
import BackgroundCard from "./components/UI/BackgroundCard";
import Weather from "./components/weather/Weather";

function App() {
  return (
    <BackgroundCard>
      <Weather />
    </BackgroundCard>
  );
}

export default App;
