import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import FourOhFour from './pages/fourohfour'
import Nav from './components/nav/index';
import Footer from './components/footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route path="*">
              <FourOhFour />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
