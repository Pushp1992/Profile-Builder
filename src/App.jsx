import { BrowserRouter as Router } from 'react-router-dom';

import RouteList from './Components/RouteList/index.jsx';
import { ProfileHeader } from "./Components/Header/header";
import { NavBar } from "./Components/NavBar/navbar";

import "./App.css";

function App() {
  return (
    <Router>
      <ProfileHeader />
      <NavBar />
      <RouteList />
    </Router>
  );
}

export default App;
