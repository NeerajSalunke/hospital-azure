import './App.css';
import Navbar from './MyComponents/Navbar';
import Home from './MyComponents/Home';
import AppointmentBook from './MyComponents/AppointmentBook';
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
        </Switch>
      </Router>
    </>
  );
}

export default App;
