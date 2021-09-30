import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import NotFound from './pages/NotFound'
import Category from './pages/Category'

import Footer from './components/Footer';
import Header from './components/Header';
// import Loader from './components/Loader';

import { Route, Switch } from 'react-router-dom';
import Recipe from './pages/Recipe';


function App() {
  return (
    <div>
      <Header />
      <main className="container content">
      {/* <Loader /> */}
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contacs" component={Contact} />
        <Route path="/category/:name" component={Category}/>
        <Route path="/meal/:id" component={Recipe} />
        <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
