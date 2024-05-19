import './App.css';
import { LoginPage } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { TeacherDashboard } from './pages/TeacherDashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {DailyReport} from './pages/DailyReport';
import {DailyReportTable} from './pages/DailyReportTable';
import {HeadmasterDashboard} from './pages/HeadmasterDashboard';
import {VicePrincipalDashboard} from'./pages/VicePrincipalDashboard';
import DailyReportCheck from './pages/DailyReportCheck';
import TeachMaterial from './pages/TeachMaterial';
import DailyReportForViceView from './pages/DailyReportForViceView';
import ReportTableforViceView from './pages/ReportTableforViceView';
import ProfileSetting from './pages/ProfileSetting';
import ScheduleTeacher from './pages/ScheduleTeacher';
import InsertTeachMaterial from './pages/InsertTeachMaterial';
import TeacherData from './pages/TeacherData';
import StudentData from './pages/StudentData';
import VicePrincipalData from './pages/VicePrincipalData';
import HeadmasterData from './pages/HeadmasterData';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/dashboard-admin" element={<Dashboard />}/>
      <Route path="/teacher-dashboard" element={<TeacherDashboard/>}/>
      <Route path="/daily-report-teacher" element={<DailyReport/>}/>
      <Route path="/daily-report-table" element={<DailyReportTable/>}/>
      <Route path="/headmaster-dashboard"element={<HeadmasterDashboard/>}/>
      <Route path="/vice-principal-dashboard"element={<VicePrincipalDashboard/>}/>
      <Route path="/daily-report-checklist"element={<DailyReportCheck/>}/>
      <Route path="/teach-material"element={<TeachMaterial/>}/>
      <Route path="/daily-report-teacher-for-vice-view"element={<DailyReportForViceView/>}/>
      <Route path="/report-table-vice-view"element={<ReportTableforViceView/>}/>
      <Route path="/profile-setting"element={<ProfileSetting/>}/>
      <Route path="/teacher-schedule"element={<ScheduleTeacher/>}/>
      <Route path="/teach-material-insert-page"element={<InsertTeachMaterial/>}/>
      <Route path="/data-guru"element={<TeacherData/>}/>
      <Route path="/data-siswa"element={<StudentData/>}/>
      <Route path="/data-wakasek-kurikulum"element={<VicePrincipalData/>}/>
      <Route path="/data-kepala-sekolah"element={<HeadmasterData/>}/>
      

    </Routes>
  </Router>
  );
}

export default App;
