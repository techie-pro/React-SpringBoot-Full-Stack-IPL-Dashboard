import TeamPage from './pages/TeamPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/teams/:teamName' element={<TeamPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
