import './App.scss';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import {Switch, Route} from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import BlogsPage from './Pages/BlogsPage';
import SkillsPage from './Pages/SkillsPage';
import ContactPage from './Pages/ContactPage';
import { useState } from 'react';

function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () =>{
    setNavToggle(!navToggle)
  }

  return (
    <div className="App">
      <div className={`sidebar ${navToggle ? 'nav-toggle': ''}`}>
        <NavBar />
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
      <div className="main-content">
          <div className="content">
            <Switch>
              <Route path="/portfolio" exact>
                <HomePage />
              </Route>
              <Route path="/portfolio/about" exact>
                <AboutPage />
              </Route>
              <Route path="/portfolio/Skills" exact>
                <SkillsPage />
              </Route>
              <Route path="/portfolio/blogs" exact>
                <BlogsPage />
              </Route>
              <Route path="/portfolio/contact" exact>
                <ContactPage />
              </Route>
              <Route path="/portfolio/*" exact>
                <HomePage />
              </Route>
            </Switch>
          </div>
      </div>
    </div>
  );
}

export default App;
