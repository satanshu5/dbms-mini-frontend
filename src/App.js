import './App.css';
import Home from './pages/Home'
import Buy from './components/Buy/Buy'
import Sell from './components/Sell/Sell'
import NavBar from './components/NavBar/NavBar'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import AddVehicle from './components/AddVehicle/AddVehicle';
import Searchbar from './components/SearchBar/SearchBar';
import Details from './components/Details/Details';
import Thanks from './components/Thanks/Thanks';
import Current from './components/Current/Current';
import Display from './components/Display/Display';
import About from './components/About/About';
import AddEmployee from './components/AddEmployee/AddEmployee';
import SuccessfullyAdded from './components/SuccessfullyAdded/SuccessfullyAdded';
import EmployeeData from './components/EmployeeData/EmployeeData';
import DisplayHistory from './components/DisplayHistory/DisplayHistory';
import Service from './components/Services/Service';
import CurrentServices from './components/CurrentServices/CurrentServices';
import AddServices from './components/AddServices/AddServies';
import VehicleUnderService from './components/VehiclesUnderService/VehicleUnderService';
import DeleteService from './components/DeleteService/DeleteService';
function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Route path="/" exact render={() => <Home/>}/>
      <Route path="/buyvehicle" exact render={() => <Buy/>}/>
      <Route path="/sellvehicle" exact render={() => <Sell/>}/>
      <Route path="/currentvehicle" exact render={() => <Current/>}/>
      <Route path="/sellvehicle/add" exact render={(props) => <AddVehicle type={props}/>} />
      <Route path="/buyvehicle/search" exact render={(props) => <Searchbar type={props}/>} />
      <Route path="/buyvehicle/:id" exact render={() =><Details/>} />
      <Route path="/thanks" exact render={() => <Thanks/>} />
      <Route path="/currentvehicle/display" exact render={(props) => <Display type={props}/>} />
      <Route path="/about" exact render={()=> <About/>} />
      <Route path="/addemployee" exact render={() => <AddEmployee/>} />
      <Route path="/addemployee/add" exact render={() => <SuccessfullyAdded/>} />
      <Route path="/employeedetails" exact render={() => <EmployeeData/>} />
      <Route path="/history" exact render={() => <DisplayHistory/>} />
      <Route path="/services" exact render={() => <Service/>}/>
      <Route path="/currentservices" exact render={() => <CurrentServices/>} />
      <Route path="/addservice" exact render={() => <AddServices/>} />
      <Route path="/vehiclesunderservice" exact render={() => <VehicleUnderService/>} />
      <Route path="/deleteservice" exact render={() => <DeleteService/>} />
    </Router>
    </>
  );
}

export default App;
