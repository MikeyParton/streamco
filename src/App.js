import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ROUTES } from './constants';
import FeedProvider from './components/FeedContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

const Home = React.lazy(() => import('./components/Home'));
const Movies = React.lazy(() => import('./components/Movies'));
const Series = React.lazy(() => import('./components/Series'));
const NotFound = React.lazy(() => import('./components/404'));

function App() {
  return (
    <FeedProvider>
      <div className="App"> 
        <Navbar />
        <main className="App__main">
          <Suspense fallback={null}>
            <Switch>
              <Route path={ROUTES.HOME} exact>
                <Home />
              </Route>
              <Route path={ROUTES.SERIES} exact>
                <Series />
              </Route>
              <Route path={ROUTES.MOVIES} exact>
                <Movies />
              </Route>
              <Route>
                <NotFound />
              </Route>
            </Switch>
          </Suspense>
        </main>
        <Footer />
      </div>
    </FeedProvider>
  );
}

export default App;
