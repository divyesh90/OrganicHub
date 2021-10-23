import React, { useState } from "react";
import "./LoginSignup.css";
import axios from "axios";
import { useHistory } from "react-router";

const Login = ({ setLoginUser }) => {
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    utype: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    const { email, utype, password } = user;

    if (email && password && utype) {
      axios.post("http://localhost:5000/login", user).then((res) => {
        setLoginUser(res.data.user);
        localStorage.setItem("login", "yes");
        localStorage.setItem("user", JSON.stringify(res.data.user));
        if (utype == "Farmer") history.push("/farmer");
        if (utype == "Customer") history.push("/customer");
      });
    } else {
      alert(" Invalid Input");
    }
  };

  return (
    <div className="mainl">
      <p className="signl" align="center">
        Sign in
      </p>
      <form className="form1">
        <select
          className="unl"
          name="utype"
          value={user.utype}
          onChange={handleChange}
        >
          <option value="Customer">Customer</option>
          <option value="Farmer">Farmer</option>
        </select>
        <input
          className="unl "
          type="text"
          align="center"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          className="pass"
          type="password"
          align="center"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <a className="submit" align="center" onClick={login}>
          Sign in
        </a>
        <p
          className="forgot"
          align="center"
          onClick={() => history.push("signup")}
        >
          Sign up
        </p>
      </form>
    </div>
  );
};

export default Login;
