import './App.css';
import { SideBar, ContractBuilder, Home } from "./components"

function App() {
  return (
    <div className="app">
      <SideBar />
      <ContractBuilder />
      <Home />
    </div>
  );
}

export default App;
