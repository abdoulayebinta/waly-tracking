import { Link } from 'react-router-dom';
import mainImg from '../assets/images/main.svg';
import Wrapper from '../assets/styledComponents/HomePageStyle';
import { Logo } from '../components';

const Home = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>A Job tracking app to track job application.</p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>

        <img src={mainImg} alt="Job tracking" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Home;
