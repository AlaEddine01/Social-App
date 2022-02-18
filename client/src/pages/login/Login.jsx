import { useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  console.log(user);

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
          <form className="loginBox" onSubmit={handleClick}>
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
            <button className="loginButton" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress size="20px" color="inherit" />
              ) : (
                "Log In"
              )}
            </button>
            <span className="loginForgot">Forgot Password ?</span>
            <button className="loginRegisterButton">
              {isFetching ? (
                <CircularProgress size="20px" color="white" />
              ) : (
                "Create Account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
