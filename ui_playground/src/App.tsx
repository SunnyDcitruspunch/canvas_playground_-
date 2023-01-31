import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Hexagon from './Components/Scoreboard/Hexagon';
import HexagonCoordinateCalculator from './Components/Scoreboard/HexagonCoordinateCalculator/HexagonCoordinateCalculator';
import ScorecardPresenter from './Components/Scoreboard/Presenter/ScorecardPresenter';
import ScorecardDrawer from './Components/Scoreboard/ScorecardDrawer/ScorecardDrawer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hexagon presenter={new ScorecardPresenter(new ScorecardDrawer(new HexagonCoordinateCalculator()), document)} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
