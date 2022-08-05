import React, {useEffect} from "react";
import './app.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {routes} from "./routes";
import Buttons from "./pages/buttons/Buttons";
import CurrentDeals from "./pages/currentDeals/CurrentDeals";
import Klarna from "./pages/klarna/Klarna";

function App() {
  useEffect(() => {
    localStorage.setItem("123", '123')
    window.Telegram?.WebApp?.expand();
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={routes.buttons} element={<Buttons />}/>
          <Route path={routes.currentDeals} element={<CurrentDeals />}/>
          <Route path={routes.klarna} element={<Klarna />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
