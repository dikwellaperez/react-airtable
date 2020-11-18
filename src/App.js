import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import ViewPage from './pages/ViewPage';
import AdminPage from './pages/AdminPage';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/:id" component={ViewPage} />
      <Route exact path="/:id/:adminId" component={AdminPage} />
    </Switch>
  );
}

export default App;
