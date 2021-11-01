import { Switch, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Loader from 'react-loader-spinner';

//COMPONENTS
import Container from './components/Container';
import AppBar from './components/AppBar';

//PAGES
// import HomePage from './pages/HomePage';
// import Movies from './pages/Movies';
// import MovieDetailsPage from './pages/MovieDetailsPage';
import NotFoundPage from './pages/NotFoundPage';

import { useTransition, animated } from 'react-spring';

import './App.css';

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "home-page" */)
);
const Movies = lazy(() =>
  import('./pages/Movies' /* webpackChunkName: "movies-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    './pages/MovieDetailsPage' /* webpackChunkName: "movies-details-page" */
  )
);

function App() {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: { opacity: 0, transform: 'translateX(100%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(-100%)' },
  });

  return (
    <>
      <AppBar />
      <Container>
        <Suspense
          fallback={
            <Loader
              type="ThreeDots"
              color="#ff6b08"
              height={100}
              width={100}
              timeout={3000}
              className="Loader"
            />
          }
        >
          <main
            style={{
              position: 'relative',
            }}
          >
            {transitions((props, item) => (
              <animated.div style={props}>
                <div style={{ position: 'absolute', width: '100%' }}>
                  <Switch location={item}>
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
                </div>
              </animated.div>
            ))}
          </main>
        </Suspense>
      </Container>
      ;
    </>
  );
}

export default App;
