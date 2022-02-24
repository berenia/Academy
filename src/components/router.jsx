import {
    BrowserRouter as Router,
    Routes,
    Route, useParams, Outlet
  } from "react-router-dom";
import CoursePage from "./courses/coursePage";
import GlobalNav from "./globalNav";
import Home from "./home";
import Footer from './footer';


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
  }


function AppRouter(){
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
                    {/* <Route path="profile" element={<Profile />}>
                        <Route path=":profileId" element={<Courses/>} />
                        <Route path="profileId" element={<PersonalInfo />} />
                        <Route path=":profileId" element={<Payment/>} />
                        <Route path="profileId" element={<Certificate />} />
                        <Route path=":profileId" element={<Notification/>} />
                        <Route path="profileId" element={<TutorContact />} />
                    </Route> */}
                </Route>
                </Routes>
            </Router>
        </div>
    )
}

export default AppRouter;