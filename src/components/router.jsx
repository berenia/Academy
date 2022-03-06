import { BrowserRouter as Router, Routes, Route, useParams, Outlet } from "react-router-dom";
import CoursePage from "./courses/coursePage";
import GlobalNav from "./globalNav";
import Home from "./home";
import Profile from "./courses/profile/profile";
import PersonalInfo from "./courses/profile/personalInfo";
import Footer from "./footer";
import TutorDesk from "./courses/profile/tutorDesk";
import TutorContact from "./courses/profile/tutorContact";
import Notifications from "./courses/profile/notifications";
import Courses from "./courses/profile/coursePage";
import Footer from "./footer";
import Contact from "./contact";
import SignUser from "./signUser/signUser";

function Invoice() {
  let params = useParams();
  return <h1>Invoice {params.invoiceId}</h1>;
}

const Layout = () => {
  return (
    <div>
      <GlobalNav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

function AppRouter() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="courses" element={<CoursePage />}>
              {/* <Route path=":courseId" element={<CourseDetail/>} />
                        <Route path="/payment/courseId" element={<CoursePayment />} /> */}
            </Route>
            <Route path="profile" element={<Profile />} />
            <Route path="personal" element={<PersonalInfo />} />
            <Route path="tutorcontact" element={<TutorContact />} />
            <Route path="tutordesk" element={<TutorDesk />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="completed" element={<Courses />} />
            <Route path="/sign-up" element={<SignUser />} />
            <Route path="/contact" element={<Contact />} />

            {/*<Route path=":profileId" element={<Payment/>} />
                        <Route path="profileId" element={<Certificate />} />
                        
                        
                    </Route> */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default AppRouter;
