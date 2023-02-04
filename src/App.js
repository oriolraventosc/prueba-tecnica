import "./App.css";
import Description from "./Description";
import Counter from "./Counter";
import { CounterWithClass } from "./CounterWithClass";

function App() {
  return (
    <div className="App">
      <Description initial={"Text"} />
      <Counter />
      <CounterWithClass />
    </div>
  );
}

export default App;
