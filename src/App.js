import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Result from "./routes/Result";
import AlternativeResult from "./routes/AlternativeResult";

function App() {
  return (
    <Routes>
      <Route Component={Home} path='/' />
      <Route Component={Result} path='/result' />
      <Route Component={AlternativeResult} path='/alternative-result' />
    </Routes>
  );
}

export default App;
