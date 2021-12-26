import './App.css';
import Navbar from './MyComponents/Navbar';
import Home from './MyComponents/Home';
import AppointmentBook from './MyComponents/AppointmentBook';
// import AboutUs from './MyComponents/AboutUs';
import Vaccine from './MyComponents/Vaccine';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar/>
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <Home />
              </>
            )
          }}>
          </Route>
          <Route exact path="/appointmentbook" render={() => {
            return (
              <>
                <AppointmentBook />
              </>
            )
          }}>
          </Route>
          <Route exact path="/vaccine" render={() => {
            return (
              <>
                <Vaccine />
              </>
            )
          }}>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
