import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { login, logout } from "./features/userSlice";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import ProfileScreen from "./Screens/ProfileScreen";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //logged in

        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
        return;
      } else {
        //logged out
        dispatch(logout());
      }
    });
    // return unsubscribe();
  }, [dispatch]);
  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route exact path="/profile" element={<ProfileScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
