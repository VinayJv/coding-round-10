import './App.css';
import { useDataContext } from './context/DataContext';
import { Routes,Route } from "react-router-dom";
import { Homepage } from './pages/Homepage';

function App() {
  const { state, dispatch } = useDataContext();
  console.log(state);
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
