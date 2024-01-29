import React,{useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loginad from './admin/Loginad';
import Adminpanel from './admin/adminpanel/Adminpanel';
import Internenroll from './admin/internenroll/Internenroll';
import Loginintern from './intern/Loginintern';
import Interndashboard from './intern/interndashboard/Interndashboard';
import Profile from './intern/profile/Profile';
import Reporting from './intern/reporting/Reporting';
import Previewwork from './intern/reporting/previewwork/Previewwork';
import Reportingcollec from './collections/Reportingcollec'
import Profilecollec from './collections/Profilecollec';
import Home from './Home/Home';
import Navbar from './navbar/Navbar';
import OurServices from './components/OurServices';
import AboutUs from './about/AboutUs';
import ContactCompo from './contact/ContactCompo';
import Interncollec from './collections/Interncollec';
import UniversityTable from './table/Universitytable';
import Interns from './admin/allintern/Interns';
import Reports from './admin/reports/Reports';
import HandleIntern from './admin/handleintern/HandleIntern';
// import Googlesignup from './Googlesignup';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<><Navbar/><Home /></>} />
        <Route path="/services" element={<><Navbar/><OurServices/></>} />
        <Route path="/about" element={<><Navbar/><AboutUs/></>} />
        <Route path="/contact" element={<><Navbar/><ContactCompo/></>} />
        <Route path="/admin" element={<Loginad />} />
        <Route path="/admin/adminpanel" element={<Adminpanel />}/>
        <Route path="/admin/internenroll" element={<Internenroll />} />
      <Route path="/intern" element={<Loginintern/>}/>
      <Route path="/intern/interndashboard" element={<Interndashboard />} />
      <Route path="/intern/profile" element={<Profile/>}/>
      <Route path="/intern/report" element={<Reporting/>}/>
      <Route path="/intern/report/preview" element={<Previewwork/>}/>
      <Route path="/collection" element={<Reportingcollec/>}/>
      <Route path="/collection/profile" element={<Profilecollec/>}/>
      <Route path="/collection/intern" element={<Interncollec/>}/>
      <Route path='/table' element={<UniversityTable/>}/>
      <Route path='/admin/allinterns' element={<Interns/>}/>
      <Route path='/admin/allreports' element={<Reports/>}/>
      {/* <Route path='/googlesignup' element={<Googlesignup/>}/> */}
      <Route path='/admin/allreports' element={<Reports/>}/>
      <Route path='/admin/handleintern' element={<HandleIntern/>}/>
      </Routes>
    </Router>
  );
}

export default App;
