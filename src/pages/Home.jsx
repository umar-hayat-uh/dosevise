import Introduction from "../components/introduction/Introduction";
// import Profile from "../components/profile/Profile";
import WorkProcess from "../components/workProcess/WorkProcess";
import Portfolio from "../components/portfolio/Portfolio";
import Blog from "../components/blog/Blog";
import Profession from "../components/profession/Profession";
import HappyClients from "../components/happyClients/HappyClients";
import Testimonial from "../components/testimonial/Testimonial";
import Contact from "../components/contact/Contact";
import "../../index.css";

const Home = () => {
  return (
    <div className="relative">
      <div className="introduction-profile-background">
        <div className="content">
          <Introduction />
          {/* <Profile /> */}
        </div>
      </div>
        <WorkProcess />
      <Portfolio />
      <div className="blog-background">
        <Blog />
      </div>
      <div className="introduction-profile-background">
        <Profession />
        </div>
      <Testimonial />
      <Contact />
    </div>
  );
};

export default Home;
