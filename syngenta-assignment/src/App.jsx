import "./App.css";
import { BallonColor } from "./Components/BallonColor";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BallonColor />
    </div>
  );
}

export default App;
