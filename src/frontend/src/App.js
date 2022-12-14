import { Routes, Route } from 'react-router-dom';

import './App.scss';
import MatchPage from './pages/MatchPage';
import { TeamPage } from './pages/TeamPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/teams/:teamName' element={<TeamPage />}></Route>
        <Route
          path='/teams/:teamName/matches/:year'
          element={<MatchPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
