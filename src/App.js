import { Switch, Route } from 'react-router-dom';

//COMPONENTS
import Container from './components/Container';
import AppBar from './components/AppBar';

//PAGES
import HomePage from './pages/HomePage';
import Movies from './pages/Movies';
import NotFoundPage from './pages/NotFoundPage';

import './App.css';
import MovieDetailsPage from './pages/MovieDetailsPage';

function App() {
  return (
    <Container>
      <AppBar />

      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/movies" exact>
          <Movies />
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>

        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
