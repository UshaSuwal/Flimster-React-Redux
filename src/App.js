import "./App.css";
import { Navbar } from "./components/Navbar";
import { MovieList } from "./components/MovieList";



function App() {
  return (
    <div className="bg-gray-600 pt-2">
      <Navbar/>
      <MovieList />
    </div>
  );
}

export default App;
