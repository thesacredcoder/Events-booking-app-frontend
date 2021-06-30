import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import "./App.css";

import AuthPage from "./pages/AuthPage";
import EventsPage from "./pages/EventsPage";
import BookingPage from "./pages/BoookingPage";
import MainNavigation from "./components/Navigation/MainNavigation";
import AuthContext from "./context/auth-context";

function App() {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);

  const login = (token, userId, tokenExpiration) => {
    setToken(token);
    setUserId(userId);
  };

  const logout = () => {
    setToken(null);
    setUserId(null);
  };

  return (
    <Router>
      <React.Fragment>
        <AuthContext.Provider
          value={{ token: token, userId: userId, login: login, logout: logout }}
        >
          <MainNavigation />
          <main className="main-content">
            <Switch>
              {!token && <Redirect from="/bookings" to="/auth" exact />}
              {token && <Redirect from="/" to="/events" exact />}
              {token && <Redirect from="/auth" to="/events" exact />}
              {!token && <Route path="/auth" component={AuthPage} />}
              <Route path="/events" component={EventsPage} />
              {token && <Route path="/bookings" component={BookingPage} />}
              {!token && <Redirect to="/auth" exact />}
            </Switch>
          </main>
        </AuthContext.Provider>
      </React.Fragment>
    </Router>
  );
}

export default App;
