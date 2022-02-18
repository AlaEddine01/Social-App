import axios from "axios";
import { useRef } from "react";
import { useHistory } from "react-router";
import "./register.css";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Password don't match !");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social App</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Social App.
          </span>
        </div>
        <div className="loginRight">
          <form onSubmit={handleClick} className="loginBox">
            <input
              type="text"
              placeholder="Username"
              ref={username}
              required
              className="loginInput"
            />
            <input
              type="email"
              placeholder="E-mail"
              ref={email}
              required
              className="loginInput"
            />

            <input
              type="password"
              placeholder="Password"
              ref={password}
              required
              minLength="6"
              className="loginInput"
            />
            <input
              type="password"
              placeholder="Password Again"
              ref={passwordAgain}
              required
              className="loginInput"
            />
            <button type="submit" className="loginButton">
              Sign Up
            </button>

            <button className="loginRegisterButton">Log In</button>
          </form>
        </div>
      </div>
    </div>
  );
}
