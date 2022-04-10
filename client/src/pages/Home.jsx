import logo from '../assets/images/logo.svg';
import mainImg from '../assets/images/main.svg';

const Home = () => {
  return (
    <main>
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
    </main>
  );
};
export default Home;
