
import './App.css';
import { Link } from "react-router-dom"

function App() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default App;
