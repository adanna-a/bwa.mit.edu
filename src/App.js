import About from './components/About/About';
import Exec from './components/Exec/Exec';
import Gallery from './components/Gallery';
import Calendar from './components/Calendar';
import Home from './components/Home/Home';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Constitution from './components/Constitution/Constitution';

document.body.style = 'background: black;';

function App() {
  return (        
    <>   
          {/* <Navigation />     */}

          {/* <Route exact path="/">
            <Redirect push to={"/home.html"} />
          </Route>       */}
          <Switch>                
             {/* <Route path='/about' component={About}/>  
             <Route path='/exec' component={Exec}/>               
             <Route path='/gallery' component={Gallery}/> 
             <Route path='/calendar' component={Calendar}/>  
             <Route path='/constitution' component={Constitution}/> */}
             {/* <Route path='/' component={Home}/> */}
              <Route exact path="/" render={() => {window.location.href="home.html"}} />
          </Switch>
          {/* <Footer /> */}
    </>
  );    
}

export default App;
