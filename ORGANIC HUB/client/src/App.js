import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Customerhome from './Components/Customerhome';
import FarmerHome from './Components/FarmerHome';
import FarmerForm from './Components/FarmerForm';
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import CNavbar from './Components/CNavbar';
import Signup from './Components/Signup';
import Shopping from './Components/Shopping';
import MyCart from './Components/MyCart';

import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {

  const [ user , setLoginUser]= useState({})
  const [ products,productdetails]= useState({})
  const [ cartItems, setCartItems] = useState([])
  console.log(user);
  var login =localStorage.getItem('login');

  var user1 = localStorage.getItem('user');
  user1 = JSON.parse(user1)
 

  return (

    <div className="App"> 
      <Router>
        <Switch >
          
          
          
          <Route  path="/farmer">
            {
              //<Navbar setLoginUser={setLoginUser}/>
              
              
              login=='yes' ? 

              //  user.utype=="farmer")
              //       return <FarmerHome/>;
              //   else
              //       return <Custmerhome/>;

               <>
               
               <Navbar login={user1.name} logout="Logout"  /> 
               <FarmerHome/>
               </>
               
               : 
               <>
               <Navbar login="login" logout="" />
               <Login setLoginUser={setLoginUser}/>
               </>
            }
            </Route>
          <Route exact  path="/login">
          {
            <>
            
            <Navbar login="login" logout="" />
            <Login setLoginUser={setLoginUser}/>
            </>
          }
          </Route>
          <Route path="/Signup">
          {
            <>
            setLoginUser={}
            <Navbar login="login" logout="" />
            <Signup/>
            </>
          }
          </Route>

          <Route path="/details">
            {
              
              login=='yes'  ? 
              <>
              <Navbar login={user1.name} logout="Logout"  /> 
              <FarmerForm email={user1.email}/>
              </>
              
              : 
              <>
              <Navbar login="login" logout="" />
              <Login setLoginUser={setLoginUser}/>
              </>
            }
            </Route>

          <Route path="/products">
            {
              
              login=='yes'  ? 
               <>
               
               <Products productdetails={productdetails} name={user1.name} email={user1.email}  />
               </>
               
               : 
               <>
               <Navbar login="login" logout="" />
               <Login setLoginUser={setLoginUser}/>
               </>

            }
          </Route>

          <Route   path="/customer">
            {
              login=='yes' ?
               <>
               <CNavbar login={user1.name} logout="Logout"  /> 
               <Customerhome/>
               </>
               : 
               <>
               <CNavbar login="login" logout="" />
               <Login setLoginUser={setLoginUser}/>
               </>

            }
          </Route>

          <Route path="/shopping">
            {
              login=='yes' ? 
              <>
              <CNavbar login={user1.name} logout="Logout"  /> 
              <Shopping setCartItems={setCartItems}/>
              </>
              
              : 
              <>
              <CNavbar login="login" logout="" />
              <Login setLoginUser={setLoginUser}/>
              </>

            }
          </Route>

          <Route path="/mycart">
            <>
            <CNavbar/>
            <MyCart pname={cartItems}/>
            </>
          </Route>

        </Switch>
      </Router>
    </div>
    // <>
    // {/* <Navbar/>
    // <Login/> */}
    // <Signup/>
    
    // </>
      
        
  );
}

export default App;
