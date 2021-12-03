import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './component/Home/Home';
import Service from './component/Service/Service';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import NotFound from './component/NotFound/NotFound';
function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route exact path="/">
            <Home></Home>
         </Route>
         <Route path="/home">
            <Home></Home>
         </Route>
         <Route path="/service">
           <Service></Service>
         </Route>
         <Route path="/about">
           <About></About>
         </Route>
         <Route path="/contact">
           <Contact></Contact>
         </Route>
         <Route exact path="*">
           <NotFound></NotFound>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
