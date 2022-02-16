import "./register.css";

export default function Register() {
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
          <div className="loginBox">
            <input type="text" placeholder="Username" className="loginInput" />
            <input type="email" placeholder="E-mail" className="loginInput" />

            <input
              type="password"
              placeholder="Password"
              className="loginInput"
            />
            <input
              type="password"
              placeholder="Password Again"
              className="loginInput"
            />
            <button className="loginButton">Sign Up</button>

            <button className="loginRegisterButton">Log In</button>
          </div>
        </div>
      </div>
    </div>
  );
}
