// import logo from './logo.svg';
import './App.css';
import { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import Validation from './components/validation/validation'
import Rxjs from './components/rxjs/rxjs.component'
import AxiosPractice from './components/axios/axios'
import Home from './components/home/home'
import DropdownCheckbox from './components/drop-check-box/dropdownCheckbox'
import urlShortner from './components/urlShortner/urlShortner'
import Login from './components/urlShortner/login/login'
import Example from './components/internationalization/example'
import {particle} from './particle.js'


function App() {
  console.log(particle)
  return (
    <div className="App">
    
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/axios" component={AxiosPractice} />
      <Route exact path="/validation" component={Validation} />
      <Route exact path="/rxjs" component={Rxjs} />
      <Route exact path="/checkdropbox" component={DropdownCheckbox} />
      <Route path="/short" component={urlShortner} />
      <Route path="/internationalization" component={Example} />
      
      </Switch>
      
   
    
      
    </div>
  );
}

export default App;
