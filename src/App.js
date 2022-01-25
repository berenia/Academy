import ResponsiveAppBar from "./components/navbar";
import LowerNavbar from "./components/lowerNavbar";
import Home from "./components/home/home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ResponsiveAppBar />
        <LowerNavbar />
      </header>
      <Home />
    </div>
  );
}

export default App;
