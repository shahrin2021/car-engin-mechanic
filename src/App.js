import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from './Pages/Home/Services/Services';
import Home from './Pages/Home/Home/Home';
import Exparts from './Pages/Home/Exparts/Exparts';
import { BrowserRouter,Switch ,Route} from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Booking from './Pages/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Footer from './Pages/Shared/Footer/Footer';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
        <Home></Home>
        </Route>
        <Route exact path='/home'>
        <Home></Home>
        </Route>
        <PrivateRoute exact path='/booking/:serviceId'>
        <Booking></Booking>
        </PrivateRoute>
        <PrivateRoute exact path="/services">
        <Services></Services>
        </PrivateRoute >
        <PrivateRoute exact path='/booking'>
        <Booking></Booking>
        </PrivateRoute>
        <Route exact path='/expart'>
        <Exparts></Exparts>
        </Route>
        <Route exact path='/login'>
          <Login></Login>
        </Route>
        <Route exact path='*'>
        <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
     
    </div>
  );
}

export default App;
