import './App.css';
import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import HeaderApp from './components/HeaderApp/HeaderApp';
const HomePage = lazy(() => import('./views/HomePage/HomePage.js'));

const SearchMoviesPage = lazy(() =>
  import('./views/SearchMoviesPage/SearchMoviesPage'),
);

const MovieDetailsPage = lazy(() =>
  import('./views/MovieDetailsPage/MovieDetailsPage'),
);

function App() {
  return (
    <>
      <HeaderApp />

      <Suspense fallback={<h1>Загружаем...</h1>}>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route exact path={routes.movies} component={SearchMoviesPage} />
          <Route path={routes.movieDetails} component={MovieDetailsPage} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
