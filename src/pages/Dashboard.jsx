import {Header} from '../components/Header/Header.jsx';
import DashboardBox from "../components/Dashboard/DashboardBox.jsx";
import Photo from "../components/Assets/schoolpict.png";
import '../styles/Dashboard.css'
import Teacher from '../components/Assets/teacher.png';
import Student from '../components/Assets/student.png';
import Headmaster from '../components/Assets/headmaster.png';
import File from '../components/Assets/files.png';
import Wakasek from '../components/Assets/wakasek.png'
import { Link } from "react-router-dom";

export const Dashboard = () => {
    return(
    <body>
    <div class="dashboard-wrapper">
    <Link to="/Dashboard" className='no-underline'>
    <Header Auth="Admin"/>
    </Link>
    </div>
    <div>
    <img className="school-pict"src={Photo} alt="smkn3picture"/>
    </div>
    
    <div className="content-wrapper">
    <tr>
        <th><Link to="/data-guru" className='no-underline'><DashboardBox className="box-menu" Text="Data Guru" src={Teacher} imageSize="100px"/></Link></th>
        <th><Link to="/data-siswa" className='no-underline'><DashboardBox className="box-menu" Text="Data Siswa" src={Student} imageSize="100px"/></Link></th>
        <th><Link to="/data-kepala-sekolah" className='no-underline'><DashboardBox className="box-menu" Text="Data Kepala Sekolah " src={Headmaster} imageSize="100px"/></Link></th>
    </tr>
    <tr>
        <th><Link to="/data-wakasek" className='no-underline'><DashboardBox className="box-menu" Text="Data Wakasek Kurikulum" src={Wakasek} imageSize="100px"/></Link></th>
        <th><Link to="/rekapitulasi-absen" className='no-underline'><DashboardBox className="box-menu" Text="Rekapitulasi Absen" src={File} imageSize="100px"/></Link></th>
    </tr>
    </div>
    </body>
   
);


}

export default Dashboard;