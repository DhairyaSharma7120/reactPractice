// import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Validation from './components/validation/validation'
import Rxjs from './components/rxjs/rxjs.component'
import AxiosPractice from './components/axios/axios'
import Home from './components/home/Home'
import DropdownCheckbox from './components/drop-check-box/dropdownCheckbox'
import urlShortner from './components/urlShortner/urlShortner'
import Example from './components/internationalization/example'
import {FormikDemo} from './components/formikDemo/formikDemo.jsx'
import FileUpload from './components/FileUpload/fileUpload'
import DragFile from './components/dragFile/dragFile.jsx'
function App() {

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
      <Route path="/formik" component={FormikDemo} />
      <Route path="/fileupload" component={FileUpload} />
      <Route path="/dragdropfileupload" component={DragFile} />
   
      </Switch>
      
   
    
      
    </div>
  );
}

export default App;
