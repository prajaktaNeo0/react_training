import './App.css';

import Navbar from './Navbar'
import Home from './Home'
import Signup from './Signup'
import Login from './Login'
import {useState} from "react"
import Search from './Search'
import CakeDetails from './CakeDetails'
import { Redirect } from 'react-router';

import { BrowserRouter as Router , Route ,Switch} from 'react-router-dom'


function App() {
  var [user ,setUser] = useState()
  var [loginStatus ,setloginStatus] = useState(false)
    
  function LoginDone(data){
    setUser(data)
    setloginStatus(true)
   // alert("login component called the parent")
  }
  return (
    <div>  
      <Router>
        <Navbar/>
        <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact><Login/></Route>
          <Route path="/home" exact component={Home} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/search" exact component={Search} />
          <Route path="/cake/:cakeid" exact component={CakeDetails} />
          <Route path="/*">
                <Redirect to="/"></Redirect>
          </Route>
        </Switch>
        </div>
      </Router>
     {/* <Navbar loginStatus={loginStatus} user={user}/>
      <Signup />
      <Login loginStatus={loginStatus} informLogin={LoginDone} />
      <Carousel/>
  <Home /> */}
    </div>
  );
}

export default App;
