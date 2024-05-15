import './App.css';
import { LoginPage } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { TeacherDashboard } from './pages/TeacherDashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {DailyReport} from './pages/DailyReport';
import {DailyReportTable} from './pages/DailyReportTable';
import {RekapPresensi} from './pages/RekapPresensi';
import {HeadmasterDashboard} from './pages/HeadmasterDashboard';
import {VicePrincipalDashboard} from'./pages/VicePrincipalDashboard';
import DailyReportCheck from './pages/DailyReportCheck';
import TeachMaterial from './pages/TeachMaterial';
import DailyReportForViceView from './pages/DailyReportForViceView';
import ReportTableforViceView from './pages/ReportTableforViceView';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/teacher-dashboard" element={<TeacherDashboard/>}/>
      <Route path="/daily-report-teacher" element={<DailyReport/>}/>
      <Route path="/daily-report-table" element={<DailyReportTable/>}/>
      <Route path="/rekap-presensi" element={<RekapPresensi/>}/>
      <Route path="/headmaster-dashboard"element={<HeadmasterDashboard/>}/>
      <Route path="/vice-principal-dashboard"element={<VicePrincipalDashboard/>}/>
      <Route path="/daily-report-checklist"element={<DailyReportCheck/>}/>
      <Route path="/teach-material"element={<TeachMaterial/>}/>
      <Route path="/daily-report-teacher-for-vice-view"element={<DailyReportForViceView/>}/>
      <Route path="/report-table-vice-view"element={<ReportTableforViceView/>}/>
    </Routes>
  </Router>
  );
}

export default App;
