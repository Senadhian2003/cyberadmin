import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/home';
import Login from './components/login';
import Winner from './components/winner';
import Entry from './components/Entry';
import Check from './components/Check';
import Retrieve from './components/retrive';
import CertificateParticipants from './components/certificateParticipants';
import CertificateWinner from './components/certificate-winner';
import Verification from './components/Verification';
import Count from './components/count';
import UserDetails from './components/userDetails';

function App() {
  return (
    <div className="App">
      <>
      <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home/:id" element={<Home />} />
                    <Route path="/winner/:id" element={<Winner />} />
                    <Route path="/data" element={<Entry/>} />
                    <Route path="/retrieve" element={<Retrieve/>} />
                    <Route path="/attendance" element={<Verification/>} />
                    <Route path="/certificate/participants" element={<CertificateParticipants/>} />
                    <Route path="/certificate/winners" element={<CertificateWinner/>} />
                    <Route path="/count" element={<Count/>} />
                    <Route path="/userDetails" element={<UserDetails/>} />
                </Routes>
            </Router>
      </>
    </div>
  );
}

export default App;
