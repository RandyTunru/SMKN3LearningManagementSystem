import { Header } from '../components/Header/Header.jsx';
import DashboardBox from "../components/Dashboard/DashboardBox.jsx";
import Photo from "../components/Assets/schoolpict.png";
import '../styles/Dashboard.css';
import Wakasek from '../components/Assets/wakasek.png';
import Report from '../components/Assets/report.png';
import TeachMaterial from '../components/Assets/book.png';
import Schedule from '../components/Assets/calendar.png';
import List from '../components/Assets/list.png';
import { Link } from "react-router-dom";
import VicePrincipalSidebar from '../components/Sidebar/VicePrincipalSidebar.jsx';

export const VicePrincipalDashboard = () => {
    return (
        <div className="dashboard-wrapper">
            <Header Auth="Wakasek Kurikulum" />
            <div className="sidebar-and-content">
                <VicePrincipalSidebar />
                <div className="content">
                    <img className="school-pict" src={Photo} alt="smkn3picture" />
                    <div className="content-wrapper">
                        <div className="flex-container">
                            <Link to="/teach-material" className='no-underline'><DashboardBox className="box-menu" Text="RPP dan Bahan Ajar" src={TeachMaterial} imageSize="80px"/></Link>
                            <Link to="/daily-report-teacher-for-vice-view" className='no-underline'><DashboardBox className="box-menu" Text="Laporan Mengajar Harian" src={Report} imageSize="80px"/></Link>
                            <Link to="/schedule" className='no-underline'><DashboardBox className="box-menu" Text="Jadwal Kegiatan Belajar Mengajar" src={Schedule} imageSize="80px"/></Link>
                            <Link to="/data-wakasek" className='no-underline'><DashboardBox className="box-menu" Text="Data Wakasek Kurikulum" src={Wakasek} imageSize="80px" /></Link>
                            <Link to="/presensi-siswa" className='no-underline'><DashboardBox className="box-menu" Text="Rekapitulasi Presensi Siswa" src={List} imageSize="60px"/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VicePrincipalDashboard;
