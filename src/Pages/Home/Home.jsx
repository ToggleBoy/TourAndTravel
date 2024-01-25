import about from "../../assets/images/about.jpg";
import Button from 'react-bootstrap/Button';
import "./Home.css";

const Home = () => {
  return (
    <div className="Homepage-container">
      <div className="Homepage-banner">
        <div className="overlay">
          <h1>Enjoy Your Vacation with Us</h1>
        </div>
      </div>
      <div className="section1">
        <div className="left-container">
          <img src={about} />
        </div>
        <div className="right-container">
          <h4>About</h4>
          <h2>Welcome to Tourist</h2>
          <p>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit.
          </p>
          <p>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p>
          <ul className="about-section-list">
            <li>First Class Flights</li>
            <li>Handpicked Hotels</li>
            <li>5 Star Accommodations</li>
            <li>Latest Model Vehicles</li>
            <li>150 Premium City Tours</li>
            <li>24/7 Service</li>
          </ul>
          <Button variant="primary">Primary</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
