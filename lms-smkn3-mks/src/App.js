import './App.css';
import { LoginPage } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { TeacherDashboard } from './pages/TeacherDashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DailyReport from './pages/DailyReport';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LoginPage />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/teacher-dashboard" element={<TeacherDashboard/>}/>
      <Route path="/daily-report-teacher" element={<DailyReport/>}/>
    </Routes>
  </Router>
  );
}

export default App;
