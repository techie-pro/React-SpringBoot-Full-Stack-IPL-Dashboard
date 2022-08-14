import TeamPage from './pages/TeamPage';
import { Routes, Route } from 'react-router-dom';
import MatchPage from './pages/MatchPage';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/teams/:teamName' element={<TeamPage />}></Route>
        <Route
          path='/teams/:teamName/matches/:year'
          element={<MatchPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
