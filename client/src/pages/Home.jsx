import logo from '../assets/images/logo.svg';
import mainImg from '../assets/images/main.svg';
import styled from 'styled-components';

const Home = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="Waly" className="logo" />
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
          <button className="btn btn-hero">Login/Register</button>
        </div>

        <img src={mainImg} alt="Job tracking" className="img main-img" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }

  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }

  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }

  p {
    color: var(--grey-600);
  }
  .main-img {
    display: none;
  }

  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;

export default Home;
