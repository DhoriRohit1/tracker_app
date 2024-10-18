
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";        
import Dashboard from "./components/Dashboard";    
import HabitManager from "./components/HabitManager"; 
import HabitTracker from "./components/HabitTracker"; 
import { HabitsProvider } from "./context/HabitsContext"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';               
import NotificationPanel from "./components/NotificationPanel";
import './App.css'

function App() {
  return (
    <HabitsProvider>
      <Router>
        <Header />  
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/manage-habits" element={<HabitManager />} />
            <Route path="/tracker" element={<HabitTracker />} /> 
            <Route path="/notification" element={<NotificationPanel />} />
            
          </Routes>
        </div>
      </Router>
    </HabitsProvider>
  );
}

export default App;
