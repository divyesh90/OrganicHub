import React,{ useState } from 'react'
import './LoginSignup.css'
import axios from "axios"
import { useHistory } from 'react-router'




const Signup = () => {

    
    
    const history= useHistory()
    const [ user , setUser] = useState({
        name: "",
        utype: "",
        email: "",
        password: "",
        repassword: ""
    
    })

    const register = () => {
        const {name, utype, email, password ,repassword }=user

        if( name && utype && email && password && ( password == repassword ))
        {
            axios.post("http://localhost:5000/signup", user)
            .then( res => {
                console.log(res)
                history.push('/login');
            })
        }
        else
        {
            console.log(utype);
            alert(" Invalid Input")
        }

    }

    localStorage.setItem('login', 'no')
    localStorage.removeItem('user')
    console.log("dsfdsfddgd")


    const handleChange= e=> {
        const { name , value}= e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    
    return (
        
        
        <div className="mainl">
            {console.log("user",user)}
            <p className="signl" align="center">Sign up</p>
            <form className="form2">
            
                    <select className="unl" name="utype" value={user.utype} onChange={ handleChange}>
                        <option  value="Customer">Customer</option>
                        <option  value="Farmer">Farmer</option>
                    </select>
                
            <input className="unl " type="text" align="center" name="name" value={user.name}  placeholder="Username" onChange={ handleChange}/>
            <input className="unl " type="text" align="center" name="email" value={user.email} placeholder="Email" onChange={ handleChange}/>
            <input className="pass" type="password" align="center"  name="password" value={user.password} placeholder="Password" onChange={ handleChange}/>
            <input className="pass" type="password" align="center" name="repassword" value={user.repassword}  placeholder="Password" onChange={ handleChange}/>
            <a className="submit" align="center"  onClick={register}>Sign up</a>
            <p className="forgot" align="center" onClick={()=> history.push("login")}>Sign in</p>
            </form>
            
                
        </div>
    )
    
        
    
}

export default Signup
