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
          <p>
            I'm baby glossier hashtag selfies green juice, chillwave cliche
            venmo pug vice. Butcher leggings +1 deep v ethical vinyl.
            Gluten-free YOLO mumblecore af direct trade shaman humblebrag ramps
            butcher XOXO.
          </p>
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
