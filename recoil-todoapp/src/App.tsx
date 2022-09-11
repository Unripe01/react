import reactLogo from "./assets/react.svg";
import "./App.css";
import InputTask from "./compornents/InputTask";
import AddTask from "./compornents/AddTask";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <div className="task">
        <InputTask />
        <AddTask />
      </div>
    </RecoilRoot>
  );
}

export default App;
